import { Link, useParams } from "react-router-dom";
import { SiteNav } from "@/components/SiteNav";
import { getDungeon, type Tip } from "@/data/dungeons";

const categoryMeta: Record<Tip["category"], { label: string; accent: string; dot: string }> = {
  general: { label: "General Strategy", accent: "text-primary", dot: "bg-primary" },
  boss: { label: "Boss Encounters", accent: "text-primary", dot: "bg-primary" },
  trash: { label: "Trash & Mobs", accent: "text-void", dot: "bg-void" },
  utility: { label: "Utility & Routing", accent: "text-foreground", dot: "bg-muted-foreground" },
};

const order: Tip["category"][] = ["general", "boss", "trash", "utility"];

const DungeonPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const dungeon = slug ? getDungeon(slug) : undefined;

  if (!dungeon) {
    return (
      <div className="min-h-dvh">
        <SiteNav />
        <div className="mx-auto max-w-3xl px-6 py-32 text-center">
          <h1 className="font-display text-3xl font-bold">Dungeon not found</h1>
          <Link to="/" className="mt-6 inline-block text-primary underline">Back to dungeon pool</Link>
        </div>
      </div>
    );
  }

  const grouped = order
    .map((cat) => ({
      cat,
      tips: dungeon.tips.filter((t) => t.category === cat).sort((a, b) => a.order - b.order),
    }))
    .filter((g) => g.tips.length > 0);

  const general = grouped.find((g) => g.cat === "general");
  const rest = grouped.filter((g) => g.cat !== "general");

  return (
    <div className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 -z-10 void-mesh opacity-20" />
      <SiteNav />

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <img
          src={`https://picsum.photos/seed/${dungeon.imageSeed}/1600/700`}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Link
            to="/"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
          >
            ← Season 1 Pool
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              {dungeon.zone}
            </span>
            <span className="size-1 rounded-full bg-muted-foreground" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {dungeon.shortName}
            </span>
          </div>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] text-gradient-light md:text-7xl">
            {dungeon.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg italic text-muted-foreground">{dungeon.tagline}</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-32 pt-16">
        {dungeon.tips.length === 0 && (
          <div className="glass-panel rounded-2xl p-12 text-center">
            <h2 className="font-display text-2xl font-semibold">Tips coming soon</h2>
            <p className="mt-3 text-muted-foreground">
              This dungeon's intel is still being compiled. Check back as the season unfolds.
            </p>
          </div>
        )}

        {general && (
          <section className="mb-16">
            <SectionHeader category="general" />
            <div className="space-y-4">
              {general.tips.map((tip, i) => (
                <article
                  key={i}
                  className="glass-panel rounded-2xl border-l-2 border-l-primary p-6 shadow-elevated"
                >
                  {tip.title && (
                    <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                      {tip.title}
                    </h3>
                  )}
                  <p className="text-base leading-relaxed text-foreground/90">{tip.text}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {rest.map(({ cat, tips }) => (
          <section key={cat} className="mb-16">
            <SectionHeader category={cat} />
            <ol className="space-y-5">
              {tips.map((tip, i) => {
                const meta = categoryMeta[cat];
                return (
                  <li key={i} className="flex gap-5">
                    <div className="flex flex-col items-center pt-1">
                      <span className="font-mono text-xs text-muted-foreground tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`mt-2 size-1.5 rounded-full ${meta.dot}`} />
                    </div>
                    <div className="glass-panel flex-1 rounded-xl p-5">
                      {tip.title && (
                        <h3 className={`mb-2 font-display text-base font-semibold ${meta.accent}`}>
                          {tip.title}
                        </h3>
                      )}
                      <p className="text-sm leading-relaxed text-foreground/85">{tip.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </main>
    </div>
  );
};

function SectionHeader({ category }: { category: Tip["category"] }) {
  const meta = categoryMeta[category];
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className={`size-2 rounded-full ${meta.dot}`} />
      <h2 className={`font-mono text-xs font-bold uppercase tracking-[0.3em] ${meta.accent}`}>
        {meta.label}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export default DungeonPage;
