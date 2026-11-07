import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WebVitalsReporter } from "@/components/WebVitalsReporter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const display = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const sans = Raleway({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Motta Serramenti — Premium Collection",
    template: "%s — Motta Serramenti",
  },
  description:
    "Serramenti in alluminio premium per il residenziale e l'alta gamma architettonica. Le linee Nexa e Invisia, prodotte in Brianza.",
  metadataBase: new URL("https://mottaserramenti.it"),
  other: {
    // Opt-out training AI (W3C TDMRep + segnali non-standard interpretati dai training bot)
    "tdm-reservation": "1",
    "tdm-policy": "https://mottaserramenti.it/termini",
    // X-Robots-Tag a livello document (gli stessi token sono inviati anche come header HTTP da vercel.json)
    robots: "noai, noimageai",
    // Direttive per crawler di training specifici — riservano l'indicizzazione (noindex) SOLO ai bot di training,
    // NON ai bot di search/citation (Googlebot, OAI-SearchBot, PerplexityBot, Claude-User, Gemini-Deep-Research, ecc.)
    GPTBot: "noindex",
    ClaudeBot: "noindex",
    "anthropic-ai": "noindex",
    "Google-Extended": "noindex",
    "Applebot-Extended": "noindex",
    CCBot: "noindex",
    Bytespider: "noindex",
    "Meta-ExternalAgent": "noindex",
    "cohere-ai": "noindex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="grain min-h-dvh flex flex-col bg-paper text-ink">
        {/* Honeypot anti-scraping — invisibile agli umani, seguito dai bot */}
        <a
          href="/api/honeypot"
          aria-hidden="true"
          tabIndex={-1}
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          Area riservata
        </a>
        {process.env.NODE_ENV === "development" && <WebVitalsReporter />}
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
