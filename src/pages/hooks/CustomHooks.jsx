import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const CustomHooks = () => {
  return (
    <TopicPage
      title="Custom Hooks"
      subtitle="Extract reusable stateful logic into your own hooks — clean up components and share logic across the app."
    >
      <h2>What is a Custom Hook?</h2>
      <p>
        A custom hook is just a <strong>regular function that uses other
        hooks</strong>. It starts with "use" and lets you extract and reuse
        stateful logic. Think of it as extracting a chunk of logic from a
        component so multiple components can share it.
      </p>

      <h2>useToggle — A Simple Custom Hook</h2>
      <p>
        A common pattern — toggling a boolean value:
      </p>
      <CodeBlock>{`// hooks/useToggle.js
import { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [show, setShow] = useState(initialValue);
  const toggle = () => setShow(!show);
  return { show, toggle };
};

export default useToggle;`}</CodeBlock>
      <CodeBlock>{`// Any component can use it
import useToggle from './hooks/useToggle';

const App = () => {
  const { show, toggle } = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>
        {show ? 'Hide' : 'Show'}
      </button>
      {show && <h2>Some hidden content</h2>}
    </div>
  );
};`}</CodeBlock>

      <h2>useFetch — Data Fetching Hook</h2>
      <p>
        Extract the common fetch-loading-error pattern into a reusable hook:
      </p>
      <CodeBlock>{`// hooks/useFetch.js
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { isLoading, isError, data };
};

export default useFetch;`}</CodeBlock>
      <CodeBlock>{`// Use it in any component
import useFetch from './hooks/useFetch';

const Users = () => {
  const { isLoading, isError, data } = useFetch(
    'https://api.github.com/users'
  );

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error!</h2>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
};`}</CodeBlock>

      <h2>Rules for Custom Hooks</h2>
      <ul>
        <li>Name must start with <code>use</code> — React enforces hook rules on these functions</li>
        <li>Can use any built-in hooks (<code>useState</code>, <code>useEffect</code>, etc.)</li>
        <li>Can call other custom hooks</li>
        <li>Follow the same rules as all hooks (top level, not in conditions)</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li><strong>Reuse logic</strong> — write once, use in many components</li>
        <li><strong>Cleaner components</strong> — move complex logic out of the component</li>
        <li><strong>Easier testing</strong> — test the hook separately</li>
        <li><strong>Separation of concerns</strong> — UI in the component, logic in the hook</li>
      </ul>

      <div className="tip-box info">
        <p className="tip-title">When to Create a Custom Hook</p>
        <p>
          If you find yourself copying the same useState + useEffect pattern
          in multiple components, that's a sign to extract it into a custom
          hook.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Custom hooks are functions starting with <code>use</code></li>
          <li>They can use built-in hooks and other custom hooks</li>
          <li>Return whatever the consuming component needs (object, array, value)</li>
          <li>Convention: store in a <code>hooks/</code> folder</li>
          <li>Follow all normal hook rules</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default CustomHooks;
