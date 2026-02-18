import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const UseContext = () => {
  return (
    <TopicPage
      title="useContext"
      subtitle="Share data across your entire component tree without passing props through every level."
    >
      <h2>The Problem: Prop Drilling</h2>
      <p>
        When you need to pass data through many levels of components, you end
        up threading props through components that don't even use them:
      </p>
      <CodeBlock>{`// App → Navbar → NavLinks → UserDisplay
// Every component in the chain needs the "user" prop,
// even if only UserDisplay actually uses it.

const App = () => {
  const user = 'John';
  return <Navbar user={user} />;
};

const Navbar = ({ user }) => {
  return <NavLinks user={user} />;
};

const NavLinks = ({ user }) => {
  return <UserDisplay user={user} />;
};`}</CodeBlock>

      <h2>The Solution: Context API</h2>
      <p>
        Context lets you pass data to <strong>any component</strong> in the tree
        without manually passing props through every level. Three steps:
      </p>
      <ol>
        <li><strong>Create</strong> the context</li>
        <li><strong>Provide</strong> the value (wrap components that need it)</li>
        <li><strong>Consume</strong> the value (use it in any child)</li>
      </ol>

      <h3>Step 1: Create Context</h3>
      <CodeBlock>{`import { createContext } from 'react';

const UserContext = createContext();`}</CodeBlock>

      <h3>Step 2: Provide the Value</h3>
      <CodeBlock>{`const App = () => {
  const [user, setUser] = useState('John');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
    </UserContext.Provider>
  );
};`}</CodeBlock>

      <h3>Step 3: Consume with useContext</h3>
      <CodeBlock>{`import { useContext } from 'react';

const UserDisplay = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Hello, {user}</h2>
      <button onClick={() => setUser('Peter')}>
        Change User
      </button>
    </div>
  );
};`}</CodeBlock>

      <h2>Complete Example</h2>
      <CodeBlock>{`import { useState, useContext, createContext } from 'react';

// 1. Create context
const AppContext = createContext();

// 2. Provider wraps the tree
const App = () => {
  const [user, setUser] = useState('John');

  const logout = () => setUser(null);

  return (
    <AppContext.Provider value={{ user, logout }}>
      <Navbar />
    </AppContext.Provider>
  );
};

// 3. Any child can consume it
const Navbar = () => {
  return (
    <nav>
      <h2>My App</h2>
      <NavLinks />
    </nav>
  );
};

const NavLinks = () => {
  const { user, logout } = useContext(AppContext);

  return (
    <div>
      {user ? (
        <>
          <span>Hello, {user}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Please log in</span>
      )}
    </div>
  );
};`}</CodeBlock>

      <h2>Custom Context Hook Pattern</h2>
      <p>
        A cleaner approach — create a custom hook and export it:
      </p>
      <CodeBlock>{`// context.jsx
import { useState, useContext, createContext } from 'react';

const AppContext = createContext();

// Custom hook
export const useAppContext = () => useContext(AppContext);

// Provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState('John');

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};`}</CodeBlock>
      <CodeBlock>{`// main.jsx
import { AppProvider } from './context';
import App from './App';

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
);

// Any component — clean import
import { useAppContext } from './context';

const Navbar = () => {
  const { user } = useAppContext();
  return <h2>Hello, {user}</h2>;
};`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">When to Use Context</p>
        <p>
          Context is great for <strong>global</strong> data: current user,
          theme, language. For complex state management with many actions,
          combine it with <code>useReducer</code> or use Redux Toolkit.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>createContext()</code> — creates a context object</li>
          <li><code>&lt;Context.Provider value={'{...}'}&gt;</code> — wraps tree with data</li>
          <li><code>useContext(Context)</code> — access data from any nested component</li>
          <li>Avoids prop drilling through intermediate components</li>
          <li>Best practice: create a custom hook (<code>useAppContext</code>) for cleaner usage</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default UseContext;
