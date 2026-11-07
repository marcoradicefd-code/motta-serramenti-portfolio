export const site = {
  brand: "Motta Serramenti",
  collection: "Premium Collection",
  tagline:
    "Serramenti in alluminio premium per il residenziale e l'alta gamma architettonica.",
  address: {
    line1: "Via Antonio Gramsci, 7",
    line2: "20847 Albiate (MB)",
    country: "Italia",
  },
  founded: 2010,
  logo: "/images/LOGO_MOTTA-e2c774499e16.png",
  nav: [
    { label: "Home", href: "/" },
    { label: "Nexa", href: "/nexa" },
    { label: "Invisia", href: "/invisia" },
    { label: "Chi siamo", href: "/chi-siamo" },
    { label: "Download", href: "/download" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
