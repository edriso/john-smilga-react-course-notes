import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const ContextApi = () => {
  return (
    <TopicPage
      title="Context API"
      subtitle="Share global data (user, theme, language) across your app without prop drilling."
    >
      <h2>When to Use Context</h2>
      <p>
        Use Context for data that many components need access to but you don't
        want to pass through every level. Classic examples:
      </p>
      <ul>
        <li>Current logged-in user</li>
        <li>Theme (dark/light mode)</li>
        <li>Language/locale</li>
        <li>Shopping cart</li>
      </ul>

      <h2>Full Setup Pattern</h2>
      <CodeBlock>{`// context/AppContext.jsx
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

// Custom hook for easy access
export const useGlobalContext = () => useContext(AppContext);

// Provider component
const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [user, setUser] = useState(null);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;`}</CodeBlock>

      <h2>Wrap Your App</h2>
      <CodeBlock>{`// main.jsx
import AppProvider from './context/AppContext';

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
);`}</CodeBlock>

      <h2>Use in Any Component</h2>
      <CodeBlock>{`import { useGlobalContext } from '../context/AppContext';

const Navbar = () => {
  const { user, logout, toggleTheme, isDarkTheme } = useGlobalContext();

  return (
    <nav>
      <button onClick={toggleTheme}>
        {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
      </button>
      {user ? (
        <>
          <span>Hello, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Please log in</span>
      )}
    </nav>
  );
};`}</CodeBlock>

      <h2>Context + useReducer</h2>
      <p>
        For more complex state, combine Context with <code>useReducer</code>:
      </p>
      <CodeBlock>{`const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">Context vs Redux</p>
        <p>
          Context is great for simple global state. For complex state with
          many actions, async logic, and devtools, consider{' '}
          <strong>Redux Toolkit</strong>.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>createContext()</code> → <code>&lt;Provider value={'{...}'}&gt;</code> → <code>useContext()</code></li>
          <li>Create a custom hook: <code>useGlobalContext</code></li>
          <li>Wrap the app tree with the Provider</li>
          <li>Any nested component can access the context data</li>
          <li>Combine with useReducer for complex state</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default ContextApi;
