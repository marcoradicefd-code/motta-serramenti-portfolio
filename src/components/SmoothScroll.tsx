"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      autoRaf:false,
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    const raf = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Hash links → smooth scroll via Lenis (altrimenti il jump del browser
    // combatte con la coda di Lenis e lo scroll si ferma a metà).
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        'a[href*="#"]'
      );
      if (!a) return;
      const url = new URL(a.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.querySelector(url.hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
      const oldURL = window.location.href;
      history.pushState(null, "", url.hash);
      window.dispatchEvent(
        new HashChangeEvent("hashchange", {
          oldURL,
          newURL: window.location.href,
        })
      );
    };
    document.addEventListener("click", onClick);

    // Se la pagina viene aperta direttamente su /#scrivici, scrolla dopo mount.
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        requestAnimationFrame(() => {
          lenis.scrollTo(target as HTMLElement, { offset: -80, immediate: false });
        });
      }
    }

        // Ricalcola i bound di ScrollTrigger quando le immagini above-the-fold
    // hanno finito il fetch. Senza questo, se una <Image fill> arriva tardi,
    // start/end del trigger restano calcolati su altezze sbagliate.
    const onLoad = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") {
      ScrollTrigger.refresh();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }


    return () => {
      window.removeEventListener("load", onLoad);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  return <>{children}</>;

}
