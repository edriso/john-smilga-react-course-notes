import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const FormDataApi = () => {
  return (
    <TopicPage
      title="FormData API"
      subtitle="Grab all form values at once without managing state for each input — great for forms with many fields."
    >
      <h2>What is FormData?</h2>
      <p>
        <code>FormData</code> is a built-in browser API that grabs all values
        from a form at once. No need for state on each input — just give each
        input a <code>name</code> attribute and grab everything on submit.
      </p>

      <h2>Basic Usage</h2>
      <CodeBlock>{`const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // convert to a plain object
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    // { name: 'John', email: 'john@gmail.com' }

    // clear the form
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <button type="submit">Submit</button>
    </form>
  );
};`}</CodeBlock>

      <h2>How It Works</h2>
      <ol>
        <li><code>new FormData(e.currentTarget)</code> — grabs all named inputs from the form</li>
        <li><code>Object.fromEntries(formData)</code> — converts it to a plain object</li>
        <li><code>e.currentTarget.reset()</code> — clears all inputs</li>
      </ol>

      <div className="tip-box info">
        <p className="tip-title">When to Use FormData vs Controlled Inputs</p>
        <p>
          Use <strong>FormData</strong> when you just need the values on submit
          and don't need to validate on every keystroke.
          Use <strong>controlled inputs</strong> when you need real-time
          validation, formatting, or conditional logic based on what's being typed.
        </p>
      </div>

      <h2>Getting Individual Values</h2>
      <CodeBlock>{`const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  // Get a specific field
  const name = formData.get('name');
  console.log(name);

  // Get all entries as an object
  const data = Object.fromEntries(formData);
  console.log(data);
};`}</CodeBlock>

      <div className="tip-box warning">
        <p className="tip-title">Inputs Need Names</p>
        <p>
          FormData only collects inputs that have a <code>name</code>{' '}
          attribute. If an input doesn't have <code>name</code>, it won't
          appear in the FormData.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>new FormData(e.currentTarget)</code> — grabs all form data</li>
          <li><code>Object.fromEntries(formData)</code> — converts to plain object</li>
          <li><code>formData.get('fieldName')</code> — get a single field</li>
          <li><code>e.currentTarget.reset()</code> — clear all inputs</li>
          <li>Every input needs a <code>name</code> attribute</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default FormDataApi;
