"use client";

import Image from "next/image";

interface SectionProps {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  reversed?: boolean;
}

export function Section({ heading, body, image, imageAlt, reversed }: SectionProps) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <div className={reversed ? "md:order-2" : ""}>
        <h2 className="text-xl font-semibold text-ink md:text-2xl">{heading}</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">{body}</p>
      </div>
      {image && (
        <div className={`overflow-hidden rounded-lg border border-border bg-surface-2 ${reversed ? "md:order-1" : ""}`}>
          <Image
            src={image}
            alt={imageAlt || heading}
            width={600}
            height={340}
            className="h-auto w-full object-cover"
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
