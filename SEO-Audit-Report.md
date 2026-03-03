# SEO Audit Report: Majors Electrical Services
**Site:** majorselectrical.figma.site
**Date:** February 2026
**Audit Type:** Full Site Audit
**Prepared for:** Dinko / Majors Electrical Services

---

## Executive Summary

Majors Electrical Services has a visually impressive, well-structured website with strong content breadth — covering 25 individual services, 6 location pages, and clear customer segments. The brand positioning is solid, with real trust signals (license number, 5-star reviews, BBB accreditation, BuildZoom Top 1%). However, **the site currently has zero organic SEO value** because it is hosted on Figma's publishing platform (figma.site), which is not indexed by Google. Even if it were on a proper domain, the site lacks every fundamental on-page SEO element — no per-page title tags, no meta descriptions, no structured data, and no server-side rendering.

**Top 3 priorities:**
1. **Launch on a real domain with proper hosting** — the figma.site domain is invisible to search engines.
2. **Add per-page title tags and meta descriptions** — currently every page shares the same generic `<title>Majors Electrical Services</title>` with no description.
3. **Claim and optimise your Google Business Profile** — for a local trades business, Google Maps is where most leads come from, and this requires zero website coding.

---

## Keyword Opportunity Table

| Keyword | Est. Difficulty | Opportunity | Current Ranking | Intent | Recommended Content Type |
|---|---|---|---|---|---|
| electrician Sarasota FL | Moderate | **High** | Not indexed | Transactional | Homepage + dedicated landing page |
| emergency electrician Sarasota | Low–Moderate | **High** | Not indexed | Transactional | Dedicated service page |
| electrician near me Sarasota | Low | **High** | Not indexed | Transactional | Google Business Profile + homepage |
| panel upgrade Sarasota FL | Moderate | **High** | Not indexed | Transactional | Existing /services/panel-upgrades (optimise) |
| EV charger installation Sarasota | Low | **High** | Not indexed | Transactional | Existing /services/ev-charging (optimise) |
| residential electrician Sarasota | Moderate | **High** | Not indexed | Transactional | /services/residential (optimise) |
| licensed electrician Sarasota | Low | **High** | Not indexed | Transactional | Homepage + About page |
| electrical contractor Sarasota | Moderate | **High** | Not indexed | Commercial | Homepage |
| electrician Bradenton FL | Moderate | **High** | Not indexed | Transactional | /locations/bradenton (optimise) |
| electrician Lakewood Ranch | Low | **High** | Not indexed | Transactional | /locations/lakewood-ranch (optimise) |
| electrician Venice FL | Low | **Medium** | Not indexed | Transactional | /locations/venice (optimise) |
| whole home rewire Sarasota | Low | **Medium** | Not indexed | Transactional | Existing /services/rewire (optimise) |
| generator installation Sarasota | Low | **Medium** | Not indexed | Transactional | Existing /services/generators (optimise) |
| smart home electrician Sarasota | Very Low | **Medium** | Not indexed | Commercial | Existing /services/smart-switches (expand) |
| ceiling fan installation Sarasota | Very Low | **Medium** | Not indexed | Transactional | Existing /services/ceiling-fans (optimise) |
| electrical safety inspection Florida | Low | **Medium** | Not indexed | Informational/Commercial | Existing /services/safety-inspections (expand) |
| arc fault breaker installation Sarasota | Very Low | **Medium** | Not indexed | Transactional | Existing service page |
| data cabling Sarasota FL | Very Low | **Medium** | Not indexed | Commercial | Existing /services/data-cabling |
| commercial electrician Sarasota | Moderate | **Medium** | Not indexed | Commercial | /services/commercial (optimise) |
| how much does a panel upgrade cost Florida | Low | **Medium** | Not indexed | Informational | Blog post / FAQ |
| EV charger installation cost Florida | Low | **Medium** | Not indexed | Informational | Blog post |
| best electrician Sarasota reviews | Low | **Medium** | Not indexed | Transactional | Google Business Profile |
| electrician North Port FL | Very Low | **Low** | Not indexed | Transactional | /locations/north-port (optimise) |
| electrical contractor Tampa Bay | High | **Low** | Not indexed | Commercial | /locations/tampa-bay |
| surge protection whole house Florida | Very Low | **Low** | Not indexed | Transactional | Existing service page |

---

## On-Page Issues Table

| Page | Issue | Severity | Recommended Fix |
|---|---|---|---|
| All pages | **No per-page title tags** — every page renders `<title>Majors Electrical Services</title>` | **Critical** | Add `react-helmet` or Vite SSR to generate unique title tags per route. Example: Homepage → `"Electrician Sarasota FL | Majors Electrical Services"` |
| All pages | **No meta descriptions** — the `<head>` has no `<meta name="description">` tag on any page | **Critical** | Add per-page meta descriptions (150–160 chars) via react-helmet. Each service and location page needs a unique, keyword-rich description. |
| All pages | **Site hosted on figma.site** — not a real production domain; Google cannot index figma.site pages | **Critical** | Deploy the React/Vite app to a real domain (e.g., majorselectrical.com) via Netlify, Vercel, or similar. |
| All pages | **Single-page app with no SSR** — Google's crawler may struggle to render JavaScript-heavy pages | **High** | Consider switching to a meta-tag approach with react-helmet at minimum; for full SEO benefit, add prerendering via a tool like `vite-plugin-ssr` or move to a framework like Astro or Next.js for future rebuilds. |
| Homepage | **H1 does not include location keywords** — H1 is `"Professional Electrical You Can Trust"` | **High** | Update to: `"Expert Electricians in Sarasota, FL | Residential & Commercial"` or similar |
| Homepage | **No structured data / schema** — missing Organization, LocalBusiness, and Service schemas | **High** | Add `LocalBusiness` JSON-LD schema to the homepage with NAP (name, address, phone), hours, service area, and aggregateRating. |
| All service pages | **Generic page titles in code** — all service routes share the root title | **High** | Each service page (e.g., /services/ev-charging) needs a unique title: `"EV Charger Installation in Sarasota, FL | Majors Electrical"` |
| Location pages | **Location content is thin in some areas** — Bradenton and North Port pages have minimal unique content | **Medium** | Expand each location page with 400–600 words of unique, location-specific content including neighborhood mentions, common services in that area, and customer reviews. |
| Contact page | **No structured data for phone/hours** — contact info exists in the UI but isn't machine-readable | **Medium** | Add `ContactPage` schema and confirm NAP matches Google Business Profile exactly. |
| All pages | **No XML sitemap** — site has a /sitemap UI page but no /sitemap.xml for search engines | **Medium** | Generate an XML sitemap (use `vite-plugin-sitemap` or manually create one) and submit to Google Search Console. |
| Homepage | **Hero image alt text is generic** — `alt="Majors Electrical Vans"` is okay but could be more keyword-rich | **Low** | Update to `alt="Majors Electrical Services trucks — licensed electricians serving Sarasota, FL"` |
| Service images | **Multiple images share the same stock photo** — several service cards reuse the same image | **Low** | Use unique images per service where possible to improve E-E-A-T signals and user engagement. |
| About/Homepage | **Reviews section shows count (17) but no schema** — lost opportunity for star ratings in SERPs | **Medium** | Implement `AggregateRating` schema to potentially display star ratings in Google search results. |
| All pages | **No canonical tags** — potential duplicate content issues between `/services/residential` and home page content | **Low** | Add `<link rel="canonical">` tags via react-helmet to all pages. |
| All pages | **No Open Graph or Twitter Card tags** — sharing the site on social media will produce no preview | **Low** | Add OG and Twitter Card meta tags per page for proper social sharing previews. |

---

## Content Gap Recommendations

### 1. Emergency Electrician Page
- **Topic:** "Emergency Electrician Sarasota FL — 24/7 Service"
- **Why it matters:** "Emergency electrician [city]" is one of the highest-converting local search terms in trades. Competitors like Bolt Electric and Mister Sparky have dedicated emergency pages. High urgency = instant calls.
- **Format:** Dedicated landing page at `/services/emergency`
- **Priority:** High
- **Effort:** Moderate (half day)

### 2. Blog / Resource Centre
- **Topic:** Educational content (e.g., "How Much Does a Panel Upgrade Cost in Florida?", "When Do I Need to Rewire My Home?", "EV Charger Installation: What to Expect")
- **Why it matters:** Informational keywords drive organic traffic at the top of the funnel. Competitors like All Day Electric have blog posts targeting these exact queries. Currently Majors has zero blog content.
- **Format:** 3–5 blog posts to start, 600–1,200 words each
- **Priority:** High
- **Effort:** Substantial (multi-day)

### 3. Pricing / Cost Guide Pages
- **Topic:** Transparency pages for common services: "Panel Upgrade Cost Sarasota", "EV Charger Installation Cost"
- **Why it matters:** BlueFin Power Solutions ranks for "Sarasota panel upgrade" partly because they show pricing ranges ($1,500–$7,500). People searching for cost estimates are buyers.
- **Format:** Long-form landing pages or FAQ pages
- **Priority:** Medium
- **Effort:** Moderate (half day each)

### 4. "Why Choose a Licensed Electrician" Trust Content
- **Topic:** Educate on licensing, insurance, permitting — include Majors' license number (EC 13007355) prominently
- **Why it matters:** Matches high-intent searches around trust/safety and supports E-E-A-T signals Google evaluates for local services.
- **Format:** About page expansion + FAQ schema
- **Priority:** Medium
- **Effort:** Quick win (1–2 hours)

### 5. Neighbourhood-Level Pages
- **Topic:** Pages targeting specific suburbs like "Electrician Siesta Key", "Electrician Longboat Key", "Electrician Palmer Ranch"
- **Why it matters:** The site currently mentions these neighbourhoods in passing but doesn't have dedicated pages. Competitors are building suburb-specific pages to capture hyperlocal searches.
- **Format:** Dedicated location sub-pages
- **Priority:** Medium
- **Effort:** Moderate per page

### 6. Project Gallery / Case Studies
- **Topic:** Real before/after project documentation (e.g., "200A Panel Upgrade in Lakewood Ranch")
- **Why it matters:** Creates unique, keyword-rich content and demonstrates E-E-A-T (real Experience). The site has a "Recent Projects" section with no detail — this could be expanded substantially.
- **Format:** Project detail pages or an expanded gallery
- **Priority:** Low–Medium
- **Effort:** Substantial (depends on photography)

### 7. Commercial Electrical Hub Page
- **Topic:** A stronger commercial landing page targeting "commercial electrician Sarasota" and subtopics like LED retrofits, office build-outs, tenant improvements
- **Why it matters:** The commercial category exists but the `/services/commercial` page likely lacks depth. Business clients search differently and need more detailed content.
- **Format:** Pillar page at /commercial with supporting service sub-pages
- **Priority:** Medium
- **Effort:** Substantial

---

## Technical SEO Checklist

| Check | Status | Details |
|---|---|---|
| Hosted on indexable domain | ❌ **FAIL** | Site is on figma.site which is not indexed by Google. Deploy to a real domain immediately. |
| HTTPS / secure connection | ✅ Pass | figma.site serves over HTTPS. Confirm custom domain also uses HTTPS when deployed. |
| Per-page title tags | ❌ **FAIL** | Only one generic title exists for the entire site in `index.html`. Needs react-helmet or SSR. |
| Meta descriptions | ❌ **FAIL** | No meta descriptions anywhere on the site. |
| H1 tags | ⚠️ Warning | Homepage H1 exists but lacks location keywords. Service/location pages may have H1s in JSX but can't be confirmed without rendering. |
| Structured data (Schema.org) | ❌ **FAIL** | No JSON-LD schema found. Missing: LocalBusiness, Service, AggregateRating, BreadcrumbList. |
| XML Sitemap | ❌ **FAIL** | No /sitemap.xml. There's a /sitemap UI page but that's not the same thing. |
| Robots.txt | ❌ **FAIL** | No robots.txt found (typical for Figma-hosted sites). |
| Mobile-friendly design | ✅ Pass | The site uses responsive Tailwind CSS with `use-mobile.ts` hook and a dedicated `MobileBottomNav`. Design is mobile-first. |
| Page speed (JS bundle) | ⚠️ Warning | Heavy use of Framer Motion / animation library + React Router + Radix UI means the JS bundle may be large. No lazy loading confirmed on images using Unsplash external URLs. Run Lighthouse after deployment. |
| Image alt text | ⚠️ Warning | Some images have alt text; several use generic descriptions. No images are confirmed to be missing alt text entirely — but quality could be improved. |
| Internal linking | ✅ Pass | Strong internal linking throughout — all services, locations, and segments are cross-linked. |
| Canonical tags | ❌ **FAIL** | No canonical tags. Risk of duplicate content as SPA routes resolve. |
| Open Graph / Social tags | ❌ **FAIL** | No OG or Twitter Card meta tags. |
| Google Analytics / Tracking | ⚠️ Warning | No tracking code visible in `index.html`. Cannot confirm analytics are set up without checking runtime. |
| Core Web Vitals | ⚠️ Warning | Cannot assess on figma.site. After deploying on real hosting, run PageSpeed Insights and target LCP < 2.5s, CLS < 0.1. |
| Google Search Console | ❌ **FAIL** | Domain not indexed = no Search Console data. Set this up immediately after domain launch. |
| NAP consistency | ⚠️ Warning | Phone number (941-320-9868) appears in the code but physical address is not visible in the site (footer, contact page). Confirm NAP matches Google Business Profile exactly. |

---

## Competitor Comparison Summary

*Competitors identified: Sherlock Ohms Electric, Bolt Electric FL, BlueFin Power Solutions, All Day Electric Inc., D. Patterson Electric*

| Dimension | Majors Electrical | Sherlock Ohms Electric | Bolt Electric FL | BlueFin Power Solutions |
|---|---|---|---|---|
| Google indexation | ❌ None (figma.site) | ✅ Indexed | ✅ Indexed | ✅ Indexed |
| Dedicated service pages | ✅ 25 pages (not indexed) | ✅ ~10–15 pages | ✅ ~8–12 pages | ✅ Focused on panel/EV |
| Location pages | ✅ 6 pages (not indexed) | ✅ Multiple | ⚠️ Limited | ⚠️ Limited |
| Blog / resource content | ❌ None | ⚠️ Minimal | ✅ Has a blog post | ❌ None |
| On-page SEO (title/meta) | ❌ Missing | ✅ Present | ✅ Present | ✅ Present |
| Structured data | ❌ Missing | ✅ Likely present | ⚠️ Partial | ⚠️ Partial |
| Google Business Profile | Unknown | ✅ Active | ✅ Active | ✅ Active |
| Pricing transparency | ❌ None | ⚠️ Partial | ⚠️ Partial | ✅ Shows price ranges |
| Visual design quality | ✅ Best in class | ⚠️ Standard | ⚠️ Standard | ⚠️ Standard |
| Trust signals (reviews) | ✅ 5.0 / 17 reviews | ✅ Has reviews | ✅ Has reviews | ✅ Has reviews |
| Content depth | ⚠️ Moderate (no blog) | ⚠️ Moderate | ⚠️ Moderate | ⚠️ Moderate |

**Key takeaway:** Majors Electrical has the best-designed site in the competitive set, but all competitors are currently winning on SEO fundamentals. The good news: this is entirely fixable because their content, structure, and trust signals are all strong — the site just needs to be deployed correctly and have basic SEO tags added.

---

## Prioritised Action Plan

### Quick Wins (Do This Week)

| Action | Expected Impact | Effort | Notes |
|---|---|---|---|
| **1. Deploy the site to a real domain** (e.g., majorselectrical.com via Netlify or Vercel — both are free) | 🔴 Critical | 2–4 hours | Without this, nothing else matters. Buy the domain, connect it, deploy. |
| **2. Install react-helmet or react-helmet-async** and add a unique `<title>` and `<meta name="description">` to every page | 🔴 Critical | 3–5 hours | This is a code change. Format: `"[Service] in Sarasota, FL | Majors Electrical"` + 155-char description per page. |
| **3. Set up Google Search Console** on the new domain and submit the sitemap | 🔴 Critical | 30 minutes | Free tool. Submit URL to get Google to crawl it. |
| **4. Claim / optimise your Google Business Profile** | 🔴 Critical | 1–2 hours | Most local electrical leads come from Google Maps, not the website. Ensure hours, photos, services, and address are all correct. |
| **5. Add your physical address to the site footer and contact page** | High | 30 minutes | NAP (Name, Address, Phone) must match Google Business Profile exactly. |
| **6. Add JSON-LD LocalBusiness schema to the homepage** | High | 1–2 hours | Include business name, address, phone, hours, service area, and aggregateRating. This helps Google understand the business. |
| **7. Update the homepage H1** to include "Sarasota" and "Electrician" | High | 15 minutes | Change from `"Professional Electrical You Can Trust"` to e.g., `"Sarasota's Trusted Electricians for Homes & Businesses"` |
| **8. Generate an XML sitemap** using `vite-plugin-sitemap` and add `/robots.txt` | Medium | 1–2 hours | Helps Google discover and crawl all 40+ pages. |
| **9. Add Open Graph and Twitter Card meta tags** via react-helmet | Low | 1 hour | Ensures proper link previews when sharing on social media. |

---

### Strategic Investments (Plan for This Quarter)

| Action | Expected Impact | Effort | Dependencies |
|---|---|---|---|
| **Create a dedicated "Emergency Electrician Sarasota" page** | High | Half day | Domain must be live first |
| **Write 3–5 blog posts** targeting informational keywords (panel upgrade cost, EV charger guide, home rewire guide) | High | Multi-day | Needs content writer or AI assist + review |
| **Add pricing transparency to top service pages** (at least rough ranges) | High | 1 day | Business decision on whether to show prices |
| **Expand each location page** to 400–600 words of unique content, including neighbourhoods, local references, and FAQs | Medium | 1–2 days total | Location pages already exist — just need content |
| **Add AggregateRating schema** to show star ratings in Google results | Medium | 2–3 hours | Need to decide how to source/maintain review count dynamically |
| **Build a review generation system** — send follow-up requests to customers to grow from 17 to 50+ Google reviews | High | Ongoing | Use a tool like NiceJob, Birdeye, or simple email follow-up |
| **Add neighbourhood-level pages** for Siesta Key, Longboat Key, Palmer Ranch, Osprey, Parrish | Medium | Multi-day | Each page needs 300+ words of unique content |
| **Implement prerendering** (via `vite-plugin-prerender` or similar) to ensure Google can read all SPA pages | High | 1–2 days | Developer task; significantly improves indexation reliability |
| **Start a local link-building campaign** — Sarasota Chamber of Commerce, local builder associations, home improvement blogs | High | Ongoing | Most competitive electricians have 50–200 referring domains |

---

## Follow-Up Options

Would you like me to:
- **Draft optimised title tags and meta descriptions** for all your key pages?
- **Write the JSON-LD LocalBusiness schema** ready to paste into your `index.html`?
- **Create a content brief** for the Emergency Electrician page or a blog post?
- **Build a content calendar** for the next 90 days based on the gap analysis?
- **Write a step-by-step deployment guide** for getting the site live on Netlify with a custom domain?

---

*Sources referenced: [SEO for Electricians - Supple.com.au](https://supple.com.au/electrician-seo/), [Local SEO for Electricians - LocalMighty](https://www.localmighty.com/blog/local-seo-for-electricians/), [Sherlock Ohms Electric](https://www.sherlockohmselectric.com/), [Bolt Electric FL](https://www.boltelectricfl.com/ev-charging-station-installation), [BlueFin Power Solutions](https://bluefinpowersolutions.com/sarasota-panel-upgrade/), [All Day Electric](https://alldayelectricsrq.com/post/considering-an-ev-home-ev-charger-installation-in-sarasota-all-day-electric-inc.html), [D. Patterson Electric](https://sarasota-fl.dpattersonelectric.com/services/electric-installation-or-replacement)*
