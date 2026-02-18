import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const Components = () => {
  return (
    <TopicPage
      title="Components"
      subtitle="Components are the building blocks of React. Every piece of UI is a component."
    >
      <h2>What is a Component?</h2>
      <p>
        A component is a <strong>JavaScript function that returns JSX</strong>.
        Think of it as a custom HTML element that you create. Each component is
        an independent, reusable piece of your UI.
      </p>

      <h2>Creating a Component</h2>
      <p>There are two ways to write a component:</p>
      <CodeBlock>{`// Arrow function (most common)
const Greeting = () => {
  return <h2>Hello World</h2>;
};

// Regular function
function Greeting() {
  return <h2>Hello World</h2>;
}`}</CodeBlock>

      <div className="tip-box warning">
        <p className="tip-title">Important Rule</p>
        <p>
          Component names <strong>must start with a capital letter</strong>.
          React uses this to tell the difference between your components and
          regular HTML elements. <code>&lt;greeting /&gt;</code> won't work —
          it must be <code>&lt;Greeting /&gt;</code>.
        </p>
      </div>

      <h2>Using a Component</h2>
      <p>
        Once you create a component, you use it like an HTML tag:
      </p>
      <CodeBlock>{`const Greeting = () => {
  return <h2>Hello World</h2>;
};

// Use it inside another component
const App = () => {
  return (
    <div>
      <Greeting />
      <Greeting />
    </div>
  );
};`}</CodeBlock>

      <h2>Nesting Components</h2>
      <p>
        Components can use other components inside them. This is called{' '}
        <strong>composition</strong> — it's how you build complex UIs from
        simple pieces:
      </p>
      <CodeBlock>{`const Navbar = () => {
  return <nav>Navigation Bar</nav>;
};

const Hero = () => {
  return <section>Hero Section</section>;
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};`}</CodeBlock>

      <h2>The Root Component</h2>
      <p>
        Every React app has a <strong>root component</strong> (usually called{' '}
        <code>App</code>). It's the top-level component that contains
        everything else. This component gets mounted to the DOM in your entry
        file:
      </p>
      <CodeBlock>{`// main.jsx (Vite) or index.js (CRA)
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);`}</CodeBlock>

      <h2>Component Independence</h2>
      <p>
        Each component is <strong>independent</strong>. If one component has
        its own state or logic, it doesn't affect other components. This is
        what makes React so powerful — you can build, test, and reuse each
        piece separately.
      </p>

      <h2>File Structure</h2>
      <p>
        In practice, each component lives in its own file. The convention is
        one component per file, named with PascalCase:
      </p>
      <CodeBlock>{`// Navbar.jsx
const Navbar = () => {
  return <nav>My Navbar</nav>;
};
export default Navbar;

// App.jsx
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};
export default App;`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>A component is a <strong>function that returns JSX</strong></li>
          <li>Component names must start with a <strong>capital letter</strong></li>
          <li>Use components like HTML tags: <code>&lt;MyComponent /&gt;</code></li>
          <li>Components can be nested inside other components</li>
          <li>One component per file is the convention</li>
          <li><code>App</code> is typically the root component</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default Components;
