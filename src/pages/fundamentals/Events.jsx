import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const Events = () => {
  return (
    <TopicPage
      title="Events"
      subtitle="How to handle user interactions like clicks, form submissions, and input changes in React."
    >
      <h2>Event Handling Basics</h2>
      <p>
        React events work like regular HTML events but with two differences:
        they use <strong>camelCase</strong> naming, and you pass a{' '}
        <strong>function reference</strong> (not a string):
      </p>
      <CodeBlock>{`// HTML
<button onclick="handleClick()">Click</button>

// React
<button onClick={handleClick}>Click</button>`}</CodeBlock>

      <h2>onClick — Button Clicks</h2>
      <p>
        The most common event. Define a handler function and pass it to{' '}
        <code>onClick</code>:
      </p>
      <CodeBlock>{`const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
};`}</CodeBlock>

      <h2>Inline Event Handlers</h2>
      <p>
        For simple logic, you can use an inline arrow function:
      </p>
      <CodeBlock>{`<button onClick={() => console.log('clicked!')}>
  Click Me
</button>`}</CodeBlock>

      <div className="tip-box warning">
        <p className="tip-title">Don't Call the Function!</p>
        <p>
          Pass the function reference, don't call it. <code>onClick={'{handleClick}'}</code>{' '}
          is correct. <code>onClick={'{handleClick()}'}</code> will run it
          immediately on render — not when clicked!
        </p>
      </div>

      <h2>Passing Arguments to Event Handlers</h2>
      <p>
        To pass arguments, wrap the handler in an arrow function:
      </p>
      <CodeBlock>{`const App = () => {
  const handleClick = (name) => {
    console.log(\`Hello, \${name}!\`);
  };

  return (
    <button onClick={() => handleClick('John')}>
      Say Hello
    </button>
  );
};`}</CodeBlock>

      <h2>The Event Object</h2>
      <p>
        React automatically passes an <strong>event object</strong> to your
        handler. It contains information about the event:
      </p>
      <CodeBlock>{`const App = () => {
  const handleClick = (e) => {
    console.log(e);           // the event object
    console.log(e.target);    // the element that was clicked
  };

  return <button onClick={handleClick}>Click Me</button>;
};`}</CodeBlock>

      <h2>onChange — Input Changes</h2>
      <p>
        Use <code>onChange</code> to track what the user types into an input:
      </p>
      <CodeBlock>{`const App = () => {
  const handleChange = (e) => {
    console.log(e.target.value); // what the user typed
    console.log(e.target.name);  // the input's name attribute
  };

  return (
    <input
      type="text"
      name="username"
      onChange={handleChange}
    />
  );
};`}</CodeBlock>

      <h2>onSubmit — Form Submission</h2>
      <p>
        Use <code>onSubmit</code> on the form element. Always call{' '}
        <code>e.preventDefault()</code> to stop the page from refreshing:
      </p>
      <CodeBlock>{`const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" />
      <button type="submit">Submit</button>
    </form>
  );
};`}</CodeBlock>

      <h2>Common Events</h2>
      <p>Here are the events you'll use most often:</p>
      <ul>
        <li><code>onClick</code> — button clicks, link clicks</li>
        <li><code>onChange</code> — input field changes</li>
        <li><code>onSubmit</code> — form submissions</li>
        <li><code>onMouseEnter</code> / <code>onMouseLeave</code> — hover effects</li>
        <li><code>onKeyDown</code> / <code>onKeyUp</code> — keyboard events</li>
        <li><code>onFocus</code> / <code>onBlur</code> — input focus events</li>
      </ul>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>React events are <strong>camelCase</strong>: <code>onClick</code>, <code>onChange</code>, <code>onSubmit</code></li>
          <li>Pass a function reference: <code>onClick={'{handleClick}'}</code></li>
          <li>For arguments, wrap in arrow: <code>onClick={'{() => handleClick(id)}'}</code></li>
          <li>Use <code>e.preventDefault()</code> to stop form page refresh</li>
          <li>Access input values with <code>e.target.value</code></li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default Events;
