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
  const highlight = words.slice(4).join(" ");
  return { title, highlight };
}

export function ServicePage({ pageKey }: ServicePageProps) {
  const data: PageData | undefined = pages[pageKey];
  if (!data) {
    return (
      <PageShell>
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6">
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
      />
      {data.description && (
        <section className="bg-canvas">
          <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
            <p className="text-center text-base leading-relaxed text-ink-muted md:text-lg">
              {data.description}
            </p>
          </div>
        </section>
      )}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <div className="flex flex-col gap-12 md:gap-16">
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
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-semibold text-ink md:text-2xl">
                Get in touch with {site.company}
              </h2>
              <p className="mt-2 text-sm text-ink-muted md:text-base">
                Reach us directly for ERP consultation or support.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-on-primary hover:bg-primary-hover transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center rounded-md border border-border bg-surface-2 px-5 py-3 text-sm font-semibold text-ink hover:bg-surface-3 transition-colors"
              >
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="inline-flex items-center rounded-md border border-border bg-surface-2 px-5 py-3 text-sm font-semibold text-ink hover:bg-surface-3 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
