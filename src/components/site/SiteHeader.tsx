import { Link, useRouterState } from "@tanstack/react-router";
import { Globe2, Menu, X } from "lucide-react";
import { useState } from "react";

import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const nav = [
  { to: "/explore", label: "Explore" },
  { to: "/festivals", label: "Festivals" },
  { to: "/traditions", label: "Traditions" },
  { to: "/food", label: "Food" },
  { to: "/stories", label: "Stories" },
  { to: "/about", label: "About us" },
];

export function SiteHeader() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Globe2 className="size-4" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">culturiq.</span>
        </Link>

        <nav className="ml-6 hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`relative text-sm transition-colors hover:text-primary ${
                path.startsWith(n.to) ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {n.label}
              {path.startsWith(n.to) && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          {user ? (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link to="/dashboard">{user.name}</Link>
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="sm" variant="outline">
                    Sign out
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Sign out of Culturiq?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Your saved items will remain stored in your browser. You'll need to sign in
                      again to access your collection and dashboard.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={signOut}>Sign out</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link to="/login">Sign in</Link>
              </Button>
              <Button asChild size="sm" className="rounded-full bg-ink text-cream hover:bg-ink/90">
                <Link to="/signup">Start exploring →</Link>
              </Button>
            </>
          )}
        </div>

        <button
          className="ml-auto md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="reveal border-t border-border/60 bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm">
                {n.label}
              </Link>
            ))}
            <Link
              to={user ? "/dashboard" : "/login"}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-primary"
            >
              {user ? "Dashboard" : "Sign in"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
