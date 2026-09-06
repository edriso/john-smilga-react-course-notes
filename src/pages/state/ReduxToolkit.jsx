import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const ReduxToolkit = () => {
  return (
    <TopicPage
      title="Redux Toolkit"
      subtitle="The official, modern way to use Redux — simplified store setup, slices, and async operations."
    >
      <h2>What is Redux Toolkit?</h2>
      <p>
        Redux Toolkit (RTK) is the official way to write Redux. It simplifies
        store setup, slice creation, and includes useful utilities like{' '}
        <strong>Immer</strong> (write "mutable" code that's actually
        immutable) and <strong>createAsyncThunk</strong> (handle async
        operations).
      </p>

      <h2>Installation</h2>
      <CodeBlock language="bash">{`npm install @reduxjs/toolkit react-redux`}</CodeBlock>

      <h2>1. Create a Slice</h2>
      <p>
        A slice combines your state, reducers, and actions in one place:
      </p>
      <CodeBlock>{`// features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []; // Immer makes this safe!
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      );
      item.amount += 1; // direct mutation is OK with Immer
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;`}</CodeBlock>

      <h2>2. Configure the Store</h2>
      <CodeBlock>{`// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});`}</CodeBlock>

      <h2>3. Provide the Store</h2>
      <CodeBlock>{`// main.jsx
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);`}</CodeBlock>

      <h2>4. Use in Components</h2>
      <CodeBlock>{`import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem, increase } from './features/cart/cartSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart ({amount} items)</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.title} - \${item.price}</h4>
          <button onClick={() => dispatch(increase(item.id))}>
            +
          </button>
          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <h3>Total: \${total.toFixed(2)}</h3>
      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </div>
  );
};`}</CodeBlock>

      <h2>Async Operations with createAsyncThunk</h2>
      <CodeBlock>{`import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async () => {
    const resp = await fetch('/api/cart');
    const data = await resp.json();
    return data;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: { /* ... */ },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});`}</CodeBlock>
      <CodeBlock>{`// Dispatch the async thunk
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItems } from './features/cart/cartSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return <div>...</div>;
};`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>createSlice</code> — define state + reducers + actions together</li>
          <li><code>configureStore</code> — create the Redux store</li>
          <li><code>useSelector(store =&gt; store.sliceName)</code> — read state</li>
          <li><code>useDispatch()</code> + <code>dispatch(action())</code> — update state</li>
          <li><code>createAsyncThunk</code> — handle async operations (pending/fulfilled/rejected)</li>
          <li>Immer allows "mutable" syntax in reducers (it's actually immutable)</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default ReduxToolkit;
