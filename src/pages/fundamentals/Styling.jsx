import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const Styling = () => {
  return (
    <TopicPage
      title="Styling in React"
      subtitle="Different ways to add CSS to your React components — from global stylesheets to inline styles."
    >
      <h2>External CSS (Global Stylesheet)</h2>
      <p>
        The simplest approach. Create a CSS file and import it in your
        component. These styles are <strong>global</strong> — they apply
        everywhere:
      </p>
      <CodeBlock language="css">{`/* index.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.booklist {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
}

@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
  }
}`}</CodeBlock>
      <CodeBlock>{`// Import it in your component
import './index.css';

const BookList = () => {
  return <section className="booklist">...</section>;
};`}</CodeBlock>

      <h2>Inline Styles</h2>
      <p>
        You can apply styles directly on elements using the{' '}
        <code>style</code> attribute. Pass a JavaScript object where CSS
        properties are <strong>camelCase</strong>:
      </p>
      <CodeBlock>{`const Author = () => {
  return (
    <h4
      style={{
        color: '#617d98',
        fontSize: '0.75rem',
        marginTop: '0.5rem',
      }}
    >
      John Doe
    </h4>
  );
};

// Or use a variable
const styles = {
  color: '#617d98',
  fontSize: '0.75rem',
  marginTop: '0.5rem',
};

const Author = () => {
  return <h4 style={styles}>John Doe</h4>;
};`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">Why Double Curly Braces?</p>
        <p>
          The outer <code>{'{}'}</code> is for JSX expressions. The inner{' '}
          <code>{'{}'}</code> is the JavaScript object. So{' '}
          <code>style={'{{}}'}</code> means "here's a JavaScript object as
          the style."
        </p>
      </div>

      <h2>CSS Properties in JavaScript</h2>
      <p>
        CSS properties that have a hyphen become camelCase in JavaScript:
      </p>
      <ul>
        <li><code>background-color</code> → <code>backgroundColor</code></li>
        <li><code>font-size</code> → <code>fontSize</code></li>
        <li><code>margin-top</code> → <code>marginTop</code></li>
        <li><code>border-radius</code> → <code>borderRadius</code></li>
        <li><code>box-shadow</code> → <code>boxShadow</code></li>
      </ul>

      <h2>When to Use Which?</h2>
      <ul>
        <li>
          <strong>External CSS</strong> — for most styling. It's the
          simplest and most familiar approach.
        </li>
        <li>
          <strong>Inline styles</strong> — for dynamic styles that change
          based on state or props.
        </li>
      </ul>
      <CodeBlock>{`// Inline style based on state
const Alert = ({ type }) => {
  return (
    <div
      style={{
        backgroundColor: type === 'error' ? '#fee2e2' : '#dcfce7',
        color: type === 'error' ? '#dc2626' : '#16a34a',
        padding: '1rem',
        borderRadius: '0.5rem',
      }}
    >
      {type === 'error' ? 'Something went wrong!' : 'Success!'}
    </div>
  );
};`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">Other Styling Options</p>
        <p>
          React also supports <strong>CSS Modules</strong>,{' '}
          <strong>Styled Components</strong>, and{' '}
          <strong>Tailwind CSS</strong>. These are covered in their own
          sections.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>External CSS: <code>import './styles.css'</code> and use <code>className</code></li>
          <li>Inline styles: <code>style={'{{}}'}</code> with camelCase properties</li>
          <li>Use <code>className</code> not <code>class</code></li>
          <li>CSS properties are camelCase: <code>fontSize</code>, <code>backgroundColor</code></li>
          <li>External CSS for most styling, inline for dynamic values</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default Styling;
