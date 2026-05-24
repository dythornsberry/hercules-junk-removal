/**
 * Cloudflare Pages Function: Backup Email via Resend
 * Sends lead notification email to dythornsberry@gmail.com
 * Independent of Zapier — acts as safety net for lead capture.
 *
 * Environment variable required:
 *   RESEND_API_KEY — set in Cloudflare Pages dashboard (Settings > Environment Variables)
 */

export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const {
      name,
      phone,
      email,
      location,
      description,
      sms_opt_in,
      created_at,
    } = await context.request.json();

    const RESEND_API_KEY = context.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FFC107; border-bottom: 2px solid #FFC107; padding-bottom: 10px;">
          New Lead — Hercules Junk Removal
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr style="background: #f8f9fa;">
            <td style="padding: 10px; font-weight: bold; width: 140px;">Name</td>
            <td style="padding: 10px;">${name || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Phone</td>
            <td style="padding: 10px;"><a href="tel:${phone}">${phone || 'N/A'}</a></td>
          </tr>
          <tr style="background: #f8f9fa;">
            <td style="padding: 10px; font-weight: bold;">Email</td>
            <td style="padding: 10px;"><a href="mailto:${email}">${email || 'N/A'}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Source</td>
            <td style="padding: 10px;">${location || 'N/A'}</td>
          </tr>
          <tr style="background: #f8f9fa;">
            <td style="padding: 10px; font-weight: bold;">Description</td>
            <td style="padding: 10px;">${description || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">SMS Opt-In</td>
            <td style="padding: 10px;">${sms_opt_in ? 'Yes' : 'No'}</td>
          </tr>
          <tr style="background: #f8f9fa;">
            <td style="padding: 10px; font-weight: bold;">Submitted</td>
            <td style="padding: 10px;">${created_at ? new Date(created_at).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }) : 'N/A'}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; padding: 12px; background: #fff3cd; border-radius: 6px; font-size: 14px;">
          This is a backup email sent independently of Zapier. Call this lead ASAP!
        </p>
        <p style="color: #999; font-size: 12px; margin-top: 10px;">
          Source: hercjunk.com | Backup via Resend
        </p>
      </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Hercules Junk Removal <onboarding@resend.dev>',
        to: ['dythornsberry@gmail.com'],
        subject: `New Lead from ${name || 'Website Visitor'} — Hercules Junk Removal`,
        html: emailHtml,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', result);
      return new Response(JSON.stringify({ error: 'Failed to send email', details: result }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (err) {
    console.error('Backup email function error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
