import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const UseCallback = () => {
  return (
    <TopicPage
      title="useCallback"
      subtitle="Memoize functions so they keep the same reference between renders — prevents unnecessary child re-renders."
    >
      <h2>The Problem</h2>
      <p>
        Every time a component re-renders, all functions inside it get{' '}
        <strong>recreated</strong>. Even if the function does the exact same
        thing, it's a brand new function in memory. This is a problem when
        passing functions to memoized child components:
      </p>
      <CodeBlock>{`const App = () => {
  const [count, setCount] = useState(0);

  // This function is recreated on every render
  const handleClick = () => {
    console.log('clicked');
  };

  // Even though handleClick does the same thing,
  // MemoizedChild sees a "new" function and re-renders
  return <MemoizedChild onClick={handleClick} />;
};`}</CodeBlock>

      <h2>The Solution: useCallback</h2>
      <p>
        <code>useCallback</code> memoizes a function — it returns the{' '}
        <strong>same function reference</strong> as long as its dependencies
        haven't changed:
      </p>
      <CodeBlock>{`import { useCallback } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  // Same function reference between renders
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []); // empty deps = never recreated

  return <MemoizedChild onClick={handleClick} />;
};`}</CodeBlock>

      <h2>With Dependencies</h2>
      <p>
        If the function uses values that change, put them in the dependency
        array:
      </p>
      <CodeBlock>{`const App = () => {
  const [people, setPeople] = useState(data);

  const removePerson = useCallback(
    (id) => {
      setPeople(people.filter((p) => p.id !== id));
    },
    [people] // recreate when people changes
  );

  return <List people={people} removePerson={removePerson} />;
};`}</CodeBlock>

      <h2>When to Use useCallback</h2>
      <p>
        Only use <code>useCallback</code> when:
      </p>
      <ul>
        <li>You're passing a function to a <code>React.memo()</code>-wrapped component</li>
        <li>The function is a dependency of another hook (like <code>useEffect</code>)</li>
      </ul>
      <p>
        Don't use it for every function — it adds its own overhead. Only use
        it when you have a measured performance issue.
      </p>

      <div className="tip-box info">
        <p className="tip-title">useCallback + React.memo = Optimal</p>
        <p>
          <code>useCallback</code> alone doesn't prevent re-renders. You need
          to combine it with <code>React.memo()</code> on the child component
          for the optimization to work.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>const fn = useCallback(callback, [deps])</code></li>
          <li>Returns the same function reference if dependencies haven't changed</li>
          <li>Pair with <code>React.memo()</code> on child components</li>
          <li>Don't overuse — only for proven performance issues</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default UseCallback;
