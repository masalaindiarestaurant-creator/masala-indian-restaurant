import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import type { SiteDictionary } from "@/lib/i18n";

const images = [
  { src: "/images/visits/10.jpg", alt: "Restaurant ambiance", tall: true },
  { src: "/images/food/12.jpg", alt: "Signature curry", tall: false },
  { src: "/images/food/11.jpg", alt: "Indian appetisers", tall: false },
  { src: "/images/visits/15.jpg", alt: "Dining room", tall: true },
  { src: "/images/food/13.jpg", alt: "Fresh ingredients", tall: false },
  { src: "/images/visits/7.jpg", alt: "Restaurant interior", tall: false },
];

type Props = { copy: SiteDictionary["gallery"] };

export default function Gallery({ copy }: Props) {
  return (
    <section className="bg-page py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealOnScroll className="text-center mb-16">
          <p className="section-label mb-4">{copy.eyebrow}</p>
          <h2
            className="font-heading text-ink leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            {copy.title} <em className="text-maroon not-italic">{copy.accent}</em>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="block h-px w-12 bg-gold/60" />
            <span className="text-gold text-sm">✦</span>
            <span className="block h-px w-12 bg-gold/60" />
          </div>
        </RevealOnScroll>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {images.map((img, i) => (
            <RevealOnScroll
              key={img.src}
              delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
              className={`group relative overflow-hidden ${img.tall ? "row-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${img.tall ? "aspect-[3/4]" : "aspect-square"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/20 transition-colors duration-500" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
