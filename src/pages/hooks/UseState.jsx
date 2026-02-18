import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const UseState = () => {
  return (
    <TopicPage
      title="useState"
      subtitle="The most important hook in React. It lets your components remember things — like what the user typed or clicked."
    >
      <h2>Why Do We Need State?</h2>
      <p>
        Regular JavaScript variables don't trigger a re-render when they
        change. If you update a variable, React doesn't know about it — the
        screen stays the same:
      </p>
      <CodeBlock>{`// This DOESN'T work — screen won't update
const App = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count); // increases, but screen shows 0
  };

  return <button onClick={handleClick}>Count: {count}</button>;
};`}</CodeBlock>
      <p>
        That's why we need <code>useState</code>. It gives us a special
        variable that, when updated, tells React to re-render the component
        with the new value.
      </p>

      <h2>Basic Usage</h2>
      <CodeBlock>{`import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};`}</CodeBlock>
      <p>Let's break this down:</p>
      <ul>
        <li><code>useState(0)</code> — creates state with initial value <code>0</code></li>
        <li><code>count</code> — the current value (read it)</li>
        <li><code>setCount</code> — the function to update the value (write it)</li>
        <li>When you call <code>setCount</code>, React re-renders the component with the new value</li>
      </ul>

      <h2>useState with Strings</h2>
      <CodeBlock>{`const App = () => {
  const [name, setName] = useState('John');

  return (
    <div>
      <h2>Hello, {name}</h2>
      <button onClick={() => setName('Peter')}>
        Change Name
      </button>
    </div>
  );
};`}</CodeBlock>

      <h2>useState with Arrays</h2>
      <p>
        Very common pattern — manage a list of items:
      </p>
      <CodeBlock>{`const App = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Peter' },
    { id: 3, name: 'Susan' },
  ]);

  // Remove an item (create new array, don't mutate)
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  // Clear all items
  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
          <button onClick={() => removePerson(person.id)}>
            Remove
          </button>
        </div>
      ))}
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};`}</CodeBlock>

      <div className="tip-box warning">
        <p className="tip-title">Never Mutate State Directly</p>
        <p>
          Don't do <code>people.push(newPerson)</code> or{' '}
          <code>people[0].name = 'Bob'</code>. Always create a{' '}
          <strong>new array or object</strong> and pass it to the setter function.
        </p>
      </div>

      <h2>useState with Objects</h2>
      <p>
        When updating an object, you must spread the existing properties to
        keep the ones you're not changing:
      </p>
      <CodeBlock>{`const App = () => {
  const [person, setPerson] = useState({
    name: 'John',
    age: 30,
    hobby: 'reading',
  });

  const handleClick = () => {
    setPerson({
      ...person,    // keep existing values
      age: 31,      // update only age
    });
  };

  return (
    <div>
      <h2>{person.name}</h2>
      <p>Age: {person.age}</p>
      <p>Hobby: {person.hobby}</p>
      <button onClick={handleClick}>Birthday!</button>
    </div>
  );
};`}</CodeBlock>

      <h2>Functional Updates</h2>
      <p>
        When your new state depends on the previous state, use the{' '}
        <strong>functional form</strong> of the setter. This ensures you're
        always working with the latest value:
      </p>
      <CodeBlock>{`// Simple form — might be stale in some cases
setCount(count + 1);

// Functional form — always uses the latest value
setCount((prevCount) => prevCount + 1);`}</CodeBlock>
      <p>
        Use the functional form when updating based on the previous value,
        especially inside <code>setTimeout</code> or when calling the setter
        multiple times:
      </p>
      <CodeBlock>{`// Without functional update — only adds 1
const handleClick = () => {
  setCount(count + 1); // count is 0 → set to 1
  setCount(count + 1); // count is still 0 → set to 1
  setCount(count + 1); // count is still 0 → set to 1
  // Result: 1 (not 3!)
};

// With functional update — adds 3
const handleClick = () => {
  setCount((prev) => prev + 1); // 0 → 1
  setCount((prev) => prev + 1); // 1 → 2
  setCount((prev) => prev + 1); // 2 → 3
  // Result: 3
};`}</CodeBlock>

      <h2>Automatic Batching (React 18)</h2>
      <p>
        React 18 groups multiple state updates into a <strong>single
        re-render</strong> for better performance. This happens automatically
        in event handlers, timeouts, and async operations.
      </p>
      <CodeBlock>{`const handleClick = () => {
  setName('Peter');   // doesn't re-render yet
  setAge(31);         // doesn't re-render yet
  setHobby('coding'); // now React re-renders once with all changes
};`}</CodeBlock>

      <h2>Rules of Hooks</h2>
      <ul>
        <li>Only call hooks at the <strong>top level</strong> of your component</li>
        <li>Don't call hooks inside loops, conditions, or nested functions</li>
        <li>Only call hooks from React function components (not regular JS functions)</li>
        <li>Hook names must start with <code>use</code></li>
      </ul>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>const [value, setValue] = useState(initialValue)</code></li>
          <li>Calling <code>setValue()</code> triggers a re-render</li>
          <li>Never mutate state directly — always create new values</li>
          <li>For objects: <code>setValue({'{ ...prev, key: newValue }'})</code></li>
          <li>For arrays: use <code>.filter()</code>, <code>.map()</code>, spread <code>[...prev, newItem]</code></li>
          <li>Use functional updates when new state depends on old: <code>setValue(prev =&gt; prev + 1)</code></li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default UseState;
