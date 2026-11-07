"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  /**
   * Path base senza estensione. Es. "/videos/home-hero".
   * Il componente deriva: -mobile.mp4, -desktop.mp4, -desktop.webm,
   * -poster.webp. Accetta anche path legacy con .mp4 — lo strippa.
   */
  src: string;
  poster?: string;
  children: ReactNode;
  align?: "left" | "center" | "bottom-left" | "bottom-center";
  overlay?: "soft" | "strong" | "edge";
  scrim?: string;
  className?: string;
  aspect?: "fullscreen" | "tall";
};

type NetworkInformationExt = {
  saveData?: boolean;
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
};

export function VideoHero({
  src,
  poster,
  children,
  align = "bottom-left",
  overlay = "edge",
  className = "",
  aspect = "fullscreen",
}: Props) {
  const root = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Server render assume video shown. Si disabilita lato client solo se
  // saveData/reduced-motion/slow-net. Niente CLS perché il poster fullbleed
  // sostituisce il video allo stesso aspect ratio.
  const [renderVideo, setRenderVideo] = useState(true);

  // ── Derive paths ──────────────────────────────────────────────
  // WebM scartato perché VP9 a crf 32 non bate H.264 sul nostro source set.
  // Solo MP4 H.264, due risoluzioni (mobile 720p, desktop 1080p).
  const base = src.replace(/\.mp4$/, "").replace(/-(mobile|desktop)$/, "");
  const desktopMp4 = `${base}-desktop.mp4`;
  const mobileMp4 = `${base}-mobile.mp4`;
  const posterUrl = poster ?? `${base}-poster.webp`;

  // ── Save-data / reduced-motion gate ──────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const conn = (
      navigator as Navigator & { connection?: NetworkInformationExt }
    ).connection;
    const slowNet =
      conn?.effectiveType === "2g" || conn?.effectiveType === "slow-2g";
    const dataSaver = conn?.saveData === true;

    if (prefersReduced || dataSaver || slowNet) {
      setRenderVideo(false);
    }
  }, []);

  // ── IntersectionObserver: play in-view, pause out-of-view ────
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !renderVideo) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            void v.play().catch(() => {});
          } else {
            v.pause();
          }
        }
      },
      { threshold: 0.25 }
    );
    io.observe(v);

    return () => {
      io.disconnect();
      v.pause();
    };
  }, [renderVideo]);

  // ── GSAP scroll parallax + text entrance ─────────────────────
  useGSAP(
    () => {
      const wrap = root.current?.querySelector<HTMLElement>(".vh-wrap");
      if (!wrap) return;

      gsap.to(wrap, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // LCP h1: solo movimento, NIENTE opacity.
      const heading = root.current?.querySelector<HTMLElement>("h1.vh-text");
      if (heading) {
        gsap.from(heading, {
          y: 60,
          duration: 0.6,
          ease: "power3.out",
          delay: 0,
        });
      }

      // Altri .vh-text: stagger con opacity.
      const others = root.current?.querySelectorAll(".vh-text:not(h1)");
      if (others?.length) {
        gsap.fromTo(
          others,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.15,
          }
        );
      }
    },
    { scope: root }
  );

  const alignClasses = {
    left: "items-center justify-start text-left",
    center: "items-center justify-center text-center",
    "bottom-left": "items-end justify-start text-left",
    "bottom-center": "items-end justify-center text-center",
  }[align];

  const heightClass = aspect === "fullscreen" ? "min-h-dvh" : "min-h-[80dvh]";

  return (
    <section
      ref={root}
      className={`relative ${heightClass} w-full overflow-hidden bg-charcoal text-white ${className}`}
    >
      <div className="vh-wrap absolute inset-0">
        {renderVideo ? (
          <video
            ref={videoRef}
            poster={posterUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            {/* Desktop ≥ 769px: MP4 1080p ~6-10MB */}
            <source
              media="(min-width: 769px)"
              src={desktopMp4}
              type="video/mp4"
            />
            {/* Mobile (default fallback): MP4 720p ~2-10MB */}
            <source src={mobileMp4} type="video/mp4" />
          </video>
        ) : (
          // Save-data / reduced-motion / slow-net: solo poster statico.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={posterUrl}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
        )}
        {overlay === "soft" && (
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/15 to-ink/15" />
        )}
        {overlay === "strong" && (
          <div className="absolute inset-0 bg-ink/45" />
        )}
        {overlay === "edge" && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-ink/5" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-transparent" />
          </>
        )}
      </div>

      <div
        className={`relative h-full min-h-dvh flex ${alignClasses} px-5 md:px-10 pt-32 pb-12 md:pt-40 md:pb-20`}
      >
        <div className="mx-auto max-w-(--container-2xl) w-full">{children}</div>
      </div>
    </section>
  );
}
