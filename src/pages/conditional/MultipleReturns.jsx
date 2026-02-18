import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const MultipleReturns = () => {
  return (
    <TopicPage
      title="Multiple Returns"
      subtitle="Return different JSX based on conditions — perfect for loading states, errors, and empty data."
    >
      <h2>The Pattern</h2>
      <p>
        A component can have multiple <code>return</code> statements. Based on
        some condition, you return different JSX early:
      </p>
      <CodeBlock>{`const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <h2>Data loaded!</h2>;
};`}</CodeBlock>

      <h2>The Classic Fetch Pattern</h2>
      <p>
        The most common real-world use — three states for data fetching:
      </p>
      <CodeBlock>{`const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await resp.json();
        setUser(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  // Order matters!
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Something went wrong...</h2>;

  // Safe to access user data here
  const { avatar_url, name, company } = user;
  return (
    <div>
      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <p>{company}</p>
    </div>
  );
};`}</CodeBlock>

      <div className="tip-box warning">
        <p className="tip-title">Order Matters!</p>
        <p>
          Always check loading and error <strong>before</strong> accessing your
          data. If you destructure <code>user</code> before checking if it's
          null, you'll get an error.
        </p>
      </div>

      <h2>Fetch "Gotcha"</h2>
      <p>
        The Fetch API does <strong>not</strong> throw errors for 404 or 500
        responses. You need to check <code>response.ok</code> manually:
      </p>
      <CodeBlock>{`const resp = await fetch(url);
// fetch doesn't throw on 404/500!
if (!resp.ok) {
  setIsError(true);
  setIsLoading(false);
  return;
}`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Use early returns for loading, error, and empty states</li>
          <li>Check conditions <strong>before</strong> accessing data</li>
          <li>Fetch API: check <code>response.ok</code> for HTTP errors</li>
          <li>Three-state pattern: <code>isLoading</code>, <code>isError</code>, <code>data</code></li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default MultipleReturns;
