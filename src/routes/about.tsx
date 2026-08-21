import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal, SectionHead } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { countries, festivals, stories, traditionCards } from "@/lib/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Culturiq — Why we built a culture encyclopedia" },
      {
        name: "description",
        content:
          "Culturiq consolidates world traditions, festival calendars and cuisines into one interactive, visual learning space.",
      },
      { property: "og:title", content: "About Culturiq" },
      { property: "og:description", content: "A visual, structured way to learn about world cultures." },
    ],
  }),
  component: About,
});

const stats = [
  { value: `${countries.length}`, label: "Country profiles" },
  { value: `${festivals.length}`, label: "Festivals mapped" },
  { value: `${traditionCards.length}`, label: "Tradition cards" },
  { value: `${stories.length}`, label: "Long reads" },
];

const flow = [
  { step: "Discover", text: "Land on the home page, search or filter by theme." },
  { step: "Explore", text: "Open the world map and pick a country pin." },
  { step: "Learn", text: "Read the profile: traditions, dishes, festivals." },
  { step: "Save", text: "Bookmark anything; sign up to keep a collection." },
  { step: "Return", text: "Your dashboard tracks saves, streaks and what's next." },
];

function About() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="float-slow absolute -top-16 -right-10 size-72 rounded-full bg-jade/30" />
        <div className="relative mx-auto w-full max-w-5xl px-5 py-20">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">About us</p>
            <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">
              Cultural learning shouldn't feel like homework.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Most resources on global culture are scattered, text-heavy or dull. Culturiq brings
              traditions, festival calendars and cuisines into one interactive space — country
              profiles, visual maps and cards you actually want to browse.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-4 px-5 py-12 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="rounded-3xl border border-border bg-card p-6 text-center">
              <p className="font-display text-4xl font-extrabold text-primary">{s.value}</p>
              <p className="mt-1 text-xs tracking-[0.14em] text-muted-foreground uppercase">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 pb-16">
        <SectionHead kicker="How it works" title="The user flow, in five steps" />
        <div className="space-y-3">
          {flow.map((f, i) => (
            <Reveal key={f.step} delay={i * 80}>
              <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold">{f.step}</p>
                  <p className="text-sm text-muted-foreground">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12">
          <div className="rounded-3xl bg-ink p-10 text-center text-cream">
            <h2 className="text-3xl font-bold">Start with one country tonight.</h2>
            <p className="mx-auto mt-3 max-w-md text-cream/70">
              Free to browse, free to save. No algorithm deciding what culture you see next.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild className="rounded-full">
                <Link to="/signup">Create an account</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-cream/30 bg-transparent text-cream hover:bg-cream/10">
                <Link to="/explore">Open the map</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
