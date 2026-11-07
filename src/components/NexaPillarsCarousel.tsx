"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type CarouselSlide = {
  title: string;
  image: string;
  alt?: string;
};

type Props = {
  title: string;
  slides: CarouselSlide[];
};

const COPIES = 3;
const NAV_THROTTLE_MS = 1000;

export function NexaPillarsCarousel({ title, slides }: Props) {
  const total = slides.length;
  const middleStart = total;
  const [index, setIndex] = useState(middleStart);
  const [animate, setAnimate] = useState(true);
  const [isLocked, setIsLocked] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const lockTimerRef = useRef<number | null>(null);

  const looped = Array.from({ length: COPIES }, () => slides).flat();

  const go = useCallback(
    (delta: number) => {
      // Throttle: ignora gli input durante la finestra di blocco (2.5s).
      // Mostra un feedback visivo via disabled sui bottoni.
      if (isLocked) return;
      setIsLocked(true);
      setAnimate(true);
      setIndex((prev) => prev + delta);

      if (lockTimerRef.current !== null) {
        clearTimeout(lockTimerRef.current);
      }
      lockTimerRef.current = window.setTimeout(() => {
        setIsLocked(false);
        lockTimerRef.current = null;
      }, NAV_THROTTLE_MS);
    },
    [isLocked]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Cleanup del timer al unmount per evitare memory leak.
  useEffect(() => {
    return () => {
      if (lockTimerRef.current !== null) {
        clearTimeout(lockTimerRef.current);
      }
    };
  }, []);

  function onTransitionEnd() {
    if (index < middleStart) {
      setAnimate(false);
      setIndex(index + total);
    } else if (index >= middleStart + total) {
      setAnimate(false);
      setIndex(index - total);
    }
  }

  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  const activeNormalized = ((index % total) + total) % total;

  return (
    <section className="py-24 md:py-36 bg-paper">
      <div className="px-5 md:px-10 mx-auto max-w-(--container-2xl)">
        <h2 className="h-display text-center text-[clamp(2rem,5.5vw,4.4rem)] leading-[1.05] text-balance mb-14 md:mb-20 text-ink">
          {title}
        </h2>
      </div>

      <div className="npc-stage">
        <div
          ref={trackRef}
          className={`npc-track${animate ? " is-animated" : ""}`}
          style={
            {
              "--npc-index": index,
            } as React.CSSProperties
          }
          onTransitionEnd={onTransitionEnd}
          role="region"
          aria-label="Carosello pilastri Nexa"
        >
            {looped.map((s, i) => {
              const realIdx = i % total;
              return (
                <article
                  key={`${s.title}-${i}`}
                  className={`npc-slide${realIdx === activeNormalized ? " is-active" : ""}`}
                  aria-hidden={i !== index}
                >
                  <div className="npc-slide__media">
                    <Image
                      src={s.image}
                      alt={s.alt ?? s.title}
                      fill
                      sizes="(max-width: 768px) 80vw, 32vw"
                      className="npc-slide__img"
                      priority={i < total}
                    />
                    <span className="npc-slide__caption">{s.title}</span>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            disabled={isLocked}
            aria-disabled={isLocked}
            className="npc-nav npc-nav--prev"
            aria-label="Slide precedente"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden>
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
            onClick={() => go(1)}
            disabled={isLocked}
            aria-disabled={isLocked}
            className="npc-nav npc-nav--next"
            aria-label="Slide successiva"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
      </div>
    </section>
  );
}
