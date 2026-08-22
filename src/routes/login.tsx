import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Globe2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Culturiq" },
      {
        name: "description",
        content: "Sign in to Culturiq to sync your saved countries, festivals and stories.",
      },
      { property: "og:title", content: "Sign in — Culturiq" },
      { property: "og:description", content: "Access your cultural collection." },
    ],
  }),
  component: Login,
});

function Login() {
  const { signIn, user, ready } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (ready && user) navigate({ to: "/dashboard", replace: true });
  }, [ready, user, navigate]);

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2 lg:items-center">
      <div className="reveal">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Globe2 className="size-5" />
        </span>
        <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">Welcome back, explorer.</h1>
        <p className="mt-4 max-w-sm text-muted-foreground">
          Pick up where you left off — your saved countries, festivals and reading list are waiting.
        </p>
        <div className="mt-8 hidden gap-3 sm:grid sm:grid-cols-3">
          {["🇮🇳", "🇲🇽", "🇯🇵", "🇬🇭", "🇮🇹", "🇹🇭"].map((f, i) => (
            <div
              key={f}
              className="float-slow rounded-2xl border border-border bg-card p-4 text-center text-2xl"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              {f}
            </div>
          ))}
        </div>
      </div>

      <form
        className="reveal rounded-3xl border border-border bg-card p-8 shadow-sm"
        onSubmit={(e) => {
          e.preventDefault();
          if (!email.includes("@") || password.length < 4) {
            setError("Enter a valid email and a password of at least 4 characters.");
            return;
          }
          setError("");
          signIn(email);
          toast.success("Signed in");
          navigate({ to: "/dashboard" });
        }}
      >
        <h2 className="text-2xl font-bold">Sign in</h2>
        <p className="mt-1 text-sm text-muted-foreground">Demo mode — any valid email works.</p>

        <div className="mt-6 space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1.5"
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full rounded-full">
            Sign in
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          New here?{" "}
          <Link to="/signup" className="font-semibold text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}
