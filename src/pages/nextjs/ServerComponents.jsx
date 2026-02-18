import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const ServerComponents = () => {
  return (
    <TopicPage
      title="Server Components"
      subtitle="Components that render on the server — smaller bundles, direct database access, and better performance."
    >
      <h2>Server vs Client Components</h2>
      <p>
        In Next.js (App Router), all components are <strong>Server
        Components</strong> by default. They render on the server and send HTML
        to the browser.
      </p>
      <ul>
        <li>
          <strong>Server Components</strong> — can access databases, read
          files, use secrets. Cannot use state, effects, or browser APIs.
        </li>
        <li>
          <strong>Client Components</strong> — add <code>'use client'</code>
          at the top. Can use hooks, state, event handlers, browser APIs.
        </li>
      </ul>

      <h2>Server Component (Default)</h2>
      <CodeBlock language="typescript">{`// This is a Server Component by default
// It can fetch data directly — no useEffect needed!
const ProductsPage = async () => {
  const products = await db.product.findMany();

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductsPage;`}</CodeBlock>

      <h2>Client Component</h2>
      <CodeBlock language="typescript">{`'use client';

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};

export default Counter;`}</CodeBlock>

      <h2>When to Use Which?</h2>
      <ul>
        <li><strong>Server</strong> — data fetching, accessing backend resources, keeping secrets safe, reducing bundle size</li>
        <li><strong>Client</strong> — interactivity (onClick, onChange), hooks (useState, useEffect), browser APIs (localStorage, window)</li>
      </ul>

      <h2>Mixing Server and Client</h2>
      <p>
        A Server Component can import and render Client Components. But a
        Client Component <strong>cannot</strong> import a Server Component
        directly — pass it as children instead:
      </p>
      <CodeBlock language="typescript">{`// Server Component (parent)
import ClientWrapper from './ClientWrapper';
import ServerChild from './ServerChild';

const Page = () => {
  return (
    <ClientWrapper>
      <ServerChild />  {/* passed as children */}
    </ClientWrapper>
  );
};`}</CodeBlock>

      <h2>Async Server Components</h2>
      <p>
        Server Components can be <code>async</code> — you can <code>await</code>{' '}
        data directly:
      </p>
      <CodeBlock language="typescript">{`const UserProfile = async () => {
  const user = await fetch('https://api.example.com/user').then(
    (r) => r.json()
  );

  return <h2>{user.name}</h2>;
};`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">Rule of Thumb</p>
        <p>
          Keep components as Server Components unless they need interactivity.
          Only add <code>'use client'</code> when you need state, effects, or
          event handlers.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Default = Server Component (no directive needed)</li>
          <li><code>'use client'</code> at top of file = Client Component</li>
          <li>Server: async, database access, no hooks</li>
          <li>Client: useState, useEffect, onClick, browser APIs</li>
          <li>Server can render Client, but not vice versa (use children)</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default ServerComponents;
