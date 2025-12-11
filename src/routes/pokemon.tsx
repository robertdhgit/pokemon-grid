import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/pokemon')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello &quot;/pokemon&quot;!</div>;
}
