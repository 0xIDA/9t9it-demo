"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone, EnvelopeSimple } from "@phosphor-icons/react";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { site, pages, PageData } from "@/lib/site";

interface ServicePageProps {
  pageKey: string;
}

function deriveHeroTitle(h1: string): { title: string; highlight?: string } {
  const cleaned = h1.replace(/\s+/g, " ").trim();
  const words = cleaned.split(" ");
  if (words.length <= 4) {
    return { title: cleaned };
  }
  const title = words.slice(0, 4).join(" ");
  const highlight = words.slice(4, 8).join(" ");
  return { title, highlight };
}

export function ServicePage({ pageKey }: ServicePageProps) {
  const data: PageData | undefined = pages[pageKey];
  if (!data) {
    return (
      <PageShell>
        <div className="mx-auto max-w-7xl px-4 py-32 md:px-6">
          <p className="text-ink-muted">Page not found.</p>
        </div>
      </PageShell>
    );
  }

  const { title, highlight } = deriveHeroTitle(data.h1);

  return (
    <PageShell>
      <Hero
        title={title}
        highlight={highlight}
        description={data.description}
        cta={{ label: "WhatsApp Us", href: site.whatsapp }}
        eyebrow={pageKey === "cyber-security" ? "Security" : "Solutions"}
      />

      <section className="border-t border-border bg-canvas">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <div className="flex flex-col gap-24 md:gap-32">
            {data.sections.map((section, index) => (
              <Section
                key={section.heading + index}
                heading={section.heading}
                body={section.body}
                image={section.image}
                imageAlt={section.heading}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-1">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
            className="rounded-[2rem] border border-border bg-surface-2/30 p-2 backdrop-blur-sm"
          >
            <div className="rounded-[calc(2rem-0.5rem)] bg-surface-2/40 p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] md:p-12 lg:p-16">
              <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                <div className="max-w-2xl">
                  <span className="mb-4 inline-flex items-center rounded-full border border-border bg-surface-3/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                    Start a project
                  </span>
                  <h2 className="font-serif text-3xl font-medium text-ink md:text-4xl lg:text-5xl">
                    Get in touch with {site.company}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
                    Reach us directly for ERP consultation, cyber security assessment, or implementation support.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent-hover hover:shadow-glow active:scale-[0.98]"
                  >
                    WhatsApp
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-on-accent/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight weight="light" className="h-4 w-4" />
                    </span>
                  </a>
                  <a
                    href={site.phoneHref}
                    className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface-3/50 px-5 py-3 text-sm font-medium text-ink transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent hover:text-accent active:scale-[0.98]"
                  >
                    <Phone weight="light" className="h-4 w-4" />
                    {site.phone}
                  </a>
                  <a
                    href={site.emailHref}
                    className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface-3/50 px-5 py-3 text-sm font-medium text-ink transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent hover:text-accent active:scale-[0.98]"
                  >
                    <EnvelopeSimple weight="light" className="h-4 w-4" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
