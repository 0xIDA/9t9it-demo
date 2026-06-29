import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
  { label: "Cyber Security", href: "/cyber-security" },
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
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" className="text-lg font-bold text-ink">
              9T9 Information Technology
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              ERP software and cyber security solutions for Bahrain, GCC, USA, and Europe. Built on open-source foundations, delivered with local expertise.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-muted hover:text-interactive transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <a
              href="tel:+97339943646"
              className="text-sm font-medium text-ink hover:text-interactive transition-colors"
            >
              +973 3994 3646
            </a>
            <a
              href="mailto:info@9t9it.com"
              className="text-sm font-medium text-ink hover:text-interactive transition-colors"
            >
              info@9t9it.com
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border-subtle pt-6 text-sm text-ink-subdued">
          © {new Date().getFullYear()} 9T9 Information Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
