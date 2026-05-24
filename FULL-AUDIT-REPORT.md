# SEO Audit Report: hercjunk.com

**Date:** April 1, 2026
**Business:** Hercules Junk Removal — Local SAB, Kenmore & Greater Seattle
**Tech Stack:** React 18 SPA / Vite 4.4 / Cloudflare Pages
**Pages Analyzed:** 28 (9 core + 5 service + 13 location + 1 privacy)

---

## SEO Health Score: 52 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 54 | 11.9 |
| Content Quality | 23% | 67 | 15.4 |
| On-Page SEO | 20% | 72 | 14.4 |
| Schema / Structured Data | 10% | 58 | 5.8 |
| Performance (CWV) | 10% | 55 | 5.5 |
| AI Search Readiness | 10% | 41 | 4.1 |
| Images | 5% | 60 | 3.0 |
| **TOTAL** | **100%** | | **60.1** |

---

## Executive Summary

### Top 5 Critical Issues

1. **Client-Side Rendering (no SSR/prerendering)** — All content is invisible until JS executes. Non-Google crawlers and AI platforms see a blank page. Google uses delayed second-pass rendering.
2. **No security headers** — Missing `_headers` file means no X-Frame-Options, no CSP, no HSTS from the application layer.
3. **LocalBusiness schema missing `address`** — Required for Google Knowledge Panel and local pack eligibility. NAP is incomplete.
4. **About page is ~110 words with a sideways owner photo** — Primary E-E-A-T page is thin and has a visual defect (`transform: rotate(90deg)`).
5. **llms.txt is broken** — Generator script doesn't recurse into subdirectories; output lists only admin pages, zero public pages.

### Top 5 Quick Wins

1. **Add `_headers` file** with security headers (5 min, high trust signal)
2. **Add canonical tag to `index.html`** as fallback (2 min)
3. **Defer Calendly CSS** with `media="print"` trick (2 min, improves LCP)
4. **Fix llms.txt generator** to recurse and exclude admin pages (30 min)
5. **Add `address` and `image` to LocalBusiness schema** (15 min)

---

## Detailed Findings

### 1. Technical SEO (54/100)

#### Critical
- **C1: No SSR/prerendering.** Every page ships as `<div id="root"></div>`. All meta tags, schema, H1s, and content are JS-rendered. Google's second-pass rendering works but is delayed 24-72h. Bing, ChatGPT, Perplexity see nothing.
- **C2: No `_headers` file.** Missing: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- **C3: No canonical in `index.html`.** Per-page canonicals exist via Helmet but fail if JS doesn't execute.

#### High
- **H1: react-helmet v6 has known React 18 issues.** Tags can render out of order with Suspense. Should migrate to `react-helmet-async`.
- **H2: Calendly CSS is render-blocking.** Loaded as `<link rel="stylesheet">` in `<head>`. Only needed when popup opens.
- **H3: Horizons dev scripts run in production.** `addTransformIndexHtml` in `vite.config.js` has no `isDev` guard — injects error handlers and `postMessage` calls in production builds.

#### Medium
- **M1: Sitemap missing `lastmod` dates** on all 28 URLs.
- **M2: No IndexNow implementation** for Bing/Yandex instant indexing.
- **M3: OG tags incomplete** on HomePage, AboutPage, FaqPage, QuotePage, ServiceAreasPage, and all 13 location pages.
- **M4: `og:image` references `hercules-truck.jpg`** — existence unverified. No og:image in `index.html` fallback.
- **M5: `/pricing` route has no Helmet** — no title, meta description, canonical, or H1 wrapper.

#### Positive
- All pages have canonical tags via Helmet
- Clean URL slugs, no query strings
- Viewport meta correctly set
- Admin routes excluded from sitemap and blocked in robots.txt
- Preconnect/dns-prefetch for Calendly domains

---

### 2. Content Quality & E-E-A-T (67/100)

#### Critical
- **About page owner photo renders sideways** (`style={{ transform: 'rotate(90deg)' }}` in AboutPage.jsx line 65). The primary credibility page shows a tilted photo.
- **About page is ~110 words.** Minimum for E-E-A-T is 400-500 words. Missing: Dylan's background, year founded, license details, insurance specifics, disposal practices.

#### High
- **Google Reviews widget (Elfsight) is not crawlable.** Renders via client-side JS — crawlers see an empty div. The only indexed review signal is the hardcoded `aggregateRating` (5.0, 7 reviews) in schema.
- **`aggregateRating reviewCount: 7` is hardcoded and static.** Will go stale. Competitors with 40+ reviews visually dominate SERPs.

#### Medium
- **"Fast response <2 hrs" claim in TrustBadgeStrip** is unsubstantiated anywhere else on the site.
- **All 5 service pages use Unsplash stock photos** while real before/after photos exist (used on homepage).
- **FAQ page has only 7 questions (~250 words).** A standalone FAQ should have 15-20 questions.
- **Construction Debris page is the weakest** — entirely generic, no local specificity.
- **Bellevue and Seattle location pages are thin** (~150-200 words of local content each). These are the most competitive markets.

#### Positive
- Pricing transparency ($99-$649) is a genuine differentiator
- Voice is authentic, human, and non-generic
- Real before/after photos and YouTube Short of actual job
- FAQ schema correctly implemented on all service pages

---

### 3. On-Page SEO (72/100)

#### Critical
- **Service pages do NOT link to location pages.** Massive internal linking gap — no cross-referral between service content and city-specific pages.

#### High
- **QuotePage and BookingPage have identical H1s** ("Book Your Junk Removal") — duplicate content signal.
- **No visible breadcrumb navigation.** Breadcrumbs exist in schema but are not rendered as clickable HTML links.

#### Medium
- **Location pages should cross-link to nearby locations** (e.g., Kenmore page linking to Bothell and Lake Forest Park).
- **Service page titles missing location qualifiers:** FurnitureRemovalPage, ConstructionDebrisRemovalPage lack city names.
- **Missing OG/Twitter tags on 9+ pages** including HomePage and all location pages.

#### Positive
- All pages have unique title tags (47-68 chars, good range)
- All pages have meta descriptions (130-160 chars)
- All pages have exactly one H1
- H1 > H2 > H3 hierarchy is correct site-wide
- Image alt text coverage is excellent
- Footer has comprehensive internal linking

---

### 4. Schema / Structured Data (58/100)

#### Critical
- **LocalBusiness missing `address` (PostalAddress).** Required for Knowledge Panel eligibility.
- **LocalBusiness missing `image`.** Required for most Google rich result types.
- **`areaServed: { "@type": "State" }` on all 5 service pages.** `State` is not a valid Schema.org type — use `City` or `AdministrativeArea`.
- **ServiceAreasPage has zero schema.** High-value local page with no structured data.

#### High
- **No `WebSite` schema anywhere.** Should be in `index.html` as a static block.
- **`provider` in all Service blocks is an anonymous stub.** Should reference `{ "@id": "https://hercjunk.com" }`.
- **No `Person` schema for Dylan** as business owner/founder.
- **Missing `serviceType` property** on all Service schema blocks.

#### Medium
- **No `VideoObject` schema** on the YouTube embed in VideoSection.jsx.
- **`openingHoursSpecification` uses non-standard `closes: "23:59"`** for 24/7.
- **`areaServed` in LocalBusiness omits 5 cities** (Seattle, Bellevue, Redmond, Sammamish, Edmonds) that have dedicated location pages.

#### Positive
- FAQPage schema correctly implemented on all service pages and FAQ page
- BreadcrumbList schema on all service and location pages
- Service schema on all service and location pages
- AggregateRating in LocalBusiness schema

---

### 5. AI Search Readiness / GEO (41/100)

#### Critical
- **llms.txt is broken.** The `generate-llms.js` script doesn't recurse into `src/pages/locations/` or `src/pages/services/`. Output lists only 5 admin/internal pages — zero public pages.
- **CSR makes all content invisible to non-JS AI crawlers** (ChatGPT, Perplexity, Bing Copilot).

#### High
- **No question-format H2/H3 headings.** Service and location pages lack headings like "How much does junk removal cost in Kenmore?" that match AI query patterns.
- **No VideoObject schema** on the YouTube embed — the single strongest brand signal (0.737 correlation with AI citations).
- **No social profile links or `sameAs` schema.** Only YouTube is linked; no Yelp, Facebook, Instagram, Google Business Profile links.

#### Medium
- **Footer has placeholder license number** (`WA License #HERCUJR***`). AI systems prefer verifiable factual data.
- **About page Dylan image hosted on external Hostinger CDN** — leftover from Replit era.
- **Paragraph length too short for AI citation** — most are 40-80 words vs. 134-167 word optimal.

#### Positive
- robots.txt allows all search crawlers (AI crawler blocks are Cloudflare-managed, not in the repo)
- YouTube channel and video embed exist
- FAQ schema provides citable Q&A pairs
- Pricing data is specific and structured

---

### 6. Local SEO

#### Critical
- **No physical address anywhere on the site.** The LocalBusiness schema has no `address` property. NAP is incomplete (Name + Phone only, no Address).

#### High
- **No Google Business Profile link** anywhere on the site.
- **No `sameAs` social/directory links** in schema.
- **WA license number is a placeholder** in the footer.

#### Medium
- **Location page content varies significantly.** Kenmore and Bothell have good local detail. Bellevue, Seattle, Redmond are thin.
- **All location pages share identical `popularServices`** in the same order — thin content signal.
- **No review schema on individual review components** — only the homepage AggregateRating.

#### Positive
- 13 dedicated location pages covering the full service area
- NAP (phone + business name) is consistent site-wide
- Location pages include neighborhood names and local details
- Service schema on location pages includes city-specific `areaServed`

---

## Files Referenced

| File | Issues |
|------|--------|
| `index.html` | Missing canonical, og:image, WebSite schema, Calendly CSS blocking |
| `vite.config.js` | Horizons scripts in production |
| `public/sitemap.xml` | No lastmod dates |
| `public/llms.txt` | Only lists admin pages |
| `tools/generate-llms.js` | Doesn't recurse into subdirectories |
| `src/pages/HomePage.jsx` | LocalBusiness missing address/image, hardcoded reviewCount |
| `src/pages/AboutPage.jsx` | ~110 words, sideways photo, no Person schema |
| `src/pages/FaqPage.jsx` | Only 7 questions |
| `src/pages/ServiceAreasPage.jsx` | No schema at all |
| `src/pages/services/*.jsx` (all 5) | Invalid `areaServed` type, stock photos, no links to locations |
| `src/pages/locations/*.jsx` (all 13) | Missing OG tags, no cross-location links, thin content on some |
| `src/components/sections/Footer.jsx` | Placeholder license number |
| `src/components/sections/VideoSection.jsx` | No VideoObject schema |
| `src/components/sections/GoogleReviewsWidget.jsx` | Not crawlable (JS-only) |
| `src/components/sections/Reviews.jsx` | No Review schema |
