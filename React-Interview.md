---- ## ⚛️ React Interview Questions

1. **What is React?**
   - React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage the state of those components efficiently.
   - It uses a virtual DOM to optimize rendering performance by minimizing direct manipulation of the actual DOM.
   - React was developed by Facebook and is maintained by Facebook and a community of individual developers and companies.
   - 
2. **What are the key features of React?**
   - **Component-Based Architecture**: React applications are built using components, which are reusable and encapsulated pieces of UI.
   - **Virtual DOM**: React uses a virtual representation of the DOM to efficiently update the UI by minimizing direct manipulation of the actual DOM.
   - **Unidirectional Data Flow**: Data flows in one direction, from parent components to child components, making it easier to understand and debug the application state.
   - **JSX**: React uses JSX (JavaScript XML), a syntax extension that allows developers to write HTML-like code within JavaScript, making it easier to create and visualize UI components.
   - **Hooks**: React introduced hooks in version 16.8, allowing developers to use state and lifecycle methods in functional components, promoting a morefunctional programming style.
   - 
3. **What is the difference between a class component and a functional component in React?**
   - **Class Component**: A class component is defined using ES6 class syntax and can have its own state and lifecycle methods. It extends the `React.Component` class and must implement a `render` method to return the UI.
   - **Functional Component**: A functional component is a simpler way to define components using JavaScript functions. It can accept props and return JSX, but it does not have its own state or lifecycle methods unless hooks are used. 
   - Functional components are generally preferred for their simplicity and ease of testing.
   
4. **What are React Hooks?**
   - React Hooks are functions that allow developers to use state and other React features in functional components. They were introduced in React 16.8 to enable stateful logic in functional components without the need for class components.
   - Commonly used hooks include:
     - `useState`: Allows functional components to manage state.
     - `useEffect`: Allows functional components to perform side effects, such as data fetching or subscribing to events.
     - `useContext`: Allows functional components to access context values without using the `Context.Consumer` component.
       - `useReducer`: An alternative to `useState` for managing complex state logic.
     - `useRef`: Allows functional components to create mutable references that persist across renders.
     - `useMemo` and `useCallback`: Used for performance optimization by memoizing values and functions, respectively.
     - 
5. **What is the difference between anchor tag vs Link?
    - The `<a>` tag is a standard HTML element used to create hyperlinks that navigate to different pages or resources. It causes a full page reload when clicked.
    - The `Link` component from React Router (or similar libraries) is used for client-side navigation within a React application. It prevents the full page reload and allows for smoother transitions between routes by updating the URL and rendering the appropriate component without reloading the entire page.
    - The `Link` component is typically used in single-page applications (SPAs) to maintain the application's state and performance.
   
6. **Lifecycle of Class based components**?
    - The lifecycle is divided into three main phases: **Mounting**, **Updating**, and **Unmounting**.
    - **Mounting (Component is created and inserted into the DOM)**
        - `constructor()`: Initializes state and binds methods.
        - `static getDerivedStateFromProps()`: Syncs state with props before rendering.
        - `render()`: Returns the JSX for the UI. This is the only required method.
        - `componentDidMount()`: Called after the component is in the DOM. Ideal for API calls, subscriptions, or DOM manipulation.
    - **Updating (Component is re-rendered due to prop or state changes)**
        - `static getDerivedStateFromProps()`: Called first on updates.
        - `shouldComponentUpdate()`: Determines if the component should re-render. Used for performance optimization.
        - `render()`: Re-renders the UI.
        - `getSnapshotBeforeUpdate()`: Captures information from the DOM (e.g., scroll position) before it's updated.
        - `componentDidUpdate()`: Called after the component updates. Good for conditional API calls based on prop changes.
    - **Unmounting (Component is removed from the DOM)**
        - `componentWillUnmount()`: Called just before the component is destroyed. Used for cleanup (e.g., canceling API calls, removing event listeners).
    - **Error Handling**
        - `static getDerivedStateFromError()`: Renders a fallback UI when an error occurs in a child component.
        - `componentDidCatch()`: Logs error information.

7. **Parent Child relationship in class based component**?
   - The relationship is defined by data flow and lifecycle execution order.
   - **Data Flow (Parent to Child)**: Data is passed from parent to child via `props`. The parent includes props when rendering the child, and the child accesses them with `this.props`.
   - **Lifecycle Execution Order (Mounting)**: When a parent renders a child, the lifecycle methods execute in a specific sequence:
     1.  Parent `constructor()`
     2.  Parent `render()`
     3.  Child `constructor()`
     4.  Child `render()`
     5.  Child `componentDidMount()` (The child is mounted first)
     6.  Parent `componentDidMount()` (The parent is considered mounted only after all its children are mounted)
   - This sequence ensures that by the time the parent's `componentDidMount` is called, all children have been successfully mounted to the DOM.
   - **Communication (Child to Parent)**: To send data up from a child to a parent, the parent passes a function down to the child as a prop. 
       The child can then call this function to pass data back to the parent.
   
8. **What is the main purpose of componentDidMount()**?
   - The main purpose of `componentDidMount()` is to perform **side effects** after a component has been rendered to the DOM for the first time. 
   - It runs only **once** in a component's lifecycle.
   - It is the ideal place for:
     1.  **Data Fetching**: Making API calls to a server to get data and then using `this.setState()` to update the UI.
     2.  **Setting up Subscriptions**: Creating timers (`setInterval`) or WebSocket connections. These should always be cleaned up in `componentWillUnmount()`.
     3.  **DOM Manipulation**: Interacting directly with the DOM, often to integrate with third-party libraries that need a DOM node to initialize.

9. **Why make API calls in `componentDidMount()`?**
     - **Guaranteed Component Presence in DOM**: At this point, the component (and its children) has been fully rendered and inserted into the actual DOM. This means any fetched data can be immediately displayed, and DOM-dependent operations can safely occur.
     - **Runs Only Once**: `componentDidMount()` is called only once after the initial render. This prevents infinite loops that would occur if API calls were made in `render()` (which would trigger a state update, leading to re-render, leading to another API call, etc.). It ensures efficient data fetching for the component's initial state.
     - **Component is Ready for State Updates**: The component is fully initialized and ready to receive and process state updates (`this.setState()`) that will occur once the API call resolves, triggering a re-render with the new data.

   - In functional components, the `useEffect` hook with an empty dependency array (`useEffect(() => {}, [])`) achieves the same result.
