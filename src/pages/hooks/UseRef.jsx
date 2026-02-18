import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const UseRef = () => {
  return (
    <TopicPage
      title="useRef"
      subtitle="Access DOM elements directly and keep values between renders without causing re-renders."
    >
      <h2>What is useRef?</h2>
      <p>
        <code>useRef</code> gives you a mutable container that persists across
        renders. Unlike state, changing a ref does <strong>not</strong> trigger
        a re-render. It has two main uses:
      </p>
      <ol>
        <li>Accessing DOM elements directly</li>
        <li>Storing values that persist between renders without causing re-renders</li>
      </ol>

      <h2>Accessing DOM Elements</h2>
      <p>
        The most common use case. Attach the ref to an element and access it
        via <code>.current</code>:
      </p>
      <CodeBlock>{`import { useRef, useEffect } from 'react';

const App = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when the component mounts
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
};`}</CodeBlock>
      <p>
        After the component renders, <code>inputRef.current</code> points to
        the actual DOM element. You can call any DOM method on it.
      </p>

      <h2>Getting Input Values</h2>
      <p>
        Use refs to grab a value without controlling it with state (uncontrolled inputs):
      </p>
      <CodeBlock>{`const App = () => {
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};`}</CodeBlock>

      <h2>Preserving Values Between Renders</h2>
      <p>
        Refs are also useful when you need a value to survive re-renders but
        don't want to trigger one when it changes:
      </p>
      <CodeBlock>{`const App = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(\`Component rendered \${renderCount.current} times\`);
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};`}</CodeBlock>

      <h2>Skip First Render in useEffect</h2>
      <p>
        A common pattern — use a ref to skip the effect on the first render:
      </p>
      <CodeBlock>{`const App = () => {
  const [value, setValue] = useState('');
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return; // skip the first render
    }
    console.log('Value changed after mount:', value);
  }, [value]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};`}</CodeBlock>

      <h2>useRef vs useState</h2>
      <ul>
        <li>
          <strong>useState</strong> — when changing the value should update the
          screen (re-render)
        </li>
        <li>
          <strong>useRef</strong> — when you need to keep a value but
          changing it should <strong>not</strong> update the screen
        </li>
      </ul>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>const ref = useRef(initialValue)</code></li>
          <li>Access the value with <code>ref.current</code></li>
          <li>Attach to DOM elements: <code>&lt;input ref={'{ref}'} /&gt;</code></li>
          <li>Changing <code>ref.current</code> does <strong>not</strong> trigger a re-render</li>
          <li>Common uses: focus inputs, read DOM values, track render count, skip first render</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default UseRef;
