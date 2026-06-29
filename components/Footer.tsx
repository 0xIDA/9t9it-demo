"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

const footerLinks = [
  { label: "ERP Solutions", href: "/pharmacy-erp" },
  { label: "Cyber Security", href: "/cyber-security" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/9t9it/" },
  { label: "Twitter", href: "https://twitter.com/9t9it?lang=en" },
  { label: "Instagram", href: "https://www.instagram.com/9t9it/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/9t9it" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-1">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-baseline gap-2 text-ink">
              <span className="font-serif text-2xl font-semibold tracking-tight">9T9</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">Information Technology</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              Premium ERP software and cyber security solutions for Bahrain, GCC, USA, and Europe. Built on open-source foundations, delivered with local expertise.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=97339943646"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-surface-2/40 px-5 py-2.5 text-sm font-medium text-ink transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent hover:text-accent active:scale-[0.98]"
            >
              WhatsApp Us
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight weight="light" className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-ink-subdued">Explore</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-ink-muted transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-ink"
                  >
                    {link.label}
                    <ArrowUpRight weight="light" className="h-3 w-3 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-ink-subdued">Connect</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-border bg-surface-2/40 px-3 py-1.5 text-xs text-ink-muted transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <a
              href="tel:+97339943646"
              className="mt-6 block text-sm font-medium text-ink transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-accent"
            >
              +973 3994 3646
            </a>
            <a
              href="mailto:info@9t9it.com"
              className="mt-1 block text-sm font-medium text-ink transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-accent"
            >
              info@9t9it.com
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-xs text-ink-subdued md:mt-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} 9T9 Information Technology. All rights reserved.</p>
            <p className="text-ink-muted">Designed for clarity, built for scale.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
