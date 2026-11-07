"use client";

import { useEffect } from "react";

export function useTilt(selector = ".tilt") {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (prefersReduced || !isFinePointer) return;

    const elements = document.querySelectorAll<HTMLElement>(selector);
    const cleanups: (() => void)[] = [];

    elements.forEach((el) => {
      let raf = 0;
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (py - 0.5) * -6;
        const ry = (px - 0.5) * 6;
        const mx = px * 100;
        const my = py * 100;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
          el.style.setProperty("--tilt-mx", `${mx}%`);
          el.style.setProperty("--tilt-my", `${my}%`);
        });
      };
      const onLeave = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = "";
          el.style.removeProperty("--tilt-mx");
          el.style.removeProperty("--tilt-my");
        });
      };
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        cancelAnimationFrame(raf);
        el.style.transform = "";
      });
    });

    return () => cleanups.forEach((c) => c());
  }, [selector]);
}
