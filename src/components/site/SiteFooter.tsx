import type { ForwardRefExoticComponent } from "react";
import { Dribbble, Globe2, Heart, Instagram, type LucideProps, Mail, Twitter } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const exploreLinks = [
  { to: "/explore", label: "Explore map" },
  { to: "/festivals", label: "Festival calendar" },
  { to: "/traditions", label: "Traditions" },
  { to: "/food", label: "Cuisines" },
  { to: "/stories", label: "Stories" },
];

const companyLinks = [
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

const legalLinks = [
  { to: "/privacy", label: "Privacy" },
  { to: "/cookies", label: "Cookies" },
  { to: "/terms", label: "Terms" },
];

type Icon = ForwardRefExoticComponent<LucideProps>;

const social: { icon: Icon; label: string; href: string }[] = [
  { icon: Globe2, label: "Website", href: "https://www.culturiq.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Dribbble, label: "Dribbble", href: "https://dribbble.com" },
];

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.14em] text-cream/40 uppercase">{title}</p>
      {children}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-cream">
      <div className="mx-auto w-full max-w-7xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Globe2 className="size-4" />
              </span>
              <span>culturiq.</span>
            </Link>
            <p className="mt-4 text-sm text-cream/70">
              An interactive encyclopedia of world cultures, festivals, and cuisines. Made for the
              endlessly curious.
            </p>
            <div className="mt-6 flex items-center gap-1.5 text-sm text-cream/70">
              Built with care <Heart className="size-3.5 fill-primary text-primary" />
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-3 grid grid-cols-1 gap-8 md:grid-cols-5">
            <FooterColumn title="Explore">
              <ul className="mt-4 flex flex-col gap-2.5">
                {exploreLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream/70 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Company">
              <ul className="mt-4 flex flex-col gap-2.5">
                {companyLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream/70 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Legal">
              <ul className="mt-4 flex flex-col gap-2.5">
                {legalLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream/70 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Social">
              <div className="mt-4 flex items-center gap-3">
                {social.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex size-8 items-center justify-center rounded-lg bg-cream/10 text-cream/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            </FooterColumn>

            <FooterColumn title="Stay curious">
              <p className="mt-4 text-sm text-cream/70">
                Get cultural stories and festival reminders in your inbox.
              </p>
              <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="h-9 rounded-full border-border/30 bg-cream/5 text-cream placeholder:text-cream/40 focus:ring-2 focus:ring-primary/30"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Mail className="size-4" />
                </Button>
              </form>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-xs text-cream/50">
          <p>
            &copy; {new Date().getFullYear()} Culturiq. All rights reserved. Culturiq is a
            registered trademark of Culturiq Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
