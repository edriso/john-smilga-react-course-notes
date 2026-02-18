import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const OtherInputs = () => {
  return (
    <TopicPage
      title="Other Input Types"
      subtitle="How to handle checkboxes and select dropdowns in React forms."
    >
      <h2>Checkbox</h2>
      <p>
        Checkboxes use <code>checked</code> instead of <code>value</code>, and
        you read <code>e.target.checked</code> instead of{' '}
        <code>e.target.value</code>:
      </p>
      <CodeBlock>{`const App = () => {
  const [shipping, setShipping] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={shipping}
          onChange={(e) => setShipping(e.target.checked)}
        />
        Free Shipping
      </label>
      <p>Shipping: {shipping ? 'Yes' : 'No'}</p>
    </div>
  );
};`}</CodeBlock>

      <h2>Select Dropdown</h2>
      <p>
        In React, you control the select with <code>value</code> on the{' '}
        <code>&lt;select&gt;</code> element (not with a <code>selected</code>{' '}
        attribute on an option):
      </p>
      <CodeBlock>{`const App = () => {
  const [framework, setFramework] = useState('react');

  return (
    <div>
      <select
        value={framework}
        onChange={(e) => setFramework(e.target.value)}
      >
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="angular">Angular</option>
        <option value="svelte">Svelte</option>
      </select>
      <p>Selected: {framework}</p>
    </div>
  );
};`}</CodeBlock>

      <h2>Dynamic Select Options</h2>
      <p>Generate options from an array:</p>
      <CodeBlock>{`const frameworks = ['react', 'vue', 'angular', 'svelte'];

const App = () => {
  const [framework, setFramework] = useState('react');

  return (
    <select
      value={framework}
      onChange={(e) => setFramework(e.target.value)}
    >
      {frameworks.map((f) => (
        <option key={f} value={f}>
          {f}
        </option>
      ))}
    </select>
  );
};`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Checkbox: <code>checked={'{state}'}</code> + <code>e.target.checked</code></li>
          <li>Select: <code>value={'{state}'}</code> on <code>&lt;select&gt;</code> + <code>e.target.value</code></li>
          <li>Regular input: <code>value={'{state}'}</code> + <code>e.target.value</code></li>
          <li>All follow the same pattern: controlled by state + onChange handler</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default OtherInputs;
