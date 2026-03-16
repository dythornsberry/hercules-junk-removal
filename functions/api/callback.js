export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await context.request.json();
    const { name, phone, email, location, description, sms_opt_in, created_at } = body;

    if (!name || !phone) {
      return new Response(JSON.stringify({ error: 'Name and phone are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const zapierUrl = context.env.ZAPIER_WEBHOOK_URL;
    const resendKey = context.env.RESEND_API_KEY;

    // 1. Forward to Zapier
    const zapierPromise = fetch(zapierUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, email, location, description, sms_opt_in, created_at }),
    });

    // 2. Send email backup via Resend
    const emailPromise = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: 'Hercules Junk <onboarding@resend.dev>',
        to: 'dythornsberry@gmail.com',
        subject: `New Callback Request — ${name} (${location || 'Website'})`,
        html: `
          <h2>New Callback Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'Not provided'}</p>
          <p><strong>Source:</strong> ${location || 'Website'}</p>
          <p><strong>Description:</strong> ${description || 'Callback request'}</p>
          <p><strong>SMS Opt-in:</strong> ${sms_opt_in ? 'Yes' : 'No'}</p>
          <p><strong>Submitted:</strong> ${created_at || new Date().toISOString()}</p>
        `,
      }),
    });

    // Fire both in parallel
    const [zapierRes, emailRes] = await Promise.allSettled([zapierPromise, emailPromise]);

    const zapierOk = zapierRes.status === 'fulfilled' && zapierRes.value.ok;
    const emailOk = emailRes.status === 'fulfilled' && emailRes.value.ok;

    return new Response(
      JSON.stringify({
        success: true,
        zapier: zapierOk ? 'sent' : 'failed',
        email: emailOk ? 'sent' : 'failed',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } },
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error', details: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
}

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
