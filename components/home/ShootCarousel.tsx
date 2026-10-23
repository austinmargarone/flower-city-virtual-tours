"use client";

import Link from "next/link";
import { useState } from "react";
import type { ListingPhoto } from "@/constants/listings";

type Props = { href: string; title: string; photos: ListingPhoto[] };

/** One photo at a time with prev/next arrows. Clicking the photo opens the listing. */
const ShootCarousel = ({ href, title, photos }: Props) => {
  const [i, setI] = useState(0);
  const n = photos.length;
  const step = (d: number) => setI((x) => (x + d + n) % n);

  return (
    <div className="group relative">
      <Link href={href} aria-label={`View ${title}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos[i].thumb}
          alt={`${title}, photo ${i + 1} of ${n}`}
          loading={i === 0 ? "lazy" : "eager"}
          className="aspect-[3/2] w-full object-cover"
        />
      </Link>
      {n > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => step(-1)}
            className="absolute left-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-midnight/70 text-2xl text-white shadow-lg transition hover:bg-tan focus-visible:bg-tan"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => step(1)}
            className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-midnight/70 text-2xl text-white shadow-lg transition hover:bg-tan focus-visible:bg-tan"
          >
            ›
          </button>
          <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-midnight/70 px-2.5 py-0.5 text-xs font-bold text-white">
            {i + 1} / {n}
          </span>
          {/* preload the next photo so the arrow feels instant */}
          <link rel="prefetch" as="image" href={photos[(i + 1) % n].thumb} />
        </>
      )}
    </div>
  );
};

export default ShootCarousel;
