import type { MenuItem, ProteinPrices, SpiceLevel } from "@/data/menu";
import { formatPrice } from "@/data/menu";
import SpiceIndicator from "./SpiceIndicator";

type Props = {
  item: MenuItem;
  labels: {
    chefSpecial: string;
    proteins: Record<string, string>;
    spice: Record<SpiceLevel, string>;
  };
};

export default function DishCard({ item, labels }: Props) {
  const isProteinBased = typeof item.price === "object";

  return (
    <div className="bg-surface border border-line hover:border-gold/40 transition-all duration-300 group p-5 flex flex-col gap-3">
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <h3 className="font-heading text-xl text-ink font-semibold leading-tight">{item.name}</h3>
            {item.isVegetarian && (
              <span className="flex-shrink-0 w-4 h-4 border border-green-600 flex items-center justify-center rounded-sm">
                <span className="w-2 h-2 rounded-full bg-green-600 block" />
              </span>
            )}
            {item.isChefSpecial && (
              <span className="text-saffron text-xs font-semibold font-body bg-saffron/10 px-2 py-0.5">
                {labels.chefSpecial}
              </span>
            )}
          </div>
          {item.description && (
            <p className="text-ink-muted text-sm font-body leading-snug italic">{item.description}</p>
          )}
          {item.note && (
            <p className="text-ink-muted/70 text-xs font-body mt-0.5">{item.note}</p>
          )}
        </div>

        {/* Single price */}
        {!isProteinBased && (
          <div className="flex-shrink-0 text-right">
            <span className="font-heading text-xl text-saffron font-semibold">{formatPrice(item.price)}</span>
          </div>
        )}
      </div>

      {/* Protein-based pricing grid */}
      {isProteinBased && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5">
          {Object.entries(item.price as ProteinPrices).map(([protein, price]) => (
            <div
              key={protein}
              className="flex flex-col items-center bg-surface-soft/70 px-2 py-1.5 text-center hover:bg-saffron/10 transition-colors cursor-default"
            >
              <span className="text-ink-muted text-xs font-body font-semibold">{labels.proteins[protein] ?? protein}</span>
              <span className="font-heading text-base text-ink font-semibold">€{(price as number).toFixed(2)}</span>
            </div>
          ))}
        </div>
      )}

      {/* Footer row */}
      {item.spiceLevel !== undefined && item.spiceLevel > 0 && (
        <div className="pt-1 border-t border-line">
          <SpiceIndicator level={item.spiceLevel} showLabel labels={labels.spice} />
        </div>
      )}
    </div>
  );
}
