**English** · [Italiano](README.md)

# Motta Serramenti — website

Website for **Motta Serramenti**, a window and door company, with dedicated pages for its **Invisia** and **Nexa** product lines. Full-screen video, scroll-driven animation and carefully tuned micro-interactions.

**Live:** [motta-sito-finale.vercel.app](https://motta-sito-finale.vercel.app)

> Designed and developed by **Marco Radice** for Luxury Academy, with Claude Code.
> This is a **public portfolio copy**: the commit history and internal notes have been removed.

## Pages

Home · About · Invisia · Nexa · Downloads · Privacy, cookie policy, terms.

## What's inside

- **Video hero** with separate desktop and mobile versions, WebP posters and automated compression (`scripts/compress-videos.sh`).
- **GSAP animation**: sections pinned while scrolling (`PinnedManifesto`), a scroll-driven carousel (`HeroScrollCarousel`), word-by-word text reveals (`SplitWords`), parallax.
- **Smooth scrolling** with Lenis.
- **Micro-interactions**: magnetic buttons, tilt effect, animated counters, product galleries.
- **Measured performance**: Vercel Analytics, Speed Insights and Web Vitals reporting.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · GSAP · Lenis · Motion · Vercel

## Structure

```
src/app/          pages
src/components/   components (video hero, galleries, animation)
src/data/         content
public/videos/    optimised videos
```

## Running locally

```bash
npm install
npm run dev   # http://localhost:3000
```

The site content is in Italian.
