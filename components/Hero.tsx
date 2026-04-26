"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { localizePath, type Locale, type SiteDictionary } from "@/lib/i18n";

type Props = {
  locale: Locale;
  copy: SiteDictionary["hero"];
};

const slides = [
  { src: "/images/hero-banner/signature-dish.png", alt: "Signature Indian dish", position: "center 48%", accent: "#f08a0a" },
  { src: "/images/hero-banner/chicken-wings.png", alt: "Masala main course", position: "center 42%", accent: "#d6a73f" },
  { src: "/images/hero-banner/tandoor-skewers.png", alt: "Tandoori sizzler platter", position: "center 52%", accent: "#c93d24" },
  { src: "/images/hero-banner/restaurant-ambiance.jpg", alt: "Masala restaurant ambiance", position: "center 58%", accent: "#91a957" },
  { src: "/images/hero-banner/curry-karahi.png", alt: "Aromatic Indian curry", position: "center 46%", accent: "#e0b55c" },
];

export default function Hero({ locale, copy }: Props) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % slides.length);
    }, 5200);
    return () => clearInterval(timer);
  }, [current]);

  useEffect(() => {
    document.documentElement.style.setProperty("--ambient-accent", slides[current].accent);
  }, [current]);

  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[680px] items-center justify-center overflow-hidden bg-dark"
      style={{ "--hero-accent": slides[current].accent } as CSSProperties}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: i === current ? 1 : i === prev ? 0 : 0,
            zIndex: i === current ? 1 : i === prev ? 0 : -1,
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="scale-[1.04] object-cover"
            style={{ objectPosition: slide.position }}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.56)_52%,rgba(0,0,0,0.86)_100%)]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/45 to-black/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/55 via-transparent to-black/30" />

      <div className="absolute bottom-24 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setPrev(current);
              setCurrent(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-9 bg-[var(--hero-accent)]" : "w-4 bg-cream/35 hover:bg-cream/65"
            }`}
          />
        ))}
      </div>

      <div className="relative z-30 mx-auto max-w-5xl px-6 pt-28 text-center lg:pt-32">
        <p className="section-label mb-5 text-[var(--hero-accent)]">{copy.eyebrow}</p>

        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="block h-px w-16 bg-gold/75" />
          <span className="text-base text-[var(--hero-accent)]">✦</span>
          <span className="block h-px w-16 bg-gold/75" />
        </div>

        <h1
          className="font-heading mb-6 text-cream"
          style={{
            fontSize: "clamp(3.4rem, 8vw, 7.4rem)",
            lineHeight: 0.98,
            textShadow: "0 8px 44px rgba(0,0,0,0.78)",
          }}
        >
          {copy.titleTop}
          <br />
          <em className="not-italic text-[var(--hero-accent)]">{copy.titleAccent}</em>
        </h1>

        <p
          className="mx-auto mb-10 max-w-2xl text-lg font-medium leading-8 text-cream/92"
          style={{ textShadow: "0 2px 18px rgba(0,0,0,0.82)" }}
        >
          {copy.body}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={localizePath(locale, "/menu")}
            className="masala-btn masala-btn-filled min-w-48 px-8 py-3.5 text-center text-sm font-semibold text-cream focus:outline-none focus:ring-2 focus:ring-[var(--hero-accent)]/70"
            style={{ "--button-fill": "var(--hero-accent)" } as CSSProperties}
          >
            {copy.primary}
          </Link>
          <a
            href="tel:+34631751388"
            className="masala-btn min-w-48 bg-black/35 px-8 py-3.5 text-center text-sm font-semibold text-cream backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--hero-accent)]/70"
            style={{ "--button-fill": "var(--hero-accent)" } as CSSProperties}
          >
            {copy.secondary}
          </a>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs font-semibold tracking-[0.18em] text-cream/60">{copy.scroll}</span>
        <div className="animate-bounce-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-5 w-5 text-cream/60">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
