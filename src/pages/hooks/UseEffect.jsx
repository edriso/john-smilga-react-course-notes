import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const UseEffect = () => {
  return (
    <TopicPage
      title="useEffect"
      subtitle="Run side effects in your components — like fetching data, setting up timers, or updating the document title."
    >
      <h2>What is a Side Effect?</h2>
      <p>
        A "side effect" is anything that reaches <strong>outside</strong> of
        your component — talking to an API, setting up a timer, manually
        changing the DOM, or subscribing to events. These don't belong in the
        render logic itself.
      </p>

      <h2>Basic Syntax</h2>
      <CodeBlock>{`import { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran!');
    document.title = \`Count: \${count}\`;
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};`}</CodeBlock>
      <p>
        <code>useEffect</code> takes two arguments:
      </p>
      <ol>
        <li>A <strong>callback function</strong> — your side effect code</li>
        <li>A <strong>dependency array</strong> (optional) — controls when the effect runs</li>
      </ol>

      <h2>The Dependency Array</h2>
      <p>
        The dependency array is the <strong>key</strong> to controlling
        when your effect runs:
      </p>

      <h3>No Dependency Array — Runs on Every Render</h3>
      <CodeBlock>{`useEffect(() => {
  console.log('runs after every render');
});`}</CodeBlock>

      <h3>Empty Array — Runs Only Once (on Mount)</h3>
      <CodeBlock>{`useEffect(() => {
  console.log('runs only on initial render');
}, []); // empty array = only once`}</CodeBlock>

      <h3>With Dependencies — Runs When Values Change</h3>
      <CodeBlock>{`useEffect(() => {
  console.log('runs when count changes');
}, [count]); // re-runs whenever count changes`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">Think of it this way</p>
        <p>
          No array = "run after every render."
          Empty array = "run once when component appears."
          Array with values = "run when these specific values change."
        </p>
      </div>

      <h2>Fetching Data</h2>
      <p>
        The most common use case. Fetch data when the component first loads:
      </p>
      <CodeBlock>{`const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users'
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []); // empty array = fetch once on mount

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
};`}</CodeBlock>

      <div className="tip-box warning">
        <p className="tip-title">Can't Use async Directly</p>
        <p>
          The useEffect callback <strong>cannot</strong> be async directly.
          Define an async function <strong>inside</strong> the effect, then
          call it.
        </p>
      </div>

      <h2>Cleanup Function</h2>
      <p>
        Sometimes you need to clean up after an effect — like clearing a timer
        or removing an event listener. Return a function from your effect:
      </p>
      <CodeBlock>{`useEffect(() => {
  // Setup
  const timer = setInterval(() => {
    console.log('tick');
  }, 1000);

  // Cleanup — runs when component unmounts
  return () => {
    clearInterval(timer);
  };
}, []);`}</CodeBlock>

      <CodeBlock>{`useEffect(() => {
  const handleScroll = () => {
    console.log(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup — remove the listener
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);`}</CodeBlock>

      <p>
        The cleanup function runs:
      </p>
      <ul>
        <li>When the component <strong>unmounts</strong> (is removed from the DOM)</li>
        <li>Before the effect <strong>re-runs</strong> (when dependencies change)</li>
      </ul>

      <h2>Multiple Effects</h2>
      <p>
        You can have multiple <code>useEffect</code> calls in one component.
        Each handles a different concern:
      </p>
      <CodeBlock>{`const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  // Effect 1 — update document title
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  // Effect 2 — log name changes
  useEffect(() => {
    console.log(\`Name changed to: \${name}\`);
  }, [name]);

  return <div>...</div>;
};`}</CodeBlock>

      <h2>When You Might Not Need useEffect</h2>
      <p>
        For data fetching, consider using <strong>React Query</strong> or{' '}
        <strong>SWR</strong> instead — they handle caching, loading states,
        and error handling much better. useEffect is still useful for:
      </p>
      <ul>
        <li>Setting up event listeners</li>
        <li>Timers and intervals</li>
        <li>Syncing with browser APIs (localStorage, document title)</li>
      </ul>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>useEffect(callback)</code> — runs every render</li>
          <li><code>useEffect(callback, [])</code> — runs once on mount</li>
          <li><code>useEffect(callback, [dep])</code> — runs when <code>dep</code> changes</li>
          <li>Return a cleanup function to clean up timers, listeners, etc.</li>
          <li>Can't make callback async — define async function inside instead</li>
          <li>For data fetching, prefer React Query or similar libraries</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default UseEffect;
