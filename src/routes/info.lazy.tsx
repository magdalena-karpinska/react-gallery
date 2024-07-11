import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/info")({
  component: () => <div>Hello /info!</div>,
});
