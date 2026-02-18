import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const Props = () => {
  return (
    <TopicPage
      title="Props"
      subtitle="Props let you pass data from a parent component to a child component — like function arguments."
    >
      <h2>What are Props?</h2>
      <p>
        Props (short for "properties") are how you pass data{' '}
        <strong>from parent to child</strong>. Think of them like arguments you
        pass to a function — the parent decides what data to send, and the
        child receives and uses it.
      </p>

      <h2>Passing Props</h2>
      <p>
        You pass props to a component the same way you add attributes to an
        HTML element:
      </p>
      <CodeBlock>{`// Parent passes props
const App = () => {
  return <Person name="John" age={30} />;
};

// Child receives props as an object
const Person = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
};`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">String vs Other Types</p>
        <p>
          Strings can be passed with just quotes: <code>name="John"</code>.
          Numbers, booleans, arrays, and objects need curly braces:{' '}
          <code>age={'{30}'}</code>, <code>active={'{true}'}</code>.
        </p>
      </div>

      <h2>Destructuring Props</h2>
      <p>
        Instead of writing <code>props.name</code> everywhere, you can
        destructure the props object. There are two common ways:
      </p>
      <CodeBlock>{`// 1. Destructure in the function body
const Person = (props) => {
  const { name, age } = props;
  return (
    <h2>{name} is {age} years old</h2>
  );
};

// 2. Destructure in the parameters (most common)
const Person = ({ name, age }) => {
  return (
    <h2>{name} is {age} years old</h2>
  );
};`}</CodeBlock>

      <h2>Props with Dynamic Data</h2>
      <p>
        In real apps, you don't hardcode props. You pass data from variables,
        arrays, or API responses:
      </p>
      <CodeBlock>{`const books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear' },
  { id: 2, title: 'Deep Work', author: 'Cal Newport' },
];

const App = () => {
  return (
    <section>
      {books.map((book) => {
        return (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
          />
        );
      })}
    </section>
  );
};`}</CodeBlock>

      <h2>Spread Operator for Props</h2>
      <p>
        Instead of passing each prop individually, you can spread the entire
        object:
      </p>
      <CodeBlock>{`// Instead of this:
<Book title={book.title} author={book.author} img={book.img} />

// You can do this:
<Book {...book} />`}</CodeBlock>
      <p>
        The spread operator (<code>...</code>) takes all properties from the
        object and passes them as individual props. Cleaner and less typing.
      </p>

      <h2>Children Prop</h2>
      <p>
        There's a special prop called <code>children</code>. It represents
        anything you put <strong>between</strong> the opening and closing tags
        of a component:
      </p>
      <CodeBlock>{`// Parent places content between tags
const App = () => {
  return (
    <Card>
      <h2>Hello!</h2>
      <p>This is inside the card</p>
    </Card>
  );
};

// Child receives it as "children"
const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};`}</CodeBlock>
      <p>
        The <code>children</code> prop is great for creating wrapper or layout
        components.
      </p>

      <h2>Prop Drilling</h2>
      <p>
        When you need to pass data through multiple levels of components, it's
        called <strong>prop drilling</strong>. The data goes from parent → child
        → grandchild:
      </p>
      <CodeBlock>{`const App = () => {
  const user = 'John';
  return <Navbar user={user} />;
};

const Navbar = ({ user }) => {
  return <UserDisplay user={user} />;
};

const UserDisplay = ({ user }) => {
  return <h2>Hello, {user}</h2>;
};`}</CodeBlock>
      <p>
        Prop drilling works fine for 2-3 levels. For deeper nesting, use{' '}
        <strong>Context API</strong> or <strong>Redux</strong> instead.
      </p>

      <h2>Passing Functions as Props</h2>
      <p>
        You can pass functions as props too. This is how child components
        communicate back to their parent:
      </p>
      <CodeBlock>{`const BookList = () => {
  const getBook = (id) => {
    console.log('Getting book:', id);
  };

  return <Book id={1} title="Atomic Habits" getBook={getBook} />;
};

const Book = ({ id, title, getBook }) => {
  return (
    <article>
      <h2>{title}</h2>
      {/* wrap in arrow function to pass arguments */}
      <button onClick={() => getBook(id)}>Get Info</button>
    </article>
  );
};`}</CodeBlock>

      <div className="tip-box warning">
        <p className="tip-title">Common Mistake</p>
        <p>
          Don't call the function directly in JSX:{' '}
          <code>onClick={'{getBook(id)}'}</code> — this runs it immediately on
          render! Wrap it in an arrow function:{' '}
          <code>onClick={'{() => getBook(id)}'}</code>.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Props flow <strong>one way</strong>: parent → child</li>
          <li>Destructure props: <code>{'({ name, age })'}</code></li>
          <li>Spread all props: <code>{'<Book {...book} />'}</code></li>
          <li><code>children</code> = content between component tags</li>
          <li>Pass functions as props for child → parent communication</li>
          <li>Props are <strong>read-only</strong> — a child can't modify its own props</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default Props;
