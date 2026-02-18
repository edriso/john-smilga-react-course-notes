import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const UseReducer = () => {
  return (
    <TopicPage
      title="useReducer"
      subtitle="Manage complex state with actions and a reducer function — like a mini Redux inside your component."
    >
      <h2>What is useReducer?</h2>
      <p>
        <code>useReducer</code> is an alternative to <code>useState</code> for
        managing state that involves <strong>multiple related values</strong>{' '}
        or <strong>complex update logic</strong>. Instead of calling a setter
        directly, you dispatch an "action" and a reducer function decides how
        to update the state.
      </p>

      <h2>Basic Pattern</h2>
      <CodeBlock>{`import { useReducer } from 'react';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === 'DECREMENT') {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === 'RESET') {
    return initialState;
  }
  throw new Error(\`Unknown action: \${action.type}\`);
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  );
};`}</CodeBlock>

      <h2>How It Works</h2>
      <ol>
        <li><strong>State</strong> — an object holding your data</li>
        <li><strong>Action</strong> — an object describing what happened (has a <code>type</code>)</li>
        <li><strong>Reducer</strong> — a function that takes the current state and an action, and returns the new state</li>
        <li><strong>Dispatch</strong> — a function to send actions to the reducer</li>
      </ol>

      <h2>Actions with Payload</h2>
      <p>
        Often you need to pass extra data with your action. Add a{' '}
        <code>payload</code> property:
      </p>
      <CodeBlock>{`const reducer = (state, action) => {
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      people: state.people.filter(
        (person) => person.id !== action.payload.id
      ),
    };
  }
  // ...other actions
};

// Dispatch with payload
dispatch({ type: 'REMOVE_ITEM', payload: { id: 3 } });`}</CodeBlock>

      <h2>Real-World Example — People List</h2>
      <CodeBlock>{`const data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Peter' },
  { id: 3, name: 'Susan' },
];

const CLEAR_LIST = 'CLEAR_LIST';
const RESET_LIST = 'RESET_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_LIST:
      return { ...state, people: [] };
    case RESET_LIST:
      return { ...state, people: data };
    case REMOVE_ITEM:
      return {
        ...state,
        people: state.people.filter(
          (person) => person.id !== action.payload.id
        ),
      };
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { people: data });

  return (
    <div>
      {state.people.map((person) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
          <button
            onClick={() =>
              dispatch({ type: REMOVE_ITEM, payload: { id: person.id } })
            }
          >
            Remove
          </button>
        </div>
      ))}
      <button onClick={() => dispatch({ type: CLEAR_LIST })}>
        Clear All
      </button>
      <button onClick={() => dispatch({ type: RESET_LIST })}>
        Reset
      </button>
    </div>
  );
};`}</CodeBlock>

      <h2>Organizing Reducer Code</h2>
      <p>
        For larger apps, put the reducer and action types in separate files:
      </p>
      <CodeBlock>{`// actions.js
export const CLEAR_LIST = 'CLEAR_LIST';
export const RESET_LIST = 'RESET_LIST';
export const REMOVE_ITEM = 'REMOVE_ITEM';

// reducer.js
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_LIST:
      return { ...state, people: [] };
    // ...more cases
  }
};
export default reducer;`}</CodeBlock>

      <h2>useState vs useReducer</h2>
      <ul>
        <li>
          <strong>useState</strong> — simple state (a number, string, boolean, simple object)
        </li>
        <li>
          <strong>useReducer</strong> — complex state with multiple actions
          (add, remove, update, filter, reset) or state that depends on
          previous state in complex ways
        </li>
      </ul>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>const [state, dispatch] = useReducer(reducer, initialState)</code></li>
          <li>Reducer: <code>(state, action) =&gt; newState</code></li>
          <li>Actions: <code>{'{ type: "ACTION_NAME", payload: data }'}</code></li>
          <li>Dispatch: <code>dispatch({'{ type: "ACTION_NAME" }'})</code></li>
          <li>Always return a <strong>new state object</strong> from the reducer</li>
          <li>Throw an error for unknown action types (catch bugs early)</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default UseReducer;
