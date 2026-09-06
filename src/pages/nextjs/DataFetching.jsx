import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const DataFetching = () => {
  return (
    <TopicPage
      title="Data Fetching in Next.js"
      subtitle="Fetch data on the server, cache responses, and use Prisma for database access."
    >
      <h2>Server-Side Data Fetching</h2>
      <p>
        In Next.js, Server Components can fetch data directly. No{' '}
        <code>useEffect</code>, no loading state management — the component
        is async and the data is ready when the page loads:
      </p>
      <CodeBlock language="typescript">{`// app/products/page.tsx
const ProductsPage = async () => {
  const response = await fetch('https://api.example.com/products');
  const products = await response.json();

  return (
    <div>
      {products.map((p) => (
        <h3 key={p.id}>{p.name}</h3>
      ))}
    </div>
  );
};

export default ProductsPage;`}</CodeBlock>

      <h2>Caching</h2>
      <p>
        Next.js extends <code>fetch()</code> with caching options:
      </p>
      <CodeBlock language="typescript">{`// Cached by default (equivalent to getStaticProps)
const data = await fetch(url);

// Revalidate every 60 seconds
const data = await fetch(url, {
  next: { revalidate: 60 },
});

// No cache — always fresh (equivalent to getServerSideProps)
const data = await fetch(url, { cache: 'no-store' });`}</CodeBlock>

      <h2>Prisma — Database Access</h2>
      <p>
        Prisma is an ORM that lets you query databases with TypeScript:
      </p>
      <CodeBlock language="bash">{`npm install prisma @prisma/client
npx prisma init`}</CodeBlock>

      <h3>Define a Model</h3>
      <CodeBlock language="typescript">{`// prisma/schema.prisma
model Product {
  id          String   @id @default(uuid())
  name        String
  price       Int
  description String
  image       String
  featured    Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}`}</CodeBlock>

      <h3>Query the Database</h3>
      <CodeBlock language="typescript">{`// utils/db.ts — singleton pattern
import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => new PrismaClient();

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const db = globalForPrisma.prisma ?? prismaClientSingleton();
export default db;

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}`}</CodeBlock>
      <CodeBlock language="typescript">{`// In a Server Component
import db from '@/utils/db';

const ProductsPage = async () => {
  const products = await db.product.findMany({
    where: { featured: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>{p.name} - \${p.price}</div>
      ))}
    </div>
  );
};`}</CodeBlock>

      <h2>Route Handlers (API Routes)</h2>
      <p>
        Create custom API endpoints with <code>route.ts</code> files:
      </p>
      <CodeBlock language="typescript">{`// app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await db.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  const product = await db.product.create({ data: body });
  return NextResponse.json(product, { status: 201 });
}`}</CodeBlock>

      <h2>Middleware</h2>
      <p>
        Run code before a request is completed — great for auth, redirects:
      </p>
      <CodeBlock language="typescript">{`// middleware.ts (at project root)
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Redirect, rewrite, or add headers
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Server Components: <code>async</code> + direct <code>await fetch()</code></li>
          <li>Caching: <code>{'{ next: { revalidate: 60 } }'}</code> or <code>{'{ cache: "no-store" }'}</code></li>
          <li>Prisma: <code>db.model.findMany()</code>, <code>.create()</code>, <code>.delete()</code></li>
          <li>API routes: <code>app/api/route.ts</code> with GET/POST functions</li>
          <li>Middleware: <code>middleware.ts</code> at project root</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default DataFetching;
