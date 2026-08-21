import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { regions, traditionCards } from "@/lib/data";

export const Route = createFileRoute("/traditions")({
  head: () => ({
    meta: [
      { title: "Traditions & Rituals — Culturiq" },
      {
        name: "description",
        content: "Cards of living traditions: greetings, crafts, ceremonies and everyday rituals worldwide.",
      },
      { property: "og:title", content: "Traditions & Rituals — Culturiq" },
      { property: "og:description", content: "Explore living traditions from every region." },
    ],
  }),
  component: Traditions,
});

function Traditions() {
  const [region, setRegion] = useState("All regions");
  const list = traditionCards.filter((t) => region === "All regions" || t.region === region);

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Living heritage</p>
        <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">Traditions, up close</h1>
        <p className="mt-4 max-w-lg text-muted-foreground">
          {traditionCards.length} practices — some ceremonial, most utterly everyday.
        </p>
      </Reveal>

      <Reveal delay={80} className="mt-6 flex flex-wrap gap-2">
        {["All regions", ...regions].map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-all hover:-translate-y-0.5 ${
              region === r ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
            }`}
          >
            {r}
          </button>
        ))}
      </Reveal>

      <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {list.map((t, i) => (
          <Reveal key={t.title + t.country} delay={(i % 6) * 70} className="mb-6 break-inside-avoid">
            <div className="hover-lift overflow-hidden rounded-3xl border border-border bg-card">
              <img src={t.image} alt={t.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <Link
                  to="/country/$slug"
                  params={{ slug: t.countrySlug }}
                  className="text-[11px] font-semibold tracking-[0.14em] text-primary uppercase hover:underline"
                >
                  {t.country}
                </Link>
                <h3 className="mt-1 text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
