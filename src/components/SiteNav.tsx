import { Link, useLocation } from "react-router-dom";
import { seasons } from "@/data/dungeons";

export function SiteNav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative flex size-9 items-center justify-center rounded-full border border-primary/40">
            <span className="size-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="absolute inset-0 rounded-full bg-primary/10 blur-md" />
          </span>
          <span className="font-display text-lg font-bold uppercase tracking-tight text-foreground">
            Mythic+ <span className="text-gradient-solar">Codex</span>
          </span>
        </Link>

        <div className="flex items-center gap-1 rounded-full border border-border bg-surface-glass/60 p-1 backdrop-blur">
          {seasons.map((s) => {
            const isActive = s.status === "active";
            const isLocked = s.status !== "active";
            return (
              <button
                key={s.id}
                disabled={isLocked}
                className={[
                  "rounded-full px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-glow-solar"
                    : "text-muted-foreground hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",
                ].join(" ")}
              >
                {s.label}
                {isLocked && <span className="ml-2 opacity-60">·soon</span>}
              </button>
            );
          })}
        </div>

        <div className="hidden items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:flex">
          {!isHome && (
            <Link to="/" className="hover:text-foreground transition-colors">
              ← All Dungeons
            </Link>
          )}
          <span>The War Within · Midnight</span>
        </div>
      </div>
    </nav>
  );
}
