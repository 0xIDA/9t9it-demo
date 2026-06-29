# 9T9IT.com Redesign Agent Notes

## Project Goal
Rebuild the 9T9 Information Technology website as a Next.js 15 + TypeScript static marketing site using the CrowdStrike Falcon dark SOC design system. The first phase covers the top 18 marketing/service pages plus the country/geo landing pages.

## Design System (Falcon Dark)
- Canvas: `#0d1117`
- Surface-1: `#161b22` (header, cards, footer)
- Surface-2: `#21262d` (elevated panels, dropdowns)
- Surface-3: `#2d333b` (hover states)
- Border: `#30363d`
- Ink: `#e6edf3`
- Ink-muted: `#8b949e`
- Ink-subdued: `#6e7681`
- Primary/CTA: `#ee3124` (used only for primary actions, not decorative headings)
- Interactive: `#58a6ff` / hover `#79c0ff`
- Success: `#3fb950`
- Monospace: `#a5d6ff`
- Typography: Inter 13px body, 28px display headings
- Red is reserved for CTA buttons and critical accents to preserve signal fidelity.

## Scrape Inventory
Pages were scraped from https://9t9it.com/ on 2026-06-29. Reused copy is preserved from the original site. Images are hot-linked to the existing 9t9it.com CDN in Phase 1.

### Page Manifest (Phase 1)
1. Home `/`
2. About `/about`
3. Contact `/contact`
4. Terms `/terms`
5. Cyber Security `/cyber-security`
6. Firewall & Routing `/firewall-routing`
7. SIEM & XDR `/siem-xdr`
8. PCI DSS `/pci-dss`
9. Saudi Aramco CCC `/saudi-aramco-ccc`
10. Pharmacy ERP `/pharmacy-erp`
11. Supermarket ERP `/supermarket-erp`
12. Salon & Spa ERP `/salon-spa-erp`
13. Vet Clinic ERP `/vet-erp`
14. Optometry ERP `/optometry-erp`
15. Jewelry ERP `/jewelry-erp`
16. Hospital & Clinics ERP `/hospital-erp`
17. Schools & Colleges ERP `/school-erp`
18. HR & Payroll ERP `/hr-payroll-erp`
19. Property Rental ERP `/property-rental-erp`
20. Manufacturing ERP `/manufacturing-erp`
21. CRM ERP `/crm-erp`
22. Asset Management ERP `/asset-management-erp`
23. Offline POS `/offline-pos`
24. Debt Collection `/debt-collection`
25. Cloud Collaboration `/cloud-collaboration`
26. Helpdesk Ticketing `/helpdesk`
27. Data Insights `/data-insights`
28. GPS Tracking `/gps-tracking`
29. Bahrain ERP `/erp-bahrain`
30. Saudi Arabia ERP `/erp-saudi-arabia`
31. UAE ERP `/erp-uae`
32. Qatar ERP `/erp-qatar`
33. Kuwait ERP `/erp-kuwait`
34. USA ERP `/erp-usa`
35. Canada ERP `/erp-canada`
36. UK ERP `/erp-uk`
37. Germany ERP `/erp-germany`

### Global Data
- Phone: `+973 3994 3646` (`tel:+97339943646`)
- WhatsApp: `https://api.whatsapp.com/send?phone=97339943646`
- Email: `info@9t9it.com` (`mailto:info@9t9it.com`)
- Company: 9T9 Information Technology W.L.L.
- Tagline: Software & Cyber Security Company With Right Technology, Great Experience, Business Knowledge
- Stats: 101+ satisfied clients, 14+ years in business, 19+ business applications, 800k+ lines of code

### Content Patterns
Each service page has:
- H1: `{Service Name} Software {bold keywords}`
- Short hero paragraph
- WhatsApp CTA
- 4-8 feature sections with H2, body paragraph, and image
- Closing paragraph
- Contact bar with WhatsApp, phone, email

Images follow the convention `https://9t9it.com/images/{folder}/{filename}-342.webp` for thumbnails and `-708.webp` for larger in-page assets. Home uses a card grid of services instead of full feature sections.
