import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SplitWords } from "@/components/SplitWords";
import { MagneticButton } from "@/components/MagneticButton";
import { nexa, invisia } from "@/data/products";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Le collezioni premium Motta. Brochure, schede tecniche e abachi per Nexa e Invisia.",
};

const downloads = [
  {
    product: nexa,
    description:
      "Brochure commerciale, scheda tecnica del profilo C75 e abaco completo. Tutto quello che serve per proporla, capitolarla e installarla.",
    items: [
      { label: "Brochure commerciale", size: "12 MB · PDF" },
      { label: "Scheda tecnica C75", size: "4.2 MB · PDF" },
      { label: "Abaco completo Nexa", size: "8.1 MB · PDF" },
    ],
  },
  {
    product: invisia,
    description:
      "Brochure, scheda tecnica del profilo C82S e abaco per progettisti. Materiale pensato per architetti, interior designer e capitolati di pregio.",
    items: [
      { label: "Brochure Architectural", size: "16 MB · PDF" },
      { label: "Scheda tecnica C82S", size: "5.4 MB · PDF" },
      { label: "Abaco progettisti", size: "10 MB · PDF" },
    ],
  },
] as const;

export default function DownloadPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative px-5 md:px-10 pt-36 md:pt-44 pb-16 md:pb-24">
        <div className="mx-auto max-w-(--container-2xl)">
          <h1 className="h-display text-[clamp(3rem,10vw,9rem)] max-w-[18ch]">
            <SplitWords
              text="Le collezioni premium Motta."
              italicWords={["premium"]}
            />
          </h1>
          <Reveal delay={0.8} className="mt-10 max-w-2xl">
            <p className="text-ink/75 text-lg md:text-xl leading-relaxed">
              La documentazione completa delle linee Nexa e Invisia, scaricabile
              in pochi click. Brochure commerciali, schede tecniche, abachi
              dettagliati.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CARDS */}
      <section className="px-5 md:px-10 pb-24 md:pb-36">
        <div className="mx-auto max-w-(--container-2xl) grid md:grid-cols-2 gap-7 md:gap-10">
          {downloads.map((d, i) => (
            <Reveal key={d.product.slug} delay={i * 0.12}>
              <article className="dl-card group relative overflow-hidden bg-paper-elevated border border-line/70 rounded-[22px]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={d.product.hero}
                    alt={d.product.name}
                    fill
                    sizes="(max-width: 768px) 95vw, 45vw"
                    quality={85}
                    priority={i === 0}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 22%, rgba(0,0,0,0.50) 42%, rgba(0,0,0,0.20) 62%, transparent 80%)",
                    }}
                  />
                  <div className="dl-card__overlay absolute inset-x-0 bottom-0 p-7 md:p-10 text-white">
                    <p className="dl-card__eyebrow eyebrow text-white mb-3">
                      Premium Collection
                    </p>
                    <h2 className="dl-card__name h-display text-[clamp(2.6rem,7vw,5rem)] leading-none">
                      {d.product.name}
                    </h2>
                    <p className="dl-card__headline h-display mt-2 text-[clamp(1.05rem,1.8vw,1.45rem)] text-white font-medium">
                      {d.product.headline}
                    </p>
                  </div>
                </div>

                <div className="p-7 md:p-10">
                  <p className="text-ink/75 text-base md:text-lg leading-relaxed max-w-md">
                    {d.description}
                  </p>

                  <ul className="dl-list mt-8 divide-y divide-line/60 border-y border-line/60">
                    {d.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href="#"
                          className="dl-item group/item grid grid-cols-[1fr_auto_auto] items-center gap-4 py-4"
                        >
                          <span className="dl-item__label text-ink font-medium">
                            {item.label}
                          </span>
                          <span className="text-muted text-[0.68rem] tracking-[0.2em] uppercase font-medium">
                            {item.size}
                          </span>
                          <span className="dl-item__icon">
                            <DownloadIcon />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9 flex flex-wrap gap-3">
                    <MagneticButton
                      href={`/${d.product.slug}`}
                      variant="primary"
                    >
                      Scopri {d.product.name}
                    </MagneticButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NOTE */}
    </>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="size-[18px]"
    >
      <path
        d="M12 4v12m0 0 5-5m-5 5-5-5M5 20h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
