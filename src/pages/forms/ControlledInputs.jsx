import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const ControlledInputs = () => {
  return (
    <TopicPage
      title="Controlled Inputs"
      subtitle="React controls the input value through state — the single source of truth for form data."
    >
      <h2>What is a Controlled Input?</h2>
      <p>
        A controlled input is one where React <strong>controls the value</strong>.
        You set the input's value to a state variable and update the state on
        every keystroke. This means React always knows what's in the input.
      </p>

      <h2>Basic Pattern</h2>
      <CodeBlock>{`import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};`}</CodeBlock>

      <h2>How It Works</h2>
      <ol>
        <li><code>value={'{name}'}</code> — input always shows what's in state</li>
        <li><code>onChange</code> — fires on every keystroke</li>
        <li><code>setName(e.target.value)</code> — updates the state</li>
        <li>React re-renders → input shows new value</li>
      </ol>

      <h2>Add Item to a List</h2>
      <p>A common pattern — form input that adds items to a list:</p>
      <CodeBlock>{`const App = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return; // don't add empty names

    const newPerson = { id: Date.now(), name };
    setPeople([...people, newPerson]);
    setName(''); // clear the input
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">Why Controlled?</p>
        <p>
          Controlled inputs give you full power — you can validate on every
          keystroke, format the value, prevent certain characters, or
          conditionally enable the submit button.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Set <code>value</code> to state and <code>onChange</code> to update state</li>
          <li>React is the "single source of truth" for the input value</li>
          <li>Always call <code>e.preventDefault()</code> in form submit handlers</li>
          <li>Clear input after submit: <code>setName('')</code></li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default ControlledInputs;
