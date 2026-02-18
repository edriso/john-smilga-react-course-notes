import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Fundamentals
import Jsx from './pages/fundamentals/Jsx';
import Components from './pages/fundamentals/Components';
import Props from './pages/fundamentals/Props';
import Lists from './pages/fundamentals/Lists';
import Events from './pages/fundamentals/Events';
import ImportsExports from './pages/fundamentals/ImportsExports';
import Styling from './pages/fundamentals/Styling';

// Hooks
import UseState from './pages/hooks/UseState';
import UseEffect from './pages/hooks/UseEffect';
import UseRef from './pages/hooks/UseRef';
import UseReducer from './pages/hooks/UseReducer';
import UseContext from './pages/hooks/UseContext';
import UseCallback from './pages/hooks/UseCallback';
import UseMemo from './pages/hooks/UseMemo';
import UseTransition from './pages/hooks/UseTransition';
import CustomHooks from './pages/hooks/CustomHooks';

// Forms
import ControlledInputs from './pages/forms/ControlledInputs';
import MultipleInputs from './pages/forms/MultipleInputs';
import FormDataApi from './pages/forms/FormDataApi';
import OtherInputs from './pages/forms/OtherInputs';

// Conditional Rendering
import MultipleReturns from './pages/conditional/MultipleReturns';
import ShortCircuit from './pages/conditional/ShortCircuit';
import TernaryOperator from './pages/conditional/TernaryOperator';

// Performance
import ReactMemo from './pages/performance/ReactMemo';
import SuspenseLazy from './pages/performance/SuspenseLazy';
import LowerState from './pages/performance/LowerState';

// React Router
import RouterSetup from './pages/react-router/RouterSetup';
import NestedRoutes from './pages/react-router/NestedRoutes';
import RouteLoaders from './pages/react-router/RouteLoaders';
import FormActions from './pages/react-router/FormActions';
import QueryParams from './pages/react-router/QueryParams';

// HTTP & Data Fetching
import AxiosBasics from './pages/http/AxiosBasics';
import AxiosAdvanced from './pages/http/AxiosAdvanced';
import ReactQuery from './pages/http/ReactQuery';

// State Management
import ContextApi from './pages/state/ContextApi';
import ReduxToolkit from './pages/state/ReduxToolkit';

// Styling
import CssInReact from './pages/styling/CssInReact';
import StyledComponents from './pages/styling/StyledComponents';
import TailwindCss from './pages/styling/TailwindCss';

// TypeScript
import TypescriptBasics from './pages/typescript/TypescriptBasics';
import TypescriptReact from './pages/typescript/TypescriptReact';

// Next.js
import NextjsFundamentals from './pages/nextjs/NextjsFundamentals';
import RoutingLayouts from './pages/nextjs/RoutingLayouts';
import ServerComponents from './pages/nextjs/ServerComponents';
import ServerActions from './pages/nextjs/ServerActions';
import DataFetching from './pages/nextjs/DataFetching';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // Fundamentals
      { path: 'fundamentals/jsx', element: <Jsx /> },
      { path: 'fundamentals/components', element: <Components /> },
      { path: 'fundamentals/props', element: <Props /> },
      { path: 'fundamentals/lists', element: <Lists /> },
      { path: 'fundamentals/events', element: <Events /> },
      { path: 'fundamentals/imports-exports', element: <ImportsExports /> },
      { path: 'fundamentals/styling', element: <Styling /> },
      // Hooks
      { path: 'hooks/useState', element: <UseState /> },
      { path: 'hooks/useEffect', element: <UseEffect /> },
      { path: 'hooks/useRef', element: <UseRef /> },
      { path: 'hooks/useReducer', element: <UseReducer /> },
      { path: 'hooks/useContext', element: <UseContext /> },
      { path: 'hooks/useCallback', element: <UseCallback /> },
      { path: 'hooks/useMemo', element: <UseMemo /> },
      { path: 'hooks/useTransition', element: <UseTransition /> },
      { path: 'hooks/custom-hooks', element: <CustomHooks /> },
      // Forms
      { path: 'forms/controlled-inputs', element: <ControlledInputs /> },
      { path: 'forms/multiple-inputs', element: <MultipleInputs /> },
      { path: 'forms/formdata-api', element: <FormDataApi /> },
      { path: 'forms/other-inputs', element: <OtherInputs /> },
      // Conditional Rendering
      { path: 'conditional/multiple-returns', element: <MultipleReturns /> },
      { path: 'conditional/short-circuit', element: <ShortCircuit /> },
      { path: 'conditional/ternary-operator', element: <TernaryOperator /> },
      // Performance
      { path: 'performance/react-memo', element: <ReactMemo /> },
      { path: 'performance/suspense-lazy', element: <SuspenseLazy /> },
      { path: 'performance/lower-state', element: <LowerState /> },
      // React Router
      { path: 'react-router/setup', element: <RouterSetup /> },
      { path: 'react-router/nested-routes', element: <NestedRoutes /> },
      { path: 'react-router/loaders', element: <RouteLoaders /> },
      { path: 'react-router/form-actions', element: <FormActions /> },
      { path: 'react-router/query-params', element: <QueryParams /> },
      // HTTP & Data Fetching
      { path: 'http/axios-basics', element: <AxiosBasics /> },
      { path: 'http/axios-advanced', element: <AxiosAdvanced /> },
      { path: 'http/react-query', element: <ReactQuery /> },
      // State Management
      { path: 'state/context-api', element: <ContextApi /> },
      { path: 'state/redux-toolkit', element: <ReduxToolkit /> },
      // Styling
      { path: 'styling/css-in-react', element: <CssInReact /> },
      { path: 'styling/styled-components', element: <StyledComponents /> },
      { path: 'styling/tailwind-css', element: <TailwindCss /> },
      // TypeScript
      { path: 'typescript/basics', element: <TypescriptBasics /> },
      { path: 'typescript/react', element: <TypescriptReact /> },
      // Next.js
      { path: 'nextjs/fundamentals', element: <NextjsFundamentals /> },
      { path: 'nextjs/routing-layouts', element: <RoutingLayouts /> },
      { path: 'nextjs/server-components', element: <ServerComponents /> },
      { path: 'nextjs/server-actions', element: <ServerActions /> },
      { path: 'nextjs/data-fetching', element: <DataFetching /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
