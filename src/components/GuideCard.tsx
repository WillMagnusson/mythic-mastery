import { Link } from "react-router-dom";
import type { GuideSection } from "@/data/dungeons";

export function GuideCard({ guide, index }: { guide: GuideSection; index: number }) {
  const hasTips = guide.tips.length > 0;
  return (
    <Link
      to={`/guide/${guide.slug}`}
      className="group glass-panel relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-void/40 hover:shadow-glow-void animate-fade-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-void/10 via-transparent to-background/80" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-7xl font-bold text-foreground/5 select-none">
          {guide.shortName}
        </span>
      </div>

      <div className="relative z-10 p-6">
        <div className="mb-2 flex items-center justify-between">
          {hasTips ? (
            <span className="font-mono text-[10px] text-void">{guide.tips.length} tips</span>
          ) : (
            <span className="font-mono text-[10px] text-muted-foreground/60">coming soon</span>
          )}
        </div>
        <h3 className="font-display text-2xl font-semibold leading-tight text-foreground">
          {guide.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{guide.shortName}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground/80">{guide.tagline}</span>
          <span className="flex size-8 items-center justify-center rounded-full border border-void/40 text-void transition-colors group-hover:bg-void group-hover:text-foreground">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
