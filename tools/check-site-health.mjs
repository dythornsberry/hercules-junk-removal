import { readFile } from 'node:fs/promises';

const SITE_URL = (process.env.SITE_URL || 'https://hercjunk.com').replace(/\/$/, '');
const SHOULD_SEND_VALID_LEAD = process.env.SEND_TEST_LEAD === '1';

const checks = [];

const record = (name, passed, detail = '') => {
  checks.push({ name, passed, detail });
};

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

const includesAll = (content, needles) => needles.every((needle) => content.includes(needle));

const postJson = async (path, body) => {
  const response = await fetch(`${SITE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const text = await response.text();
  let json = null;

  try {
    json = JSON.parse(text);
  } catch {
    // Keep raw body for diagnostics.
  }

  return { response, text, json };
};

const checkSource = async () => {
  const [
    home,
    hero,
    kenmore,
    bothell,
    roughCss,
    localSeoBlock,
  ] = await Promise.all([
    read('src/pages/HomePage.jsx'),
    read('src/components/sections/Hero.jsx'),
    read('src/pages/locations/JunkRemovalKenmorePage.jsx'),
    read('src/pages/locations/JunkRemovalBothellPage.jsx'),
    read('src/index.css'),
    read('src/components/sections/LocalSeoBlock.jsx'),
  ]);

  record(
    'homepage targets Kenmore + Bothell in title/meta',
    includesAll(home, [
      'Junk Removal Kenmore WA & Bothell',
      'Kenmore-based junk removal serving Kenmore, Bothell',
      'LocalSeoBlock',
    ]),
  );

  record(
    'hero has lead form CTA and truck proof photo',
    includesAll(hero, [
      'Get A Quote',
      'Big box truck based in Kenmore.',
      '/images/hercules-truck.webp',
      '/images/hercules-truck.jpg',
    ]) && !hero.includes('Send My Number'),
  );

  record(
    'Kenmore page has local service content',
    includesAll(kenmore, [
      'Junk Removal in Kenmore, WA',
      'Kenmore-based junk removal',
      '98028',
      'Quotes start at $99',
    ]),
  );

  record(
    'Bothell page has local service content',
    includesAll(bothell, [
      'Junk Removal in Bothell, WA',
      'Kenmore-based hauler',
      'Canyon Park',
      'Quotes start at $99',
    ]),
  );

  record(
    'rough contractor CSS is active and has contrast safety',
    includesAll(roughCss, [
      'TEMP ROUGH CONTRACTOR PREVIEW',
      'Final contrast safety',
      '[class*="bg-white/"]',
    ]),
  );

  record(
    'local SEO block links Kenmore and Bothell pages',
    includesAll(localSeoBlock, [
      '/junk-removal-kenmore',
      '/junk-removal-bothell',
      'Kenmore and Bothell junk removal',
    ]),
  );
};

const checkLive = async () => {
  const root = await fetch(`${SITE_URL}/`, { method: 'GET' });
  record('site homepage responds', root.ok, `${root.status} ${root.statusText}`);

  const options = await fetch(`${SITE_URL}/api/lead`, { method: 'OPTIONS' });
  record('lead API CORS preflight responds', options.status === 204, `${options.status} ${options.statusText}`);

  const invalid = await postJson('/api/lead', {
    name: 'Health Check Invalid Phone',
    phone: '425',
    location: 'Automated health check',
    sms_opt_in: true,
  });

  record(
    'lead API rejects invalid phone without creating lead',
    invalid.response.status === 400 && invalid.json?.error?.includes('10-digit phone'),
    `${invalid.response.status} ${invalid.text.slice(0, 120)}`,
  );

  if (!SHOULD_SEND_VALID_LEAD) {
    record('valid lead send is skipped by default', true, 'Set SEND_TEST_LEAD=1 to send a real test lead.');
    return;
  }

  const valid = await postJson('/api/lead', {
    name: 'Automated Health Check',
    phone: '4255550123',
    email: '',
    location: 'Automated health check',
    description: 'Test lead from tools/check-site-health.mjs',
    sms_opt_in: true,
    created_at: new Date().toISOString(),
  });

  record(
    'valid lead reaches configured delivery services',
    valid.response.ok && valid.json?.success === true,
    `${valid.response.status} ${JSON.stringify(valid.json)}`,
  );
};

const main = async () => {
  console.log(`Checking Hercules site health against ${SITE_URL}`);
  console.log('Note: valid lead delivery is not tested unless SEND_TEST_LEAD=1.\n');

  await checkSource();
  await checkLive();

  let failed = 0;

  for (const check of checks) {
    const marker = check.passed ? 'PASS' : 'FAIL';
    console.log(`${marker} ${check.name}${check.detail ? ` - ${check.detail}` : ''}`);
    if (!check.passed) failed += 1;
  }

  if (failed > 0) {
    console.error(`\n${failed} check(s) failed.`);
    process.exit(1);
  }

  console.log('\nAll checks passed.');
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
