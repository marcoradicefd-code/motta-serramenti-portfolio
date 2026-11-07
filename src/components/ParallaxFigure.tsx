"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

type Props = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  aspect?: string;
  amount?: number;
};

export function ParallaxFigure({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "100vw",
  aspect = "aspect-[4/3]",
  amount = 60,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.04, 1.08]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${aspect} ${className}`}
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imageClassName}`}
        />
      </motion.div>
    </div>
  );
}
