import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { VideoHero } from "@/components/VideoHero";
import { NexaPillarsCarousel } from "@/components/NexaPillarsCarousel";
import { BrandStoryVideo } from "@/components/BrandStoryVideo";
import { AudienceCards } from "@/components/AudienceCards";
import { ProductGallery } from "@/components/ProductGallery";
import { nexa, invisia } from "@/data/products";

export const metadata: Metadata = {
  title: "Nexa",
  description: nexa.description,
};

export default function NexaPage() {
  return (
    <>
      {/* VIDEO HERO */}
      <VideoHero src="/videos/nexa-hero.mp4" align="bottom-left" overlay="edge">
        <div className="max-w-5xl">
          <h1 className="vh-text h-display text-[clamp(5rem,18vw,16rem)] leading-[0.85] text-white">
            Nexa
          </h1>
          <p className="vh-text h-display mt-4 text-[clamp(1.6rem,3.4vw,2.8rem)] leading-[1.05] text-white max-w-2xl">
            Minimal che semplifica.
          </p>
          <p className="vh-text mt-8 max-w-lg text-white text-base md:text-lg leading-relaxed">
            Design essenziale, soluzioni intelligenti. Premium residenziale.
          </p>
          <div className="vh-text mt-10">
            <MagneticButton href="/download" variant="glass">
              Catalogo Nexa
            </MagneticButton>
          </div>
        </div>
      </VideoHero>

      {/* PILLARS CAROUSEL */}
      <NexaPillarsCarousel
        title="Perché scegliere Nexa"
        slides={[
          {
            title: "Estetica Pulita",
            image: "/images/motta_8-6b4d100f0a19.jpg",
            alt: "Estetica pulita — finestra Nexa",
          },
          {
            title: "Eleganza + praticità",
            image: "/images/motta_9-420fdf9d0e29.jpg",
            alt: "Eleganza e praticità — Nexa",
          },
          {
            title: "Comfort quotidiano",
            image: "/images/motta_11-b2defaa3f181.jpg",
            alt: "Comfort quotidiano — Nexa",
          },
          {
            title: "Adatta a ogni progetto",
            image: "/images/motta_10-e5a7aedbec4d.jpg",
            alt: "Adatta a ogni progetto — Nexa",
          },
        ]}
      />

      {/* BRAND STORY VIDEO Nexa — clip con audio */}
      <section className="px-5 md:px-10 pb-24 md:pb-36">
        <div className="mx-auto max-w-(--container-2xl)">
          <Reveal>
            <h2 className="h-display text-[clamp(1.85rem,5.5vw,4.4rem)] leading-[1.05] max-w-3xl text-balance mb-10 md:mb-14">
              Minimal che semplifica.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <BrandStoryVideo
              desktopSrc="/videos/nexa-story-desktop.mp4"
              mobileSrc="/videos/nexa-story-mobile.mp4"
              poster="/videos/nexa-story-poster.jpg"
              posterWebp="/videos/nexa-story-poster.webp"
            />
          </Reveal>
        </div>
      </section>

      {/* CLIENTE IDEALE */}
      <section className="px-5 md:px-10 py-24 md:py-36 bg-paper-elevated border-y border-line/60">
        <div className="mx-auto max-w-(--container-2xl)">
          <div className="max-w-3xl mb-14 md:mb-20">
            <Reveal>
              <p className="h-display text-[clamp(1.6rem,3vw,2.8rem)] leading-[1.15]">
                «Voglio qualcosa di{" "}
                <span className="italic-display">bello e moderno,</span> ma
                senza complicazioni.»
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-ink/70 text-lg leading-relaxed max-w-xl">
                È il prodotto che ti permette di alzare l'asticella dell'offerta
                senza aumentare la complessità della proposta.
              </p>
            </Reveal>
          </div>

          <AudienceCards items={nexa.audience} />
        </div>
      </section>

      {/* IL PRODOTTO DA VICINO — gallery asimmetrica 1 tall + 2x2 */}
      <section className="px-5 md:px-10 py-24 md:py-36">
        <div className="mx-auto max-w-(--container-2xl)">
          <Reveal>
            <h2 className="h-display text-center text-[clamp(2rem,5.5vw,4.4rem)] leading-[1.05] text-balance mb-14 md:mb-20 text-ink">
              Il prodotto da vicino
            </h2>
          </Reveal>

          <ProductGallery
            images={[
              {
                src: "/images/motta_14-4cb8291df4b9.jpg",
                alt: "Serramento Nexa — installazione in cantiere",
              },
              {
                src: "/images/16x9__281_29-a67792365527.jpeg",
                alt: "Profilo Nexa — vista esterna",
              },
              {
                src: "/images/dettaglio_finitura__281_29-52e14f18cde3.jpeg",
                alt: "Dettaglio finitura",
              },
              {
                src: "/images/16x9_dettaglio_maniglia-73876f5f98c5.jpeg",
                alt: "Dettaglio maniglia",
              },
              {
                src: "/images/16x9_serramento-7cbaca44f3ba.jpeg",
                alt: "Serramento installato",
              },
            ]}
          />
        </div>
      </section>

      {/* CROSS-LINK INVISIA */}
      <CrossLink target={invisia} />
    </>
  );
}


export function CrossLink({ target }: { target: typeof nexa | typeof invisia }) {
  return (
    <section className="relative px-5 md:px-10 py-24 md:py-36 bg-paper-elevated border-t border-line/60">
      <div className="mx-auto max-w-(--container-2xl) grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <Reveal>
            <p className="eyebrow text-brass mb-5">Premium Collection</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display text-[clamp(2.6rem,7vw,6rem)] leading-none text-ink">
              {target.name}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="h-display mt-4 text-[clamp(1.4rem,2.4vw,2rem)] text-ink/80 font-medium">
              {target.headline}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-7 text-ink/80 text-lg max-w-md leading-relaxed font-medium">
              {target.description}
            </p>
          </Reveal>
          <Reveal delay={0.35} className="mt-10">
            <MagneticButton href={`/${target.slug}`} variant="primary">
              Scopri {target.name}
            </MagneticButton>
          </Reveal>
        </div>
        <Link
          href={`/${target.slug}`}
          className="md:col-span-7 order-1 md:order-2 block group"
        >
          <div className="relative overflow-hidden rounded-[22px] aspect-[4/5] md:aspect-[5/6]">
            <Image
              src={target.hero}
              alt={`${target.name} — ${target.tagline}`}
              fill
              sizes="(max-width: 768px) 95vw, 55vw"
              className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
          </div>
        </Link>
      </div>
    </section>
  );
}
