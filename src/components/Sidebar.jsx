import { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import topics from '../data/topics';

const Sidebar = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [openCategories, setOpenCategories] = useState(
    topics.reduce((acc, t) => ({ ...acc, [t.category]: true }), {})
  );

  const filteredTopics = useMemo(() => {
    if (!search.trim()) return topics;
    const term = search.toLowerCase();
    return topics
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.title.toLowerCase().includes(term) ||
            cat.category.toLowerCase().includes(term)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [search]);

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? 'show' : ''}`}
        onClick={onClose}
      />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="logo-icon">⚛</span>
          <h2>React Notes</h2>
        </div>
        <div className="sidebar-search">
          <input
            type="text"
            placeholder="Search topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <nav className="sidebar-nav">
          {filteredTopics.map((cat) => {
            const isOpenCat = search.trim()
              ? true
              : openCategories[cat.category];
            return (
              <div className="sidebar-category" key={cat.category}>
                <button
                  className={`sidebar-category-btn ${isOpenCat ? 'open' : ''}`}
                  onClick={() => toggleCategory(cat.category)}
                >
                  {cat.category}
                  <span className="chevron">▶</span>
                </button>
                <ul
                  className={`sidebar-links ${isOpenCat ? '' : 'collapsed'}`}
                  style={{
                    maxHeight: isOpenCat
                      ? `${cat.items.length * 40}px`
                      : '0px',
                  }}
                >
                  {cat.items.map((item) => (
                    <li key={item.path}>
                      <NavLink to={item.path} onClick={onClose}>
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
