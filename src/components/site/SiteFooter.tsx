import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 md:grid-cols-3 md:items-center">
        <Link to="/" className="font-display text-xl font-bold">
          culturiq.
        </Link>
        <p className="text-sm text-cream/70 md:text-center">Made for the endlessly curious.</p>
        <p className="flex items-center gap-1.5 text-sm text-cream/70 md:justify-end">
          Built with care <Heart className="size-3.5 fill-primary text-primary" />
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-5 border-t border-cream/10 px-5 py-6 text-xs text-cream/60">
        <Link to="/explore">Explore map</Link>
        <Link to="/festivals">Festival calendar</Link>
        <Link to="/traditions">Traditions</Link>
        <Link to="/food">Cuisines</Link>
        <Link to="/stories">Stories</Link>
        <Link to="/about">About</Link>
      </div>
    </footer>
  );
}
