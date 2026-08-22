import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Culturiq" },
      {
        name: "description",
        content:
          "Contact the Culturiq team. Get in touch with questions, feedback, or partnership inquiries.",
      },
      { property: "og:title", content: "Contact — Culturiq" },
      { property: "og:description", content: "Reach out to the Culturiq team." },
    ],
  }),
  component: Contact,
});

const contacts = [
  {
    icon: Mail,
    label: "Email",
    detail: "hello@culturiq.com",
    href: "mailto:hello@culturiq.com",
    sub: "For general questions and support — we aim to reply within 24 hours.",
  },
  {
    icon: Phone,
    label: "Phone",
    detail: "+1 (415) 555-0198",
    href: "tel:+14155550198",
    sub: "Monday to Friday, 9 AM – 6 PM (PT).",
  },
  {
    icon: MapPin,
    label: "Office",
    detail: "San Francisco, CA, USA",
    href: "https://maps.google.com/?q=San+Francisco",
    sub: "We're a remote-friendly team with roots in the Bay Area.",
  },
];

function Contact() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-20">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Contact</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Let's talk.</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Have a question about Culturiq? Want to share a cultural story, report an issue, or
          explore a partnership? Send us a message — we'd love to hear from you.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-12">
        <div className="grid gap-8 sm:grid-cols-3">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.label} delay={i * 80}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center text-center"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-1 font-medium">{c.detail}</p>
                  <p className="mt-1.5 text-xs text-muted-foreground">{c.sub}</p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={200} className="mt-16">
        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="text-xl font-bold">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-muted-foreground">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus-within:ring-2 focus-within:ring-primary/30"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus-within:ring-2 focus-within:ring-primary/30"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-muted-foreground">Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus-within:ring-2 focus-within:ring-primary/30"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-muted-foreground">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus-within:ring-2 focus-within:ring-primary/30"
              />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="w-full rounded-full sm:w-auto">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </Reveal>

      <Reveal delay={280} className="mt-16">
        <div className="rounded-3xl border border-border bg-jade/10 p-10 text-center">
          <h2 className="font-display text-3xl font-bold text-jade-foreground">
            Partnering with museums & cultural orgs?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-jade-foreground/80">
            We collaborate with cultural institutions worldwide to bring authentic stories to the
            map. Let's build something meaningful together.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-6 rounded-full border-jade/30 bg-transparent text-jade-foreground hover:bg-jade/20"
          >
            <a href="mailto:partnerships@culturiq.com">Reach our partnerships team →</a>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
