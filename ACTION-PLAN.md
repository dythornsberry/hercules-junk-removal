# SEO Action Plan: hercjunk.com

**Generated:** April 1, 2026
**SEO Health Score:** 52/100 → Target: 80+/100

---

## Phase 1: Critical Fixes (Do This Week)

### 1. Add security headers — `public/_headers`
**Effort:** 5 min | **Impact:** Trust signals, security score
```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### 2. Add canonical + og:image fallback to `index.html`
**Effort:** 5 min | **Impact:** Prevents duplicate indexing, social sharing
```html
<link rel="canonical" href="https://hercjunk.com/" />
<meta property="og:image" content="https://hercjunk.com/images/hercules-truck.jpg" />
```

### 3. Defer Calendly CSS in `index.html`
**Effort:** 2 min | **Impact:** LCP improvement
```html
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" media="print" onload="this.media='all'">
```

### 4. Fix LocalBusiness schema in `HomePage.jsx`
**Effort:** 15 min | **Impact:** Knowledge Panel eligibility
- Add `address` (PostalAddress with 6516 NE 192nd Pl, Kenmore, WA 98028)
- Add `image`
- Add `founder` (Person: Dylan Thornsberry)
- Add `sameAs` (YouTube, GBP)
- Change `@type` to `["LocalBusiness", "HomeAndConstructionBusiness"]`
- Add missing cities to `areaServed` (Seattle, Bellevue, Redmond, Sammamish, Edmonds)

### 5. Fix About page
**Effort:** 30 min | **Impact:** E-E-A-T across entire site
- Fix sideways photo (remove `transform: rotate(90deg)`)
- Expand from ~110 words to 500+ words
- Add: year founded, Dylan's background, license details, insurance info, disposal practices
- Add Person schema

### 6. Fix llms.txt generator
**Effort:** 30 min | **Impact:** AI search visibility (ChatGPT, Perplexity)
- Make `findReactFiles` recursive
- Exclude admin/protected pages
- Add business intro block at top
- Include all 28 public pages

### 7. Fix `areaServed` on all 5 service pages
**Effort:** 15 min | **Impact:** Schema validation, local relevance
- Replace `{ "@type": "State" }` with array of `City` objects

### 8. Add WebSite schema to `index.html`
**Effort:** 5 min | **Impact:** Entity recognition
```json
{ "@type": "WebSite", "url": "https://hercjunk.com", "name": "Hercules Junk Removal" }
```

---

## Phase 2: High-Value Improvements (Next 2 Weeks)

### 9. Add internal links from service pages → location pages
**Effort:** 1 hr | **Impact:** Critical SEO gap
- Add "We Serve These Areas" section to each service page with links to all 13 location pages

### 10. Add visible breadcrumb navigation component
**Effort:** 1 hr | **Impact:** UX + crawlability

### 11. Add VideoObject schema to YouTube embed
**Effort:** 15 min | **Impact:** Video rich results, AI brand signal

### 12. Add OG/Twitter tags to all pages missing them
**Effort:** 1 hr | **Impact:** Social sharing on 13+ pages
- HomePage, AboutPage, FaqPage, QuotePage, ServiceAreasPage, all 13 location pages

### 13. Guard Horizons dev scripts behind isDev check
**Effort:** 5 min | **Impact:** Removes unnecessary JS from production
- Add `isDev` guard to `addTransformIndexHtml` in `vite.config.js`

### 14. Add lastmod dates to sitemap.xml
**Effort:** 30 min | **Impact:** Crawl prioritization (esp. Bing)

### 15. Migrate react-helmet → react-helmet-async
**Effort:** 1 hr | **Impact:** Reliable meta tag rendering with React 18

### 16. Replace footer placeholder license number
**Effort:** 5 min | **Impact:** Trust + factual AI citation data

---

## Phase 3: Content & Authority Building (Next Month)

### 17. Expand thin location pages (Bellevue, Seattle, Redmond)
**Effort:** 2 hrs | **Impact:** Competitive local rankings
- Target 400+ words of unique local content per city
- Add neighborhood-specific details, local insights

### 18. Expand FAQ page to 15-20 questions
**Effort:** 1 hr | **Impact:** Long-tail query coverage + AI citations
- Add: insurance/damage, estate cleanouts, what happens to donated items, pricing for unusual items, service area questions

### 19. Replace stock photos on service pages with real job photos
**Effort:** 1 hr | **Impact:** E-E-A-T, trust

### 20. Add question-format H2 headings to service/location pages
**Effort:** 2 hrs | **Impact:** Featured snippets + AI Overviews
- "How much does junk removal cost in Kenmore?"
- "What items do you remove?"
- "How long does a garage cleanout take?"

### 21. Add static review markup alongside Elfsight widget
**Effort:** 1 hr | **Impact:** Crawlable social proof
- Render 5-8 real Google review quotes as static HTML
- Add Review schema to each

### 22. Add cross-location internal links
**Effort:** 1 hr | **Impact:** Crawlability, topical relevance
- Each location page links to 2-3 nearby city pages

### 23. Add social profile links to footer + sameAs schema
**Effort:** 30 min | **Impact:** Brand entity recognition

---

## Phase 4: Advanced (Backlog)

### 24. Implement prerendering (vite-plugin-prerender)
**Effort:** 4-8 hrs | **Impact:** Solves the fundamental CSR problem
- Generates flat HTML at build time for all known routes
- Most impactful single change for non-Google platforms

### 25. Implement IndexNow for Bing
**Effort:** 30 min | **Impact:** Instant Bing indexing on deploy

### 26. Add BreadcrumbList + schema to ServiceAreasPage
**Effort:** 15 min | **Impact:** Structured data on high-value page

### 27. Create a proper PricingPage wrapper
**Effort:** 30 min | **Impact:** The /pricing route currently has no Helmet at all

### 28. Move Dylan's photo from Hostinger CDN to /public/images/
**Effort:** 15 min | **Impact:** Domain authority on image asset

---

## Estimated Impact

| Phase | Effort | Score Impact |
|-------|--------|-------------|
| Phase 1 (Critical) | ~2 hours | 52 → 68 |
| Phase 2 (High-Value) | ~5 hours | 68 → 76 |
| Phase 3 (Content) | ~10 hours | 76 → 84 |
| Phase 4 (Advanced) | ~8 hours | 84 → 90+ |

---

## What's Working Well (Don't Break These)

- Transparent pricing on-page ($99-$649)
- Authentic, non-AI voice across all copy
- 13 dedicated location pages with unique content
- FAQPage schema on all service pages
- BreadcrumbList schema on all service and location pages
- Consistent phone number site-wide
- Clean URL structure
- Real before/after photos and YouTube video
- Proper canonical tags on all pages
- Admin routes excluded from sitemap and robots.txt
