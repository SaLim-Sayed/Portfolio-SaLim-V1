"use client";

import { useMemo, useState } from "react";

/** Pinned Simple Icons release — slugs match https://simpleicons.org */
const SIMPLE_ICONS_CDN =
  "https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons";

function cdnIcon(slug: string) {
  return `${SIMPLE_ICONS_CDN}/${slug}.svg`;
}

export type TechIconProps = {
  /** Path under `/public`, e.g. `/tech/react.svg` */
  localSrc: string;
  /** Simple Icons slug (e.g. `react`, `nodedotjs`) */
  cdnSlug: string;
  /** Optional second slug if the first CDN asset 404s */
  cdnSlugFallback?: string;
  alt: string;
  className?: string;
};

/**
 * Tries the local `/public` asset first, then Simple Icons on jsDelivr, then an
 * optional alternate slug, then `javascript` as a last resort.
 */
export function TechIcon({
  localSrc,
  cdnSlug,
  cdnSlugFallback,
  alt,
  className = "object-contain max-h-[40px] max-w-[40px]",
}: TechIconProps) {
  const chain = useMemo(() => {
    const urls: string[] = [localSrc, cdnIcon(cdnSlug)];
    if (cdnSlugFallback) urls.push(cdnIcon(cdnSlugFallback));
    const seen = new Set<string>();
    const unique = urls.filter((u) => {
      if (seen.has(u)) return false;
      seen.add(u);
      return true;
    });
    unique.push(cdnIcon("javascript"));
    return unique;
  }, [localSrc, cdnSlug, cdnSlugFallback]);

  const [index, setIndex] = useState(0);
  const src = chain[Math.min(index, chain.length - 1)];

  return (
    // Native <img> so `onError` can swap to CDN fallbacks; Next/Image cannot chain URLs this way.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={40}
      height={40}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() =>
        setIndex((i) => Math.min(i + 1, chain.length - 1))
      }
    />
  );
}
