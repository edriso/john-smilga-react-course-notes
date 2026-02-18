import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const LowerState = () => {
  return (
    <TopicPage
      title="Lower State / Push State Down"
      subtitle="Move state to the component that actually uses it — the simplest performance optimization."
    >
      <h2>The Problem</h2>
      <p>
        When state lives in a parent component, every change to that state
        re-renders <strong>all children</strong> — even ones that don't use
        the state:
      </p>
      <CodeBlock>{`// Bad — counter state at parent level
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      {/* This re-renders every time count changes! */}
      <ExpensiveComponent />
      <AnotherExpensiveComponent />
    </div>
  );
};`}</CodeBlock>

      <h2>The Solution: Push State Down</h2>
      <p>
        Move the state into its own component. Only that component re-renders
        when the state changes:
      </p>
      <CodeBlock>{`// Good — counter state in its own component
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};

const App = () => {
  return (
    <div>
      <Counter />
      {/* These DON'T re-render when count changes */}
      <ExpensiveComponent />
      <AnotherExpensiveComponent />
    </div>
  );
};`}</CodeBlock>

      <h2>Why This Works</h2>
      <p>
        React only re-renders a component and its children when that
        component's state changes. By moving the state to the smallest
        component that needs it, you minimize the "blast radius" of
        re-renders.
      </p>

      <div className="tip-box info">
        <p className="tip-title">The Simplest Optimization</p>
        <p>
          Before reaching for <code>React.memo</code>,{' '}
          <code>useCallback</code>, or <code>useMemo</code>, ask yourself:
          "Can I just move this state to a lower component?" It's the easiest
          and most effective optimization.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>State changes re-render the component and <strong>all its children</strong></li>
          <li>Move state to the lowest component that needs it</li>
          <li>Extract stateful logic into small, focused components</li>
          <li>This is the first optimization to try before memo/useCallback/useMemo</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default LowerState;
