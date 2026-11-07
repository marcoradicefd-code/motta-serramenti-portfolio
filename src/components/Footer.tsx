import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-charcoal text-white">
      <section
        id="scrivici"
        className="relative border-b border-paper/10 px-5 md:px-10 py-24 md:py-36"
      >
        {/* Subtle radial glow per dare profondità al glass-card */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(160,123,75,0.10), transparent 60%)",
          }}
        />

        <div className="relative mx-auto max-w-(--container-2xl) grid min-[869px]:grid-cols-12 gap-10 min-[869px]:gap-16">
          {/* LEFT: Glass card con headline + form */}
          <Reveal className="min-[869px]:col-span-7">
            <div className="glass-card text-white">
              <Reveal>
                <p className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-brass mb-4">
                  Scrivici
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-display text-[clamp(2rem,5vw,4.4rem)] leading-[1.02] text-white text-balance">
                  Rivenditore o architetto?
                  <br className="hidden sm:block" /> Parlaci del tuo progetto.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-white/85 text-base md:text-lg leading-relaxed font-medium">
                  Compila il modulo. Ti risponde una persona, entro la
                  giornata lavorativa.
                </p>
              </Reveal>

              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          {/* RIGHT: map + address + product links */}
          <div className="min-[869px]:col-span-5 min-[869px]:pl-6 flex flex-col gap-10 min-[869px]:gap-12 justify-between">
            <Reveal delay={0.1}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+Antonio+Gramsci+7+Albiate+MB"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-map group block"
                aria-label="Apri la sede su Google Maps"
              >
                <iframe
                  title="Sede Motta Serramenti — Albiate"
                  src="https://www.google.com/maps?q=Via%20Antonio%20Gramsci%207%2C%2020847%20Albiate%20MB&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="glass-map__frame"
                />
                <span className="glass-map__pill">
                  Apri in Google Maps
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-3.5">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-white/55 mb-3">
                Sede produttiva
              </p>
              <p className="text-white text-lg leading-relaxed font-medium">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.country}
              </p>
              <p className="mt-6 text-white/70 text-sm leading-relaxed font-medium">
                Lun–Ven 8:30–18:00
                <br />
                Visite in stabilimento su appuntamento.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-white/55 mb-3">
                Premium Collection
              </p>
              <ul className="space-y-2 text-white text-lg font-medium">
                <li>
                  <Link href="/nexa" className="link-underline">
                    Nexa — Minimal funzionale
                  </Link>
                </li>
                <li>
                  <Link href="/invisia" className="link-underline">
                    Invisia — Lusso invisibile
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="link-underline">
                    Cataloghi e schede tecniche
                  </Link>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="px-5 md:px-10 py-10">
        <div className="mx-auto max-w-(--container-2xl) flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <p className="h-display text-[clamp(3rem,12vw,10rem)] leading-[0.85] text-white">
              Motta Serramenti
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-8 text-white/55 text-xs tracking-[0.18em] uppercase font-medium">
            <span>© {year} Motta Serramenti srl</span>
            <span>P.IVA 09730180966 — Made in Brianza</span>
          </div>
        </div>

        <div className="mx-auto max-w-(--container-2xl) mt-10 pt-8 border-t border-paper/10 flex flex-col gap-5">
          <nav
            aria-label="Note legali"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/70 text-xs tracking-[0.18em] uppercase font-medium"
          >
            <Link href="/termini" className="link-underline">
              Termini e Condizioni
            </Link>
            <span aria-hidden className="text-white/25">·</span>
            <Link href="/privacy" className="link-underline">
              Privacy Policy
            </Link>
            <span aria-hidden className="text-white/25">·</span>
            <Link href="/cookie-policy" className="link-underline">
              Cookie Policy
            </Link>
          </nav>
          <p className="text-white/45 text-[0.72rem] leading-relaxed max-w-3xl font-medium">
            Riserva di diritti TDM ai sensi dell&apos;art. 4 Direttiva UE 2019/790 e dell&apos;art. 53(1)(c)
            Reg. UE 2024/1689 (AI Act). Vietato l&apos;utilizzo dei contenuti del Sito per
            l&apos;addestramento di sistemi di intelligenza artificiale, modelli linguistici o modelli
            generativi.
          </p>
        </div>
      </div>
    </footer>
  );
}
