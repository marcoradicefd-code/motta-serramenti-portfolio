import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { VideoHero } from "@/components/VideoHero";
import { HeroScrollCarousel } from "@/components/HeroScrollCarousel";
import { MottaSerramentiRowGallery } from "@/components/MottaSerramentiRowGallery";
import { BrandStoryVideo } from "@/components/BrandStoryVideo";
import { nexa, invisia } from "@/data/products";

export default function HomePage() {
  return (
    <>
      {/* VIDEO HERO */}
      <VideoHero src="/videos/home-hero.mp4" align="bottom-left" overlay="edge">
        <div className="max-w-5xl">
          <h1 className="vh-text h-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] text-white">
            Serramenti in alluminio.
          </h1>
          <p className="vh-text mt-8 max-w-xl text-white text-lg md:text-xl leading-relaxed">
            Due linee, 
            <br />
            una collezione premium.
          </p>
          <div className="vh-text mt-10 flex flex-wrap gap-3">
            <MagneticButton href="/nexa" variant="glass">
              Nexa
            </MagneticButton>
            <MagneticButton href="/invisia" variant="glass">
              Invisia
            </MagneticButton>
          </div>
        </div>
      </VideoHero>

      {/* TWO PRODUCT CARDS */}
      <section id="serie" className="px-5 md:px-10 py-24 md:py-36 scroll-mt-20">
        <div className="mx-auto max-w-(--container-2xl)">
          <Reveal>
            <h2 className="h-display text-[clamp(1.85rem,5.5vw,5rem)] leading-[1.05] max-w-4xl text-balance">
              Due linee, 
              <br />
              una collezione premium.
            </h2>
          </Reveal>

          <div className="mt-20 md:mt-28 ms-products">
            <ProductFeature product={nexa} index={0} />
            <ProductFeature product={invisia} index={1} />
          </div>
        </div>
      </section>

      {/* BRAND STORY VIDEO — clip con audio */}
      <section className="px-5 md:px-10 pb-24 md:pb-36">
        <div className="mx-auto max-w-(--container-2xl)">
          <Reveal>
            <h2 className="h-display text-[clamp(1.85rem,5.5vw,4.4rem)] leading-[1.05] max-w-3xl text-balance mb-10 md:mb-14">
              Architettura della luce.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <BrandStoryVideo
              desktopSrc="/videos/brand-story-desktop.mp4"
              mobileSrc="/videos/brand-story-mobile.mp4"
              poster="/videos/brand-story-poster-v2.jpg"
              posterWebp="/videos/brand-story-poster-v2.webp"
            />
          </Reveal>
        </div>
      </section>

      {/* MOTTA SERRAMENTI-STYLE GALLERY — Quale serie per quale progetto */}
      <section className="bg-charcoal text-white px-5 md:px-10 py-24 md:py-36 overflow-hidden">
        <div className="mx-auto max-w-(--container-2xl)">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-end mb-14 md:mb-20">
            <div>
              <Reveal>
                <span className="text-[0.78rem] tracking-[0.22em] uppercase font-medium text-brass">
                  Quale serie per quale progetto
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-display mt-5 text-[clamp(2rem,5.5vw,5rem)] leading-[0.98] text-white text-balance">
                  Dalla casa di famiglia <br className="hidden md:block" />
                  all'attico d'autore.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl text-white font-medium max-w-md md:justify-self-end md:text-right leading-relaxed">
                Quattro scenari, due serie, una promessa. Ogni progetto trova
                la sua finestra — e il rivenditore non resta mai solo.
              </p>
            </Reveal>
          </div>

          <MottaSerramentiRowGallery
            items={[
              {
                src: "/images/motta_8-6b4d100f0a19.jpg",
                serie: "Nexa",
                place: "Residenziale",
                caption: "Famiglie e nuove costruzioni.",
                description:
                  "Premium versatile, gestione semplice. Il prodotto che alza l'asticella senza complicare la proposta.",
                href: "/nexa",
              },
              {
                src: "/images/motta_14-4cb8291df4b9.jpg",
                serie: "Nexa",
                place: "Ristrutturazioni",
                caption: "Cantieri e sostituzioni.",
                description:
                  "Profilo C75, ferramenta a scomparsa. Performance e estetica anche su esistente.",
                href: "/nexa",
              },
              {
                src: "/images/magnific__premium-architectural-interior-photography-of-a-co__14495-27595dfe35ab.webp",
                serie: "Invisia",
                place: "Ville & Attici",
                caption: "Lusso architettonico.",
                description:
                  "Anta a scomparsa per case di rappresentanza. Il serramento sparisce, l'architettura respira.",
                href: "/invisia",
              },
              {
                src: "/images/magnific__highend-architectural-interior-photography-of-a-co__14497-c0523ca936d1.webp",
                serie: "Invisia",
                place: "Capitolati di pregio",
                caption: "Studi e progettisti.",
                description:
                  "Linguaggio da architetti. Pulizia visiva totale che parla la lingua dei capitolati di pregio.",
                href: "/invisia",
              },
            ]}
          />
        </div>
      </section>

      {/* HERO SCROLL CAROUSEL — 3 capitoli con parallax stile Patek */}
      <HeroScrollCarousel
        slides={[
          {
            eyebrow: "",
            heading: "Produzione Interna.",
            italicWords: ["mano"],
            body: "Strutturati come un'industria, vicini come un artigiano. Dal 2010 lavoriamo l'alluminio in Brianza con la stessa attenzione di quando abbiamo iniziato.",
            image: "/images/Motta_13-58e95309ba98.jpeg",
          },
          {
            eyebrow: "",
            heading: "Disegno che semplifica, ingegneria che dura.",
            italicWords: ["semplifica,"],
            body: "Profili in alluminio a taglio termico, ferramenta a scomparsa, vetri strutturali. Ogni millimetro è calibrato perché la promessa estetica regga più vent'anni di uso reale.",
            image:
              "/images/magnific__premium-architectural-interior-photography-of-a-co__14496-c28738d00dfd.webp",
          },
          {
            eyebrow: "",
            heading: "Un serramento è una promessa.",
            italicWords: ["promessa."],
            body: "Un serramento è una promessa. Verso il rivenditore che lo propone, il posatore che lo monta e il cliente che ci vivrà ogni giorno. La manteniamo prima ancora che il prodotto lasci lo stabilimento.",
            image: "/images/motta_18-f81ce7a8d4fd.jpg",
          },
        ]}
      />
    </>
  );
}

function ProductFeature({
  product,
  index,
}: {
  product: typeof nexa | typeof invisia;
  index: number;
}) {
  const shortDesc =
    product.slug === "nexa"
      ? "Design essenziale e soluzioni intelligenti per il comfort di tutti i giorni."
      : "Anta a scomparsa per una pulizia architettonica assoluta. La protagonista è la luce.";

  return (
    <Reveal delay={index * 0.15}>
      <Link
        href={`/${product.slug}`}
        className={`ms-card ms-card--${product.slug} group`}
      >
        <div className="ms-card__img">
          <Image
            src={product.hero}
            alt={`${product.name} — ${product.tagline}`}
            fill
            sizes="(max-width: 834px) 95vw, 600px"
            priority={index === 0}
          />
        </div>
        <div className="ms-card__overlay" />
        <div className="ms-card__frost" />
        <div className="ms-card__content">
          <div className="ms-card__eyebrow">{product.tagline}</div>
          <div className="ms-card__name">{product.name}</div>
          <div className="ms-card__tagline">{product.headline}</div>
          <p className="ms-card__desc">{shortDesc}</p>
          <span className="ms-card__link">
            Scopri {product.name}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
    </Reveal>
  );
}
