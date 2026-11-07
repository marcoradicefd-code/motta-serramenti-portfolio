import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost" | "glass";
  className?: string;
};

export function MagneticButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const variants: Record<NonNullable<Props["variant"]>, string> = {
    primary: "solid-btn",
    ghost: "glass-btn",
    glass: "glass-btn",
  };

  const inner = (
    <span
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
    >
      <span className="transition-transform duration-500 group-hover:translate-x-[-0.15rem]">
        {children}
      </span>
      <svg
        className="size-3.5 transition-transform duration-500 group-hover:translate-x-1"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {inner}
      </Link>
    );
  }
  return inner;
}
