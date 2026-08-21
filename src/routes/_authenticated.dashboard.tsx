import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Globe2, Sparkles } from "lucide-react";

import { Reveal, SectionHead } from "@/components/site/Reveal";
import { Progress } from "@/components/ui/progress";
import { countries, festivals, regions, stories } from "@/lib/data";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Your dashboard — Culturiq" },
      { name: "description", content: "Your cultural learning dashboard: saved places, streaks and what's next." },
      { property: "og:title", content: "Your dashboard — Culturiq" },
      { property: "og:description", content: "Track your journey through world cultures." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { user, saved } = useAuth();
  const explored = Math.min(saved.length + 3, countries.length);
  const next = festivals.slice(0, 3);

  return (
    <div>
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Your journey</p>
        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
          Hello, {user?.name.split(" ")[0]} 👋
        </h1>
        <p className="mt-3 text-muted-foreground">
          You've touched {explored} of {countries.length} country profiles. Keep going.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { icon: Globe2, label: "Countries explored", value: `${explored}`, tint: "bg-jade text-jade-foreground" },
          { icon: Flame, label: "Day streak", value: "7", tint: "bg-primary text-primary-foreground" },
          { icon: Sparkles, label: "Items saved", value: `${saved.length}`, tint: "bg-saffron text-saffron-foreground" },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="rounded-3xl border border-border bg-card p-6">
              <span className={`flex size-10 items-center justify-center rounded-xl ${s.tint}`}>
                <s.icon className="size-4" />
              </span>
              <p className="mt-4 font-display text-3xl font-extrabold">{s.value}</p>
              <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-10 rounded-3xl border border-border bg-card p-6">
        <h2 className="text-xl font-bold">Regions covered</h2>
        <div className="mt-5 space-y-4">
          {regions.map((r) => {
            const total = countries.filter((c) => c.region === r).length;
            const done = countries.filter((c) => c.region === r && saved.includes(c.slug)).length;
            const pct = total ? Math.max(12, (done / total) * 100) : 0;
            return (
              <div key={r}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="font-medium">{r}</span>
                  <span className="text-muted-foreground">
                    {done}/{total}
                  </span>
                </div>
                <Progress value={pct} />
              </div>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-12">
        <SectionHead
          kicker="Up next"
          title="Festivals on your radar"
          action={
            <Link to="/festivals" className="text-sm font-medium hover:text-primary">
              Full calendar →
            </Link>
          }
        />
        <div className="grid gap-5 md:grid-cols-3">
          {next.map((f, i) => (
            <Reveal key={f.slug} delay={i * 80}>
              <Link
                to="/festivals/$slug"
                params={{ slug: f.slug }}
                className="hover-lift block overflow-hidden rounded-3xl border border-border bg-card"
              >
                <img src={f.image} alt={f.name} className="h-36 w-full object-cover" />
                <div className="p-5">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">{f.dates}</p>
                  <h3 className="mt-1 font-bold">{f.name}</h3>
                  <p className="text-sm text-muted-foreground">{f.country}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <SectionHead kicker="Recommended for you" title="Because you like traditions" />
        <div className="grid gap-5 md:grid-cols-3">
          {stories.slice(1, 4).map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link to="/stories/$slug" params={{ slug: s.slug }} className="group block">
                <img src={s.image} alt={s.title} className="h-40 w-full rounded-2xl object-cover" />
                <h3 className="mt-3 font-bold group-hover:text-primary">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.read}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
