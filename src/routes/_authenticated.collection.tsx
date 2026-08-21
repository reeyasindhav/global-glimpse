import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, Trash2 } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { countries, festivals, stories } from "@/lib/data";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/_authenticated/collection")({
  head: () => ({
    meta: [
      { title: "My collection — Culturiq" },
      { name: "description", content: "Everything you've saved: countries, festivals and stories in one place." },
      { property: "og:title", content: "My collection — Culturiq" },
      { property: "og:description", content: "Your saved cultures on Culturiq." },
    ],
  }),
  component: Collection,
});

function Collection() {
  const { saved, toggleSaved } = useAuth();

  const items = [
    ...countries.filter((c) => saved.includes(c.slug)).map((c) => ({ kind: "Country", slug: c.slug, title: c.name, sub: c.tagline, image: c.image })),
    ...festivals.filter((f) => saved.includes(f.slug)).map((f) => ({ kind: "Festival", slug: f.slug, title: f.name, sub: `${f.country} · ${f.dates}`, image: f.image })),
    ...stories.filter((s) => saved.includes(s.slug)).map((s) => ({ kind: "Story", slug: s.slug, title: s.title, sub: s.read, image: s.image })),
  ];

  return (
    <div>
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Saved</p>
        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">My collection</h1>
        <p className="mt-3 text-muted-foreground">{items.length} saved items</p>
      </Reveal>

      {items.length === 0 ? (
        <Reveal delay={100} className="mt-10 rounded-3xl border border-dashed border-border bg-card p-12 text-center">
          <Bookmark className="mx-auto size-8 text-muted-foreground" />
          <h2 className="mt-4 text-xl font-bold">Nothing saved yet</h2>
          <p className="mt-2 text-muted-foreground">
            Tap the save button on any country, festival or story to keep it here.
          </p>
          <Button asChild className="mt-6 rounded-full">
            <Link to="/explore">Explore the map</Link>
          </Button>
        </Reveal>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.kind + it.slug} delay={(i % 6) * 70}>
              <div className="hover-lift overflow-hidden rounded-3xl border border-border bg-card">
                <img src={it.image} alt={it.title} className="h-40 w-full object-cover" />
                <div className="p-5">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">{it.kind}</p>
                  <h3 className="mt-1 font-bold">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.sub}</p>
                  <button
                    onClick={() => toggleSaved(it.slug)}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="size-3.5" /> Remove
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
