import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Compass, MapPin, Search } from "lucide-react";
import { useState } from "react";

import { Reveal, SectionHead } from "@/components/site/Reveal";
import { CultureImage } from "@/components/site/CultureImage";
import { WorldMap } from "@/components/site/WorldMap";
import { Button } from "@/components/ui/button";
import { countries, festivals, stories } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Culturiq — One world, countless ways to celebrate" },
      {
        name: "description",
        content:
          "An interactive encyclopedia of world cultures: country profiles, a festival calendar, cuisine cards and a visual map explorer.",
      },
      { property: "og:title", content: "Culturiq — One world, countless ways to celebrate" },
      {
        property: "og:description",
        content: "Explore traditions, festivals and food from every corner of the world.",
      },
    ],
  }),
  component: Home,
});

const filters = ["Everything", "Festivals", "Food & drink", "Traditions", "Arts & craft"];

function Home() {
  const [filter, setFilter] = useState("Everything");
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const lead = stories[0]!;
  const upcoming = festivals.filter((f) => ["holi", "nowruz", "songkran"].includes(f.slug));

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="float-slow absolute -top-10 right-10 size-64 rounded-full bg-saffron/50 blur-[2px]" />
        <div
          className="float-slow absolute top-52 right-40 size-56 rounded-full bg-jade/30"
          style={{ animationDelay: "1.4s" }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 md:py-24">
          <div className="reveal max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-saffron px-3 py-1.5 text-[11px] font-bold tracking-[0.16em] text-saffron-foreground uppercase">
              <Compass className="size-3" /> A more curious world starts here
            </span>
            <h1 className="mt-6 text-5xl leading-[0.95] font-extrabold text-balance-tight md:text-7xl">
              One world. <span className="text-primary">Countless</span> ways to celebrate.
            </h1>
            <p className="mt-6 max-w-md text-muted-foreground">
              Explore the traditions, flavors, and stories that make every corner of our world
              wonderfully unique.
            </p>

            <form
              className="mt-8 flex max-w-xl items-center gap-2 rounded-full border border-border bg-card p-2 shadow-sm"
              onSubmit={(e) => {
                e.preventDefault();
                navigate({ to: "/explore", search: { q } });
              }}
            >
              <Search className="ml-3 size-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="What would you like to discover?"
                className="flex-1 bg-transparent text-sm outline-none"
              />
              <Button type="submit" className="rounded-full">
                Search
              </Button>
            </form>

            <div className="mt-5 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all hover:-translate-y-0.5 ${
                    filter === f
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Feature row */}
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Your daily dose of discovery
              </p>
              <div className="mt-2 mb-6 flex items-end justify-between gap-4">
                <h2 className="text-3xl font-bold md:text-4xl">A world worth knowing</h2>
                <Link to="/stories" className="text-sm font-medium hover:text-primary">
                  See all stories →
                </Link>
              </div>
              <Link
                to="/stories/$slug"
                params={{ slug: lead.slug }}
                className="hover-lift group relative block h-[340px] overflow-hidden rounded-3xl"
              >
                <CultureImage
                  src={lead.image}
                  alt={lead.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-0 p-6 text-cream">
                  <span className="rounded-md bg-saffron px-2 py-1 text-[10px] font-bold tracking-widest text-saffron-foreground uppercase">
                    Culture of the day
                  </span>
                  <h3 className="mt-3 text-2xl leading-tight font-bold">{lead.title}</h3>
                  <p className="mt-2 flex items-center gap-2 text-xs text-cream/80">
                    <MapPin className="size-3" /> {lead.country} · {lead.read}
                  </p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={120} className="lg:pt-[104px]">
              <div className="rounded-3xl bg-jade p-6">
                <p className="text-[11px] font-bold tracking-[0.18em] text-jade-foreground/70 uppercase">
                  Explore by place
                </p>
                <div className="flex items-start justify-between">
                  <h3 className="mt-1 text-2xl font-bold text-jade-foreground">
                    Where will you
                    <br />
                    go next?
                  </h3>
                  <Link
                    to="/explore"
                    className="flex size-9 items-center justify-center rounded-full bg-jade-foreground/10 transition hover:bg-jade-foreground/20"
                  >
                    <ArrowRight className="size-4 text-jade-foreground" />
                  </Link>
                </div>
                <div className="mt-4">
                  <WorldMap compact />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FESTIVALS */}
      <section className="border-y border-border bg-card/60">
        <div className="mx-auto w-full max-w-7xl px-5 py-16">
          <SectionHead
            kicker="Mark your calendar"
            title="Festivals coming up"
            action={
              <Link to="/festivals" className="text-sm font-medium hover:text-primary">
                View calendar →
              </Link>
            }
          />
          <div className="grid gap-5 md:grid-cols-3">
            {upcoming.map((f, i) => (
              <Reveal key={f.slug} delay={i * 100}>
                <Link
                  to="/festivals/$slug"
                  params={{ slug: f.slug }}
                  className="hover-lift block overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <div className="relative h-40">
                    <CultureImage src={f.image} alt={f.name} className="size-full object-cover" />
                    <span className="absolute top-3 left-3 rounded-lg bg-cream/95 px-2 py-1 text-xs font-bold">
                      {f.dates}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                      {f.country}
                    </p>
                    <h3 className="mt-1 text-lg font-bold">{f.name}</h3>
                    <p className="mt-3 text-sm font-medium text-primary">Discover more →</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16">
        <SectionHead kicker="Go deeper" title="Stories that stay with you" />
        <div className="grid gap-6 md:grid-cols-3">
          {stories.slice(1, 4).map((s, i) => (
            <Reveal key={s.slug} delay={i * 100}>
              <Link to="/stories/$slug" params={{ slug: s.slug }} className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <CultureImage
                    src={s.image}
                    alt={s.title}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {s.kicker}
                </p>
                <h3 className="mt-1 text-lg font-bold group-hover:text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* COUNTRY MARQUEE */}
      <section className="overflow-hidden border-t border-border bg-ink py-10 text-cream">
        <div className="marquee-track flex w-max gap-10 px-5">
          {[...countries, ...countries].map((c, i) => (
            <span key={i} className="font-display text-2xl font-bold whitespace-nowrap opacity-80">
              {c.flag} {c.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
