import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { CultureImage } from "@/components/site/CultureImage";
import { festivals, months, regions } from "@/lib/data";

export const Route = createFileRoute("/festivals/")({
  head: () => ({
    meta: [
      { title: "Festival Calendar — Culturiq" },
      {
        name: "description",
        content: "A month-by-month calendar of world festivals, from Nowruz to Día de Muertos.",
      },
      { property: "og:title", content: "Festival Calendar — Culturiq" },
      { property: "og:description", content: "Browse world festivals by month and region." },
    ],
  }),
  component: Festivals,
});

function Festivals() {
  const [region, setRegion] = useState("All regions");
  const list = festivals.filter((f) => region === "All regions" || f.region === region);

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          Mark your calendar
        </p>
        <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">A year of celebrations</h1>
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

      <div className="mt-10 space-y-10">
        {months.map((m, mi) => {
          const inMonth = list.filter((f) => f.monthIndex === mi);
          if (!inMonth.length) return null;
          return (
            <Reveal key={m}>
              <div className="flex items-center gap-3">
                <span className="flex size-11 flex-col items-center justify-center rounded-2xl bg-saffron text-[10px] font-bold text-saffron-foreground uppercase">
                  <CalendarDays className="size-4" />
                </span>
                <h2 className="text-2xl font-bold">{m}</h2>
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">{inMonth.length} festivals</span>
              </div>
              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {inMonth.map((f, i) => (
                  <Reveal key={f.slug} delay={i * 80}>
                    <Link
                      to="/festivals/$slug"
                      params={{ slug: f.slug }}
                      className="hover-lift group flex gap-4 rounded-3xl border border-border bg-card p-4"
                    >
                      <CultureImage
                        src={f.image}
                        alt={f.name}
                        className="size-24 shrink-0 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
                          {f.dates}
                        </p>
                        <h3 className="mt-1 font-bold">{f.name}</h3>
                        <p className="text-xs text-muted-foreground">{f.country}</p>
                        <span className="mt-2 inline-block rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium">
                          {f.type}
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-12 text-center text-xs text-muted-foreground">
        Festival imagery sourced from Wikimedia Commons under Creative Commons licences.
      </p>
    </div>
  );
}
