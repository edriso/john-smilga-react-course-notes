import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const TypescriptReact = () => {
  return (
    <TopicPage
      title="TypeScript + React"
      subtitle="Type your components, props, state, events, and context for bulletproof React apps."
    >
      <h2>Setup</h2>
      <CodeBlock language="bash">{`npm create vite@latest my-app -- --template react-ts`}</CodeBlock>
      <p>
        Use <code>.tsx</code> extension for React components with TypeScript.
      </p>

      <h2>Typing Props</h2>
      <CodeBlock language="typescript">{`// Inline props
const Greeting = ({ name, age }: { name: string; age: number }) => {
  return <h2>{name} is {age}</h2>;
};

// With a type alias (recommended)
type PersonProps = {
  name: string;
  age: number;
  email?: string; // optional
};

const Person = ({ name, age, email }: PersonProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {email && <p>Email: {email}</p>}
    </div>
  );
};`}</CodeBlock>

      <h2>Children Prop</h2>
      <CodeBlock language="typescript">{`import { type ReactNode, type PropsWithChildren } from 'react';

// Option 1: explicit ReactNode
type CardProps = {
  title: string;
  children: ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

// Option 2: PropsWithChildren helper
type CardProps2 = PropsWithChildren<{ title: string }>;`}</CodeBlock>

      <h2>Typing State</h2>
      <CodeBlock language="typescript">{`// TypeScript infers from initial value
const [count, setCount] = useState(0);        // number
const [name, setName] = useState('');          // string

// Explicit type for complex state
type User = {
  name: string;
  email: string;
};

const [user, setUser] = useState<User | null>(null);

// Array state
type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const [tasks, setTasks] = useState<Task[]>([]);`}</CodeBlock>

      <h2>Typing Events</h2>
      <CodeBlock language="typescript">{`// Input change
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

// Form submit
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
};

// Button click
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('clicked');
};

// Select change
const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  console.log(e.target.value);
};`}</CodeBlock>

      <h2>Typing Context</h2>
      <CodeBlock language="typescript">{`type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Custom hook with type guard
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be within ThemeProvider');
  }
  return context;
};`}</CodeBlock>

      <h2>Typing useReducer</h2>
      <CodeBlock language="typescript">{`type State = {
  count: number;
  status: string;
};

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET_STATUS'; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET_STATUS':
      return { ...state, status: action.payload };
    default:
      return state;
  }
};`}</CodeBlock>

      <h2>Redux Toolkit with TypeScript</h2>
      <CodeBlock language="typescript">{`// Typed hooks
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// In slice — PayloadAction
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      // action.payload is typed as string
    },
  },
});`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Props: <code>type Props = {'{ name: string }'}</code></li>
          <li>Children: <code>children: ReactNode</code></li>
          <li>State: <code>useState&lt;Type&gt;(initial)</code></li>
          <li>Events: <code>React.ChangeEvent&lt;HTMLInputElement&gt;</code></li>
          <li>Context: <code>createContext&lt;Type | undefined&gt;(undefined)</code></li>
          <li>Reducer actions: discriminated union types</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default TypescriptReact;
