#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const CLEAN_CONTENT_REGEX = {
  comments: /\/\*[\s\S]*?\*\/|\/\/.*$/gm,
  templateLiterals: /`[\s\S]*?`/g,
  strings: /'[^']*'|"[^"]*"/g,
  jsxExpressions: /\{.*?\}/g,
  htmlEntities: {
    quot: /&quot;/g,
    amp: /&amp;/g,
    lt: /&lt;/g,
    gt: /&gt;/g,
    apos: /&apos;/g
  }
};

const EXTRACTION_REGEX = {
  route: /<Route\s+[^>]*>/g,
  path: /path=["']([^"']+)["']/,
  element: /element=\{<(\w+)[^}]*\/?\s*>\}/,
  helmet: /<Helmet[^>]*?>([\s\S]*?)<\/Helmet>/i,
  helmetTest: /<Helmet[\s\S]*?<\/Helmet>/i,
  title: /<title[^>]*?>\s*(.*?)\s*<\/title>/i,
  description: /<meta\s+name=["']description["']\s+content=["'](.*?)["']/i
};

function cleanContent(content) {
  return content
    .replace(CLEAN_CONTENT_REGEX.comments, '')
    .replace(CLEAN_CONTENT_REGEX.templateLiterals, '""')
    .replace(CLEAN_CONTENT_REGEX.strings, '""');
}

function cleanText(text) {
  if (!text) return text;
  
  return text
    .replace(CLEAN_CONTENT_REGEX.jsxExpressions, '')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.quot, '"')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.amp, '&')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.lt, '<')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.gt, '>')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.apos, "'")
    .trim();
}

function extractRoutes(appJsxPath) {
  if (!fs.existsSync(appJsxPath)) return new Map();

  try {
    const content = fs.readFileSync(appJsxPath, 'utf8');
    const routes = new Map();
    const routeMatches = [...content.matchAll(EXTRACTION_REGEX.route)];
    
    for (const match of routeMatches) {
      const routeTag = match[0];
      const pathMatch = routeTag.match(EXTRACTION_REGEX.path);
      const elementMatch = routeTag.match(EXTRACTION_REGEX.element);
      const isIndex = routeTag.includes('index');
      
      if (elementMatch) {
        const componentName = elementMatch[1];
        let routePath;
        
        if (isIndex) {
          routePath = '/';
        } else if (pathMatch) {
          routePath = pathMatch[1].startsWith('/') ? pathMatch[1] : `/${pathMatch[1]}`;
        }
        
        routes.set(componentName, routePath);
      }
    }

    return routes;
  } catch (error) {
    return new Map();
  }
}

function findReactFiles(dir) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...findReactFiles(fullPath));
    } else if (item.name.endsWith('.jsx') || item.name.endsWith('.tsx')) {
      results.push(fullPath);
    }
  }
  return results;
}

function extractHelmetData(content, filePath, routes) {
  // Extract title directly from raw content
  const titleMatch = content.match(/<title[^>]*>\s*(.*?)\s*<\/title>/i);
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const canonicalMatch = content.match(/rel=["']canonical["']\s+href=["'](https?:\/\/[^"']+)["']/i);

  if (!titleMatch && !descMatch) return null;

  const title = cleanText(titleMatch?.[1]);
  const description = cleanText(descMatch?.[1]);

  // Prefer canonical URL, then route map, then fallback
  let url;
  if (canonicalMatch) {
    try {
      url = new URL(canonicalMatch[1]).pathname;
    } catch {
      url = canonicalMatch[1];
    }
  } else {
    const fileName = path.basename(filePath, path.extname(filePath));
    url = (routes.size && routes.has(fileName))
      ? routes.get(fileName)
      : generateFallbackUrl(fileName);
  }

  return {
    url,
    title: title || 'Untitled Page',
    description: description || 'No description available'
  };
}

function generateFallbackUrl(fileName) {
  const cleanName = fileName.replace(/Page$/, '').toLowerCase();
  return cleanName === 'app' ? '/' : `/${cleanName}`;
}

const EXCLUDED_PAGES = ['/admin', '/login', '/debug', '/test-email', '/notfound', '/testemail', '/locationpagelayout'];

const LOCATION_PAGES = [
  { slug: 'kenmore', city: 'Kenmore' },
  { slug: 'bothell', city: 'Bothell' },
  { slug: 'kirkland', city: 'Kirkland' },
  { slug: 'woodinville', city: 'Woodinville' },
  { slug: 'lake-forest-park', city: 'Lake Forest Park' },
  { slug: 'mountlake-terrace', city: 'Mountlake Terrace' },
  { slug: 'lynnwood', city: 'Lynnwood' },
  { slug: 'shoreline', city: 'Shoreline' },
  { slug: 'seattle', city: 'Seattle' },
  { slug: 'bellevue', city: 'Bellevue' },
  { slug: 'redmond', city: 'Redmond' },
  { slug: 'sammamish', city: 'Sammamish' },
  { slug: 'edmonds', city: 'Edmonds' },
];

function generateLlmsTxt(pages) {
  const publicPages = pages.filter(p => !EXCLUDED_PAGES.includes(p.url));
  const sortedPages = publicPages.sort((a, b) => a.title.localeCompare(b.title));
  const pageEntries = sortedPages.map(page =>
    `- [${page.title}](https://hercjunk.com${page.url}): ${page.description}`
  ).join('\n');

  const locationEntries = LOCATION_PAGES.map(loc =>
    `- [Junk Removal in ${loc.city}, WA](https://hercjunk.com/junk-removal-${loc.slug}): Same-day junk removal in ${loc.city}, WA from $99. Licensed & insured.`
  ).join('\n');

  return `# Hercules Junk Removal

> Local junk removal in Kenmore and Greater Seattle from $99. Same-day service. Owner: Dylan Thornsberry. Phone: (425) 406-3445.

Serving: Kenmore, Bothell, Kirkland, Lynnwood, Woodinville, Lake Forest Park, Mountlake Terrace, Shoreline, Seattle, Bellevue, Redmond, Sammamish, Edmonds

## Pages
${pageEntries}

## Location Pages
${locationEntries}`;
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function processPageFile(filePath, routes) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return extractHelmetData(content, filePath, routes);
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return null;
  }
}

function main() {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  const appJsxPath = path.join(process.cwd(), 'src', 'App.jsx');

  let pages = [];
  
  if (!fs.existsSync(pagesDir)) {
    pages.push(processPageFile(appJsxPath, []))
    pages = pages.filter(Boolean);
  } else {
    const routes = extractRoutes(appJsxPath);
    const reactFiles = findReactFiles(pagesDir);

    pages = reactFiles
      .map(filePath => processPageFile(filePath, routes))
      .filter(Boolean);
  }

  if (pages.length === 0) {
    console.error('❌ No pages with Helmet components found!');
    process.exit(1);
  }


  const llmsTxtContent = generateLlmsTxt(pages);
  const outputPath = path.join(process.cwd(), 'public', 'llms.txt');
  
  ensureDirectoryExists(path.dirname(outputPath));
  fs.writeFileSync(outputPath, llmsTxtContent, 'utf8');
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main();
}
