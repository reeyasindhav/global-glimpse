import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Bookmark, LayoutDashboard, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  component: AuthedLayout,
});

const links = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/collection", label: "My collection", icon: Bookmark },
] as const;

function AuthedLayout() {
  const { user, ready } = useAuth();
  const path = useRouterState({ select: (s) => s.location.pathname });

  if (!ready) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-md px-5 py-24 text-center">
        <h1 className="text-3xl font-bold">Sign in to continue</h1>
        <p className="mt-3 text-muted-foreground">
          This area keeps your saved cultures, so it needs an account.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild className="rounded-full">
            <Link to="/login">Sign in</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/signup">Create account</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-8">
      <nav className="mb-8 flex gap-2 rounded-full border border-border bg-card p-1.5">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              path === l.to ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`}
          >
            <l.icon className="size-4" /> {l.label}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
