# React Course Notes App - Project Plan

## Goal

Build a personal React reference/documentation app based on John Smilga's React course. It should be:

- A go-to reference for every React topic covered in the course
- Written in clear, simple, human English (like John's teaching style)
- Well-structured with great UI/UX for easy navigation
- Easy to update and extend in the future

---

## Tech Stack

- **React 19** + **Vite** (already set up)
- **React Router DOM** - for page navigation between topics
- **react-syntax-highlighter** - for beautiful code examples
- **Custom CSS** - clean, minimal styling (no heavy frameworks)

---

## App Structure

```
src/
├── main.jsx                    # Entry point
├── App.jsx                     # Router setup
├── index.css                   # Global styles + CSS variables
├── components/
│   ├── Layout.jsx              # Main layout (sidebar + content)
│   ├── Sidebar.jsx             # Navigation sidebar
│   ├── TopicPage.jsx           # Reusable topic page wrapper
│   ├── CodeBlock.jsx           # Syntax-highlighted code component
│   ├── SearchBar.jsx           # Search/filter topics
│   └── ScrollToTop.jsx         # Scroll to top on route change
├── data/
│   └── topics.js               # All topics metadata (titles, paths, categories)
└── pages/
    ├── Home.jsx                # Welcome page with course overview
    ├── fundamentals/
    │   ├── Jsx.jsx
    │   ├── Components.jsx
    │   ├── Props.jsx
    │   ├── Lists.jsx
    │   ├── Events.jsx
    │   ├── ImportsExports.jsx
    │   └── Styling.jsx
    ├── hooks/
    │   ├── UseState.jsx
    │   ├── UseEffect.jsx
    │   ├── UseRef.jsx
    │   ├── UseReducer.jsx
    │   ├── UseContext.jsx
    │   ├── UseCallback.jsx
    │   ├── UseMemo.jsx
    │   ├── UseTransition.jsx
    │   └── CustomHooks.jsx
    ├── forms/
    │   ├── ControlledInputs.jsx
    │   ├── MultipleInputs.jsx
    │   ├── FormDataApi.jsx
    │   └── OtherInputs.jsx
    ├── conditional-rendering/
    │   ├── MultipleReturns.jsx
    │   ├── ShortCircuit.jsx
    │   └── TernaryOperator.jsx
    ├── performance/
    │   ├── ReactMemo.jsx
    │   ├── SuspenseAndLazy.jsx
    │   └── LowerState.jsx
    ├── react-router/
    │   ├── RouterSetup.jsx
    │   ├── NestedRoutes.jsx
    │   ├── RouteLoaders.jsx
    │   ├── FormActions.jsx
    │   └── QueryParams.jsx
    ├── http/
    │   ├── AxiosBasics.jsx
    │   ├── AxiosAdvanced.jsx
    │   └── ReactQuery.jsx
    ├── state-management/
    │   ├── ContextApi.jsx
    │   └── ReduxToolkit.jsx
    ├── styling/
    │   ├── CssInReact.jsx
    │   ├── StyledComponents.jsx
    │   └── TailwindCss.jsx
    ├── typescript/
    │   ├── TypescriptBasics.jsx
    │   └── TypescriptReact.jsx
    └── nextjs/
        ├── NextjsFundamentals.jsx
        ├── RoutingAndLayouts.jsx
        ├── ServerComponents.jsx
        ├── ServerActions.jsx
        └── DataFetching.jsx
```

---

## UI/UX Design

### Layout
- **Fixed sidebar** on the left with collapsible categories
- **Main content area** on the right, scrollable
- **Mobile**: sidebar becomes a hamburger menu
- **Search bar** at the top of the sidebar to filter topics

### Visual Style
- Clean white background with subtle gray tones
- Soft blue accent color for links and active states
- Code blocks with dark background (like VS Code)
- Good typography with readable font sizes
- Smooth transitions and hover effects

### Each Topic Page Contains
1. **Title** - clear topic name
2. **What is it?** - simple explanation
3. **Why use it?** - when and why you need it
4. **How to use it** - step-by-step with code examples
5. **Common patterns** - real-world usage
6. **Gotchas / Tips** - common mistakes and pro tips
7. **Quick reference** - cheat-sheet style summary at the bottom

---

## Implementation Order (Topic by Topic)

### Phase 1: Project Setup
1. Install dependencies (react-router-dom, react-syntax-highlighter)
2. Set up global CSS with variables and reset
3. Create Layout component with sidebar
4. Create routing structure
5. Create reusable components (CodeBlock, TopicPage, SearchBar)
6. Create topics data file
7. **COMMIT**: "Set up project structure with routing and layout"

### Phase 2: React Fundamentals
8. JSX page
9. Components page
10. Props page
11. Lists & Keys page
12. Events page
13. Imports & Exports page
14. Styling in React page
15. **COMMIT**: "Add React fundamentals notes"

### Phase 3: React Hooks
16. useState page
17. useEffect page
18. useRef page
19. useReducer page
20. useContext page
21. useCallback page
22. useMemo page
23. useTransition page
24. Custom Hooks page
25. **COMMIT**: "Add React hooks notes"

### Phase 4: Forms & Conditional Rendering
26. Controlled Inputs page
27. Multiple Inputs page
28. FormData API page
29. Other Inputs page
30. Multiple Returns page
31. Short Circuit Evaluation page
32. Ternary Operator page
33. **COMMIT**: "Add forms and conditional rendering notes"

### Phase 5: Performance
34. React.memo page
35. Suspense & Lazy page
36. Lower State / Push State Down page
37. **COMMIT**: "Add performance optimization notes"

### Phase 6: React Router
38. Router Setup page
39. Nested Routes page
40. Route Loaders page
41. Form Actions page
42. Query Params page
43. **COMMIT**: "Add React Router notes"

### Phase 7: HTTP & Data Fetching
44. Axios Basics page
45. Axios Advanced page
46. React Query page
47. **COMMIT**: "Add HTTP and data fetching notes"

### Phase 8: State Management
48. Context API page
49. Redux Toolkit page
50. **COMMIT**: "Add state management notes"

### Phase 9: Styling
51. CSS in React page
52. Styled Components page
53. Tailwind CSS page
54. **COMMIT**: "Add styling approach notes"

### Phase 10: TypeScript
55. TypeScript Basics page
56. TypeScript with React page
57. **COMMIT**: "Add TypeScript notes"

### Phase 11: Next.js
58. Next.js Fundamentals page
59. Routing & Layouts page
60. Server Components page
61. Server Actions page
62. Data Fetching in Next.js page
63. **COMMIT**: "Add Next.js notes"

### Phase 12: Final Polish
64. Home page with course overview and quick links
65. Final styling adjustments
66. Mobile responsiveness check
67. **COMMIT**: "Complete app with home page and polish"

---

## Content Guidelines

- **Speak like a friend explaining to a friend** - no jargon without explanation
- **Every code example should be copy-pasteable** and work on its own
- **Start simple, then build up** - basics first, advanced patterns after
- **Use real-world analogies** when explaining concepts
- **Highlight common mistakes** - what NOT to do
- **Keep it practical** - focus on "how do I use this?" not theory
