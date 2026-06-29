"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Buildings,
  Code,
  Globe,
  Lock,
  ChartLineUp,
} from "@phosphor-icons/react";
import { Hero } from "@/components/Hero";
import { pages, site } from "@/lib/site";

const categories = [
  {
    icon: Buildings,
    label: "ERP",
    items: [
      "pharmacy-erp",
      "supermarket-erp",
      "salon-spa-erp",
      "vet-erp",
      "optometry-erp",
      "jewelry-erp",
      "hospital-erp",
      "school-erp",
      "hr-payroll-erp",
      "property-rental-erp",
      "manufacturing-erp",
    ],
  },
  {
    icon: Lock,
    label: "Security",
    items: ["cyber-security", "firewall-routing", "siem-xdr", "pci-dss", "saudi-aramco-ccc"],
  },
  {
    icon: Code,
    label: "Specialized",
    items: [
      "crm-erp",
      "asset-management-erp",
      "offline-pos",
      "debt-collection",
      "cloud-collaboration",
      "helpdesk",
      "data-insights",
      "gps-tracking",
    ],
  },
  {
    icon: Globe,
    label: "Regions",
    items: [
      "erp-bahrain",
      "erp-saudi-arabia",
      "erp-uae",
      "erp-qatar",
      "erp-kuwait",
      "erp-usa",
      "erp-canada",
      "erp-uk",
      "erp-germany",
    ],
  },
];

const transition = {
  duration: 0.8,
  ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
};

function cardLabel(key: string) {
  const page = pages[key];
  return page.h1
    .split(" ")
    .slice(0, 4)
    .join(" ")
    .replace(/ERP\s+Software/gi, "ERP")
    .replace(/&/g, "&");
}

function cardDescription(key: string) {
  const page = pages[key];
  return page.description || page.title;
}

export function HomeContent() {
  return (
    <>
      <Hero
        title="Software & Cyber Security"
        highlight="Built for Modern Business"
        description={pages["/"].description}
        cta={{ label: "WhatsApp Us", href: site.whatsapp }}
        eyebrow="ERPNext & Open Source"
      />

      <section className="border-t border-border bg-canvas">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={transition}
            className="mb-16 md:mb-24"
          >
            <span className="mb-4 inline-flex items-center rounded-full border border-border bg-surface-2/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
              What we do
            </span>
            <h2 className="max-w-3xl font-serif text-4xl font-medium leading-tight text-ink md:text-5xl lg:text-6xl">
              One partner for ERP, security, and specialized operations software.
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            {categories.map((category, catIndex) => {
              const Icon = category.icon;
              const isLarge = catIndex === 0;
              return (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ ...transition, delay: catIndex * 0.08 }}
                  className={`${isLarge ? "md:col-span-8" : "md:col-span-4"} rounded-[2rem] border border-border bg-surface-2/30 p-2 shadow-soft backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-border-strong`}
                >
                  <div className="rounded-[calc(2rem-0.5rem)] bg-surface-2/40 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] md:p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-3/50 text-accent">
                        <Icon weight="light" className="h-5 w-5" />
                      </span>
                      <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted">
                        {category.label}
                      </h3>
                    </div>
                    <div className={`grid gap-3 ${isLarge ? "sm:grid-cols-2" : "grid-cols-1"}`}>
                      {category.items.map((key) => (
                        <Link
                          key={key}
                          href={`/${key}`}
                          className="group flex items-start justify-between gap-3 rounded-xl border border-transparent bg-surface-3/30 p-3 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-border hover:bg-surface-3/60"
                        >
                          <div className="min-w-0">
                            <h4 className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
                              {cardLabel(key)}
                            </h4>
                            <p className="mt-1 line-clamp-2 text-xs text-ink-muted">
                              {cardDescription(key)}
                            </p>
                          </div>
                          <ArrowUpRight
                            weight="light"
                            className="mt-0.5 h-4 w-4 shrink-0 text-ink-subdued transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-1">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={transition}
            >
              <span className="mb-4 inline-flex items-center rounded-full border border-border bg-surface-2/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                Why 9T9 IT
              </span>
              <h2 className="font-serif text-4xl font-medium leading-tight text-ink md:text-5xl">
                Technology, experience, and business knowledge in one delivery.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
                We combine ERPNext implementation, custom applications, and cyber security services
                to help businesses in Bahrain, the GCC, USA, and Europe run faster and safer.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Cyber Security",
                  body: "Vulnerability assessments, firewalls, SIEM/XDR, and compliance services.",
                },
                {
                  icon: ChartLineUp,
                  title: "ERP Growth",
                  body: "Operational control across retail, healthcare, manufacturing, and services.",
                },
                {
                  icon: Globe,
                  title: "Global Delivery",
                  body: "Projects delivered in Bahrain, KSA, UAE, Qatar, Kuwait, USA, UK, and Europe.",
                },
                {
                  icon: Code,
                  title: "Open Source",
                  body: "ERPNext, Frappe, OPNsense, Wazuh, and Nextcloud without licensing tax.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ ...transition, delay: i * 0.08 }}
                    className="rounded-2xl border border-border bg-surface-2/40 p-5"
                  >
                    <Icon weight="light" className="h-6 w-6 text-accent" />
                    <h3 className="mt-4 text-sm font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-muted">{item.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
