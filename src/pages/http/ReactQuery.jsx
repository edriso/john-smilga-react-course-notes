import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const ReactQuery = () => {
  return (
    <TopicPage
      title="React Query (TanStack Query)"
      subtitle="The modern way to fetch, cache, and sync server data — replaces most useEffect data fetching."
    >
      <h2>Why React Query?</h2>
      <p>
        Using <code>useEffect</code> for data fetching means writing the same
        loading/error/data pattern over and over. React Query handles all of
        that and adds <strong>caching</strong>, <strong>background
        refetching</strong>, and <strong>stale data management</strong>
        automatically.
      </p>

      <h2>Installation & Setup</h2>
      <CodeBlock language="bash">{`npm install @tanstack/react-query`}</CodeBlock>
      <CodeBlock>{`// main.jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);`}</CodeBlock>

      <h2>useQuery — Fetching Data</h2>
      <CodeBlock>{`import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchTasks = async () => {
  const { data } = await axios.get('/api/tasks');
  return data;
};

const TaskList = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;

  return (
    <ul>
      {data.taskList.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};`}</CodeBlock>

      <h2>How Caching Works</h2>
      <p>
        React Query caches results using the <code>queryKey</code>. If you
        navigate away and come back, it shows the cached data immediately while
        refetching in the background:
      </p>
      <ul>
        <li><strong>queryKey</strong> — a unique identifier for the cached data</li>
        <li><strong>queryFn</strong> — the function that fetches the data</li>
        <li>Same key = same cached data (no duplicate requests)</li>
        <li>Different key = different cache entry</li>
      </ul>
      <CodeBlock>{`// These are different cache entries
useQuery({ queryKey: ['tasks'], queryFn: fetchAll });
useQuery({ queryKey: ['tasks', 'completed'], queryFn: fetchCompleted });
useQuery({ queryKey: ['tasks', searchTerm], queryFn: () => fetchSearch(searchTerm) });`}</CodeBlock>

      <h2>useMutation — Creating/Updating/Deleting</h2>
      <CodeBlock>{`import { useMutation, useQueryClient } from '@tanstack/react-query';

const TaskForm = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (taskTitle) =>
      axios.post('/api/tasks', { title: taskTitle }),
    onSuccess: () => {
      // Refetch the tasks list after creating
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    mutate(title);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <button disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  );
};`}</CodeBlock>

      <h2>Key Concepts</h2>
      <ul>
        <li>
          <strong>invalidateQueries</strong> — marks cached data as stale and
          triggers a refetch
        </li>
        <li>
          <strong>staleTime</strong> — how long data is considered "fresh"
          before refetching
        </li>
        <li>
          <strong>onSuccess / onError</strong> — callbacks after mutation
        </li>
      </ul>

      <h2>DevTools</h2>
      <CodeBlock language="bash">{`npm install @tanstack/react-query-devtools`}</CodeBlock>
      <CodeBlock>{`import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Add inside QueryClientProvider
<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>useQuery({'{ queryKey, queryFn }'})</code> — fetch and cache data</li>
          <li><code>useMutation({'{ mutationFn, onSuccess }'})</code> — create/update/delete</li>
          <li><code>queryClient.invalidateQueries()</code> — refetch after mutation</li>
          <li><code>queryKey</code> — unique cache identifier (array)</li>
          <li>Automatic caching, background refetching, stale data handling</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default ReactQuery;
