import { Link } from "react-router-dom";
import type { Dungeon } from "@/data/dungeons";


export function DungeonCard({ dungeon, index }: { dungeon: Dungeon; index: number }) {
  const hasTips = dungeon.tips.length > 0;
  return (
    <Link
      to={`/dungeon/${dungeon.slug}`}
      className="group glass-panel relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-solar animate-fade-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <img
        src={`${import.meta.env.BASE_URL}thumbnails/${dungeon.imageSeed}.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-50 group-hover:grayscale-0 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

      <div className="relative z-10 p-6">
        <div className="mb-2 flex items-center justify-between">
          {hasTips ? (
            <span className="font-mono text-[10px] text-primary">{dungeon.tips.length} tips</span>
          ) : (
            <span className="font-mono text-[10px] text-muted-foreground/60">empty</span>
          )}
        </div>
        <h3 className="font-display text-2xl font-semibold leading-tight text-foreground">
          {dungeon.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{dungeon.zone}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground/80">{dungeon.tagline}</span>
          <span className="flex size-8 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
