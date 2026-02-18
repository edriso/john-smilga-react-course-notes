import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const Lists = () => {
  return (
    <TopicPage
      title="Lists & Keys"
      subtitle="How to render arrays of data in React using .map() and why keys matter."
    >
      <h2>Rendering Lists with .map()</h2>
      <p>
        In React, you render lists by using JavaScript's{' '}
        <code>.map()</code> method. It takes each item in an array, transforms
        it into JSX, and returns a new array of elements:
      </p>
      <CodeBlock>{`const people = ['John', 'Peter', 'Susan'];

const App = () => {
  return (
    <ul>
      {people.map((person) => {
        return <li>{person}</li>;
      })}
    </ul>
  );
};`}</CodeBlock>

      <h2>Rendering a List of Components</h2>
      <p>
        More commonly, you'll map over an array of objects and render a
        component for each one:
      </p>
      <CodeBlock>{`const books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear' },
  { id: 2, title: 'Deep Work', author: 'Cal Newport' },
  { id: 3, title: 'The Lean Startup', author: 'Eric Ries' },
];

const BookList = () => {
  return (
    <section>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

const Book = ({ title, author }) => {
  return (
    <article>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};`}</CodeBlock>

      <h2>The Key Prop</h2>
      <p>
        When you render a list, React needs a <strong>key</strong> prop on each
        item. The key helps React figure out which items changed, were added,
        or were removed.
      </p>
      <CodeBlock>{`// Good — unique id as key
{books.map((book) => {
  return <Book key={book.id} {...book} />;
})}

// Avoid — index as key (works but not ideal)
{books.map((book, index) => {
  return <Book key={index} {...book} />;
})}`}</CodeBlock>

      <div className="tip-box warning">
        <p className="tip-title">Why Not Use Index as Key?</p>
        <p>
          Using the index works, but it can cause bugs when items are
          reordered, added, or removed. Always prefer a unique{' '}
          <code>id</code> from your data. Only use index as a last resort for
          static lists that never change.
        </p>
      </div>

      <h2>Using the Index Parameter</h2>
      <p>
        The <code>.map()</code> callback gives you a second parameter — the
        index. Useful for displaying item numbers:
      </p>
      <CodeBlock>{`const BookList = () => {
  return (
    <section>
      {books.map((book, index) => {
        return (
          <Book key={book.id} {...book} number={index + 1} />
        );
      })}
    </section>
  );
};

const Book = ({ title, author, number }) => {
  return (
    <article>
      <span>#{number}</span>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};`}</CodeBlock>

      <h2>Spread Operator Shortcut</h2>
      <p>
        Instead of passing each property one by one, use the spread operator
        to pass all properties of an object as props:
      </p>
      <CodeBlock>{`// Verbose way
{books.map((book) => {
  return (
    <Book
      key={book.id}
      title={book.title}
      author={book.author}
      img={book.img}
    />
  );
})}

// Shortcut with spread
{books.map((book) => {
  return <Book key={book.id} {...book} />;
})}`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Use <code>.map()</code> to turn arrays into JSX elements</li>
          <li>Always provide a unique <code>key</code> prop on each list item</li>
          <li>Use a unique <code>id</code> as key (avoid using array index)</li>
          <li>The key prop is not accessible inside the child component</li>
          <li>Use <code>{'...spread'}</code> to pass all object properties as props</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default Lists;
