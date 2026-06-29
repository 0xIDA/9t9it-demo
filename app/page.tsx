import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/Hero";
import { pages, site } from "@/lib/site";

export const metadata = {
  title: pages["/"].title,
  description: pages["/"].description,
};

const serviceKeys = Object.keys(pages).filter((key) => key !== "/");

export default function HomePage() {
  return (
    <PageShell>
      <Hero
        title="Software & Cyber Security Company"
        highlight="With Right Technology, Great Experience & Business Knowledge"
        description={pages["/"].description}
        cta={{ label: "WhatsApp Us", href: site.whatsapp }}
      />
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="text-xl font-semibold text-ink md:text-2xl">
            Our Solutions
          </h2>
          <p className="mt-2 text-sm text-ink-muted md:text-base">
            Explore our ERP software and cyber security services.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceKeys.map((key) => {
              const page = pages[key];
              return (
                <Link
                  key={key}
                  href={`/${key}`}
                  className="group rounded-lg border border-border bg-surface-1 p-5 transition-colors hover:border-interactive hover:bg-surface-2"
                >
                  <h3 className="font-semibold text-ink group-hover:text-interactive transition-colors">
                    {page.h1.split(" ").slice(0, 6).join(" ")}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-muted">
                    {page.description || page.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
