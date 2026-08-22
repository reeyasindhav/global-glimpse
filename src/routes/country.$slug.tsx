import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Bookmark, Globe2, Languages, MapPin, Users } from "lucide-react";
import { toast } from "sonner";

import { Reveal, SectionHead } from "@/components/site/Reveal";
import { CultureImage } from "@/components/site/CultureImage";
import { Button } from "@/components/ui/button";
import { countries, festivals } from "@/lib/data";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/country/$slug")({
  loader: ({ params }) => {
    const country = countries.find((c) => c.slug === params.slug);
    if (!country) throw notFound();
    return { country };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [{ title: "Country not found — Culturiq" }, { name: "robots", content: "noindex" }],
      };
    const c = loaderData.country;
    return {
      meta: [
        { title: `${c.name} — Culture, traditions & food | Culturiq` },
        { name: "description", content: c.intro.slice(0, 155) },
        { property: "og:title", content: `${c.name} culture profile — Culturiq` },
        { property: "og:description", content: c.tagline },
      ],
    };
  },
  component: CountryPage,
});

function CountryPage() {
  const { country: c } = Route.useLoaderData();
  const { saved, toggleSaved } = useAuth();
  const isSaved = saved.includes(c.slug);
  const countryFestivals = festivals.filter((f) => f.countrySlug === c.slug);

  const facts = [
    { icon: MapPin, label: "Capital", value: c.capital },
    { icon: Languages, label: "Languages", value: c.language },
    { icon: Users, label: "Population", value: c.population },
    { icon: Globe2, label: "Region", value: c.region },
  ];

  return (
    <div>
      <section className="relative h-[52vh] min-h-[360px] overflow-hidden">
        <CultureImage
          src={c.image}
          alt={c.name}
          priority
          sizes="100vw"
          className="size-full object-cover"
        />
        <span className="absolute bottom-4 right-4 rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-white">
          {c.imageAttribution}
        </span>
        <div className={`absolute inset-0 bg-gradient-to-tr ${c.colors} mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
        <div className="absolute bottom-0 mx-auto w-full max-w-7xl px-5 pb-10 text-cream">
          <span className="text-5xl">{c.flag}</span>
          <h1 className="reveal mt-3 text-5xl font-extrabold md:text-7xl">{c.name}</h1>
          <p className="mt-3 max-w-xl text-cream/85">{c.tagline}</p>
        </div>
      </section>

      <section className="border-b border-border bg-card/60">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 70}>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="flex size-10 items-center justify-center rounded-xl bg-saffron text-saffron-foreground">
                  <f.icon className="size-4" />
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                    {f.label}
                  </p>
                  <p className="font-semibold">{f.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14">
        <Reveal className="max-w-3xl">
          <p className="text-xl leading-relaxed">{c.intro}</p>
          <Button
            className="mt-6 rounded-full"
            variant={isSaved ? "secondary" : "default"}
            onClick={() => {
              toggleSaved(c.slug);
              toast.success(
                isSaved ? "Removed from collection" : `${c.name} saved to your collection`,
              );
            }}
          >
            <Bookmark className={`size-4 ${isSaved ? "fill-current" : ""}`} />
            {isSaved ? "Saved" : "Save country"}
          </Button>
        </Reveal>

        <div className="mt-14">
          <SectionHead kicker="Traditions" title={`How ${c.name} celebrates`} />
          <div className="grid gap-5 md:grid-cols-3">
            {c.traditions.map((t, i) => (
              <Reveal key={t.title} delay={i * 90}>
                <div className="hover-lift h-full rounded-3xl border border-border bg-card p-6">
                  <span className="text-xs font-bold tracking-[0.16em] text-primary uppercase">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <SectionHead
            kicker="On the table"
            title="Dishes worth travelling for"
            action={
              <Link to="/food" className="text-sm font-medium hover:text-primary">
                All cuisines →
              </Link>
            }
          />
          <div className="grid gap-5 md:grid-cols-3">
            {c.dishes.map((d, i) => (
              <Reveal key={d.name} delay={i * 90}>
                <div className="hover-lift overflow-hidden rounded-3xl border border-border bg-card">
                  <CultureImage src={d.image} alt={d.name} className="h-44 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="font-bold">{d.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {countryFestivals.length > 0 && (
          <div className="mt-14">
            <SectionHead kicker="Calendar" title="Festivals to plan around" />
            <div className="grid gap-5 md:grid-cols-2">
              {countryFestivals.map((f, i) => (
                <Reveal key={f.slug} delay={i * 90}>
                  <Link
                    to="/festivals/$slug"
                    params={{ slug: f.slug }}
                    className="hover-lift flex gap-4 rounded-3xl border border-border bg-card p-4"
                  >
                    <CultureImage
                      src={f.image}
                      alt={f.name}
                      className="size-24 rounded-2xl object-cover"
                    />
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
                        {f.dates}
                      </p>
                      <h3 className="mt-1 text-lg font-bold">{f.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{f.blurb}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <div className="mt-14">
          <SectionHead kicker="Keep going" title="Neighbouring cultures" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {countries
              .filter((o) => o.region === c.region && o.slug !== c.slug)
              .slice(0, 3)
              .map((o, i) => (
                <Reveal key={o.slug} delay={i * 90}>
                  <Link
                    to="/country/$slug"
                    params={{ slug: o.slug }}
                    className="hover-lift block rounded-3xl border border-border bg-card p-6"
                  >
                    <p className="text-2xl">{o.flag}</p>
                    <h3 className="mt-2 text-lg font-bold">{o.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{o.tagline}</p>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
