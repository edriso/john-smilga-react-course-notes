import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const QueryParams = () => {
  return (
    <TopicPage
      title="Query Parameters"
      subtitle="Read and set URL query strings (?search=react&page=2) for search, filters, and pagination."
    >
      <h2>What are Query Parameters?</h2>
      <p>
        Query parameters are the <code>?key=value</code> pairs in a URL. They
        don't change the route — they add extra data. Common uses: search
        terms, filter options, pagination.
      </p>

      <h2>Reading Query Params</h2>
      <CodeBlock>{`import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || '1';
  // URL: /products?search=chair&page=2
  // search = "chair", page = "2"

  return <h2>Searching for: {search}</h2>;
};`}</CodeBlock>

      <h2>Setting Query Params</h2>
      <CodeBlock>{`import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search');
    setSearchParams({ search });
    // URL becomes: /products?search=whatever
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};`}</CodeBlock>

      <h2>In Loaders</h2>
      <p>
        Access query params in a loader using the <code>request</code> URL:
      </p>
      <CodeBlock>{`const productsLoader = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';
  const page = url.searchParams.get('page') || '1';

  const response = await fetch(
    \`/api/products?search=\${search}&page=\${page}\`
  );
  return response.json();
};`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>useSearchParams()</code> — read and set query params</li>
          <li><code>searchParams.get('key')</code> — get a param value</li>
          <li><code>setSearchParams({'{ key: "value" }'})</code> — update the URL</li>
          <li>In loaders: <code>new URL(request.url).searchParams</code></li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default QueryParams;
