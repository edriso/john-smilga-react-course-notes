import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const ImportsExports = () => {
  return (
    <TopicPage
      title="Imports & Exports"
      subtitle="How to organize your code across multiple files using ES6 modules."
    >
      <h2>Why Split Code Into Files?</h2>
      <p>
        As your app grows, putting everything in one file becomes messy. We
        split code into separate files (modules) and use <code>import</code>
        /<code>export</code> to share code between them.
      </p>

      <h2>Default Export</h2>
      <p>
        Each file can have <strong>one default export</strong>. When importing,
        you can name it whatever you want:
      </p>
      <CodeBlock>{`// Book.jsx — default export
const Book = ({ title, author }) => {
  return (
    <article>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;

// App.jsx — import (name can be anything)
import Book from './Book';
import MyBook from './Book'; // also works`}</CodeBlock>

      <h2>Named Export</h2>
      <p>
        A file can have <strong>multiple named exports</strong>. When
        importing, the name <strong>must match exactly</strong>:
      </p>
      <CodeBlock>{`// data.js — named exports
export const books = [
  { id: 1, title: 'Atomic Habits' },
  { id: 2, title: 'Deep Work' },
];

export const greeting = 'Hello World';

// App.jsx — import (names must match, use curly braces)
import { books, greeting } from './data';`}</CodeBlock>

      <h2>Default vs Named — When to Use Which?</h2>
      <ul>
        <li>
          <strong>Default export</strong> — for the main thing a file exports
          (usually one component per file)
        </li>
        <li>
          <strong>Named exports</strong> — for multiple things from one file
          (data arrays, helper functions, constants)
        </li>
      </ul>

      <h2>Combining Both</h2>
      <p>A file can have both a default and named exports:</p>
      <CodeBlock>{`// utils.js
export const formatName = (name) => name.toUpperCase();
export const formatPrice = (price) => \`$\${price.toFixed(2)}\`;

const mainHelper = () => { /* ... */ };
export default mainHelper;

// Import both
import mainHelper, { formatName, formatPrice } from './utils';`}</CodeBlock>

      <h2>Index File Pattern</h2>
      <p>
        When a folder has multiple components, create an <code>index.jsx</code>{' '}
        file to re-export them. This gives you cleaner imports:
      </p>
      <CodeBlock>{`// components/Navbar.jsx
const Navbar = () => { return <nav>Navbar</nav>; };
export default Navbar;

// components/Hero.jsx
const Hero = () => { return <section>Hero</section>; };
export default Hero;

// components/index.jsx — re-export everything
export { default as Navbar } from './Navbar';
export { default as Hero } from './Hero';

// App.jsx — import from the folder
import { Navbar, Hero } from './components';`}</CodeBlock>

      <h2>Importing Images</h2>
      <p>
        You can also import images from the <code>src</code> folder. Build
        tools optimize them automatically:
      </p>
      <CodeBlock>{`// Import images
import bookImg from './images/book-cover.jpg';

const Book = () => {
  return <img src={bookImg} alt="Book Cover" />;
};`}</CodeBlock>
      <p>
        For images in the <code>public</code> folder, just reference the path
        directly: <code>src="/images/photo.jpg"</code>.
      </p>

      <div className="tip-box info">
        <p className="tip-title">src vs public folder</p>
        <p>
          Images in <code>src</code> get optimized and bundled — better
          performance. Images in <code>public</code> are served as-is — use
          for favicons and large files that don't need processing.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><strong>Default export:</strong> <code>export default MyComponent</code> → <code>import MyComponent from './file'</code></li>
          <li><strong>Named export:</strong> <code>export const data = ...</code> → <code>import {'{ data }'} from './file'</code></li>
          <li>Default: one per file, any import name. Named: many per file, exact names</li>
          <li>Use <code>index.jsx</code> to re-export from folders for cleaner imports</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default ImportsExports;
