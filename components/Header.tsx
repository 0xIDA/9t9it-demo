"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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

export function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface-1/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-ink">
          <span className="font-sans text-lg font-bold tracking-tight">9T9 IT</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdown(item.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors">
                  {item.label}
                </button>
                {dropdown === item.label && (
                  <div className="absolute left-0 top-full min-w-[220px] rounded-md border border-border bg-surface-2 shadow-elevated py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-ink-muted hover:bg-surface-3 hover:text-ink transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href="https://api.whatsapp.com/send?phone=97339943646"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-on-primary hover:bg-primary-hover transition-colors"
        >
          WhatsApp Us
        </Link>

        <button
          className="md:hidden p-2 text-ink-muted hover:text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden bg-surface-1">
          <nav className="flex flex-col px-4 py-3">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-border-subtle last:border-0">
                <Link
                  href={item.href === "#" ? "/" : item.href}
                  className="block py-2 text-sm font-medium text-ink hover:text-interactive"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-3 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-ink-muted hover:text-ink"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
