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
3.**What is the difference between a class component and a functional component in React?**
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