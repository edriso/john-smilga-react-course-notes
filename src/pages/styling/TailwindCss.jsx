import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const TailwindCss = () => {
  return (
    <TopicPage
      title="Tailwind CSS"
      subtitle="A utility-first CSS framework — style directly in your markup with pre-built classes."
    >
      <h2>What is Tailwind CSS?</h2>
      <p>
        Tailwind provides small, single-purpose utility classes that you
        compose directly in your HTML/JSX. Instead of writing custom CSS, you
        apply classes like <code>bg-blue-500</code>, <code>text-white</code>,{' '}
        <code>p-4</code>.
      </p>

      <h2>Setup with Vite</h2>
      <CodeBlock language="bash">{`npm install -D tailwindcss @tailwindcss/vite`}</CodeBlock>
      <CodeBlock>{`// vite.config.js
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});`}</CodeBlock>
      <CodeBlock language="css">{`/* index.css */
@import 'tailwindcss';`}</CodeBlock>

      <h2>Basic Usage</h2>
      <CodeBlock>{`const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Card Title
      </h2>
      <p className="text-gray-600 text-sm">
        Card description goes here.
      </p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        Learn More
      </button>
    </div>
  );
};`}</CodeBlock>

      <h2>Common Utility Classes</h2>
      <h3>Spacing</h3>
      <ul>
        <li><code>p-4</code> — padding: 1rem</li>
        <li><code>px-4</code> — padding-left and right: 1rem</li>
        <li><code>m-2</code> — margin: 0.5rem</li>
        <li><code>mb-4</code> — margin-bottom: 1rem</li>
        <li><code>gap-2</code> — grid/flex gap: 0.5rem</li>
      </ul>

      <h3>Layout</h3>
      <ul>
        <li><code>flex</code> — display: flex</li>
        <li><code>grid</code> — display: grid</li>
        <li><code>grid-cols-3</code> — grid-template-columns: repeat(3, 1fr)</li>
        <li><code>items-center</code> — align-items: center</li>
        <li><code>justify-between</code> — justify-content: space-between</li>
      </ul>

      <h3>Responsive Design</h3>
      <p>
        Prefix any class with a breakpoint to apply it at that screen size and
        up:
      </p>
      <CodeBlock>{`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* 1 column on mobile, 2 on medium, 3 on large */}
</div>`}</CodeBlock>

      <h2>Custom Component Classes</h2>
      <CodeBlock language="css">{`/* index.css */
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded
           hover:bg-blue-600 transition-colors;
  }
}`}</CodeBlock>

      <h2>DaisyUI — Component Library</h2>
      <p>
        DaisyUI adds pre-built component classes on top of Tailwind:
      </p>
      <CodeBlock language="bash">{`npm install daisyui`}</CodeBlock>
      <CodeBlock>{`// Now you can use component classes
<button className="btn btn-primary">Click Me</button>
<div className="card bg-base-100 shadow-xl">...</div>
<div className="navbar bg-base-100">...</div>`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">VS Code Extensions</p>
        <p>
          Install <strong>Tailwind CSS IntelliSense</strong> for autocomplete
          and <strong>Tailwind Fold</strong> to collapse long class strings.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Utility classes: <code>bg-blue-500</code>, <code>text-xl</code>, <code>p-4</code>, <code>rounded</code></li>
          <li>Responsive: <code>md:grid-cols-2</code>, <code>lg:text-xl</code></li>
          <li>Hover/focus: <code>hover:bg-blue-600</code>, <code>focus:ring-2</code></li>
          <li>Custom classes: <code>@apply</code> in CSS with <code>@layer components</code></li>
          <li>DaisyUI for pre-built component classes</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default TailwindCss;
