"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

interface HeroProps {
  title: string;
  highlight?: string;
  description?: string;
  cta?: { label: string; href: string };
  eyebrow?: string;
}

const transition = {
  duration: 0.9,
  ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
};

export function Hero({ title, highlight, description, cta, eyebrow }: HeroProps) {
  const target = cta?.href.startsWith("http") ? "_blank" : undefined;
  const rel = cta?.href.startsWith("http") ? "noopener noreferrer" : undefined;

  return (
    <section className="relative min-h-[100dvh] overflow-hidden border-b border-border">
      <div className="mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 md:px-6 md:pb-24 md:pt-40">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...transition, delay: 0.1 }}
          >
            {eyebrow && (
              <span className="mb-6 inline-flex items-center rounded-full border border-border bg-surface-2/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
                {eyebrow}
              </span>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...transition, delay: 0.2 }}
            className="font-serif text-5xl font-medium leading-[0.95] tracking-tight text-ink md:text-7xl lg:text-8xl"
          >
            {title}
            {highlight && (
              <span className="block text-ink-subdued">{highlight}</span>
            )}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ ...transition, delay: 0.35 }}
              className="mt-8 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg lg:text-xl"
            >
              {description}
            </motion.p>
          )}

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.5 }}
              className="mt-10"
            >
              <Link
                href={cta.href}
                target={target}
                rel={rel}
                className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent-hover hover:shadow-glow active:scale-[0.98]"
              >
                {cta.label}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-on-accent/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
                  <ArrowUpRight weight="light" className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[15%] h-[40vmax] w-[40vmax] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute right-[5%] bottom-[5%] h-[35vmax] w-[35vmax] rounded-full bg-accent/3 blur-[100px]" />
      </div>
    </section>
  );
}
