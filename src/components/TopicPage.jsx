const TopicPage = ({ title, subtitle, children }) => {
  return (
    <div className="topic-page">
      <h1>{title}</h1>
      {subtitle && <p className="topic-subtitle">{subtitle}</p>}
      {children}
    </div>
  );
};

export default TopicPage;
