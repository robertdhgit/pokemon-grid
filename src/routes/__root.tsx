import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

const headerHeight = 60
const footerHeight = 50

function RootComponent() {
  return (
    <React.Fragment>
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
        <h1
          id="app-title"
          style={{
            fontSize: '20px',
            margin: 0,
          }}
        >
          Pokemon App
        </h1>
      </header>
      <main
        role="main"
        aria-labelledby="app-title"
        style={{
          maxHeight: 'calc(100vh - headerHeight - footerHeight)',
          overflowY: 'auto',
          padding: '20px',
          marginTop: headerHeight + 30,
          marginBottom: footerHeight
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
    </React.Fragment>
  )
}
