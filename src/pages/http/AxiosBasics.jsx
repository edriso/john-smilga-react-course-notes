import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const AxiosBasics = () => {
  return (
    <TopicPage
      title="Axios Basics"
      subtitle="Make HTTP requests with a clean, promise-based API — a better alternative to the native fetch."
    >
      <h2>What is Axios?</h2>
      <p>
        Axios is an HTTP client library for making API requests. It's similar
        to the native <code>fetch</code> but with nicer defaults — it
        automatically parses JSON, throws errors on 4xx/5xx responses, and
        has a cleaner API.
      </p>

      <h2>Installation</h2>
      <CodeBlock language="bash">{`npm install axios`}</CodeBlock>

      <h2>GET Request</h2>
      <CodeBlock>{`import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://api.github.com/users'
    );
    console.log(response.data); // data is already parsed!
  } catch (error) {
    console.log(error.response); // error info
  }
};`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">Axios vs Fetch</p>
        <p>
          With fetch, you need to call <code>.json()</code> manually and check{' '}
          <code>response.ok</code>. Axios does both automatically — data is in{' '}
          <code>response.data</code> and 4xx/5xx trigger the catch block.
        </p>
      </div>

      <h2>POST Request</h2>
      <p>
        Send data to the server. The data object is the second argument:
      </p>
      <CodeBlock>{`const createUser = async (userData) => {
  try {
    const response = await axios.post(
      'https://api.example.com/users',
      userData  // { name: 'John', email: 'john@email.com' }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
};`}</CodeBlock>

      <h2>All HTTP Methods</h2>
      <CodeBlock>{`// GET — read data
await axios.get(url);

// POST — create data
await axios.post(url, { name: 'John' });

// PUT/PATCH — update data
await axios.patch(url, { name: 'Jane' });

// DELETE — remove data
await axios.delete(url);`}</CodeBlock>

      <h2>Headers</h2>
      <p>
        Pass headers as a config object. For GET it's the second argument, for
        POST it's the third:
      </p>
      <CodeBlock>{`// GET with headers
const { data } = await axios.get(url, {
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer your-token',
  },
});

// POST with headers (data is second, config is third)
await axios.post(url, userData, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your-token',
  },
});`}</CodeBlock>

      <h2>In a React Component</h2>
      <CodeBlock>{`import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://api.github.com/users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(url);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
};`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>axios.get(url)</code> — GET request</li>
          <li><code>axios.post(url, data)</code> — POST request</li>
          <li><code>axios.patch(url, data)</code> — PATCH request</li>
          <li><code>axios.delete(url)</code> — DELETE request</li>
          <li>Data is in <code>response.data</code> (auto-parsed JSON)</li>
          <li>Errors on 4xx/5xx go to catch block automatically</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default AxiosBasics;
