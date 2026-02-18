import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const NextjsFundamentals = () => {
  return (
    <TopicPage
      title="Next.js Fundamentals"
      subtitle="A React framework for production — server rendering, file-based routing, and full-stack capabilities."
    >
      <h2>What is Next.js?</h2>
      <p>
        Next.js is a <strong>React framework</strong> that adds server-side
        rendering, file-based routing, API routes, and more. While React is a
        library for building UI, Next.js is a complete framework for building
        full-stack web applications.
      </p>

      <h2>Setup</h2>
      <CodeBlock language="bash">{`npx create-next-app@latest my-app`}</CodeBlock>
      <p>
        This creates a project with TypeScript, Tailwind CSS, ESLint, and the
        App Router configured.
      </p>

      <h2>Project Structure</h2>
      <CodeBlock>{`my-app/
├── app/              # Routes and pages
│   ├── layout.tsx    # Root layout (wraps everything)
│   ├── page.tsx      # Home page (/)
│   ├── about/
│   │   └── page.tsx  # About page (/about)
│   └── globals.css   # Global styles
├── public/           # Static assets
├── components/       # Shared components
├── next.config.js    # Next.js configuration
└── package.json`}</CodeBlock>

      <h2>Key Concepts</h2>
      <ul>
        <li>
          <strong>File-based routing</strong> — folders in <code>app/</code>{' '}
          become URL routes automatically
        </li>
        <li>
          <strong>Server Components</strong> — components render on the server
          by default (smaller bundle, faster loads)
        </li>
        <li>
          <strong>Client Components</strong> — add <code>'use client'</code>{' '}
          for interactive components with state/effects
        </li>
        <li>
          <strong>Server Actions</strong> — run server-side code directly from
          components (database queries, form handling)
        </li>
        <li>
          <strong>Layouts</strong> — shared UI that wraps pages
        </li>
      </ul>

      <h2>Root Layout (Required)</h2>
      <CodeBlock language="typescript">{`// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}</CodeBlock>

      <h2>First Page</h2>
      <CodeBlock language="typescript">{`// app/page.tsx — renders at "/"
export default function Home() {
  return <h1>Welcome to Next.js!</h1>;
}

// app/about/page.tsx — renders at "/about"
export default function About() {
  return <h1>About Page</h1>;
}`}</CodeBlock>

      <h2>Metadata (SEO)</h2>
      <CodeBlock language="typescript">{`// app/layout.tsx or any page.tsx
export const metadata = {
  title: 'My App',
  description: 'Built with Next.js',
  keywords: 'next.js, react, web development',
};`}</CodeBlock>

      <h2>Image Optimization</h2>
      <CodeBlock language="typescript">{`import Image from 'next/image';

const Hero = () => {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority  // load immediately (above the fold)
    />
  );
};`}</CodeBlock>

      <h2>Link Component</h2>
      <CodeBlock language="typescript">{`import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>File-based routing: <code>app/about/page.tsx</code> → <code>/about</code></li>
          <li>Components are Server Components by default</li>
          <li><code>'use client'</code> for interactive components</li>
          <li><code>layout.tsx</code> for shared layouts</li>
          <li><code>metadata</code> export for SEO</li>
          <li><code>Image</code> component for optimized images</li>
          <li><code>Link</code> component for client-side navigation</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default NextjsFundamentals;
