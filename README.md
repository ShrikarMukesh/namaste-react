# Namaste React Project Structure

## Components

### Header Component

- **Logo Component**
- **Menu Component**

### Body Component

- **Search Component**
- **RestaurantContainer**
  - **RestaurantCard**
    - Image
    - Name of Restaurant
    - Star Rating
    - Cuisines
    - Delivery Time

### Footer Component

- **Copyright**
- **Links**
- **Address**
- **Contact**

---

## Concepts

### Functional Component

A functional component is just a JavaScript function that returns JSX code.

### Props

Props are the arguments passed to a component function.

---

## Parcel

Parcel is a web application bundler that does a lot behind the scenes:

- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm (written in C++)
- Caching (Faster Builds)
- Image Optimization
- Minification
- Bundling
- Compression
- Consistent Hashing
- Code Splitting
- Differential Bundling (support for older browsers)
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking (removes unused code)

---

## Two Types of Export/Import

### Default Export/Import

```javascript
// Export
export default MyComponent;

// Import
import MyComponent from "./MyComponent";
```

### Named Export/Import

```javascript
// Export
export const MyComponent = () => {};

// Import
import { MyComponent } from "./MyComponent";
```

...................

# React Hooks

(Normal JS utility)

React Hooks are special functions that let you use React features in functional components.

## Common Hooks

- **useState**: Adds state to functional components.
- **useEffect**: Performs side effects (like data fetching).

- **useContext**: Accesses context values.
- **useRef**: Accesses mutable values that persist across renders.
- **useReducer**: Manages complex state logic.
- **useMemo**: Memoizes expensive calculations.
- **useCallback**: Memoizes callback functions.

# Virtual DOM

virtual represents actual dom
