import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { VideoHero } from "@/components/VideoHero";
import { MagneticButton } from "@/components/MagneticButton";
import { Counter } from "@/components/Counter";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Strutturati come un'industria, vicini come un artigiano. La storia di Motta Serramenti, da Albiate, Brianza, dal 2010.",
};

export default function ChiSiamoPage() {
  return (
    <>
      {/* VIDEO HERO */}
      <VideoHero
        src="/videos/chi-siamo-hero.mp4"
        align="bottom-left"
        overlay="edge"
      >
        <div className="max-w-5xl">
          <h1 className="vh-text h-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] text-white">
            Brianza, alluminio, parola data.
          </h1>
          <p className="vh-text mt-8 max-w-xl text-white/100 text-base md:text-lg leading-relaxed">
            Strutturati come un'industria. Vicini come un artigiano.
          </p>
          <div className="vh-text mt-10">
            <MagneticButton href="#storia" variant="glass">
              La storia
            </MagneticButton>
          </div>
        </div>

        <div className="absolute bottom-6 left-5 md:bottom-8 md:left-10 right-5 md:right-10 flex items-center justify-between text-white/45 text-[0.7rem] tracking-[0.28em] uppercase font-medium">
        </div>
      </VideoHero>

      {/* STORY */}
      <section id="storia" className="px-5 md:px-10 py-24 md:py-36 scroll-mt-20">
        <div className="mx-auto max-w-(--container-2xl) grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
            <Reveal>
              <h2 className="h-display text-[clamp(2rem,4vw,3.4rem)]">
                Una <span className="italic-display">promessa</span>{" "}
                tramandata.
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-10 md:space-y-14">
            <Reveal>
              <p className="text-ink text-xl md:text-2xl leading-relaxed">
                A 18 anni Gianluca Motta inizia a lavorare il ferro e
                l'alluminio nell'officina dello zio. Impara lì una cosa che
                oggi è diventata il nostro modo di lavorare: un serramento non
                è un prodotto da listino, è una promessa che qualcun altro —
                il rivenditore, il posatore, il cliente finale — dovrà
                mantenere ogni giorno.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-ink/75 text-lg leading-relaxed">
                Nel <span className="text-ink">2010</span> apre la sua prima
                ditta individuale. Scopre il PVC, ci si dedica completamente, e
                nel gennaio <span className="text-ink">2017</span> nasce{" "}
                <em className="italic-display">Motta Serramenti srl</em>.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-ink/75 text-lg leading-relaxed">
                Oggi siamo una realtà produttiva in Brianza, con una capacità
                strutturata: per chi rivende i nostri serramenti significa
                consegne puntuali, qualità costante e un produttore che
                risponde quando serve una risposta.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-ink text-xl md:text-2xl leading-relaxed border-l-2 border-brass pl-6 md:pl-8">
                Da qui nasce <span className="italic-display">Motta Premium</span>:
                la linea dedicata all'alluminio residenziale di alta gamma.
                Stesso modo di lavorare, applicato al mondo del design.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-5 md:px-10 py-24 md:py-36 bg-charcoal text-white">
        <div className="mx-auto max-w-(--container-2xl)">
          <Reveal>
            <h2 className="h-display text-[clamp(2.4rem,6vw,5rem)] max-w-3xl text-white">
              L'azienda in numeri.
            </h2>
          </Reveal>

          <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8 md:gap-x-12">
            <StatBlock
              prefix="dal "
              to={2010}
              label="Produciamo serramenti in Brianza"
            />
            <StatBlock
              to={100}
              suffix="%"
              label="Realizzazioni su misura"
            />
            <StatBlock
              to={150}
              label="Quadri prodotti ogni giorno"
            />
            <StatBlock
              to={24}
              suffix="h"
              label="Intervento per urgenze"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function StatBlock({
  to,
  suffix = "",
  prefix = "",
  label,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  return (
    <Reveal>
      <div className="border-t border-paper/20 pt-6">
        <p
          className="h-display text-[clamp(3.4rem,9vw,7rem)] leading-none text-white"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          <Counter to={to} prefix={prefix} suffix={suffix} />
        </p>
        <p className="mt-5 text-white/65 text-sm md:text-base leading-snug max-w-[20ch]">
          {label}
        </p>
      </div>
    </Reveal>
  );
}
