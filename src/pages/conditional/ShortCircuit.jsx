import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const ShortCircuit = () => {
  return (
    <TopicPage
      title="Short Circuit Evaluation"
      subtitle="Use && and || to conditionally render elements inline — no if statements needed."
    >
      <h2>Truthy and Falsy Values</h2>
      <p>
        Before we use short circuit evaluation, let's remember which values are
        falsy in JavaScript:
      </p>
      <ul>
        <li><strong>Falsy:</strong> <code>false</code>, <code>0</code>, <code>""</code> (empty string), <code>null</code>, <code>undefined</code>, <code>NaN</code></li>
        <li><strong>Truthy:</strong> everything else (including <code>{'{}'}</code>, <code>[]</code>, <code>"0"</code>)</li>
      </ul>

      <h2>AND Operator (&&)</h2>
      <p>
        <code>&&</code> returns the <strong>first falsy value</strong>, or the{' '}
        <strong>last value</strong> if all are truthy. In React, use it to
        render something only when a condition is true:
      </p>
      <CodeBlock>{`const App = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle
      </button>
      {showMessage && <h2>Hello World!</h2>}
    </div>
  );
};

// showMessage is true  → renders <h2>Hello World!</h2>
// showMessage is false → renders nothing`}</CodeBlock>

      <h2>OR Operator (||)</h2>
      <p>
        <code>||</code> returns the <strong>first truthy value</strong>. Use it
        for default/fallback values:
      </p>
      <CodeBlock>{`const App = ({ name }) => {
  return <h2>Hello, {name || 'Guest'}</h2>;
};

// name = "John"     → "Hello, John"
// name = ""         → "Hello, Guest"
// name = undefined  → "Hello, Guest"`}</CodeBlock>

      <h2>Common Patterns</h2>
      <CodeBlock>{`// Show component only if data exists
{user && <UserProfile user={user} />}

// Show fallback for empty data
{text || 'No text provided'}

// Show element only if list has items
{items.length > 0 && <ItemList items={items} />}

// Negate — show when condition is false
{!isLoggedIn && <LoginButton />}`}</CodeBlock>

      <div className="tip-box warning">
        <p className="tip-title">Watch Out for 0</p>
        <p>
          <code>{'{count && <Component />}'}</code> will render <code>0</code>{' '}
          on screen when count is 0 (because 0 is falsy but React renders it).
          Use <code>{'{count > 0 && <Component />}'}</code> instead.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>{'{condition && <Element />}'}</code> — render only if truthy</li>
          <li><code>{'{value || "fallback"}'}</code> — show fallback if falsy</li>
          <li><code>&&</code> returns first falsy or last value</li>
          <li><code>||</code> returns first truthy or last value</li>
          <li>Be careful with <code>0</code> — it renders on screen</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default ShortCircuit;
