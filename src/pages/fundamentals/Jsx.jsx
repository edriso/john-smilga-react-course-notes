import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const Jsx = () => {
  return (
    <TopicPage
      title="JSX"
      subtitle="JSX lets you write HTML-like code inside JavaScript. It's the foundation of every React component."
    >
      <h2>What is JSX?</h2>
      <p>
        JSX stands for <strong>JavaScript XML</strong>. It's a syntax extension
        that lets you write HTML-like code in your JavaScript files. Under the
        hood, JSX gets converted to regular JavaScript function calls.
      </p>
      <p>
        When you write this JSX:
      </p>
      <CodeBlock>{`<h2>Hello World</h2>`}</CodeBlock>
      <p>
        React converts it to this JavaScript:
      </p>
      <CodeBlock>{`React.createElement('h2', {}, 'Hello World')`}</CodeBlock>
      <p>
        So JSX is just a nicer, more readable way to write{' '}
        <code>React.createElement()</code> calls. You'll always use JSX — nobody
        writes <code>createElement</code> by hand.
      </p>

      <h2>JSX Rules</h2>
      <p>
        JSX looks like HTML, but it has a few rules you need to follow:
      </p>

      <h3>1. Return a Single Parent Element</h3>
      <p>
        Every component must return <strong>one</strong> parent element. If you
        have multiple elements, wrap them in a <code>div</code>, a{' '}
        <code>section</code>, or a <strong>Fragment</strong> (<code>&lt;&gt;...&lt;/&gt;</code>
        ).
      </p>
      <CodeBlock>{`// Using a Fragment (most common)
const Greeting = () => {
  return (
    <>
      <h2>Hello</h2>
      <p>Welcome to React</p>
    </>
  );
};

// Using a div
const Greeting = () => {
  return (
    <div>
      <h2>Hello</h2>
      <p>Welcome to React</p>
    </div>
  );
};`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">Why Fragments?</p>
        <p>
          Fragments (<code>&lt;&gt;...&lt;/&gt;</code>) let you group elements without
          adding an extra DOM node. Use them when you don't need a wrapper{' '}
          <code>div</code>.
        </p>
      </div>

      <h3>2. Use camelCase for Attributes</h3>
      <p>
        HTML attributes become camelCase in JSX because JSX is closer to
        JavaScript than HTML:
      </p>
      <CodeBlock>{`// HTML         →  JSX
// class        →  className
// for          →  htmlFor
// tabindex     →  tabIndex
// onclick      →  onClick
// readonly     →  readOnly

<div className="container">
  <label htmlFor="name">Name</label>
  <input id="name" tabIndex={1} readOnly />
</div>`}</CodeBlock>

      <h3>3. Close Every Tag</h3>
      <p>
        In HTML, some tags are self-closing (like <code>&lt;img&gt;</code> or{' '}
        <code>&lt;input&gt;</code>). In JSX, you <strong>must</strong> close
        every tag:
      </p>
      <CodeBlock>{`// Self-closing tags need the slash
<img src="photo.jpg" alt="photo" />
<input type="text" />
<br />
<hr />`}</CodeBlock>

      <h3>4. Use className Instead of class</h3>
      <p>
        Since <code>class</code> is a reserved word in JavaScript, use{' '}
        <code>className</code> instead:
      </p>
      <CodeBlock>{`<div className="card">
  <h2 className="title">Hello</h2>
</div>`}</CodeBlock>

      <h2>Using JavaScript in JSX</h2>
      <p>
        Use curly braces <code>{'{}'}</code> to drop into "JavaScript mode"
        inside your JSX. You can use any JavaScript{' '}
        <strong>expression</strong> inside the braces:
      </p>
      <CodeBlock>{`const name = 'John';
const age = 30;

const Person = () => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Years until retirement: {65 - age}</p>
      <p>Name uppercased: {name.toUpperCase()}</p>
    </div>
  );
};`}</CodeBlock>

      <div className="tip-box warning">
        <p className="tip-title">Expression vs Statement</p>
        <p>
          Inside <code>{'{}'}</code> you can only use <strong>expressions</strong>{' '}
          (things that return a value). You <strong>cannot</strong> use
          statements like <code>if</code>, <code>for</code>, or{' '}
          <code>let x = 5</code>.
        </p>
      </div>

      <h2>JSX Return Formatting</h2>
      <p>
        If your JSX is on multiple lines, wrap it in parentheses. The opening
        tag must be on the same line as <code>return</code> (or inside the
        parentheses):
      </p>
      <CodeBlock>{`// Works — parentheses wrap the multi-line JSX
const App = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

// Also works — single line
const App = () => {
  return <h1>Hello</h1>;
};

// BROKEN — return on its own line returns undefined
const App = () => {
  return
    <h1>Hello</h1>;
};`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>className</code> instead of <code>class</code></li>
          <li><code>htmlFor</code> instead of <code>for</code></li>
          <li>All attributes are <strong>camelCase</strong></li>
          <li>Close every tag: <code>&lt;img /&gt;</code>, <code>&lt;input /&gt;</code></li>
          <li>One parent element per return (use Fragments <code>&lt;&gt;&lt;/&gt;</code>)</li>
          <li>Use <code>{'{}'}</code> for JavaScript expressions in JSX</li>
          <li>Wrap multi-line JSX in parentheses <code>()</code></li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default Jsx;
