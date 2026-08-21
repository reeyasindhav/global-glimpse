import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { countries } from "@/lib/data";

/** Stylised continent blobs + interactive country pins (no external map deps). */
export function WorldMap({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const hovered = countries.find((c) => c.slug === active);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-jade/90 p-4 md:p-6">
      <svg viewBox="0 0 100 74" className="w-full" role="img" aria-label="World map explorer">
        <g fill="currentColor" className="text-jade-foreground/25">
          <path d="M40 30 q6-9 14-8 t10 6 -3 12 -8 6 -6 12 -6 4 -3-12 z" />
          <path d="M14 26 q8-12 20-10 t10 4 -6 8 -10 4 -8 6 z" />
          <path d="M22 44 q7-6 10 2 t-2 16 -6 8 -4-10 z" />
          <path d="M48 20 q14-10 30-4 t14 10 -12 8 -18-4 -14-4 z" />
          <path d="M64 30 q12-4 20 4 t2 12 -12 6 -12-8 z" />
          <path d="M80 56 q8-4 10 4 t-6 6 -6-4 z" />
        </g>
        {countries.map((c, i) => (
          <g
            key={c.slug}
            transform={`translate(${c.x} ${c.y})`}
            onMouseEnter={() => setActive(c.slug)}
            onMouseLeave={() => setActive(null)}
            style={{ animation: `pin-pop 0.5s ${i * 70}ms both`, cursor: "pointer" }}
          >
            <circle r="2.6" className="fill-primary/25" />
            <circle r="1.25" className="fill-primary" />
            {active === c.slug && (
              <text y="-4" textAnchor="middle" className="fill-jade-foreground text-[3px] font-bold">
                {c.name}
              </text>
            )}
          </g>
        ))}
      </svg>

      {!compact && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((c) => (
            <Link
              key={c.slug}
              to="/country/$slug"
              params={{ slug: c.slug }}
              onMouseEnter={() => setActive(c.slug)}
              className={`rounded-2xl bg-card/90 px-4 py-3 text-left transition-all hover:-translate-y-1 ${
                active === c.slug ? "ring-2 ring-primary" : ""
              }`}
            >
              <p className="text-lg">{c.flag}</p>
              <p className="mt-1 text-sm font-semibold">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.region}</p>
            </Link>
          ))}
        </div>
      )}

      {compact && (
        <div className="mt-2 flex items-center justify-between border-t border-jade-foreground/20 pt-4 text-sm text-jade-foreground">
          <span>{hovered ? `${hovered.flag} ${hovered.name}` : "5,000+ stories to explore"}</span>
          <Link to="/explore" className="font-semibold hover:underline">
            Open map →
          </Link>
        </div>
      )}
    </div>
  );
}
