const DEFAULT_OWNER_EMAIL = 'dythornsberry@gmail.com';
const DEFAULT_FROM_EMAIL = 'Hercules Junk Removal <onboarding@resend.dev>';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const jsonResponse = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders },
  });

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const normalizeLead = (rawLead) => ({
  name: String(rawLead.name || '').trim(),
  phone: String(rawLead.phone || '').replace(/\D/g, ''),
  email: String(rawLead.email || '').trim(),
  location: String(rawLead.location || 'Website').trim(),
  description: String(rawLead.description || 'Lead form submission').trim(),
  sms_opt_in: Boolean(rawLead.sms_opt_in),
  created_at: rawLead.created_at || new Date().toISOString(),
});

const forwardToZapier = async (lead, webhookUrl) => {
  if (!webhookUrl) return { ok: false, skipped: true, service: 'zapier' };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Zapier failed with ${response.status}: ${details}`);
  }

  return { ok: true, service: 'zapier' };
};

const sendBackupEmail = async (lead, { resendApiKey, fromEmail, toEmail }) => {
  if (!resendApiKey) return { ok: false, skipped: true, service: 'resend' };

  const submittedAt = lead.created_at
    ? new Date(lead.created_at).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
    : 'N/A';

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #111827; border-bottom: 3px solid #FFC107; padding-bottom: 10px;">
        New Lead - Hercules Junk Removal
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr style="background: #f8f9fa;">
          <td style="padding: 10px; font-weight: bold; width: 140px;">Name</td>
          <td style="padding: 10px;">${escapeHtml(lead.name || 'N/A')}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold;">Phone</td>
          <td style="padding: 10px;"><a href="tel:${escapeHtml(lead.phone)}">${escapeHtml(lead.phone || 'N/A')}</a></td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding: 10px; font-weight: bold;">Email</td>
          <td style="padding: 10px;">${lead.email ? `<a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a>` : 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold;">Source</td>
          <td style="padding: 10px;">${escapeHtml(lead.location || 'N/A')}</td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding: 10px; font-weight: bold;">Description</td>
          <td style="padding: 10px;">${escapeHtml(lead.description || 'N/A')}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold;">SMS Opt-In</td>
          <td style="padding: 10px;">${lead.sms_opt_in ? 'Yes' : 'No'}</td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding: 10px; font-weight: bold;">Submitted</td>
          <td style="padding: 10px;">${escapeHtml(submittedAt)}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; padding: 12px; background: #fff3cd; border-radius: 6px; font-size: 14px;">
        Lead captured from hercjunk.com. Call or text this person as soon as possible.
      </p>
    </div>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New Lead from ${lead.name || 'Website Visitor'} - Hercules Junk Removal`,
      html: emailHtml,
    }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(`Resend failed with ${response.status}: ${JSON.stringify(result)}`);
  }

  return { ok: true, service: 'resend', id: result.id };
};

export async function onRequestPost(context) {
  try {
    const lead = normalizeLead(await context.request.json());

    if (!lead.name || lead.phone.length !== 10) {
      return jsonResponse({ error: 'Name and a 10-digit phone number are required.' }, 400);
    }

    const results = await Promise.allSettled([
      forwardToZapier(lead, context.env.ZAPIER_WEBHOOK_URL),
      sendBackupEmail(lead, {
        resendApiKey: context.env.RESEND_API_KEY,
        fromEmail: context.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL,
        toEmail: context.env.LEAD_TO_EMAIL || DEFAULT_OWNER_EMAIL,
      }),
    ]);

    const successful = results
      .filter((result) => result.status === 'fulfilled' && result.value.ok)
      .map((result) => result.value.service);

    const skipped = results
      .filter((result) => result.status === 'fulfilled' && result.value.skipped)
      .map((result) => result.value.service);

    const failures = results
      .filter((result) => result.status === 'rejected')
      .map((result) => result.reason.message);

    if (successful.length === 0) {
      console.error('Lead capture failed:', { failures, skipped });
      return jsonResponse({ error: 'Lead capture is not configured.', failures, skipped }, 500);
    }

    if (failures.length > 0) {
      console.error('Lead capture partial failure:', { successful, failures });
    }

    return jsonResponse({ success: true, delivered_to: successful, skipped });
  } catch (error) {
    console.error('Lead function error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}
