import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Culturiq" },
      {
        name: "description",
        content:
          "Frequently asked questions about Culturiq — browsing, saving, accounts, and more.",
      },
      { property: "og:title", content: "FAQ — Culturiq" },
      { property: "og:description", content: "Answers to common questions about Culturiq." },
    ],
  }),
  component: Faq,
});

const faqs = [
  {
    q: "Do I need an account to use Culturiq?",
    a: "No. You can browse country profiles, festivals, traditions, food, and stories without signing up. Creating an account lets you save items to your collection and track your progress on the dashboard.",
  },
  {
    q: "Is Culturiq free?",
    a: "Yes. Browsing, searching, and saving content is completely free. We believe cultural learning should be accessible to everyone.",
  },
  {
    q: "How do I save items to my collection?",
    a: "Click the bookmark icon on any country profile, festival, tradition card, dish, or story. If you're signed in, the item is saved to your collection automatically. Not signed in? Create an account in under a minute.",
  },
  {
    q: "Can I edit the information on a country page?",
    a: "Culturiq is built for discovery, not editing. The content is curated from open and authoritative sources. If you spot an inaccuracy, please reach out via our Contact page so we can review it.",
  },
  {
    q: "Where do the images come from?",
    a: "We use openly licensed images from sources such as Unsplash, Wikimedia Commons, and Pexels. Attribution is provided where required by the source license.",
  },
  {
    q: "Do you use cookies?",
    a: "We use a small number of essential cookies to keep the site running and to remember your preferences. See our Cookie Policy for full details.",
  },
  {
    q: "How often is content updated?",
    a: "We add new country profiles, festivals, traditions, and stories throughout the year, with a focus on seasonal events. Major updates are announced on the site.",
  },
  {
    q: "Is my data shared with third parties?",
    a: "We don't sell your personal data. We may share aggregated, anonymized usage data with trusted partners to improve the experience. See our Privacy Policy for full details.",
  },
];

function Faq() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-20">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">FAQ</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Frequently asked questions</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Answers to common questions about Culturiq. Still stuck?
          <a
            href="/contact"
            className="ml-1 text-primary underline decoration-primary/30 underline-offset-2"
          >
            Get in touch
          </a>
          .
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-12">
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group rounded-2xl border border-border bg-card p-6 open:bg-accent/5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <h3 className="text-lg font-bold">{f.q}</h3>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-180">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 9 12 15 6 9" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal delay={280} className="mt-16">
        <div className="rounded-3xl border border-border bg-card p-8 text-center">
          <h2 className="text-xl font-bold">Have more questions?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Our team is here to help. Send us an email or visit our Contact page.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@culturiq.com"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Email us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              Contact page
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
