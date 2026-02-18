import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const StyledComponents = () => {
  return (
    <TopicPage
      title="Styled Components"
      subtitle="Write CSS inside your JavaScript — scoped styles, dynamic props, and no class name collisions."
    >
      <h2>What is Styled Components?</h2>
      <p>
        Styled Components is a CSS-in-JS library. You write actual CSS inside
        your JavaScript using tagged template literals. Each styled component
        generates a unique class name — so there are <strong>no name
        collisions</strong>.
      </p>

      <h2>Installation</h2>
      <CodeBlock language="bash">{`npm install styled-components`}</CodeBlock>

      <h2>Basic Usage</h2>
      <CodeBlock>{`import styled from 'styled-components';

const StyledButton = styled.button\`
  background: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #1d4ed8;
  }
\`;

const App = () => {
  return <StyledButton>Click Me</StyledButton>;
};`}</CodeBlock>

      <h2>Dynamic Styles with Props</h2>
      <CodeBlock>{`const StyledButton = styled.button\`
  background: \${(props) => (props.primary ? '#2563eb' : '#e2e8f0')};
  color: \${(props) => (props.primary ? 'white' : '#1e293b')};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
\`;

const App = () => {
  return (
    <div>
      <StyledButton primary>Primary</StyledButton>
      <StyledButton>Secondary</StyledButton>
    </div>
  );
};`}</CodeBlock>

      <h2>Wrapper Pattern</h2>
      <p>
        Style an entire component by wrapping it:
      </p>
      <CodeBlock>{`const Wrapper = styled.section\`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  h2 {
    color: #1e293b;
    margin-bottom: 1rem;
  }

  .list {
    display: grid;
    gap: 1rem;
  }
\`;

const Products = () => {
  return (
    <Wrapper>
      <h2>Products</h2>
      <div className="list">...</div>
    </Wrapper>
  );
};`}</CodeBlock>

      <div className="tip-box info">
        <p className="tip-title">VS Code Extension</p>
        <p>
          Install <strong>vscode-styled-components</strong> for syntax
          highlighting and IntelliSense inside template literals.
        </p>
      </div>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>styled.element`css`</code> — create a styled component</li>
          <li>Use <code>&amp;</code> for pseudo-classes: <code>&amp;:hover</code></li>
          <li>Access props: <code>${'${(props) => props.color}'}</code></li>
          <li>Nest selectors like SCSS</li>
          <li>No class name collisions — unique classes generated automatically</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default StyledComponents;
