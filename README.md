# 9T9 Information Technology — Demo Site

A premium, high-performance marketing site for **9T9 Information Technology**, an ERP and cyber security company based in Bahrain. Built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Live Demo

- **Production**: https://9t9it.vercel.app
- **Custom domain**: https://9t9it.b0f.ru

## About 9T9 IT

9T9 Information Technology delivers ERP software and cyber security solutions for businesses across Bahrain, the GCC, the USA, and Europe. The company specializes in:

- **ERPNext implementations** for retail, healthcare, manufacturing, education, real estate, and services.
- **Cyber security services** including vulnerability assessments, firewalls, SIEM/XDR, PCI DSS, and Aramco CCC compliance.
- **Specialized applications** such as offline POS, debt collection, helpdesk, cloud collaboration, and data insights.

## Tech Stack

- Next.js 16 with App Router
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll animations)
- Phosphor Icons (light weight)
- Geist Sans / Geist Mono + Playfair Display fonts
- Static export for fast, reliable hosting on Vercel

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Build & Deploy

```bash
npm run build
```

The project is configured for static export and deploys automatically from the `main` branch via Vercel.

## Project Structure

- `app/` — Next.js App Router pages
- `components/` — Shared UI components (Header, Footer, Hero, Section, ServicePage)
- `lib/site.ts` — Typed content module for all pages

## Notes

This repository is a **demo / showcase build**. Content is derived from publicly available pages on `9t9it.com` and redesigned with a premium, agency-grade aesthetic.
