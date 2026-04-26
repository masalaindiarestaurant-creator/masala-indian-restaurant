import type { SpiceLevel } from "@/data/menu";

type Props = {
  level: SpiceLevel;
  showLabel?: boolean;
  labels: Record<SpiceLevel, string>;
};

export default function SpiceIndicator({ level, showLabel = false, labels }: Props) {
  if (level === 0) return null;

  return (
    <div className="flex items-center gap-1" title={labels[level]}>
      {Array.from({ length: 4 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`w-3.5 h-3.5 transition-opacity ${i < level ? "opacity-100" : "opacity-20"}`}
          fill={i < level ? "#E8830A" : "#7A6555"}
        >
          <path d="M12 2C10 2 8 4 8 6c0 1.5.8 2.8 2 3.5V11H9a1 1 0 000 2h1v1.5C7.5 15.5 6 17.5 6 20a1 1 0 002 0c0-1.7 1.3-3 3-3s3 1.3 3 3a1 1 0 002 0c0-2.5-1.5-4.5-4-5.5V13h1a1 1 0 000-2h-1V9.5C13.2 8.8 14 7.5 14 6c0-2-2-4-2-4z" />
        </svg>
      ))}
      {showLabel && (
        <span className="text-xs text-ink-muted ml-1 font-body">{labels[level]}</span>
      )}
    </div>
  );
}
