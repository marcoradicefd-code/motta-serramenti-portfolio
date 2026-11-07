"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type SplitWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  italicWords?: string[];
};

export function SplitWords({
  text,
  className,
  delay = 0.1,
  staggerChildren = 0.06,
  italicWords = [],
}: SplitWordsProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });
  const words = text.split(/\s+/);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => {
        const isItalic = italicWords.includes(word.replace(/[.,!?]/g, ""));
        return (
          <span
            key={`${word}-${i}`}
            aria-hidden="true"
            className="inline-block overflow-hidden align-baseline"
          >
            <motion.span
              className={`inline-block ${isItalic ? "italic-display" : ""}`}
              initial={{ y: "110%", rotate: 3, opacity: 0 }}
              animate={
                inView
                  ? { y: 0, rotate: 0, opacity: 1 }
                  : { y: "110%", rotate: 3, opacity: 0 }
              }
              transition={{
                duration: 1.1,
                delay: delay + i * staggerChildren,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {i < words.length - 1 && " "}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
