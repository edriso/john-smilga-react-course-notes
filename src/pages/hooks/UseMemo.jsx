import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const UseMemo = () => {
  return (
    <TopicPage
      title="useMemo"
      subtitle="Memoize expensive calculations so they don't re-run on every render."
    >
      <h2>The Problem</h2>
      <p>
        If you have an expensive calculation in your component, it runs on{' '}
        <strong>every render</strong> — even when the input data hasn't changed.
      </p>
      <CodeBlock>{`const App = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(largeDataSet);

  // This runs on EVERY render, even when count changes
  const processedData = items.map((item) => {
    // ...some expensive operation
    return item.toUpperCase();
  });

  return <div>...</div>;
};`}</CodeBlock>

      <h2>The Solution: useMemo</h2>
      <p>
        <code>useMemo</code> caches the result of a calculation. It only
        recalculates when its dependencies change:
      </p>
      <CodeBlock>{`import { useMemo } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(largeDataSet);

  // Only recalculates when items changes
  const processedData = useMemo(() => {
    return items.map((item) => item.toUpperCase());
  }, [items]);

  return <div>...</div>;
};`}</CodeBlock>

      <h2>Example: Slow Function</h2>
      <CodeBlock>{`const slowFunction = () => {
  let value = 0;
  for (let i = 0; i <= 1000000000; i++) {
    value += i;
  }
  return value;
};

const App = () => {
  const [count, setCount] = useState(0);

  // Without useMemo — freezes the UI on every render
  // const result = slowFunction();

  // With useMemo — only runs once
  const result = useMemo(() => slowFunction(), []);

  return (
    <div>
      <h2>Result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
};`}</CodeBlock>

      <h2>useMemo vs useCallback</h2>
      <ul>
        <li>
          <code>useMemo</code> — memoizes a <strong>value</strong> (the result of a function)
        </li>
        <li>
          <code>useCallback</code> — memoizes a <strong>function</strong> (the function itself)
        </li>
      </ul>
      <CodeBlock>{`// useMemo returns the VALUE
const result = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// useCallback returns the FUNCTION
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`}</CodeBlock>

      <div className="tip-box warning">
        <p className="tip-title">Don't Overuse</p>
        <p>
          <code>useMemo</code> has its own cost — React needs to store and
          compare dependencies. Only use it for genuinely expensive
          calculations. For simple operations, the overhead of memoizing is
          worse than just recalculating.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>const value = useMemo(() =&gt; expensiveCalc(), [deps])</code></li>
          <li>Returns the memoized <strong>result</strong>, not the function</li>
          <li>Recalculates only when dependencies change</li>
          <li>Use for expensive calculations that don't need to run on every render</li>
          <li><code>useMemo</code> = cached value. <code>useCallback</code> = cached function</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default UseMemo;
