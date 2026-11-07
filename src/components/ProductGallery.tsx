"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { useTilt } from "./useTilt";

export type GalleryImage = {
  src: string;
  alt: string;
};

type Tuple4 = [GalleryImage, GalleryImage, GalleryImage, GalleryImage];
type Tuple5 = [GalleryImage, GalleryImage, GalleryImage, GalleryImage, GalleryImage];

type Props = {
  images: Tuple4 | Tuple5;
};

const CELL_CLASSES_5 = [
  "product-gallery__tall",
  "product-gallery__cell product-gallery__cell--a",
  "product-gallery__cell product-gallery__cell--b",
  "product-gallery__cell product-gallery__cell--c",
  "product-gallery__cell product-gallery__cell--d",
];

const CELL_CLASSES_4 = [
  "product-gallery__cell product-gallery__cell--g1",
  "product-gallery__cell product-gallery__cell--g2",
  "product-gallery__cell product-gallery__cell--g3",
  "product-gallery__cell product-gallery__cell--g4",
];

export function ProductGallery({ images }: Props) {
  useTilt(".product-gallery__media");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const total = images.length;

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i + 1) % total)),
    [total]
  );
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i - 1 + total) % total)),
    [total]
  );

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIdx, close, next, prev]);

  const isAsymmetric = total === 5;
  const cellClasses = isAsymmetric ? CELL_CLASSES_5 : CELL_CLASSES_4;
  const galleryClass = `product-gallery${isAsymmetric ? "" : " product-gallery--grid"}`;

  return (
    <>
      <div className={galleryClass}>
        {images.map((img, i) => {
          const isTall = isAsymmetric && i === 0;
          const wrapperClass = cellClasses[i];
          return (
            <Reveal key={img.src} className={wrapperClass} delay={0.05 + i * 0.05}>
              <button
                type="button"
                onClick={() => setOpenIdx(i)}
                className={`product-gallery__media${isTall ? " product-gallery__media--tall" : ""}`}
                aria-label={`Apri ${img.alt} a tutto schermo`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={
                    isTall
                      ? "(max-width: 900px) 95vw, 35vw"
                      : "(max-width: 900px) 45vw, 45vw"
                  }
                  className="object-cover"
                />
                <span className="product-gallery__zoom" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                    <path
                      d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>

      {openIdx !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Galleria immagini prodotto"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="lightbox__close"
            aria-label="Chiudi"
          >
            <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
              <path
                d="M5 5l14 14M19 5L5 19"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Immagine precedente"
          >
            <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="lightbox__nav lightbox__nav--next"
            aria-label="Immagine successiva"
          >
            <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className="lightbox__frame"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIdx].src}
              alt={images[openIdx].alt}
              fill
              sizes="100vw"
              className="lightbox__image"
              priority
            />
          </div>

          <p className="lightbox__caption">
            {images[openIdx].alt}
            <span className="lightbox__counter">
              {openIdx + 1} / {total}
            </span>
          </p>
        </div>
      )}
    </>
  );
}
