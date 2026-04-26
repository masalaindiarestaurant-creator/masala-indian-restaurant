import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuClient from "@/components/menu/MenuClient";
import { getDictionary, getLocalizedMenuCategories, isLocale, type Locale } from "@/lib/i18n";

type Params = Promise<{ lang: string }>;

function getLocale(lang: string): Locale {
  return isLocale(lang) ? lang : "en";
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(getLocale(lang));

  return {
    title: dict.meta.menuTitle,
    description: dict.meta.menuDescription,
  };
}

export default async function MenuPage({ params }: { params: Params }) {
  const { lang } = await params;
  const locale = getLocale(lang);
  const dict = getDictionary(locale);
  const categories = getLocalizedMenuCategories(locale);

  return (
    <>
      <Navbar locale={locale} copy={dict.nav} brand={dict.brand} />

      <section className="relative flex h-[48vh] min-h-[380px] items-end justify-center overflow-hidden bg-dark">
        <Image
          src="/images/food/2.jpeg"
          alt="Masala menu tandoori dishes"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/25" />

        <div className="relative z-10 px-6 pb-14 text-center">
          <p className="section-label mb-3 text-saffron-light">{dict.menuPage.eyebrow}</p>
          <h1
            className="font-heading text-cream"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.4rem)", textShadow: "0 8px 34px rgba(0,0,0,0.7)" }}
          >
            {dict.menuPage.title} <em className="not-italic text-gold-light">{dict.menuPage.accent}</em>
          </h1>
        </div>
      </section>

      <div className="border-b border-line bg-surface-soft">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-sm text-ink-muted sm:flex-row lg:px-12">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-green-600">
                <span className="block h-2 w-2 rounded-full bg-green-600" />
              </span>
              {dict.menuPage.vegetarian}
            </span>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="#E8830A" className="h-3.5 w-3.5">
                <path d="M12 2C10 2 8 4 8 6c0 1.5.8 2.8 2 3.5V11H9a1 1 0 000 2h1v1.5C7.5 15.5 6 17.5 6 20a1 1 0 002 0c0-1.7 1.3-3 3-3s3 1.3 3 3a1 1 0 002 0c0-2.5-1.5-4.5-4-5.5V13h1a1 1 0 000-2h-1V9.5C13.2 8.8 14 7.5 14 6c0-2-2-4-2-4z" />
              </svg>
              {dict.menuPage.spiceIndicator}
            </span>
          </div>
          <p className="text-xs text-ink-muted/70">{dict.menuPage.priceNote}</p>
        </div>
      </div>

      <main className="min-h-screen bg-page">
        <MenuClient
          categories={categories}
          labels={{
            chefSpecial: dict.menuPage.chefSpecial,
            proteins: dict.menuPage.proteins,
            spice: dict.menuPage.spice,
          }}
        />
      </main>

      <Footer locale={locale} copy={dict.footer} nav={dict.nav} brand={dict.brand} />
    </>
  );
}
