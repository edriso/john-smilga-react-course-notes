import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const UseTransition = () => {
  return (
    <TopicPage
      title="useTransition"
      subtitle="Keep your UI responsive during heavy state updates by marking some updates as low priority."
    >
      <h2>The Problem</h2>
      <p>
        Sometimes a state update triggers a lot of work — like rendering
        thousands of items. This can make the UI feel frozen because React
        blocks the main thread while rendering:
      </p>
      <CodeBlock>{`const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
    // This creates 5000 elements — blocks the UI!
    const newItems = Array.from({ length: 5000 }, (_, i) => (
      <div key={i}>{e.target.value}</div>
    ));
    setItems(newItems);
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
      {items}
    </div>
  );
};`}</CodeBlock>

      <h2>The Solution: useTransition</h2>
      <p>
        <code>useTransition</code> lets you mark a state update as{' '}
        <strong>low priority</strong>. React will keep the UI responsive (the
        input) while working on the heavy update in the background:
      </p>
      <CodeBlock>{`import { useState, useTransition } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value); // high priority — instant

    startTransition(() => {
      // low priority — won't block the input
      const newItems = Array.from({ length: 5000 }, (_, i) => (
        <div key={i}>{e.target.value}</div>
      ));
      setItems(newItems);
    });
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
      {isPending ? <p>Loading...</p> : items}
    </div>
  );
};`}</CodeBlock>

      <h2>How It Works</h2>
      <ul>
        <li><code>startTransition(callback)</code> — wraps a state update to mark it as low priority</li>
        <li><code>isPending</code> — a boolean that's <code>true</code> while the transition is in progress</li>
        <li>React keeps the UI responsive for high-priority updates (typing, clicking)</li>
        <li>Low-priority updates happen "in the background"</li>
      </ul>

      <div className="tip-box info">
        <p className="tip-title">When to Use It</p>
        <p>
          Use <code>useTransition</code> when a state update causes a
          noticeable delay in the UI — like filtering a huge list, rendering
          thousands of items, or processing heavy computations.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>const [isPending, startTransition] = useTransition()</code></li>
          <li>Wrap heavy state updates in <code>startTransition(() =&gt; {'{ ... }'})</code></li>
          <li>Use <code>isPending</code> to show loading indicators</li>
          <li>High-priority updates (typing) stay responsive</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default UseTransition;
