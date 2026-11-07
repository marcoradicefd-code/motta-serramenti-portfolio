"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  desktopSrc: string;
  mobileSrc: string;
  poster: string;
  posterWebp?: string;
};

export function BrandStoryVideo({ desktopSrc, mobileSrc, poster, posterWebp }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const root = rootRef.current;
    if (!video || !root) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      setPlaying(false);
      setStarted(false);
    };
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(root);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
      io.disconnect();
    };
  }, []);

  async function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    setStarted(true);
    try {
      await video.play();
    } catch {
      setStarted(false);
    }
  }

  return (
    <div ref={rootRef} className="brand-story">
      <div className="brand-story__frame">
        <video
          ref={videoRef}
          className="brand-story__video"
          poster={poster}
          preload="metadata"
          playsInline
          controls={started}
        >
          <source media="(max-width: 768px)" src={mobileSrc} type="video/mp4" />
          <source src={desktopSrc} type="video/mp4" />
        </video>

        {!started && (
          <>
            <Image
              src={posterWebp ?? poster}
              alt="Motta Serramenti — la storia"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="brand-story__poster"
              priority={false}
            />
            <div className="brand-story__gradient" aria-hidden />
          </>
        )}

        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            className="brand-story__play"
            aria-label="Riproduci il video"
          >
            <span className="brand-story__play-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="brand-story__play-label">
              {started ? "Riprendi" : "Guarda il video"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
