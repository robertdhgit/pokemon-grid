import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const Route = createRootRoute({
  component: RootComponent,
});

const headerHeight = 60;
const footerHeight = 50;

const queryClient = new QueryClient();

function RootComponent() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <header
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: headerHeight,
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #eee',
            background: '#fff',
            zIndex: 1000,
          }}
        >
          <strong
            id="app-title"
            style={{
              fontSize: '20px',
              margin: 0,
            }}
          >
            Pokemon App
          </strong>
        </header>
        <main
          role="main"
          aria-labelledby="app-title"
          style={{
            maxHeight: 'calc(100vh - headerHeight - footerHeight)',
            overflowY: 'auto',
            padding: '20px',
            marginTop: headerHeight + 30,
            marginBottom: footerHeight,
          }}
        >
          <section aria-label="Page Content">
            <Outlet />
          </section>
        </main>
        <footer
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: footerHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
            borderTop: '1px solid #eee',
            color: '#666',
            zIndex: 1000,
          }}
        >
          © 2025 Pokemon Viewer App
        </footer>
      </QueryClientProvider>
    </React.Fragment>
  );
}
