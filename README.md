[English](README.en.md) · **Italiano**

# Motta Serramenti — sito web

Sito di **Motta Serramenti** con pagine dedicate alle linee di prodotto **Invisia** e **Nexa**. Video a tutto schermo, animazioni legate allo scroll e microinterazioni curate.

**Online:** [motta-sito-finale.vercel.app](https://motta-sito-finale.vercel.app)

> Progetto progettato e sviluppato da **Marco Radice** per Luxury Academy, con Claude Code.
> Questa è una **copia pubblica per portfolio**: lo storico dei commit e le note interne sono stati rimossi.

## Pagine

Home · Chi siamo · Invisia · Nexa · Download · Privacy, cookie policy, termini.

## Cosa c'è dentro

- **Video hero** con versioni separate per desktop e mobile, poster in WebP e compressione automatica (`scripts/compress-videos.sh`).
- **Animazioni con GSAP**: sezioni fissate durante lo scroll (`PinnedManifesto`), carosello che scorre con lo scroll (`HeroScrollCarousel`), testo che compare parola per parola (`SplitWords`), parallasse.
- **Scroll fluido** con Lenis.
- **Microinterazioni**: pulsanti magnetici, effetto tilt, contatori animati, gallerie prodotto.
- **Performance misurata**: Vercel Analytics, Speed Insights e raccolta dei Web Vitals.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · GSAP · Lenis · Motion · Vercel

## Struttura

```
src/app/          pagine
src/components/   componenti (hero video, gallerie, animazioni)
src/data/         contenuti
public/videos/    video ottimizzati
```

## Avvio in locale

```bash
npm install
npm run dev   # http://localhost:3000
```
