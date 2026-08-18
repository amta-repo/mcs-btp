import { useEffect, useState } from "react";
import { BEFORE_AFTER } from "@/lib/site-data";

/**
 * Avant / Après — les deux images glissent horizontalement (0,2 s).
 */
export function BeforeAfter({ auto = true }: { auto?: boolean }) {
  const [index, setIndex] = useState(0);
  const slides = [BEFORE_AFTER.before, BEFORE_AFTER.after];

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % 2), 3500);
    return () => clearInterval(id);
  }, [auto]);

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[2/1]">
        <div
          className="flex h-full w-[200%] transition-transform duration-200 ease-out"
          style={{ transform: `translateX(-${index * 50}%)` }}
        >
          {slides.map((s) => (
            <div key={s.label} className="relative h-full w-1/2 shrink-0">
              <img
                src={s.url}
                alt={s.label}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-amber-glow px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 p-4">
        <div className="min-w-0 text-xs text-muted-foreground">
          Même villa — du gros œuvre à la livraison.
        </div>
        <div className="flex shrink-0 gap-2">
          {["Avant", "Après"].map((label, i) => (
            <button
              key={label}
              onClick={() => setIndex(i)}
              aria-pressed={index === i}
              className={`rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition ${
                index === i
                  ? "border-amber-glow bg-amber-glow text-primary-foreground"
                  : "border-white/15 text-muted-foreground hover:border-amber-glow/50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
