import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: () => {
    const user = localStorage.getItem('user');
    if (!user) {
      throw redirect({
        to: '/login',
      });
    }
    return { user };
  },

  component: HomePage,
});

function HomePage() {
  return <h1>Home Page</h1>;
}
