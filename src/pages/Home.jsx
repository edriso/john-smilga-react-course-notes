import { Link } from 'react-router-dom';
import topics from '../data/topics';

const Home = () => {
  return (
    <div className="home-page">
      <h1>React Course Notes</h1>
      <p className="home-subtitle">
        Your personal reference guide for React — from fundamentals to Next.js.
        Based on John Smilga's comprehensive React course, written in clear and
        simple English.
      </p>

      <div className="home-categories">
        {topics.map((cat) => (
          <Link
            to={cat.items[0].path}
            key={cat.category}
            className="home-card"
          >
            <h3>{cat.category}</h3>
            <p>
              {cat.items
                .slice(0, 4)
                .map((i) => i.title)
                .join(', ')}
              {cat.items.length > 4 && '...'}
            </p>
            <div className="card-count">
              {cat.items.length} topic{cat.items.length > 1 ? 's' : ''}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
