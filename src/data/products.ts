export const nexa = {
  slug: "nexa",
  name: "Nexa",
  tagline: "Minimal funzionale",
  headline: "Minimal che semplifica.",
  description:
    "Design essenziale e soluzioni intelligenti per il comfort di tutti i giorni. Il serramento premium versatile, immediato da proporre, semplice da capire.",
  positioning:
    "Equilibrio tra eleganza e praticità quotidiana. Premium intelligente per la maggior parte delle case.",
  hero: "/images/Nexa-2-a592889839ac.jpeg",
  gallery: [
    "/images/motta_5-c387916181cc.jpg",
    "/images/motta_8-6b4d100f0a19.jpg",
    "/images/motta_11-b2defaa3f181.jpg",
  ],
  detail: "/images/16x9_dettaglio_maniglia-73876f5f98c5.jpeg",
  pillars: [
    {
      key: "estetica",
      title: "Estetica pulita",
      body: "Linee minimali, telaio compatto, finiture che dialogano con l'architettura contemporanea.",
    },
    {
      key: "eleganza",
      title: "Eleganza e praticità",
      body: "Apertura fluida, dettagli rifiniti a mano, materiali che restano belli nel tempo.",
    },
    {
      key: "comfort",
      title: "Comfort quotidiano",
      body: "Isolamento termico e acustico calibrato per il vivere di ogni giorno.",
    },
    {
      key: "progetto",
      title: "Adatta a ogni progetto",
      body: "Configurazioni modulari per residenziale, ristrutturazioni e nuove costruzioni.",
    },
  ],
  audience: [
    {
      title: "Famiglie e residenziale",
      body: "Chi vuole un salto di qualità nel design senza rinunciare alla praticità quotidiana.",
    },
    {
      title: "Imprese e cantieri",
      body: "Ristrutturazioni e nuove costruzioni dove serve una soluzione premium versatile.",
    },
    {
      title: "Showroom",
      body: "Facile da proporre e da spiegare. Gestione del cliente semplificata.",
    },
  ],
  specs: { profile: "C75", color: "#5e6b62" },
} as const;

export const invisia = {
  slug: "invisia",
  name: "Invisia",
  tagline: "Lusso invisibile",
  headline: "Quando la finestra scompare.",
  description:
    "Anta a scomparsa per una pulizia architettonica assoluta. La protagonista è la luce. Un linguaggio progettuale che parla agli architetti.",
  positioning:
    "Anta a scomparsa, Design Minimalista. Alta gamma per il massimo effetto wow.",
  hero: "/images/invisia-card.jpg",
  gallery: [
    "/images/magnific__highend-architectural-interior-photography-of-a-co__14497-c0523ca936d1.webp",
    "/images/magnific__premium-architectural-interior-photography-of-a-co__14496-c28738d00dfd.webp",
    "/images/motta_18-f81ce7a8d4fd.jpg",
    "/images/motta_20-6c3033c01b40.jpg",
  ],
  detail: "/images/dettaglio_finitura__281_29-52e14f18cde3.jpeg",
  comparison: [
    {
      key: "tradizionale",
      label: "Profilo visibile",
      body: "Telaio e anta interrompono la vista. Il serramento è un elemento tecnico presente.",
      image: "/images/16x9__281_29-a67792365527.jpeg",
    },
    {
      key: "intermedia",
      label: "Solo luce",
      body: "Riduzione dei profili a vista. Lo sguardo trova più respiro.",
      image: "/images/16x9_serramento-7cbaca44f3ba.jpeg",
    },
    {
      key: "invisia",
      label: "Effetto Invisia",
      body: "Il serramento scompare. Resta il vetro, la luce, l'architettura.",
      image:
        "/images/magnific__premium-architectural-interior-photography-of-a-co__14496-c28738d00dfd.webp",
    },
  ],
  vantaggi: [
    {
      title: "Design Minimalista",
      body: "L'anta a scomparsa trasforma la finestra da elemento tecnico a puro design.",
    },
    {
      title: "Linguaggio da architetti",
      body: "Pulizia visiva totale che parla il linguaggio dei progetti di pregio.",
    },
    {
      title: "Differenziazione unica",
      body: "Posizionamento superiore che nessun competitor può replicare facilmente.",
    },
    {
      title: "La luce come protagonista",
      body: "Vetro continuo, sezioni minime. L'ambiente respira diversamente.",
    },
  ],
  specs: { profile: "C82S", color: "#1b1d1e" },
} as const;

export type Product = typeof nexa | typeof invisia;
