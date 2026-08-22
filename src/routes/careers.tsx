import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Culturiq" },
      {
        name: "description",
        content:
          "Join Culturiq. Explore open roles and help build the world's cultural encyclopedia.",
      },
      { property: "og:title", content: "Careers — Culturiq" },
      { property: "og:description", content: "Open roles at Culturiq." },
    ],
  }),
  component: Careers,
});

const values = [
  {
    title: "Curiosity first",
    desc: "We're driven by genuine wonder about cultures, languages, and traditions across the world.",
  },
  {
    title: "Design with heart",
    desc: "We believe interfaces should feel inviting and accessible, turning cultural discovery into joy.",
  },
  {
    title: "Open by default",
    desc: "We share knowledge, credit contributors, and build with open and ethical sources.",
  },
  {
    title: "Remote-friendly",
    desc: "Work from anywhere. We collaborate async-first and respect deep-focus time.",
  },
];

const jobs = [
  {
    title: "Frontend Engineer",
    location: "Remote (US/UK/EU)",
    type: "Full-time",
    desc: "Build beautifully polished React experiences that bring global cultures to life.",
  },
  {
    title: "Content Curator",
    location: "Remote (Global)",
    type: "Full-time",
    desc: "Research, verify, and curate cultural content from communities worldwide.",
  },
  {
    title: "Product Designer",
    location: "San Francisco, CA",
    type: "Full-time",
    desc: "Shape the look, feel, and flow of the world's most visual culture explorer.",
  },
  {
    title: "Data Scientist",
    location: "Remote (US/UK/EU)",
    type: "Full-time",
    desc: "Help surface meaningful cultural connections through data and recommendation systems.",
  },
];

function Careers() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-20">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Careers</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
          Help build the world's cultural encyclopedia.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          We're a small, remote-friendly team on a big mission: to make the world's cultures
          accessible, visual, and endlessly discoverable. If you care about cultural education and
          thoughtful design, we'd love to hear from you.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-12">
        <div className="rounded-3xl bg-jade/10 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-jade-foreground">Open positions</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-jade-foreground/80">
            We're hiring across engineering, design, content, and data. All roles are remote unless
            otherwise noted.
          </p>
        </div>
      </Reveal>

      <Reveal delay={160} className="mt-12">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          Open roles
        </h2>
        <div className="mt-6 space-y-4">
          {jobs.map((job, i) => (
            <Reveal key={job.title} delay={i * 80}>
              <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-accent/5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <div className="flex flex-col gap-1 text-right text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" /> {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3" /> {job.location}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{job.desc}</p>
                <div className="mt-4">
                  <Button asChild size="sm" className="rounded-full">
                    <a href="mailto:careers@culturiq.com?subject=Application — {job.title}">
                      Apply now →
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal delay={240} className="mt-16">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          What we believe
        </h2>
        <p className="mt-2 text-muted-foreground">
          These values guide how we build Culturiq and how we work together.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal delay={320} className="mt-16">
        <div className="rounded-3xl border border-border bg-card p-8 text-center">
          <h2 className="text-2xl font-bold">Don't see the right role?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We're always looking for thoughtful people to join the team. Send us a note with what
            you'd love to work on.
          </p>
          <div className="mt-4">
            <Button asChild size="sm" className="rounded-full">
              <a href="mailto:careers@culturiq.com">Say hello →</a>
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
