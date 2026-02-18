import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const NestedRoutes = () => {
  return (
    <TopicPage
      title="Nested Routes"
      subtitle="Create layouts with shared UI elements — like a navbar that stays on every page."
    >
      <h2>Why Nested Routes?</h2>
      <p>
        Most apps have shared UI (navbar, footer, sidebar) that should stay
        visible on every page. Nested routes let you create a layout that
        wraps around page content.
      </p>

      <h2>Setup</h2>
      <CodeBlock>{`const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <SingleProduct /> },
    ],
  },
]);`}</CodeBlock>

      <h2>The Layout Component with Outlet</h2>
      <p>
        The parent route renders shared UI and an <code>Outlet</code> — a
        placeholder where child routes render:
      </p>
      <CodeBlock>{`import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />  {/* child routes render here */}
      </main>
      <Footer />
    </div>
  );
};`}</CodeBlock>

      <h2>Index Route</h2>
      <p>
        The <code>index: true</code> route renders at the parent's exact path.
        It's the "default" child route:
      </p>
      <CodeBlock>{`// When user visits "/"  → Landing renders in Outlet
// When user visits "/about" → About renders in Outlet
// Navbar and Footer always stay visible`}</CodeBlock>

      <h2>Dynamic Routes</h2>
      <p>
        Use <code>:param</code> for dynamic segments. Access the value with{' '}
        <code>useParams</code>:
      </p>
      <CodeBlock>{`// Route config
{ path: 'products/:id', element: <SingleProduct /> }

// In the component
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  // id = whatever is in the URL: /products/42 → id = "42"
  return <h2>Product #{id}</h2>;
};`}</CodeBlock>

      <h2>Shared Data Between Routes</h2>
      <p>
        Use <code>useOutletContext</code> to pass data from layout to children:
      </p>
      <CodeBlock>{`// Layout
const HomeLayout = () => {
  const [user, setUser] = useState('John');
  return <Outlet context={{ user, setUser }} />;
};

// Child
import { useOutletContext } from 'react-router-dom';

const About = () => {
  const { user } = useOutletContext();
  return <h2>About {user}</h2>;
};`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Nested routes = shared layout + child pages</li>
          <li><code>&lt;Outlet /&gt;</code> — renders the current child route</li>
          <li><code>index: true</code> — default child route at parent path</li>
          <li><code>:param</code> in path + <code>useParams()</code> for dynamic routes</li>
          <li><code>useOutletContext()</code> — pass data from layout to children</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default NestedRoutes;
