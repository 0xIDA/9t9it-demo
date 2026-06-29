"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  List as IconList,
  X as IconX,
  ArrowUpRight,
  CaretDown,
} from "@phosphor-icons/react";

const nav = [
  {
    label: "ERP Solutions",
    href: "#",
    children: [
      { label: "Pharmacy ERP", href: "/pharmacy-erp" },
      { label: "Supermarket ERP", href: "/supermarket-erp" },
      { label: "Salon & Spa", href: "/salon-spa-erp" },
      { label: "Vet Clinic", href: "/vet-erp" },
      { label: "Optometry", href: "/optometry-erp" },
      { label: "Jewelry", href: "/jewelry-erp" },
      { label: "Hospitals & Clinics", href: "/hospital-erp" },
      { label: "Schools", href: "/school-erp" },
      { label: "HR & Payroll", href: "/hr-payroll-erp" },
      { label: "Property Rental", href: "/property-rental-erp" },
      { label: "Manufacturing", href: "/manufacturing-erp" },
    ],
  },
  {
    label: "Cyber Security",
    href: "/cyber-security",
    children: [
      { label: "Cyber Security", href: "/cyber-security" },
      { label: "Firewall & Routing", href: "/firewall-routing" },
      { label: "SIEM & XDR", href: "/siem-xdr" },
      { label: "PCI DSS", href: "/pci-dss" },
      { label: "Aramco CCC", href: "/saudi-aramco-ccc" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const transition = {
  duration: 0.7,
  ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
};

export function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
        <nav className="flex items-center gap-1 rounded-full border border-border bg-surface-1/70 px-2 py-2 backdrop-blur-2xl shadow-soft">
          <Link
            href="/"
            className="flex items-center gap-2 pl-4 pr-3 text-ink transition-colors hover:text-accent"
          >
            <span className="font-serif text-lg font-semibold tracking-tight">9T9</span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-ink-muted sm:inline">
              IT
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(item.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button className="group flex items-center gap-1 rounded-full px-3 py-2 text-xs font-medium tracking-wide text-ink-muted transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface-2 hover:text-ink">
                    {item.label}
                    <CaretDown
                      weight="light"
                      className="h-3 w-3 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:rotate-180"
                    />
                  </button>

                  <AnimatePresence>
                    {dropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.96 }}
                        transition={transition}
                        className="absolute left-0 top-full mt-3 min-w-[240px] overflow-hidden rounded-2xl border border-border bg-surface-1/95 p-1.5 backdrop-blur-2xl"
                      >
                        <div className="rounded-[calc(2rem-0.375rem)] bg-surface-2/50 p-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                          {item.children.map((child, i) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group/link flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-ink-muted transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface-3 hover:text-ink"
                              style={{ transitionDelay: `${i * 25}ms` }}
                            >
                              {child.label}
                              <ArrowUpRight
                                weight="light"
                                className="h-3.5 w-3.5 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                              />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-xs font-medium tracking-wide text-ink-muted transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface-2 hover:text-ink"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <Link
            href="https://api.whatsapp.com/send?phone=97339943646"
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-1 hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-on-accent transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent-hover hover:shadow-glow active:scale-[0.98] sm:inline-flex"
          >
            WhatsApp
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-on-accent/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
              <ArrowUpRight weight="light" className="h-3 w-3" />
            </span>
          </Link>

          <button
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-ink transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface-3 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={transition}
                >
                  <IconX weight="light" className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={transition}
                >
                  <IconList weight="light" className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={transition}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-canvas/95 backdrop-blur-3xl lg:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-24">
              {nav.map((item, i) => (
                <div key={item.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...transition, delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={item.href === "#" ? "/" : item.href}
                      className="block py-3 font-serif text-4xl font-medium text-ink transition-colors hover:text-accent"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                  {item.children && (
                    <div className="mb-4 mt-1 flex flex-wrap gap-2 pl-1">
                      {item.children.map((child, j) => (
                        <motion.div
                          key={child.href}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ ...transition, delay: 0.15 + i * 0.05 + j * 0.03 }}
                        >
                          <Link
                            href={child.href}
                            className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-ink-muted transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent hover:text-accent"
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="https://api.whatsapp.com/send?phone=97339943646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent-hover active:scale-[0.98]"
                  onClick={() => setOpen(false)}
                >
                  WhatsApp Us
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-on-accent/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight weight="light" className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
