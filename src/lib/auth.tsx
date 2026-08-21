import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type User = { name: string; email: string; interests: string[] };

type AuthCtx = {
  user: User | null;
  ready: boolean;
  signIn: (email: string, name?: string) => void;
  signUp: (name: string, email: string, interests?: string[]) => void;
  signOut: () => void;
  saved: string[];
  toggleSaved: (slug: string) => void;
};

const KEY = "culturiq.user";
const SKEY = "culturiq.saved";
const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [saved, setSaved] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUser(JSON.parse(raw));
      const s = localStorage.getItem(SKEY);
      if (s) setSaved(JSON.parse(s));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const value = useMemo<AuthCtx>(
    () => ({
      user,
      ready,
      saved,
      signIn: (email, name) => {
        const u = { name: name || email.split("@")[0] || "Explorer", email, interests: ["Festivals", "Food & drink"] };
        localStorage.setItem(KEY, JSON.stringify(u));
        setUser(u);
      },
      signUp: (name, email, interests = []) => {
        const u = { name, email, interests };
        localStorage.setItem(KEY, JSON.stringify(u));
        setUser(u);
      },
      signOut: () => {
        localStorage.removeItem(KEY);
        setUser(null);
      },
      toggleSaved: (slug) => {
        setSaved((prev) => {
          const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
          localStorage.setItem(SKEY, JSON.stringify(next));
          return next;
        });
      },
    }),
    [user, ready, saved],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
