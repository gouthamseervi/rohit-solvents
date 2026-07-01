# Rohit Solvents — Marketing Website

## Original Problem
Create a powerful dynamic website for chemical business by name Rohit Solvents, covering industries: paints, inks, pharmaceuticals, printing and cleaning.

## User Choices
- Scope: **Static marketing site** (Home, About, Products, Industries, Contact)
- Contact: **WhatsApp/phone only** (no form storage, no backend)
- Design: "Surprise me — distinctive"
- Address: **Sukadkatte, Bangalore 560091**
- Other details: placeholders

## Personas
- **Purchase managers** of paint / ink / pharma / printing / cleaning manufacturers looking for reliable solvent supply
- **QA / technical leads** verifying CAS, purity, packaging & documentation before procurement
- **Small workshops** enquiring via WhatsApp for smaller pack sizes

## Architecture
- **Stack:** React 19 (SPA) + Tailwind + Framer / CSS animations. No backend used (site is static).
- **Routing:** React Router (`/`, `/products`, `/industries`, `/about`, `/contact`)
- **Data:** Static JS module `/app/frontend/src/data/site.js` (products, industries, stats, testimonials, certifications, company config)
- **Design system:** "Editorial Science" — Outfit + IBM Plex Sans + JetBrains Mono; off-white `#F9F9F8`, ink `#1A1A1A`, rust orange accent `#E85D04`

## Implemented (Dec 2025)
- Sticky glassmorphic navbar with mobile hamburger + Enquire CTA
- Hero with editorial typography, macro-liquid backdrop, 4 stat counters, marquee product strip
- Home: Why-us grid, Industries 5-card asymmetric bento, 6 featured products, certifications strip, testimonials, dark CTA block
- Products page: 16 realistic solvents, live search (name/CAS/application), 8 category filters, empty state, per-product WhatsApp enquire link with prefilled message
- Industries page: 5 alternating editorial rows with imagery, blurbs, recommended solvent chips, CTAs
- About page: story, facility image, stats, 4 principles cards, certifications
- Contact page: WhatsApp + phone hero cards, address/email/hours info cards, embedded Google Map
- Global: floating WhatsApp button, dark footer with brand block + links + contact details, SPA scroll-restoration
- All interactive elements carry `data-testid` for automation

## Backlog
### P1 (next)
- Optional inquiry form with backend + Resend email notification
- Product detail pages with downloadable MSDS / CoA PDFs
- SEO: sitemap.xml, structured data (Organization + Product), Open Graph images
### P2
- Multi-language (Kannada + Hindi)
- Blog / news for compliance updates
- Admin CMS to edit products & industries without redeploys
- Client logo carousel with real logos

## Next Tasks
- Replace placeholder phone/email with real business details
- Swap Unsplash/Pexels images for owned facility & product photography
- Add real MSDS / CoA PDFs for the product catalogue
