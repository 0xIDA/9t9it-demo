"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SectionProps {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  reversed?: boolean;
}

const transition = {
  duration: 0.8,
  ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
};

export function Section({ heading, body, image, imageAlt, reversed }: SectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
      className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
    >
      <div className={reversed ? "md:order-2" : ""}>
        <span className="mb-4 inline-flex items-center rounded-full border border-border bg-surface-2/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
          Solution
        </span>
        <h2 className="font-serif text-3xl font-medium leading-tight text-ink md:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="mt-5 text-sm leading-[1.8] text-ink-muted md:text-base lg:text-lg">
          {body}
        </p>
      </div>

      {image && (
        <div className={reversed ? "md:order-1" : ""}>
          <div className="rounded-[2rem] border border-border bg-surface-2/30 p-2 shadow-soft backdrop-blur-sm">
            <div className="overflow-hidden rounded-[calc(2rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <Image
                src={image}
                alt={imageAlt || heading}
                width={720}
                height={420}
                className="h-auto w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03]"
                unoptimized
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
