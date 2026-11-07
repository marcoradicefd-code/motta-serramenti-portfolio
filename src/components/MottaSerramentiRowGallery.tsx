"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export type GalleryItem = {
  src: string;
  serie: "Nexa" | "Invisia";
  place: string;
  caption: string;
  description: string;
  href: string;
};

type Props = {
  items: GalleryItem[];
};

export function MottaSerramentiRowGallery({ items }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <div ref={root} className="motta-serramenti-row" data-in={inView ? "true" : "false"}>
      {items.map((item, i) => (
        <motion.div
          key={`${item.serie}-${item.place}-${i}`}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.9,
            delay: 0.12 + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="motta-serramenti-tile-wrap"
        >
          <Link href={item.href} className="motta-serramenti-tile group">
            <div className="motta-serramenti-tile__media">
              <Image
                src={item.src}
                alt={`${item.serie} — ${item.place}`}
                fill
                sizes="(max-width: 768px) 95vw, 25vw"
                className="motta-serramenti-tile__img"
              />
              <div className="motta-serramenti-tile__gradient-top" />
              <div className="motta-serramenti-tile__gradient-bottom" />
            </div>

            <div className="motta-serramenti-tile__signature">{item.serie}</div>

            <div className="motta-serramenti-tile__content">
              <div className="motta-serramenti-tile__tags">
                <span className="motta-serramenti-tile__tag">{item.serie}</span>
                <span className="motta-serramenti-tile__place">{item.place}</span>
              </div>
              <p className="motta-serramenti-tile__caption">{item.caption}</p>
              <p className="motta-serramenti-tile__desc">{item.description}</p>
              <span className="motta-serramenti-tile__cta">
                <span>Scopri {item.serie}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
