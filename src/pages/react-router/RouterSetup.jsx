import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const RouterSetup = () => {
  return (
    <TopicPage
      title="React Router Setup"
      subtitle="Add page navigation to your React app — different URLs show different components."
    >
      <h2>What is React Router?</h2>
      <p>
        React builds <strong>Single Page Applications</strong> (SPAs). The
        browser loads one HTML page, and React swaps content dynamically.
        React Router handles the URL changes and renders the right component
        for each route.
      </p>

      <h2>Installation</h2>
      <CodeBlock language="bash">{`npm install react-router-dom`}</CodeBlock>

      <h2>Basic Setup</h2>
      <CodeBlock>{`import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Define your routes
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
]);

// Provide the router to your app
const App = () => {
  return <RouterProvider router={router} />;
};`}</CodeBlock>

      <h2>Link Component</h2>
      <p>
        Don't use regular <code>&lt;a&gt;</code> tags — they cause a full page
        reload. Use <code>Link</code> for client-side navigation:
      </p>
      <CodeBlock>{`import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};`}</CodeBlock>

      <h2>NavLink — Active Link Styling</h2>
      <p>
        <code>NavLink</code> is like <code>Link</code> but adds an "active"
        class to the current route:
      </p>
      <CodeBlock>{`import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

// In CSS:
// .active { color: blue; font-weight: bold; }`}</CodeBlock>

      <h2>Error / 404 Page</h2>
      <p>
        Add an <code>errorElement</code> to handle routes that don't exist:
      </p>
      <CodeBlock>{`import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return <h2>Page not found!</h2>;
  }
  return <h2>Something went wrong</h2>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
]);`}</CodeBlock>

      <h2>SPA Deployment Note</h2>
      <p>
        When deploying an SPA, you need to redirect all routes to{' '}
        <code>index.html</code>. For Netlify, add a <code>_redirects</code>{' '}
        file in the <code>public</code> folder:
      </p>
      <CodeBlock>{`/* /index.html 200`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>createBrowserRouter([routes])</code> — define routes</li>
          <li><code>&lt;RouterProvider router={'{router}'} /&gt;</code> — provide to app</li>
          <li><code>&lt;Link to="/path"&gt;</code> — navigate without page reload</li>
          <li><code>&lt;NavLink&gt;</code> — Link with active class</li>
          <li><code>errorElement</code> — handle 404s and errors</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default RouterSetup;
