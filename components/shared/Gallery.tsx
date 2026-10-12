"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type GalleryImage = { src: string; alt: string };

type Props = { images: GalleryImage[] };

/** Photo grid; click a photo to view it full size, with arrow-key navigation. */
const Gallery = ({ images }: Props) => {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  return (
    <>
      <ul className="grid grid-cols-1 gap-3 ss:grid-cols-2 md:grid-cols-3">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="block w-full overflow-hidden rounded-lg border border-tan/40 transition hover:border-tan"
              aria-label={`View larger: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={533}
                sizes="(max-width: 580px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="aspect-[3/2] w-full object-cover transition duration-300 hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[open].alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <Image
            src={images[open].src}
            alt={images[open].alt}
            width={1600}
            height={1067}
            sizes="100vw"
            className="max-h-[85vh] w-auto rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded bg-tan px-3 py-1 font-bold text-white"
          >
            Close
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded bg-midnight/80 px-3 py-2 text-2xl text-white"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded bg-midnight/80 px-3 py-2 text-2xl text-white"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Gallery;
