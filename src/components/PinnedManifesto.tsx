"use client";

import { useRef } from "react";
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
  className?: string;
};

export function PinnedManifesto({ slides, className = "" }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".pm-slide");
      const images = gsap.utils.toArray<HTMLElement>(".pm-image");
      const indicators = gsap.utils.toArray<HTMLElement>(".pm-indicator");
      if (!items.length) return;

      gsap.set(items.slice(1), { autoAlpha: 0, y: 40 });
      gsap.set(images.slice(1), { autoAlpha: 0, scale: 1.08 });
      gsap.set(indicators[0], { backgroundColor: "var(--color-ink)" });

      const totalScroll = (items.length - 1) * 100; // viewport heights per slide

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: `+=${totalScroll}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      items.forEach((_, i) => {
        if (i === 0) return;
        const prev = items[i - 1];
        const curr = items[i];
        const prevImg = images[i - 1];
        const currImg = images[i];

        tl.to(
          prev,
          { autoAlpha: 0, y: -40, duration: 1, ease: "power3.in" },
          i - 1
        )
          .to(
            prevImg,
            { autoAlpha: 0, scale: 1.08, duration: 1, ease: "power3.in" },
            "<"
          )
          .fromTo(
            curr,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" },
            ">-0.4"
          )
          .fromTo(
            currImg,
            { autoAlpha: 0, scale: 1.08 },
            { autoAlpha: 1, scale: 1, duration: 1, ease: "power3.out" },
            "<"
          );
      });

      // Indicators
      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: `+=${totalScroll}%`,
        onUpdate: (self) => {
          const idx = Math.min(
            Math.floor(self.progress * items.length * 0.999),
            items.length - 1
          );
          indicators.forEach((el, i) => {
            gsap.to(el, {
              backgroundColor:
                i === idx ? "var(--color-ink)" : "rgba(11,11,12,0.15)",
              width: i === idx ? "2.5rem" : "1.5rem",
              duration: 0.4,
              ease: "power3.out",
            });
          });
        },
      });
    },
    { scope: root }
  );

  const splitItalic = (text: string, italics: string[] = []) => {
    return text.split(/\s+/).map((word, i) => {
      const clean = word.replace(/[.,!?]/g, "");
      const isIt = italics.includes(clean);
      return (
        <span
          key={`${word}-${i}`}
          className={isIt ? "italic-display" : undefined}
        >
          {word}
          {i < text.split(/\s+/).length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return (
    <section
      ref={root}
      className={`relative h-dvh overflow-hidden bg-charcoal text-white ${className}`}
    >
      {/* Image stack */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div key={`img-${i}`} className="pm-image absolute inset-0">
            <Image
              src={s.image}
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/30" />
          </div>
        ))}
      </div>

      {/* Text stack */}
      <div className="relative h-full grid place-items-center px-5 md:px-10">
        <div className="mx-auto max-w-(--container-2xl) w-full">
          <div className="relative max-w-3xl">
            {slides.map((s, i) => (
              <div
                key={`slide-${i}`}
                className={`pm-slide ${
                  i === 0 ? "relative" : "absolute inset-0"
                }`}
              >
                <h2 className="h-display text-[clamp(2.4rem,7vw,6rem)] leading-[1.02] text-white">
                  {splitItalic(s.heading, s.italicWords)}
                </h2>
                <p className="mt-8 text-white text-lg md:text-xl leading-relaxed max-w-xl">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className="pm-indicator h-px w-6 bg-paper/20 rounded-full"
            style={{ width: i === 0 ? "2.5rem" : "1.5rem" }}
          />
        ))}
      </div>
    </section>
  );
}
