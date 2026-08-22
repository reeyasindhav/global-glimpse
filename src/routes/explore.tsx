import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { CultureImage } from "@/components/site/CultureImage";
import { WorldMap } from "@/components/site/WorldMap";
import { countries, regions } from "@/lib/data";

type SearchParams = { q?: string | undefined };

export const Route = createFileRoute("/explore")({
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    q: typeof search["q"] === "string" ? search["q"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Interactive World Map Explorer — Culturiq" },
      {
        name: "description",
        content:
          "Pan a stylised world map and open country profiles for traditions, festivals and food.",
      },
      { property: "og:title", content: "Interactive World Map Explorer — Culturiq" },
      {
        property: "og:description",
        content: "Discover cultures country by country on the Culturiq map.",
      },
    ],
  }),
  component: Explore,
});

function Explore() {
  const { q } = Route.useSearch();
  const [query, setQuery] = useState(q ?? "");
  const [region, setRegion] = useState<string>("All regions");

  const list = countries.filter(
    (c) =>
      (region === "All regions" || c.region === region) &&
      (c.name + c.tagline + c.region).toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          Explore by place
        </p>
        <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">The world, one pin at a time</h1>
        <p className="mt-4 max-w-lg text-muted-foreground">
          Hover a pin to preview, click a card to open the full country profile.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5">
            <Search className="size-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search countries, regions, themes…"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
          {["All regions", ...regions].map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-all hover:-translate-y-0.5 ${
                region === r
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={160} className="mt-8">
        <WorldMap />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((c, i) => (
          <Reveal key={c.slug} delay={i * 70}>
            <Link
              to="/country/$slug"
              params={{ slug: c.slug }}
              className="hover-lift group block overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative h-44 overflow-hidden">
                <CultureImage
                  src={c.image}
                  alt={c.name}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${c.colors} mix-blend-multiply`}
                />
                <span className="absolute top-3 left-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-bold">
                  {c.flag} {c.region}
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-white">
                  {c.imageAttribution}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.tagline}</p>
                <p className="mt-4 text-sm font-medium text-primary">Open profile →</p>
              </div>
            </Link>
          </Reveal>
        ))}
        {list.length === 0 && (
          <p className="text-muted-foreground">No countries match that search yet.</p>
        )}
      </div>
      <p className="mt-12 text-center text-xs text-muted-foreground">
        Country imagery sourced from Wikimedia Commons under Creative Commons licences.
      </p>
    </div>
  );
}
