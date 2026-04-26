import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import StatsBar from "@/components/StatsBar";
import FeaturedDishes from "@/components/FeaturedDishes";
import MenuPreview from "@/components/MenuPreview";
import Gallery from "@/components/Gallery";
import ValuesSection from "@/components/ValuesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type Params = Promise<{ lang: string }>;

function getLocale(lang: string): Locale {
  return isLocale(lang) ? lang : "en";
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(getLocale(lang));

  return {
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
  };
}

export default async function Home({ params }: { params: Params }) {
  const { lang } = await params;
  const locale = getLocale(lang);
  const dict = getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} copy={dict.nav} brand={dict.brand} />
      <main>
        <Hero locale={locale} copy={dict.hero} />
        <Story locale={locale} copy={dict.story} />
        <StatsBar stats={dict.stats} />
        <FeaturedDishes copy={dict.featured} />
        <MenuPreview locale={locale} copy={dict.menuPreview} />
        <Gallery copy={dict.gallery} />
        <ValuesSection copy={dict.values} />
        <CTASection copy={dict.cta} />
      </main>
      <Footer locale={locale} copy={dict.footer} nav={dict.nav} brand={dict.brand} />
    </>
  );
}
