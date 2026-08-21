import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bookmark, CalendarDays, MapPin } from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { countries, festivals } from "@/lib/data";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/festivals/$slug")({
  loader: ({ params }) => {
    const festival = festivals.find((f) => f.slug === params.slug);
    if (!festival) throw notFound();
    return { festival };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return { meta: [{ title: "Festival not found — Culturiq" }, { name: "robots", content: "noindex" }] };
    const f = loaderData.festival;
    return {
      meta: [
        { title: `${f.name} — Festival guide | Culturiq` },
        { name: "description", content: f.blurb },
        { property: "og:title", content: `${f.name} — Culturiq` },
        { property: "og:description", content: f.blurb },
      ],
    };
  },
  component: FestivalPage,
});

function FestivalPage() {
  const { festival: f } = Route.useLoaderData();
  const country = countries.find((c) => c.slug === f.countrySlug);
  const { saved, toggleSaved, user } = useAuth();
  const isSaved = saved.includes(f.slug);

  return (
    <article>
      <div className="relative h-[46vh] min-h-[320px] overflow-hidden">
        <img src={f.image} alt={f.name} className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="absolute bottom-0 mx-auto w-full max-w-5xl px-5 pb-10 text-cream">
          <Link to="/festivals" className="inline-flex items-center gap-2 text-sm text-cream/80 hover:text-cream">
            <ArrowLeft className="size-4" /> Festival calendar
          </Link>
          <h1 className="reveal mt-4 text-4xl font-extrabold md:text-6xl">{f.name}</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-cream/85">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-4" /> {f.dates}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4" /> {f.country}
            </span>
            <span className="rounded-full bg-cream/15 px-2.5 py-0.5">{f.type}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-5xl gap-10 px-5 py-12 md:grid-cols-[1fr_260px]">
        <Reveal>
          <p className="text-xl leading-relaxed">{f.blurb}</p>
          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>
              {f.name} is one of the anchor moments of the {f.region} cultural year. Preparations
              begin weeks ahead: markets restock, households clean and decorate, and families
              rehearse the songs and recipes that only appear at this time.
            </p>
            <p>
              What outsiders see as a single spectacular day is usually the visible peak of a longer
              arc — a period of fasting, making, remembering or waiting that gives the celebration
              its weight.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["What to wear", "What to eat", "How to join in"].map((t, i) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-4">
                <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {[
                    "Light clothes you don't mind staining, and comfortable shoes.",
                    "Street stalls open early; try the festival-only sweets first.",
                    "Follow the lead of hosts and ask before photographing rituals.",
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="sticky top-24 space-y-4">
            <Button
              className="w-full rounded-full"
              variant={isSaved ? "secondary" : "default"}
              onClick={() => {
                toggleSaved(f.slug);
                toast.success(
                  isSaved ? "Removed from your collection" : user ? "Saved to your dashboard" : "Saved — sign in to sync",
                );
              }}
            >
              <Bookmark className={`size-4 ${isSaved ? "fill-current" : ""}`} />
              {isSaved ? "Saved" : "Save festival"}
            </Button>
            {country && (
              <Link
                to="/country/$slug"
                params={{ slug: country.slug }}
                className="hover-lift block rounded-2xl border border-border bg-card p-4"
              >
                <p className="text-xs text-muted-foreground">Country profile</p>
                <p className="mt-1 font-bold">
                  {country.flag} {country.name}
                </p>
                <p className="mt-2 text-sm text-primary">Open profile →</p>
              </Link>
            )}
            <div className="rounded-2xl bg-jade p-4 text-jade-foreground">
              <p className="text-sm font-semibold">Also this month</p>
              <ul className="mt-2 space-y-1 text-sm">
                {festivals
                  .filter((o) => o.monthIndex === f.monthIndex && o.slug !== f.slug)
                  .map((o) => (
                    <li key={o.slug}>
                      <Link to="/festivals/$slug" params={{ slug: o.slug }} className="hover:underline">
                        {o.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
