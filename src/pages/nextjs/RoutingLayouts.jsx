import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const RoutingLayouts = () => {
  return (
    <TopicPage
      title="Routing & Layouts"
      subtitle="File-based routing, nested layouts, dynamic routes, and route groups in Next.js."
    >
      <h2>File-Based Routing</h2>
      <p>
        Every folder inside <code>app/</code> with a <code>page.tsx</code>{' '}
        file becomes a route:
      </p>
      <CodeBlock>{`app/
├── page.tsx           → /
├── about/
│   └── page.tsx       → /about
├── products/
│   ├── page.tsx       → /products
│   └── [id]/
│       └── page.tsx   → /products/123 (dynamic)`}</CodeBlock>

      <h2>Nested Layouts</h2>
      <p>
        Each folder can have a <code>layout.tsx</code> that wraps its children.
        Layouts persist and don't re-render when navigating between child pages:
      </p>
      <CodeBlock language="typescript">{`// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-5">
      <aside className="col-span-1">
        <Sidebar />
      </aside>
      <main className="col-span-4">{children}</main>
    </div>
  );
}`}</CodeBlock>

      <h2>Dynamic Routes</h2>
      <p>
        Use square brackets for dynamic URL segments:
      </p>
      <CodeBlock language="typescript">{`// app/products/[id]/page.tsx
export default function Product({
  params,
}: {
  params: { id: string };
}) {
  return <h1>Product #{params.id}</h1>;
}

// Catch-all: [...slug] matches /docs/a/b/c
// Optional catch-all: [[...slug]] also matches /docs`}</CodeBlock>

      <h2>Route Groups</h2>
      <p>
        Wrap folder names in parentheses to organize without affecting the URL:
      </p>
      <CodeBlock>{`app/
├── (dashboard)/
│   ├── layout.tsx    → shared dashboard layout
│   ├── stats/
│   │   └── page.tsx  → /stats (not /dashboard/stats)
│   └── settings/
│       └── page.tsx  → /settings`}</CodeBlock>

      <h2>Loading & Error States</h2>
      <CodeBlock language="typescript">{`// app/products/loading.tsx — shows while page loads
export default function Loading() {
  return <h2>Loading products...</h2>;
}

// app/products/error.tsx — shows on errors
'use client';
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}`}</CodeBlock>

      <h2>Private Folders</h2>
      <p>
        Prefix with underscore to exclude from routing:
      </p>
      <CodeBlock>{`app/
├── _components/     → not a route
│   ├── Header.tsx
│   └── Footer.tsx
├── _utils/          → not a route
│   └── helpers.ts`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>page.tsx</code> — makes a folder a route</li>
          <li><code>layout.tsx</code> — shared UI for a route segment</li>
          <li><code>[id]</code> — dynamic route segment</li>
          <li><code>(group)</code> — organize without URL effect</li>
          <li><code>loading.tsx</code> — loading UI (automatic Suspense)</li>
          <li><code>error.tsx</code> — error boundary</li>
          <li><code>_folder</code> — private (excluded from routing)</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default RoutingLayouts;
