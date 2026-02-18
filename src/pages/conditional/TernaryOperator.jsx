import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const TernaryOperator = () => {
  return (
    <TopicPage
      title="Ternary Operator"
      subtitle="Render one thing or another based on a condition — the if/else of JSX."
    >
      <h2>Basic Syntax</h2>
      <CodeBlock>{`condition ? expressionIfTrue : expressionIfFalse`}</CodeBlock>

      <h2>Usage in JSX</h2>
      <p>
        The ternary operator is the go-to for "if this, show A, otherwise show
        B" inside JSX:
      </p>
      <CodeBlock>{`const App = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      {isEditing ? (
        <input type="text" />
      ) : (
        <p>Click edit to change</p>
      )}
    </div>
  );
};`}</CodeBlock>

      <h2>Login / Logout Pattern</h2>
      <CodeBlock>{`const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={() => setUser({ name: 'John' })}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};`}</CodeBlock>

      <h2>Ternary vs Short Circuit</h2>
      <ul>
        <li>
          <strong>Ternary</strong> — when you have two options (show A or B)
        </li>
        <li>
          <strong>Short circuit (&&)</strong> — when you show something or
          nothing
        </li>
      </ul>
      <CodeBlock>{`// Ternary — two outcomes
{isLoggedIn ? <Dashboard /> : <LoginPage />}

// Short circuit — show or nothing
{isLoggedIn && <WelcomeBanner />}`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>condition ? A : B</code> — render A if true, B if false</li>
          <li>Use for toggling between two different UI states</li>
          <li>Wrap multi-line JSX in parentheses for readability</li>
          <li>Use ternary for if/else, short circuit for if-only</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default TernaryOperator;
