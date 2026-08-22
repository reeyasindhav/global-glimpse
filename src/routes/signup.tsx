import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your account — Culturiq" },
      {
        name: "description",
        content: "Join Culturiq to save countries, festivals and cultural stories.",
      },
      { property: "og:title", content: "Create your account — Culturiq" },
      { property: "og:description", content: "Start your cultural collection in under a minute." },
    ],
  }),
  component: Signup,
});

const topics = ["Festivals", "Food & drink", "Traditions", "Arts & craft", "Music", "Language"];

function Signup() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picked, setPicked] = useState<string[]>(["Festivals"]);
  const [error, setError] = useState("");

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2 lg:items-center">
      <div className="reveal order-2 lg:order-1">
        <h1 className="text-4xl font-extrabold md:text-5xl">
          Build your own <span className="text-primary">atlas</span> of culture.
        </h1>
        <ul className="mt-8 space-y-3">
          {[
            "Save countries, festivals, dishes and stories",
            "A festival calendar that follows your interests",
            "Track a learning streak across regions",
          ].map((b) => (
            <li key={b} className="flex items-start gap-3 text-muted-foreground">
              <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-jade text-jade-foreground">
                <Check className="size-3" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="reveal order-1 rounded-3xl border border-border bg-card p-8 shadow-sm lg:order-2">
        <div className="flex items-center gap-2">
          {[1, 2].map((s) => (
            <span
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-colors ${step >= s ? "bg-primary" : "bg-muted"}`}
            />
          ))}
        </div>

        {step === 1 ? (
          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (!name.trim() || !email.includes("@") || password.length < 4) {
                setError("Fill in your name, a valid email and a password of 4+ characters.");
                return;
              }
              setError("");
              setStep(2);
            }}
          >
            <h2 className="text-2xl font-bold">Create your account</h2>
            <div className="mt-6 space-y-4">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5"
                  placeholder="Riya Sindhav"
                />
              </div>
              <div>
                <Label htmlFor="email2">Email</Label>
                <Input
                  id="email2"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <Label htmlFor="pw2">Password</Label>
                <Input
                  id="pw2"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1.5"
                  placeholder="••••••••"
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full rounded-full">
                Continue
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        ) : (
          <div className="mt-6">
            <h2 className="text-2xl font-bold">What are you curious about?</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Pick a few — we'll shape your feed.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {topics.map((t) => {
                const on = picked.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setPicked((p) => (on ? p.filter((x) => x !== t) : [...p, t]))}
                    className={`rounded-full border px-4 py-2 text-sm transition-all hover:-translate-y-0.5 ${
                      on ? "border-primary bg-primary text-primary-foreground" : "border-border"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex gap-3">
              <Button variant="outline" className="rounded-full" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button
                className="flex-1 rounded-full"
                onClick={() => {
                  signUp(name, email, picked);
                  toast.success(`Welcome, ${name.split(" ")[0]}!`);
                  navigate({ to: "/dashboard" });
                }}
              >
                Start exploring →
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
