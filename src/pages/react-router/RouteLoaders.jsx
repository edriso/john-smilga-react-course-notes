import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const RouteLoaders = () => {
  return (
    <TopicPage
      title="Route Loaders"
      subtitle="Fetch data BEFORE a page renders — no loading spinners, the page shows up ready."
    >
      <h2>What are Loaders?</h2>
      <p>
        A loader is a function that runs <strong>before</strong> the route
        component renders. It fetches data and provides it to the component.
        This means the component has data immediately — no useEffect needed.
      </p>

      <h2>Setup</h2>
      <CodeBlock>{`// Define the loader function
const landingLoader = async () => {
  const response = await fetch('/api/products');
  const data = await response.json();
  return data;  // must return something
};

// Attach it to the route
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
    ],
  },
]);`}</CodeBlock>

      <h2>Use the Data in the Component</h2>
      <CodeBlock>{`import { useLoaderData } from 'react-router-dom';

const Landing = () => {
  const products = useLoaderData();

  return (
    <div>
      {products.map((product) => (
        <h3 key={product.id}>{product.name}</h3>
      ))}
    </div>
  );
};`}</CodeBlock>

      <h2>Loader with Params</h2>
      <p>
        Loaders receive an object with <code>params</code> and{' '}
        <code>request</code>:
      </p>
      <CodeBlock>{`// Route
{ path: 'products/:id', element: <SingleProduct />, loader: productLoader }

// Loader
const productLoader = async ({ params }) => {
  const response = await fetch(\`/api/products/\${params.id}\`);
  const data = await response.json();
  return data;
};`}</CodeBlock>

      <h2>Error Handling in Loaders</h2>
      <p>
        If a loader throws an error, the <code>errorElement</code> renders:
      </p>
      <CodeBlock>{`const productLoader = async ({ params }) => {
  const response = await fetch(\`/api/products/\${params.id}\`);
  if (!response.ok) {
    throw new Response('Product not found', { status: 404 });
  }
  return response.json();
};`}</CodeBlock>

      <h2>Loading State</h2>
      <p>
        While the loader is fetching, use <code>useNavigation</code> to show
        a global loading indicator:
      </p>
      <CodeBlock>{`import { useNavigation } from 'react-router-dom';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div>
      <Navbar />
      {isLoading ? <h2>Loading...</h2> : <Outlet />}
    </div>
  );
};`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Loader runs <strong>before</strong> the component renders</li>
          <li>Must return data (even <code>null</code>)</li>
          <li><code>useLoaderData()</code> — access the returned data</li>
          <li>Loaders receive <code>{'{ params, request }'}</code></li>
          <li><code>useNavigation().state</code> — check loading state</li>
          <li>Thrown errors render the <code>errorElement</code></li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default RouteLoaders;
