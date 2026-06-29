import Link from "next/link";

interface HeroProps {
  title: string;
  highlight?: string;
  description?: string;
  cta?: { label: string; href: string };
}

export function Hero({ title, highlight, description, cta }: HeroProps) {
  return (
    <section className="border-b border-border bg-surface-1">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <h1 className="max-w-4xl font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl lg:text-5xl">
          {title}{" "}
          {highlight && (
            <span className="text-interactive">{highlight}</span>
          )}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {description}
          </p>
        )}
        {cta && (
          <Link
            href={cta.href}
            target={cta.href.startsWith("http") ? "_blank" : undefined}
            rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="mt-8 inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-on-primary hover:bg-primary-hover transition-colors"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
