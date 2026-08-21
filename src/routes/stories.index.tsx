import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { regions, stories } from "@/lib/data";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Cultural Stories & Long Reads — Culturiq" },
      {
        name: "description",
        content: "Long reads on craft, ritual and gathering from writers around the world.",
      },
      { property: "og:title", content: "Cultural Stories & Long Reads — Culturiq" },
      { property: "og:description", content: "Stories that stay with you, from every region." },
    ],
  }),
  component: Stories,
});

function Stories() {
  const [region, setRegion] = useState("All regions");
  const list = stories.filter((s) => region === "All regions" || s.region === region);

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Go deeper</p>
        <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">Stories that stay with you</h1>
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

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {list.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 4) * 90}>
            <Link to="/stories/$slug" params={{ slug: s.slug }} className="group block">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                {s.kicker} · {s.country} · {s.read}
              </p>
              <h2 className="mt-1 text-2xl font-bold group-hover:text-primary">{s.title}</h2>
              <p className="mt-2 text-muted-foreground">{s.excerpt}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
