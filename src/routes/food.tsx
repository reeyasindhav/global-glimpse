import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { CultureImage } from "@/components/site/CultureImage";
import { countries, regions } from "@/lib/data";

export const Route = createFileRoute("/food")({
  head: () => ({
    meta: [
      { title: "Food & Culinary Traditions — Culturiq" },
      {
        name: "description",
        content: "Signature dishes and the traditions behind them, from mole negro to khao soi.",
      },
      { property: "og:title", content: "Food & Culinary Traditions — Culturiq" },
      { property: "og:description", content: "Explore world cuisines dish by dish." },
    ],
  }),
  component: Food,
});

const dishes = countries.flatMap((c) =>
  c.dishes.map((d) => ({
    ...d,
    country: c.name,
    countrySlug: c.slug,
    region: c.region,
    flag: c.flag,
  })),
);

function Food() {
  const [region, setRegion] = useState("All regions");
  const list = dishes.filter((d) => region === "All regions" || d.region === region);

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          Taste the world
        </p>
        <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">Food is the fastest way in</h1>
      </Reveal>

      <Reveal delay={80} className="mt-6 flex flex-wrap gap-2">
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
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((d, i) => (
          <Reveal key={d.name} delay={(i % 6) * 70}>
            <div className="hover-lift group overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative h-48 overflow-hidden">
                <CultureImage
                  src={d.image}
                  alt={d.name}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-bold">
                  {d.flag} {d.country}
                </span>
                <span className="absolute bottom-2 right-2 rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-white">
                  {d.attribution}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">{d.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.note}</p>
                <Link
                  to="/country/$slug"
                  params={{ slug: d.countrySlug }}
                  className="mt-4 inline-block text-sm font-medium text-primary"
                >
                  More from {d.country} →
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-12 text-center text-xs text-muted-foreground">
        Food photography sourced from Wikimedia Commons under Creative Commons licences. Attribution
        per image in the corner badge.
      </p>
    </div>
  );
}
