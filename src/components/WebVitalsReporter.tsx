"use client";

import { useEffect } from "react";
import { onLCP, onINP, onCLS, onFCP, onTTFB } from "web-vitals";

type LCPEntry = {
  element?: Element | null;
  url?: string;
  loadTime?: number;
  renderTime?: number;
  size?: number;
};

type CLSEntry = {
  sources?: Array<{ node?: Element | null }>;
  hadRecentInput?: boolean;
  value?: number;
};

function describe(el?: Element | null): string {
  if (!el) return "(no element)";
  const tag = el.tagName.toLowerCase();
  const id = (el as HTMLElement).id ? `#${(el as HTMLElement).id}` : "";
  const cls =
    (el as HTMLElement).className && typeof (el as HTMLElement).className === "string"
      ? "." + (el as HTMLElement).className.trim().split(/\s+/).slice(0, 3).join(".")
      : "";
  const src = (el as HTMLImageElement | HTMLVideoElement).src
    ? ` src="${(el as HTMLImageElement | HTMLVideoElement).src.split("/").slice(-1)[0]}"`
    : "";
  return `<${tag}${id}${cls}${src}>`;
}

export function WebVitalsReporter() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const style = "color:#0ea5e9;font-weight:600";

    onLCP((metric) => {
      const last = metric.entries.at(-1) as unknown as LCPEntry | undefined;
      console.log(
        `%c[CWV] LCP %c${metric.value.toFixed(0)}ms`,
        style,
        `color:${metric.rating === "good" ? "#10b981" : metric.rating === "needs-improvement" ? "#f59e0b" : "#ef4444"}`,
        {
          element: describe(last?.element),
          url: last?.url,
          rating: metric.rating,
          rawElement: last?.element,
        }
      );
    });

    onINP((metric) => {
      console.log(
        `%c[CWV] INP %c${metric.value.toFixed(0)}ms`,
        style,
        `color:${metric.rating === "good" ? "#10b981" : metric.rating === "needs-improvement" ? "#f59e0b" : "#ef4444"}`,
        { rating: metric.rating }
      );
    });

    onCLS((metric) => {
      const sources = metric.entries.flatMap(
        (e) => ((e as unknown as CLSEntry).sources ?? []).map((s) => describe(s.node))
      );
      console.log(
        `%c[CWV] CLS %c${metric.value.toFixed(4)}`,
        style,
        `color:${metric.rating === "good" ? "#10b981" : metric.rating === "needs-improvement" ? "#f59e0b" : "#ef4444"}`,
        { sources, rating: metric.rating }
      );
    });

    onFCP((metric) => {
      console.log(`%c[CWV] FCP ${metric.value.toFixed(0)}ms`, style);
    });

    onTTFB((metric) => {
      console.log(`%c[CWV] TTFB ${metric.value.toFixed(0)}ms`, style);
    });
  }, []);

  return null;
}
