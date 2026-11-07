import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { VideoHero } from "@/components/VideoHero";
import { MagneticButton } from "@/components/MagneticButton";
import { AudienceCards } from "@/components/AudienceCards";
import { BrandStoryVideo } from "@/components/BrandStoryVideo";
import { ProductGallery } from "@/components/ProductGallery";
import { CrossLink } from "@/app/nexa/page";
import { invisia, nexa } from "@/data/products";

export const metadata: Metadata = {
  title: "Invisia",
  description: invisia.description,
};

export default function InvisiaPage() {
  return (
    <>
      {/* VIDEO HERO */}
          <VideoHero
            src="/videos/invisia-hero.mp4"
            align="bottom-left"
            overlay="edge"
          >

        <div className="max-w-5xl">
          <h1 className="vh-text h-display text-[clamp(4.5rem,16vw,14rem)] leading-[0.85] text-white">
            Invisia
          </h1>
          <p className="vh-text h-display mt-4 text-[clamp(1.6rem,3.4vw,2.8rem)] leading-[1.05] text-white max-w-2xl">
            Quando la finestra scompare.
          </p>
          <p className="vh-text mt-8 max-w-lg text-white text-base md:text-lg leading-relaxed">
            Anta a scomparsa. La luce diventa l&apos;unica protagonista.
          </p>
          <div className="vh-text mt-10">
            <MagneticButton href="/download" variant="glass">
              Catalogo Invisia
            </MagneticButton>
          </div>
        </div>
      </VideoHero>

      {/* L'ESPERIENZA — before / after */}
      <section className="px-5 md:px-10 py-24 md:py-36 bg-paper-elevated border-y border-line/60">
        <div className="mx-auto max-w-(--container-2xl)">
          <Reveal>
            <p className="eyebrow text-brass text-center mb-4">L&apos;esperienza</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display text-center text-[clamp(2rem,5.5vw,4.4rem)] leading-[1.1] text-balance mb-14 md:mb-20 text-ink">
              Quando la finestra{" "}
              <span className="italic-display">scompare.</span>
            </h2>
          </Reveal>

          <div className="ms-exp__grid grid lg:grid-cols-2 gap-7 lg:gap-10">
            <Reveal>
              <article className="ms-card ms-card--exp ms-card--before">
                <div className="ms-card__img">
                  <Image
                    src="/images/motta_17-26fa3bcf5f91.jpg"
                    alt="Serramento tradizionale — profilo visibile"
                    fill
                    sizes="(max-width: 1024px) 95vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="ms-card__overlay" />
                <div className="ms-card__frost" />
                <div className="ms-card__content">
                  <span className="ms-card__tag">Serramento tradizionale</span>
                  <div className="ms-card__name">Profilo visibile</div>
                  <div className="ms-card__tagline">Telaio e anta interrompono la vista.</div>
                  <p className="ms-card__desc">
                    Il serramento è un elemento tecnico presente.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="ms-card ms-card--exp ms-card--after">
                <div className="ms-card__img">
                  <Image
                    src="/images/motta_18-f81ce7a8d4fd.jpg"
                    alt="Con Invisia — solo luce"
                    fill
                    sizes="(max-width: 1024px) 95vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="ms-card__overlay" />
                <div className="ms-card__frost" />
                <div className="ms-card__content">
                  <span className="ms-card__tag ms-card__tag--accent">Con Invisia</span>
                  <div className="ms-card__name">
                    Solo{" "}
                    <span className="ms-gold-text" data-text="luce">
                      luce
                    </span>
                  </div>
                  <div className="ms-card__tagline">Il serramento scompare.</div>
                  <p className="ms-card__desc">
                    Resta il vetro, la luce, l&apos;architettura. Effetto immediato.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BRAND STORY VIDEO Invisia — clip con audio */}
      <section className="px-5 md:px-10 py-24 md:py-36">
        <div className="mx-auto max-w-(--container-2xl)">
          <Reveal>
            <h2 className="h-display text-[clamp(1.85rem,5.5vw,4.4rem)] leading-[1.05] max-w-3xl text-balance mb-10 md:mb-14">
              Quando la finestra scompare.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <BrandStoryVideo
              desktopSrc="/videos/invisia-story-desktop.mp4"
              mobileSrc="/videos/invisia-story-mobile.mp4"
              poster="/videos/invisia-story-poster.jpg"
              posterWebp="/videos/invisia-story-poster.webp"
            />
          </Reveal>
        </div>
      </section>

      {/* VANTAGGI — 3D audience cards */}
      <section className="px-5 md:px-10 py-24 md:py-36">
        <div className="mx-auto max-w-(--container-2xl)">
          <div className="max-w-3xl mb-14 md:mb-20">
            <Reveal>
              <p className="eyebrow text-brass mb-4">I vantaggi</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display text-[clamp(2rem,5vw,4.2rem)] leading-[1.05] text-balance">
                Il linguaggio del progetto.
              </h2>
            </Reveal>
          </div>

          <AudienceCards items={invisia.vantaggi} columns={4} />
        </div>
      </section>

      {/* IL PRODOTTO DA VICINO — gallery + lightbox 3D */}
      <section className="px-5 md:px-10 py-24 md:py-36 bg-paper-elevated border-y border-line/60">
        <div className="mx-auto max-w-(--container-2xl)">
          <Reveal>
            <h2 className="h-display text-center text-[clamp(2rem,5.5vw,4.4rem)] leading-[1.05] text-balance mb-14 md:mb-20 text-ink">
              Il prodotto da vicino
            </h2>
          </Reveal>

          <ProductGallery
            images={[
              {
                src: "/images/motta_21-1f1f129e9a93.jpg",
                alt: "Invisia — Realizzazione architettonica",
              },
              {
                src: "/images/motta_19-57ccd522090f.jpg",
                alt: "Invisia — Dettaglio luce",
              },
              {
                src: "/images/motta_20-6c3033c01b40.jpg",
                alt: "Invisia — Villa residenziale",
              },
              {
                src: "/images/16x9-invisia-d36ad906f9bb.jpg",
                alt: "Invisia — Vista architettonica",
              },
            ]}
          />
        </div>
      </section>

      {/* CROSS-LINK NEXA */}
      <CrossLink target={nexa} />
    </>
  );
}
