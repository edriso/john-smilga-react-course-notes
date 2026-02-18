const topics = [
  {
    category: 'Fundamentals',
    items: [
      { title: 'JSX', path: '/fundamentals/jsx' },
      { title: 'Components', path: '/fundamentals/components' },
      { title: 'Props', path: '/fundamentals/props' },
      { title: 'Lists & Keys', path: '/fundamentals/lists' },
      { title: 'Events', path: '/fundamentals/events' },
      { title: 'Imports & Exports', path: '/fundamentals/imports-exports' },
      { title: 'Styling', path: '/fundamentals/styling' },
    ],
  },
  {
    category: 'Hooks',
    items: [
      { title: 'useState', path: '/hooks/useState' },
      { title: 'useEffect', path: '/hooks/useEffect' },
      { title: 'useRef', path: '/hooks/useRef' },
      { title: 'useReducer', path: '/hooks/useReducer' },
      { title: 'useContext', path: '/hooks/useContext' },
      { title: 'useCallback', path: '/hooks/useCallback' },
      { title: 'useMemo', path: '/hooks/useMemo' },
      { title: 'useTransition', path: '/hooks/useTransition' },
      { title: 'Custom Hooks', path: '/hooks/custom-hooks' },
    ],
  },
  {
    category: 'Forms',
    items: [
      { title: 'Controlled Inputs', path: '/forms/controlled-inputs' },
      { title: 'Multiple Inputs', path: '/forms/multiple-inputs' },
      { title: 'FormData API', path: '/forms/formdata-api' },
      { title: 'Other Inputs', path: '/forms/other-inputs' },
    ],
  },
  {
    category: 'Conditional Rendering',
    items: [
      { title: 'Multiple Returns', path: '/conditional/multiple-returns' },
      { title: 'Short Circuit', path: '/conditional/short-circuit' },
      { title: 'Ternary Operator', path: '/conditional/ternary-operator' },
    ],
  },
  {
    category: 'Performance',
    items: [
      { title: 'React.memo', path: '/performance/react-memo' },
      { title: 'Suspense & Lazy', path: '/performance/suspense-lazy' },
      { title: 'Lower State', path: '/performance/lower-state' },
    ],
  },
  {
    category: 'React Router',
    items: [
      { title: 'Router Setup', path: '/react-router/setup' },
      { title: 'Nested Routes', path: '/react-router/nested-routes' },
      { title: 'Route Loaders', path: '/react-router/loaders' },
      { title: 'Form Actions', path: '/react-router/form-actions' },
      { title: 'Query Params', path: '/react-router/query-params' },
    ],
  },
  {
    category: 'HTTP & Data Fetching',
    items: [
      { title: 'Axios Basics', path: '/http/axios-basics' },
      { title: 'Axios Advanced', path: '/http/axios-advanced' },
      { title: 'React Query', path: '/http/react-query' },
    ],
  },
  {
    category: 'State Management',
    items: [
      { title: 'Context API', path: '/state/context-api' },
      { title: 'Redux Toolkit', path: '/state/redux-toolkit' },
    ],
  },
  {
    category: 'Styling',
    items: [
      { title: 'CSS in React', path: '/styling/css-in-react' },
      { title: 'Styled Components', path: '/styling/styled-components' },
      { title: 'Tailwind CSS', path: '/styling/tailwind-css' },
    ],
  },
  {
    category: 'TypeScript',
    items: [
      { title: 'TypeScript Basics', path: '/typescript/basics' },
      { title: 'TypeScript + React', path: '/typescript/react' },
    ],
  },
  {
    category: 'Next.js',
    items: [
      { title: 'Next.js Fundamentals', path: '/nextjs/fundamentals' },
      { title: 'Routing & Layouts', path: '/nextjs/routing-layouts' },
      { title: 'Server Components', path: '/nextjs/server-components' },
      { title: 'Server Actions', path: '/nextjs/server-actions' },
      { title: 'Data Fetching', path: '/nextjs/data-fetching' },
    ],
  },
];

export default topics;
