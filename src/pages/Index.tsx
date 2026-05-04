import { SiteNav } from "@/components/SiteNav";
import { DungeonCard } from "@/components/DungeonCard";
import { activeSeason } from "@/data/dungeons";

const Index = () => {
  return (
    <div className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 -z-10 void-mesh opacity-30" />
      <SiteNav />

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-12">
        <header className="mb-12 flex flex-col items-start gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Season 1 · Midnight
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-gradient-light md:text-4xl">
            Mythic+ Season 1 Codex
          </h1>
        </header>

        <section aria-label="Dungeon pool" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {activeSeason.dungeons.map((d, i) => (
            <DungeonCard key={d.slug} dungeon={d} index={i} />
          ))}
        </section>

        <footer className="mt-24 border-t border-border pt-8 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Forged in the Light · Tempered by the Void
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
