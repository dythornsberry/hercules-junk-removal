/**
 * Post-build prerender for SEO.
 *
 * Renders every sitemap route in headless Chromium against dist/ and writes
 * the real DOM and the head tags react-helmet produced (title, description,
 * canonical, JSON-LD) into dist/<route>.html, so crawlers that don't run
 * JavaScript see each page's own content instead of an empty <div id="root">
 * with the homepage's title and canonical. dist/404.html gets the NotFound
 * page, which Cloudflare Pages serves with a real 404 status.
 *
 * External requests are blocked so third-party widgets never end up in the
 * captured DOM. If Chromium can't start, the build still succeeds and ships
 * the plain SPA, so a deploy can never break here.
 *
 * Run after `vite build`: node scripts/prerender.js
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createServer } from 'http';
import { execSync } from 'child_process';
import { createRequire } from 'module';
import { dirname, join, extname, normalize } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');

const sitemapRoutes = [...readFileSync(join(ROOT, 'public', 'sitemap.xml'), 'utf-8').matchAll(/<loc>https:\/\/hercjunk\.com([^<]*)<\/loc>/g)]
  .map(([, path]) => path || '/');
const routes = [...sitemapRoutes, '/404'];

// Flat files (dist/about.html), not directories: Cloudflare Pages serves
// /about from about.html, while a directory triggers a trailing-slash redirect.
const outFileFor = (route) =>
  route === '/' ? join(DIST, 'index.html') : join(DIST, `${route.slice(1)}.html`);

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.txt': 'text/plain', '.xml': 'application/xml',
  '.woff2': 'font/woff2', '.mp4': 'video/mp4',
};

// Always serves the untouched SPA shell for routes, so later snapshots never
// start from an already prerendered page.
function startStaticServer(shell) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      const file = join(DIST, normalize(urlPath).replace(/^(\.\.[/\\])+/, ''));
      if (extname(file) && existsSync(file)) {
        res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
        res.end(readFileSync(file));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(shell);
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function launchChromium() {
  // playwright-core ships no browsers. Download headless Chromium on demand at
  // the driver's version so the browser revision matches.
  const { chromium } = await import('playwright-core');
  try {
    return await chromium.launch();
  } catch {
    const { version } = createRequire(import.meta.url)('playwright-core/package.json');
    console.log(`Chromium not found, downloading via playwright@${version}...`);
    execSync(`npx -y playwright@${version} install chromium --only-shell`, { stdio: 'inherit', timeout: 240000 });
    return await chromium.launch();
  }
}

// index.html carries homepage title/description/canonical/OG tags. Drop the
// ones Helmet sets for the page, so each route has exactly one of each.
function stripStaticDuplicates(shell, headTags) {
  let html = shell.replace(/\s*<title>[^<]*<\/title>/, '').replace(/\s*<link rel="canonical"[^>]*>/, '');
  for (const tag of headTags) {
    const key = tag.match(/\s(name|property)="([^"]+)"/);
    if (!key) continue;
    html = html.replace(new RegExp(`\\s*<meta ${key[1]}="${key[2]}"[^>]*>`), '');
  }
  return html;
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function snapshot(browser, port, shell) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 2000 } });
  await context.route('**/*', (r) => (r.request().url().startsWith(`http://127.0.0.1:${port}`) ? r.continue() : r.abort()));
  const page = await context.newPage();
  let ok = 0;
  const failed = [];

  for (const route of routes) {
    try {
      await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: 'networkidle', timeout: 30000 });
      // Lazy route chunk loaded and Helmet has set a canonical or robots tag
      await page.waitForFunction(
        () => (document.getElementById('root')?.innerHTML.length ?? 0) > 1000 &&
          document.head.querySelector('[data-react-helmet][rel="canonical"], [data-react-helmet][name="robots"]'),
        null,
        { timeout: 15000 }
      );
      // Let entrance animations settle so content isn't captured at opacity 0
      await page.waitForTimeout(1500);

      const { rootHtml, title, headTags } = await page.evaluate(() => {
        const root = document.getElementById('root');
        // Adjacent text nodes would merge when parsed and break hydration;
        // split them with an empty comment the way React's own SSR does.
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const texts = [];
        while (walker.nextNode()) texts.push(walker.currentNode);
        for (const t of texts) if (t.previousSibling?.nodeType === Node.TEXT_NODE) t.before(document.createComment(' '));
        // App.jsx wraps the routes in <Suspense>. React only hydrates a
        // Suspense boundary from server HTML that carries its <!--$--> markers.
        const outlet = root.querySelector('[data-route-outlet]');
        if (outlet) {
          outlet.prepend(document.createComment('$'));
          outlet.append(document.createComment('/$'));
        }
        return {
          rootHtml: root.innerHTML,
          title: document.title,
          headTags: [...document.head.querySelectorAll('[data-react-helmet]')].filter((el) => el.tagName !== 'TITLE').map((el) => el.outerHTML),
        };
      });

      const head = [`<title>${esc(title)}</title>`, ...headTags].map((t) => `    ${t}`).join('\n');
      const html = stripStaticDuplicates(shell, headTags)
        .replace('</head>', `${head}\n  </head>`)
        // main.jsx only hydrates when this matches the current URL
        .replace('<div id="root"></div>', () => `<div id="root" data-prerendered="${route}">${rootHtml}</div>`);
      writeFileSync(outFileFor(route), html);
      ok++;
    } catch (err) {
      failed.push(`${route} (${err.message.split('\n')[0]})`);
    }
  }

  console.log(`✓ Prerendered ${ok}/${routes.length} routes`);
  if (failed.length) console.warn(`⚠ Prerender failed for:\n  ${failed.join('\n  ')}`);
}

const shell = readFileSync(join(DIST, 'index.html'), 'utf-8');
let server;
let browser;
try {
  server = await startStaticServer(shell);
  browser = await launchChromium();
  await snapshot(browser, server.address().port, shell);
} catch (err) {
  console.warn(`⚠ Prerender skipped (${err.message.split('\n')[0]}). Shipping the plain SPA.`);
} finally {
  if (browser) await browser.close().catch(() => {});
  if (server) server.close();
}
// Never let a lingering handle hang the CI build
process.exit(0);
