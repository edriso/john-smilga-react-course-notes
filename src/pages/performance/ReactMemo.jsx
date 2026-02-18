import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const ReactMemo = () => {
  return (
    <TopicPage
      title="React.memo"
      subtitle="Prevent unnecessary re-renders by memoizing components — only re-render when props actually change."
    >
      <h2>The Problem</h2>
      <p>
        When a parent component re-renders, <strong>all</strong> its children
        re-render too — even if their props haven't changed.
      </p>

      <h2>The Solution: React.memo()</h2>
      <p>
        Wrap a component with <code>React.memo()</code> and it will only
        re-render when its props actually change:
      </p>
      <CodeBlock>{`import { memo } from 'react';

const ExpensiveList = memo(({ items }) => {
  console.log('List rendered');
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
});`}</CodeBlock>

      <h2>Complete Example</h2>
      <CodeBlock>{`import { useState, memo } from 'react';

const ChildComponent = memo(({ name }) => {
  console.log('Child rendered');
  return <h2>Hello, {name}</h2>;
});

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Clicking this re-renders App, but NOT ChildComponent */}
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <ChildComponent name="John" />
    </div>
  );
};`}</CodeBlock>

      <div className="tip-box warning">
        <p className="tip-title">Watch Out for Functions and Objects</p>
        <p>
          <code>React.memo</code> uses shallow comparison. If you pass a
          function or object as a prop, it will be a new reference on every
          render — causing the memo to be useless. Use{' '}
          <code>useCallback</code> for functions and <code>useMemo</code> for
          objects.
        </p>
      </div>

      <h2>When to Use</h2>
      <ul>
        <li>Component renders often with the same props</li>
        <li>Component is expensive to render (large lists, complex calculations)</li>
        <li>The parent re-renders frequently but the child's props rarely change</li>
      </ul>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>const MyComp = memo(function MyComp(props) {'{ ... }'})</code></li>
          <li>Only re-renders when props actually change (shallow comparison)</li>
          <li>Pair with <code>useCallback</code> for function props</li>
          <li>Don't wrap everything — only components with proven performance issues</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default ReactMemo;
