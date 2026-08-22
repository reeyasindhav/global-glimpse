import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Start loading a route's small JS chunk when a visitor hovers or focuses a link.
    // Navigation then feels immediate without downloading every page up front.
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
