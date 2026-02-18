import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const AxiosAdvanced = () => {
  return (
    <TopicPage
      title="Axios Advanced"
      subtitle="Custom instances, interceptors, and global defaults — power features for real-world apps."
    >
      <h2>Global Defaults</h2>
      <p>
        Set default headers or base URL for all requests:
      </p>
      <CodeBlock>{`import axios from 'axios';

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers['Accept'] = 'application/json';
axios.defaults.headers['Authorization'] = 'Bearer your-token';`}</CodeBlock>

      <h2>Custom Axios Instance</h2>
      <p>
        Create a pre-configured instance for a specific API. This is the
        recommended approach for real apps:
      </p>
      <CodeBlock>{`// utils/axios.js
import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    Accept: 'application/json',
  },
});

export default authFetch;`}</CodeBlock>
      <CodeBlock>{`// Use it in your components
import authFetch from './utils/axios';

const fetchData = async () => {
  // No need to write the full URL
  const { data } = await authFetch.get('/users');
  console.log(data);
};`}</CodeBlock>

      <h2>Interceptors</h2>
      <p>
        Interceptors let you run code <strong>before</strong> every request or{' '}
        <strong>after</strong> every response. Great for adding auth tokens,
        logging, or handling errors globally.
      </p>

      <h3>Request Interceptor</h3>
      <CodeBlock>{`authFetch.interceptors.request.use(
  (request) => {
    // Runs before every request
    request.headers['Authorization'] = \`Bearer \${getToken()}\`;
    console.log('Request sent');
    return request; // must return the request!
  },
  (error) => {
    return Promise.reject(error);
  }
);`}</CodeBlock>

      <h3>Response Interceptor</h3>
      <CodeBlock>{`authFetch.interceptors.response.use(
  (response) => {
    // Runs on successful responses
    console.log('Response received');
    return response;
  },
  (error) => {
    // Runs on error responses
    console.log(error.response);
    if (error.response.status === 401) {
      console.log('Unauthorized! Redirect to login...');
    }
    return Promise.reject(error);
  }
);`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">When to Use Interceptors</p>
        <p>
          Interceptors are perfect for: attaching auth tokens to every
          request, refreshing expired tokens, logging requests for debugging,
          or handling 401 errors globally (redirect to login).
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>axios.create({'{ baseURL, headers }'})</code> — custom instance</li>
          <li><code>instance.interceptors.request.use(onSuccess, onError)</code></li>
          <li><code>instance.interceptors.response.use(onSuccess, onError)</code></li>
          <li>Request interceptors must return the <code>request</code> object</li>
          <li>Use interceptors for auth tokens, logging, and global error handling</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default AxiosAdvanced;
