"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  languageLabels,
  locales,
  localizePath,
  switchLocalePath,
  type Locale,
  type SiteDictionary,
} from "@/lib/i18n";

type Props = {
  locale: Locale;
  copy: SiteDictionary["nav"];
  brand: SiteDictionary["brand"];
};

const navItems = [
  { href: "/", key: "home" },
  { href: "/menu", key: "menu" },
  { href: "#about", key: "about" },
  { href: "#contact", key: "contact" },
] as const;

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.2 3.3 5.2 3.3 9S14.2 18.8 12 21M12 3C9.8 5.2 8.7 8.2 8.7 12s1.1 6.8 3.3 9" />
    </svg>
  );
}

export default function Navbar({ locale, copy, brand }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeLanguage = languageLabels[locale];
  const navLinks = useMemo(
    () =>
      navItems.map((item) => ({
        href: localizePath(locale, item.href),
        label: copy[item.key],
      })),
    [copy, locale]
  );

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-dark/92 shadow-2xl shadow-black/20 backdrop-blur-xl" : "bg-gradient-to-b from-black/75 via-black/35 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="flex h-20 items-center justify-between gap-5 border-b border-cream/10 lg:h-[76px]">
          <Link href={localizePath(locale, "/")} className="group flex flex-col leading-none">
            <span className="font-heading text-[1.95rem] font-normal tracking-[0.08em] text-cream transition-colors group-hover:text-gold-light">
              {brand.name}
            </span>
            <span className="mt-1 text-[0.68rem] font-semibold tracking-[0.18em] text-saffron-light">
              {brand.descriptor}
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                type="button"
                aria-label={copy.language}
                aria-expanded={languageOpen}
                onClick={() => setLanguageOpen((open) => !open)}
                onBlur={() => window.setTimeout(() => setLanguageOpen(false), 140)}
                className="flex h-11 items-center gap-2 rounded-full border border-cream/15 bg-black/35 px-3.5 text-sm font-medium text-cream shadow-lg shadow-black/10 transition hover:border-cream/30 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-saffron/70"
              >
                <GlobeIcon />
                <span className="hidden sm:inline">{activeLanguage.name}</span>
                <span className="text-cream/45">·</span>
                <span className="font-semibold text-cream/75">{activeLanguage.code}</span>
                <svg viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 transition-transform ${languageOpen ? "rotate-180" : ""}`}>
                  <path fillRule="evenodd" d="M5.22 7.22a.75.75 0 011.06 0L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 8.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              {languageOpen && (
                <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-lg border border-cream/10 bg-[#070809] py-2 text-cream shadow-2xl shadow-black/40 ring-1 ring-white/5">
                  {locales.map((option) => {
                    const label = languageLabels[option];
                    const active = option === locale;
                    return (
                      <Link
                        key={option}
                        href={switchLocalePath(pathname, option)}
                        className={`flex items-center gap-2 px-5 py-4 text-lg font-medium transition ${
                          active ? "bg-[#1f2d14] text-[#d7f0a9]" : "text-cream/86 hover:bg-white/10"
                        }`}
                        onClick={() => setLanguageOpen(false)}
                      >
                        <span>{label.name}</span>
                        <span className="text-cream/35">·</span>
                        <span className={active ? "text-[#bfe77e]" : "text-cream/55"}>{label.code}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-cream/15 bg-black/35 text-cream transition hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-saffron/70 lg:hidden"
              aria-label={copy.toggle}
              aria-expanded={mobileOpen}
            >
              <span className={`block h-0.5 w-5 bg-current transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        <div className="hidden h-14 items-center justify-between lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-cream/10 bg-black/25 p-1 backdrop-blur">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-5 py-2 text-sm font-medium text-cream/78 transition hover:bg-cream/10 hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href="tel:+34631751388"
            className="rounded-full border border-saffron/45 bg-saffron px-6 py-2.5 text-sm font-semibold text-cream shadow-lg shadow-saffron/15 transition hover:bg-saffron-dark focus:outline-none focus:ring-2 focus:ring-saffron/70"
          >
            {copy.reserve}
          </a>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-cream/10 bg-dark/96 transition-all duration-300 lg:hidden ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-cream/82 transition hover:bg-cream/10 hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+34631751388"
            className="mt-2 rounded-full bg-saffron px-5 py-3 text-center text-sm font-semibold text-cream transition hover:bg-saffron-dark"
          >
            {copy.reserve}
          </a>
        </div>
      </div>
    </header>
  );
}
