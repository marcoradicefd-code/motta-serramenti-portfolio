"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Slide = {
  eyebrow: string;
  heading: string;
  italicWords?: string[];
  body: string;
  image: string;
};

type Props = {
  slides: Slide[];
};

export function HeroScrollCarousel({ slides }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [paginationVisible, setPaginationVisible] = useState(false);

  useGSAP(
    () => {
      const slideEls = gsap.utils.toArray<HTMLElement>(".hsc-slide");

      slideEls.forEach((slide, i) => {
        const media = slide.querySelector(".hsc-media-inner");
        const content = slide.querySelector(".hsc-content");
        if (!media || !content) return;

        // Un solo timeline per slide (media + content insieme) → 1 ScrollTrigger
        // invece di 2 → meno overhead di update + transizioni perfettamente
        // sincronizzate tra immagine e testo. scrub 0.5 = catch-up più rapido
        // dopo lo stop dello scroll → niente "settling" visivo (lo scatto).
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });
        tl.fromTo(media, { yPercent: 5 }, { yPercent: -5, ease: "none" }, 0);
        tl.fromTo(content, { yPercent: 4 }, { yPercent: -4, ease: "none" }, 0);

        ScrollTrigger.create({
          trigger: slide,
          start: "top 55%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) setActiveIdx(i);
          },
        });
      });
    },
    { scope: root }
  );

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => setPaginationVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const splitItalic = (text: string, italics: string[] = []) =>
    text.split(/\s+/).map((word, i, arr) => {
      const clean = word.replace(/[.,!?]/g, "");
      const isIt = italics.includes(clean);
      return (
        <span
          key={`${word}-${i}`}
          className={isIt ? "italic-display" : undefined}
        >
          {word}
          {i < arr.length - 1 ? " " : ""}
        </span>
      );
    });

  function gotoSlide(i: number) {
    const node = root.current?.querySelectorAll<HTMLElement>(".hsc-slide")[i];
    if (!node) return;
    node.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div ref={root} className="hsc-root">
      {slides.map((s, i) => (
        <section key={i} className="hsc-slide">
          <div className="hsc-media">
            <div className="hsc-media-inner">
              <Image
                src={s.image}
                alt=""
                aria-hidden
                fill
                sizes="100vw"
                className="hsc-image"
                priority={i === 0}
              />
            </div>
            <div className="hsc-overlay" />
          </div>

          <div className="hsc-content-wrap">
            <div className="hsc-content">
              {s.eyebrow && <p className="hsc-eyebrow">{s.eyebrow}</p>}
              <h2 className="hsc-heading h-display">
                {splitItalic(s.heading, s.italicWords)}
              </h2>
              <p className="hsc-body">{s.body}</p>
            </div>
          </div>
        </section>
      ))}

      <div
        className={`hsc-sticky-box${paginationVisible ? " is-visible" : ""}`}
        aria-hidden={!paginationVisible}
      >
        <div className="hsc-pagination" aria-label="Navigazione capitoli">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => gotoSlide(i)}
              className={`hsc-dot${i === activeIdx ? " is-active" : ""}`}
              aria-label={`Capitolo ${i + 1}`}
              aria-current={i === activeIdx ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
