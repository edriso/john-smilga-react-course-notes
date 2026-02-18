import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const CssInReact = () => {
  return (
    <TopicPage
      title="CSS in React"
      subtitle="The different approaches to styling React components — from global CSS to CSS Modules."
    >
      <h2>Option 1: Global CSS File</h2>
      <p>
        The simplest approach. Import a CSS file and use <code>className</code>:
      </p>
      <CodeBlock>{`// Import the CSS file
import './index.css';

const App = () => {
  return <div className="container">Hello</div>;
};`}</CodeBlock>
      <p>
        <strong>Pros:</strong> Simple, familiar.
        <strong> Cons:</strong> Styles are global — can conflict with other
        components.
      </p>

      <h2>Option 2: Inline Styles</h2>
      <CodeBlock>{`const App = () => {
  return (
    <h2 style={{ color: 'blue', fontSize: '2rem', marginTop: '1rem' }}>
      Hello
    </h2>
  );
};`}</CodeBlock>
      <p>
        <strong>Pros:</strong> Scoped to the element, dynamic based on props/state.
        <strong> Cons:</strong> No pseudo-classes, no media queries, verbose.
      </p>

      <h2>Option 3: CSS Modules</h2>
      <p>
        CSS Modules scope styles to a specific component. The file name must
        end with <code>.module.css</code>:
      </p>
      <CodeBlock language="css">{`/* Navbar.module.css */
.navbar {
  background: #222;
  padding: 1rem;
}

.link {
  color: white;
  margin-right: 1rem;
}`}</CodeBlock>
      <CodeBlock>{`import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.link} href="/">Home</a>
      <a className={styles.link} href="/about">About</a>
    </nav>
  );
};`}</CodeBlock>
      <p>
        <strong>Pros:</strong> Scoped by default — no name collisions.
        <strong> Cons:</strong> Slightly different syntax with <code>styles.className</code>.
      </p>

      <h2>Which One to Use?</h2>
      <ul>
        <li><strong>Global CSS</strong> — small projects or global styles (reset, typography)</li>
        <li><strong>CSS Modules</strong> — when you want scoped styles without a library</li>
        <li><strong>Styled Components</strong> — CSS-in-JS with full JavaScript power</li>
        <li><strong>Tailwind CSS</strong> — utility-first, rapid development</li>
      </ul>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Global CSS: <code>import './style.css'</code> + <code>className="..."</code></li>
          <li>Inline: <code>style={'{{}}'}</code> with camelCase properties</li>
          <li>CSS Modules: <code>import styles from './X.module.css'</code> + <code>className={'{styles.name}'}</code></li>
          <li>Use <code>className</code> (not <code>class</code>)</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default CssInReact;
