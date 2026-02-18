import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const TypescriptBasics = () => {
  return (
    <TopicPage
      title="TypeScript Basics"
      subtitle="Add type safety to your JavaScript — catch errors before your code runs."
    >
      <h2>What is TypeScript?</h2>
      <p>
        TypeScript is JavaScript with <strong>types</strong>. It catches bugs
        at compile time instead of runtime. You write <code>.ts</code> or{' '}
        <code>.tsx</code> files, and TypeScript compiles them to regular
        JavaScript.
      </p>

      <h2>Basic Types</h2>
      <CodeBlock language="typescript">{`// Type annotations
let name: string = 'John';
let age: number = 30;
let isActive: boolean = true;

// TypeScript infers the type if you assign a value
let score = 100;     // TypeScript knows this is a number
score = 'hello';     // Error! Can't assign string to number`}</CodeBlock>

      <h2>Union Types</h2>
      <p>Allow a value to be one of multiple types:</p>
      <CodeBlock language="typescript">{`let id: string | number;
id = '123';  // OK
id = 123;    // also OK
id = true;   // Error!

// Literal types — specific values only
type Status = 'pending' | 'success' | 'error';
let current: Status = 'pending';  // OK
let bad: Status = 'loading';      // Error!`}</CodeBlock>

      <h2>Arrays</h2>
      <CodeBlock language="typescript">{`let names: string[] = ['John', 'Peter', 'Susan'];
let numbers: number[] = [1, 2, 3];
let mixed: (string | number)[] = ['hello', 42];`}</CodeBlock>

      <h2>Objects & Type Aliases</h2>
      <CodeBlock language="typescript">{`// Type alias — reusable type definition
type Person = {
  name: string;
  age: number;
  email?: string;     // optional property
  readonly id: number; // can't be changed after creation
};

const john: Person = {
  name: 'John',
  age: 30,
  id: 1,
};

john.name = 'Jane';  // OK
john.id = 2;         // Error! readonly`}</CodeBlock>

      <h2>Interfaces</h2>
      <p>
        Similar to type aliases for objects, but can be extended:
      </p>
      <CodeBlock language="typescript">{`interface User {
  name: string;
  age: number;
}

// Extend an interface
interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: 'John',
  age: 30,
  role: 'admin',
};`}</CodeBlock>

      <h2>Functions</h2>
      <CodeBlock language="typescript">{`// Parameter and return types
const greet = (name: string): string => {
  return \`Hello, \${name}\`;
};

// Optional parameters
const log = (message: string, userId?: string): void => {
  console.log(message, userId);
};

// Default parameters
const create = (name: string, role: string = 'user'): void => {
  console.log(name, role);
};`}</CodeBlock>

      <h2>Generics</h2>
      <p>
        Create reusable types that work with different data types:
      </p>
      <CodeBlock language="typescript">{`// Generic function
const getFirst = <T>(array: T[]): T => {
  return array[0];
};

getFirst<string>(['a', 'b', 'c']);  // returns 'a' (string)
getFirst<number>([1, 2, 3]);        // returns 1 (number)

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
}

const response: ApiResponse<string[]> = {
  data: ['item1', 'item2'],
  status: 200,
};`}</CodeBlock>

      <h2>Enums</h2>
      <CodeBlock language="typescript">{`enum JobStatus {
  Pending,    // 0
  Interview,  // 1
  Declined,   // 2
}

// String enums
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

let status: JobStatus = JobStatus.Pending;`}</CodeBlock>

      <h2>Type Guards</h2>
      <CodeBlock language="typescript">{`// typeof guard
const process = (value: string | number) => {
  if (typeof value === 'string') {
    return value.toUpperCase(); // TypeScript knows it's a string
  }
  return value.toFixed(2); // TypeScript knows it's a number
};

// Truthiness guard
const greet = (name?: string) => {
  if (name) {
    console.log(\`Hello, \${name.toUpperCase()}\`);
  }
};`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Basic types: <code>string</code>, <code>number</code>, <code>boolean</code></li>
          <li>Union: <code>string | number</code></li>
          <li>Arrays: <code>string[]</code></li>
          <li>Optional: <code>name?: string</code></li>
          <li>Readonly: <code>readonly id: number</code></li>
          <li><code>type</code> alias for object shapes, <code>interface</code> for extendable types</li>
          <li>Generics: <code>{'<T>'}</code> for reusable types</li>
          <li>Type guards: <code>typeof</code>, truthiness checks</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default TypescriptBasics;
