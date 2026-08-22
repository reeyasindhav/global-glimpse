import type { ForwardRefExoticComponent } from "react";
import { Dribbble, Globe2, Heart, Instagram, type LucideProps, Twitter } from "lucide-react";
import { Link } from "@tanstack/react-router";

const exploreLinks = [
  { to: "/explore", label: "Explore map" },
  { to: "/festivals", label: "Festival calendar" },
  { to: "/traditions", label: "Traditions" },
  { to: "/food", label: "Cuisines" },
  { to: "/stories", label: "Stories" },
];

const companyLinks = [
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
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
          <div className="md:col-span-3 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-cream/40 uppercase">
                Explore
              </p>
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
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-cream/40 uppercase">
                Company
              </p>
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
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-cream/40 uppercase">
                Social
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-primary"
                    >
                      <s.icon className="size-4" />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
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
