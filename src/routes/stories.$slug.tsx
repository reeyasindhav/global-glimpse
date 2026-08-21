import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bookmark } from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { stories } from "@/lib/data";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const story = stories.find((s) => s.slug === params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return { meta: [{ title: "Story not found — Culturiq" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.story;
    return {
      meta: [
        { title: `${s.title} — Culturiq` },
        { name: "description", content: s.excerpt },
        { property: "og:title", content: s.title },
        { property: "og:description", content: s.excerpt },
      ],
    };
  },
  component: StoryPage,
});

function StoryPage() {
  const { story: s } = Route.useLoaderData();
  const { saved, toggleSaved } = useAuth();
  const isSaved = saved.includes(s.slug);

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-12">
      <Link to="/stories" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="size-4" /> All stories
      </Link>
      <Reveal className="mt-6">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
          {s.kicker} · {s.country} · {s.read}
        </p>
        <h1 className="mt-3 text-4xl leading-tight font-extrabold md:text-5xl">{s.title}</h1>
      </Reveal>
      <Reveal delay={100} className="mt-8 overflow-hidden rounded-3xl">
        <img src={s.image} alt={s.title} className="w-full object-cover" />
      </Reveal>
      <Reveal delay={140} className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
        {s.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Reveal>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button
          variant={isSaved ? "secondary" : "default"}
          className="rounded-full"
          onClick={() => {
            toggleSaved(s.slug);
            toast.success(isSaved ? "Removed from collection" : "Saved to your collection");
          }}
        >
          <Bookmark className={`size-4 ${isSaved ? "fill-current" : ""}`} /> {isSaved ? "Saved" : "Save story"}
        </Button>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/explore">Explore the map</Link>
        </Button>
      </div>
    </article>
  );
}
