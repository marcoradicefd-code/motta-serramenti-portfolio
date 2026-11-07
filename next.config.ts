import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV !== "production",
    // AVIF prima di WebP: l'image optimizer di Vercel sceglie il formato
    // migliore supportato dal browser. AVIF risparmia 30-50% su WebP su foto.
    formats: ["image/avif", "image/webp"],
  },
};


export default nextConfig;
