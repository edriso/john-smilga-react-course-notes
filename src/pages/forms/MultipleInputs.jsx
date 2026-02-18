import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const MultipleInputs = () => {
  return (
    <TopicPage
      title="Multiple Inputs"
      subtitle="Handle multiple form fields with a single state object and one onChange handler."
    >
      <h2>The Problem</h2>
      <p>
        If you have a form with many fields, creating a separate state and
        handler for each one gets repetitive:
      </p>
      <CodeBlock>{`// Don't do this for many fields
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');`}</CodeBlock>

      <h2>The Solution: One State Object</h2>
      <p>
        Use a single state object and one handler that updates the right
        property using the input's <code>name</code> attribute:
      </p>
      <CodeBlock>{`const App = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,                        // keep other fields
      [e.target.name]: e.target.value, // update this field
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};`}</CodeBlock>

      <h2>How It Works</h2>
      <p>The magic is in this line:</p>
      <CodeBlock>{`[e.target.name]: e.target.value`}</CodeBlock>
      <ul>
        <li><code>e.target.name</code> — the <code>name</code> attribute of the input (e.g., "email")</li>
        <li><code>e.target.value</code> — what the user typed</li>
        <li>The square brackets <code>[]</code> make it a <strong>computed property name</strong> — it uses the variable as the key</li>
      </ul>
      <p>
        So if the user types in the email input, it's like writing{' '}
        <code>{'{ ...user, email: "john@gmail.com" }'}</code>.
      </p>

      <div className="tip-box warning">
        <p className="tip-title">Important</p>
        <p>
          Every input <strong>must</strong> have a <code>name</code> attribute
          that matches the property name in your state object. Otherwise the
          dynamic key won't work.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Store all fields in one state object</li>
          <li>One <code>handleChange</code> for all inputs</li>
          <li>Use <code>[e.target.name]: e.target.value</code> for dynamic updates</li>
          <li>Spread <code>...user</code> to keep other fields intact</li>
          <li>Input <code>name</code> must match state property name</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default MultipleInputs;
