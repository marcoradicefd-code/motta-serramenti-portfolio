"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { MagneticButton } from "@/components/MagneticButton";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-500"
      >
        <div
          aria-hidden
          className={`absolute left-0 right-0 top-0 -bottom-32 lg:-bottom-48 pointer-events-none transition-opacity duration-500 ${
            open ? "opacity-0" : "opacity-100"
          }`}
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 30%, rgba(0,0,0,0.62) 55%, rgba(0,0,0,0.32) 78%, rgba(0,0,0,0) 100%)",
          }}
        />

        <div className="relative mx-auto max-w-(--container-2xl) px-5 lg:px-10 grid grid-cols-[1fr_auto_0.25fr_auto] items-center gap-4 lg:gap-10 h-16 lg:h-20">
          <div className="hidden lg:flex items-center gap-9 col-start-1 row-start-1 justify-self-start">
            <nav className="flex items-center gap-9" aria-label="Principale">
              {site.nav.slice(1).filter((item) => item.href !== "/download").map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link relative text-[0.78rem] tracking-[0.22em] uppercase font-medium text-white${active ? " nav-link--active" : ""}`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-2 left-0 right-0 h-px bg-white"
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 28,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <Link
            href="/"
            className="flex items-center text-white col-start-1 lg:col-start-2 row-start-1 justify-self-start"
            aria-label={`${site.brand} — Home`}
          >
            <Image
              src={site.logo}
              alt={site.brand}
              width={300}
              height={44}
              priority
              className="h-9 lg:h-11 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-9 col-start-4 row-start-1 justify-self-end">
            <Link
              href="/download"
              className={`nav-link relative text-[0.78rem] tracking-[0.22em] uppercase font-medium text-white${pathname.startsWith("/download") ? " nav-link--active" : ""}`}
            >
              Download
              {pathname.startsWith("/download") && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-2 left-0 right-0 h-px bg-white"
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 28,
                  }}
                />
              )}
            </Link>
            <Link
              href="/"
              className={`nav-link relative text-[0.78rem] tracking-[0.22em] uppercase font-medium text-white${pathname === "/" ? " nav-link--active" : ""}`}
            >
              Home
              {pathname === "/" && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-2 left-0 right-0 h-px bg-white"
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 28,
                  }}
                />
              )}
            </Link>
            <MagneticButton href="/#scrivici" variant="glass">
              Contattaci
            </MagneticButton>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden inline-flex items-center justify-center -mr-2 text-white col-start-4 row-start-1 justify-self-end"
          >
            <svg
              className={`motta-ham ${open ? "active" : ""}`}
              viewBox="0 0 100 100"
              aria-hidden
            >
              <path
                className="motta-ham__top"
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
              />
              <path className="motta-ham__mid" d="m 30,50 h 40" />
              <path
                className="motta-ham__bot"
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
              />
            </svg>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ink text-white pt-20"
          >
            <nav className="px-5 py-10 flex flex-col gap-1" aria-label="Mobile">
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.08 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    className="h-display block py-4 text-5xl leading-none border-b border-white/15 text-white"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.42,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-10"
              >
                <MagneticButton
                  href="/#scrivici"
                  variant="glass"
                  onClick={() => setOpen(false)}
                >
                  Contattaci
                </MagneticButton>
              </motion.div>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-12"
              >
                <p className="text-sm text-white/75 leading-relaxed">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



