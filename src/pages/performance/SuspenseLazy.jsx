import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const SuspenseLazy = () => {
  return (
    <TopicPage
      title="Suspense & Lazy Loading"
      subtitle="Load components on demand to reduce your initial bundle size — code splitting made easy."
    >
      <h2>What is Code Splitting?</h2>
      <p>
        By default, React bundles all your components into one big JavaScript
        file. <strong>Code splitting</strong> breaks it into smaller chunks
        that load on demand — so users only download what they need.
      </p>

      <h2>React.lazy()</h2>
      <p>
        <code>React.lazy()</code> lets you load a component only when it's
        needed (when it's about to be rendered):
      </p>
      <CodeBlock>{`import { lazy, Suspense } from 'react';

// Instead of:
// import HeavyComponent from './HeavyComponent';

// Lazy load it:
const HeavyComponent = lazy(() => import('./HeavyComponent'));`}</CodeBlock>

      <h2>Suspense — The Loading Fallback</h2>
      <p>
        Wrap lazy components with <code>Suspense</code> to show a fallback
        while the component is loading:
      </p>
      <CodeBlock>{`import { lazy, Suspense, useState } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Load Component</button>
      <Suspense fallback={<h4>Loading...</h4>}>
        {show && <HeavyComponent />}
      </Suspense>
    </div>
  );
};`}</CodeBlock>

      <h2>How It Works</h2>
      <ol>
        <li>User clicks the button → <code>show</code> becomes true</li>
        <li>React starts loading <code>HeavyComponent</code> (a separate JS chunk)</li>
        <li>While loading, Suspense shows "Loading..."</li>
        <li>Once loaded, the actual component renders</li>
      </ol>

      <h2>Common Use: Route-Based Splitting</h2>
      <p>
        The most common pattern — lazy load each page in your router:
      </p>
      <CodeBlock>{`const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">When to Use</p>
        <p>
          Use lazy loading for large components, routes, or features that
          aren't needed immediately. The initial page load becomes faster
          because less JavaScript is downloaded upfront.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>const Comp = lazy(() =&gt; import('./Comp'))</code></li>
          <li>Wrap with <code>&lt;Suspense fallback={'{...}'}&gt;</code></li>
          <li>The component must have a <strong>default export</strong></li>
          <li>Best for route-based code splitting</li>
          <li>Reduces initial bundle size = faster first load</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default SuspenseLazy;
