# Hercules Junk Removal

## Overview
Junk removal and cleanout service website serving Kenmore & Greater Seattle area.

- **Domain:** hercjunk.com
- **Hosting:** Cloudflare Pages
- **Phone:** 425-406-3445
- **Owner:** Dylan Thornsberry (dythornsberry@gmail.com)

## Tech Stack
- **Framework:** React 18.2 + JSX (no TypeScript)
- **Build:** Vite 4.4
- **Routing:** React Router DOM 6.16
- **Styling:** Tailwind CSS 3.3 + shadcn/ui (Radix UI)
- **Animations:** Framer Motion 10.16
- **Backend:** Supabase (PostgreSQL + Edge Functions)
- **Webhooks:** Zapier (proxied via Supabase Edge Function `forward-to-zapier`)
- **Email:** Supabase Edge Function `send-form-notification-email`
- **Maps:** Leaflet + React-Leaflet 4.2
- **Booking:** Calendly widget (https://calendly.com/hercjunk/junk-removal-pickup)
- **Icons:** Lucide React

## Quick Start
```bash
npm run dev        # Dev server on http://localhost:3000
npm run build      # Runs generate-llms.js then vite build to dist/
npm run preview    # Preview build on port 3000
npm run lint       # ESLint (--quiet)
```

## Form Submission Flow
1. User fills out `QuoteForm`, `SlimQuoteForm`, or `CallbackSection`
2. All forms collect: name, phone (required), email (optional), description, sms_opt_in
3. Submission calls `supabase.functions.invoke('forward-to-zapier', { body: quoteData })`
4. Edge Function proxies to actual Zapier webhook (URL not exposed client-side)
5. Secondary: `send-form-notification-email` Edge Function fires for email notification
6. All submissions saved to `quotes` table in Supabase
7. Phone validation: exactly 10 digits required

## Key Files
- `src/components/sections/QuoteForm.jsx` — Main quote form
- `src/components/sections/SlimQuoteForm.jsx` — Compact form variant
- `src/components/sections/CallbackSection.jsx` — Quick callback form
- `src/App.jsx` — Main routing
- `src/lib/customSupabaseClient.js` — Supabase config & client
- `src/lib/calendlyUtils.js` — Calendly popup initialization
- `tailwind.config.js` — Design system
- `vite.config.js` — Build config with custom plugins

## Supabase
- **Project URL:** https://wjjsdhpkuoeufkaeeynv.supabase.co
- **Edge Functions:** `forward-to-zapier`, `send-form-notification-email`
- **Database Table:** `quotes` (name, phone, email, location, description, sms_opt_in, created_at)
- **Real-time:** AdminPage listens to `quotes` table changes

## Pages
- `/` — Home
- `/quote` — Dedicated quote page
- `/service-areas` — Service area coverage
- **Services:** `/garage-cleanouts`, `/household-junk-removal`, + 3 more
- **Locations:** `/junk-removal-kenmore`, `/junk-removal-bothell`, + 6 more (Kirkland, Lynnwood, Woodinville, Lake Forest Park, Mountlake Terrace, Shoreline)
- `/admin` — Protected admin dashboard (sessionStorage auth)
- `/login`, `/debug`, `/test-email` — Protected utilities

## Auth (Simple)
- `sessionStorage.getItem('hercules-auth') === 'true'`
- Protects /admin, /debug, /test-email routes

## Deployment
- Push to Git → Cloudflare Pages auto-builds from dist/
- SPA routing: `_redirects` file (`/* /index.html 200`)
- Build output: `dist/`

## Path Alias
- `@/` → `./src/`

## Design System
- HSL CSS variables for colors (primary, secondary, destructive, muted, accent)
- Dark mode: class strategy
- Tailwind-animate plugin for accordion animations
