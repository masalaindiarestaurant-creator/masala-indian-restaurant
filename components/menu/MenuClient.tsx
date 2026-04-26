"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import type { MenuCategory, SpiceLevel } from "@/data/menu";
import DishCard from "./DishCard";

type Props = {
  categories: MenuCategory[];
  initialCategory?: string;
  labels: {
    chefSpecial: string;
    proteins: Record<string, string>;
    spice: Record<SpiceLevel, string>;
  };
};

export default function MenuClient({ categories, initialCategory, labels }: Props) {
  const [activeId, setActiveId] = useState(initialCategory ?? categories[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  const headerScrollOffset = () => {
    if (typeof window === "undefined") return 140;
    if (window.matchMedia("(min-width: 1024px)").matches) return 190;
    if (window.matchMedia("(min-width: 768px)").matches) return 200;
    return 140;
  };

  const scrollToSection = (id: string) => {
    setActiveId(id);
    const el = sectionRefs.current.get(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - headerScrollOffset();
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Scroll active tab into view
  useEffect(() => {
    const tab = tabsRef.current?.querySelector(`[data-tab="${activeId}"]`);
    tab?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeId]);

  return (
    <div>
      {/* Sticky tab bar */}
      <div className="sticky top-20 z-40 border-b border-line bg-page/95 shadow-sm backdrop-blur md:top-[136px] lg:top-[132px]">
        <div
          ref={tabsRef}
          className="max-w-7xl mx-auto px-4 lg:px-12 flex gap-0 overflow-x-auto scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              data-tab={cat.id}
              onClick={() => scrollToSection(cat.id)}
              className={`relative flex-shrink-0 px-4 py-4 text-xs font-semibold font-body border-b-2 transition-all duration-200 whitespace-nowrap ${
                activeId === cat.id
                  ? "border-transparent text-saffron"
                  : "border-transparent text-ink-muted hover:text-ink"
              }`}
            >
              {cat.label}
              {activeId === cat.id && (
                <motion.span
                  layoutId="menu-active-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron"
                  transition={{ type: "spring", stiffness: 340, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* All categories */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-12">
        <div className="space-y-20">
          {categories.map((cat) => (
            <section
              key={cat.id}
              id={cat.id}
              ref={(el) => {
                if (el) sectionRefs.current.set(cat.id, el);
              }}
            >
              {/* Section header */}
              <div className="mb-8 pb-6 border-b border-line">
                <div className="flex items-center gap-4 mb-2">
                  <span className="block h-px w-8 bg-gold" />
                  <p className="section-label text-saffron">{cat.label}</p>
                </div>
                <h2 className="font-heading text-ink" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                  {cat.label}
                </h2>
                {cat.description && (
                  <p className="text-ink-muted font-body text-sm mt-2 italic">{cat.description}</p>
                )}
              </div>

              {/* Dish grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((item) => (
                  <DishCard key={item.id} item={item} labels={labels} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
