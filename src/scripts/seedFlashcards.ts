export const flashcards = [
  {
    question: "What is React?",
    tip: "Think about components",
    answer: "React is a JavaScript library for building user interfaces.",
    type: "frontend",
    tags: ["reactjs", "frontend"]
  },
  {
    question: "What is ECMAScript?",
    tip: "Think about the relationship between ECMAScript and JavaScript.",
    answer:
      "ECMAScript is the standardized specification on which JavaScript is based. It defines the core syntax, semantics, and features of the language. Versions like ES6 (ES2015) introduced many new features, such as arrow functions, classes, and modules.",
    type: "frontend",
    tags: ["javascript", "ecmascript", "frontend"]
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    tip: "Think about type coercion.",
    answer:
      "`==` compares values and performs type coercion, while `===` compares both values and types without coercion.",
    type: "frontend",
    tags: ["javascript", "operators", "frontend"]
  },
  {
    question: "What are the different data types in JavaScript?",
    tip: "Think about primitive and non-primitive types.",
    answer:
      "JavaScript has the following data types:\n- **String**: e.g., `'Hello'`, `\"World\"`\n- **Number**: e.g., `42`, `3.14`\n- **BigInt**: Numbers larger than `Number.MAX_SAFE_INTEGER`\n- **Boolean**: `true` or `false`\n- **Undefined**: A variable that has been declared but not assigned a value\n- **Null**: Represents an intentionally absent object value\n- **Symbol**: Introduced in ES6, represents a unique identifier\n- **Object**: Any data type that is not a primitive is an object.",
    type: "frontend",
    tags: ["javascript", "data-types", "frontend"]
  },
  {
    question: "What does it mean that JavaScript is dynamically typed?",
    tip: "Think about variable declarations and type changes.",
    answer:
      "In JavaScript, you don’t need to declare the type of a variable. The type is determined at runtime and can change dynamically.",
    type: "frontend",
    tags: ["javascript", "typing", "frontend"]
  },
  {
    question: "What are the key data structures in JavaScript?",
    tip: "Think about collections and key-value pairs.",
    answer:
      "- **Arrays**: Ordered collections of elements.\n- **Objects**: Key-value pairs.\n- **Maps**: Objects that store key-value pairs with any type of keys.\n- **Sets**: Collections of unique values.",
    type: "frontend",
    tags: ["javascript", "data-structures", "frontend"]
  },
  {
    question: "What’s the difference between var, let, and const?",
    tip: "Think about scope and mutability.",
    answer:
      "`var` is function-scoped, can be redeclared and updated, and is hoisted. `let` is block-scoped and can be updated but not redeclared. `const` is block-scoped and cannot be updated or redeclared.",
    type: "frontend",
    tags: ["javascript", "variables", "frontend"]
  },
  {
    question: "What is hoisting in JavaScript?",
    tip: "Think about variable and function declarations.",
    answer:
      "Hoisting is the process where variable and function declarations are moved to the top of their scope during compilation. However, only declarations are hoisted, not the actual initializations.",
    type: "frontend",
    tags: ["javascript", "hoisting", "frontend"]
  },
  {
    question: "What is the difference between const and Object.freeze()?",
    tip: "Think about immutability.",
    answer:
      "`const` prevents reassignment of a variable, while `Object.freeze()` prevents modification of an object’s properties.",
    type: "frontend",
    tags: ["javascript", "immutability", "frontend"]
  },
  {
    question: "What is a Promise in JavaScript?",
    tip: "Think about asynchronous operations.",
    answer:
      "A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.",
    type: "frontend",
    tags: ["javascript", "promises", "asynchronous", "frontend"]
  },
  {
    question:
      "What’s the difference between Promise.all and Promise.allSettled?",
    tip: "Think about error handling.",
    answer:
      "`Promise.all` resolves when all promises resolve, but it rejects if any one promise fails. `Promise.allSettled` resolves after all promises settle (resolved or rejected), providing results for each promise.",
    type: "frontend",
    tags: ["javascript", "promises", "asynchronous", "frontend"]
  },
  {
    question: "How do async/await work in JavaScript?",
    tip: "Think about synchronous-like asynchronous code.",
    answer:
      "`async/await` allows you to write asynchronous code in a synchronous manner. `await` pauses the execution of an `async` function until a Promise is resolved.",
    type: "frontend",
    tags: ["javascript", "async-await", "asynchronous", "frontend"]
  },
  {
    question: "What is the difference between Promises and Observables?",
    tip: "Think about single vs. multiple values.",
    answer:
      "Promises return a single value and handle one-time asynchronous events, while Observables emit multiple values over time and allow for more complex event handling through subscription.",
    type: "frontend",
    tags: ["javascript", "promises", "observables", "asynchronous", "frontend"]
  },
  {
    question: "Is JavaScript single-threaded or multi-threaded?",
    tip: "Think about the event loop.",
    answer:
      "JavaScript is single-threaded, meaning it can only execute one task at a time in the main thread. However, asynchronous operations are handled through event loops, allowing non-blocking code execution.",
    type: "frontend",
    tags: ["javascript", "concurrency", "frontend"]
  },
  {
    question: "How does JavaScript handle asynchronous operations?",
    tip: "Think about the event loop and non-blocking I/O.",
    answer:
      "JavaScript handles asynchronous operations using:\n- **Promises**\n- **Callbacks**\n- **async/await**\nThe event loop, call stack, and event queue ensure that the non-blocking operations can be executed asynchronously.",
    type: "frontend",
    tags: ["javascript", "asynchronous", "event-loop", "frontend"]
  },
  {
    question: "What’s the difference between call() and apply() in JavaScript?",
    tip: "Think about argument passing.",
    answer:
      "- **`call()`**: Invokes a function with a given `this` context and arguments passed individually.\n- **`apply()`**: Similar to `call()`, but arguments are passed as an array.",
    type: "frontend",
    tags: ["javascript", "functions", "frontend"]
  },
  {
    question: "What is a closure in JavaScript?",
    tip: "Think about scope and function context.",
    answer:
      "A closure is a function that retains access to its parent scope even after the parent function has returned, allowing the function to access variables in its outer scope.",
    type: "frontend",
    tags: ["javascript", "closures", "frontend"]
  },
  {
    question: "How does the `this` keyword work in JavaScript?",
    tip: "Think about execution context.",
    answer:
      "`this` refers to the object that is currently executing the function. Its value depends on how the function is called, and it changes dynamically based on the execution context.",
    type: "frontend",
    tags: ["javascript", "this", "frontend"]
  },
  {
    question: "What are Event Emitters in JavaScript?",
    tip: "Think about the Publisher-Subscriber model.",
    answer:
      "Event emitters implement the **Publisher-Subscriber** model, allowing one object to emit an event and another to listen for it, triggering a specific action.",
    type: "frontend",
    tags: ["javascript", "event-emitters", "frontend"]
  },
  {
    question: "What is event delegation in JavaScript?",
    tip: "Think about parent-child relationships in the DOM.",
    answer:
      "Event delegation is a technique where you attach a single event listener to a parent element to handle events on its child elements. This reduces memory usage and simplifies handling of dynamically added elements.",
    type: "frontend",
    tags: ["javascript", "dom", "events", "frontend"]
  },
  {
    question:
      "What is the role of the `event.target` and `event.currentTarget`?",
    tip: "Think about event propagation.",
    answer:
      "`event.target` refers to the element that triggered the event, while `event.currentTarget` refers to the element to which the event handler is attached.",
    type: "frontend",
    tags: ["javascript", "dom", "events", "frontend"]
  },
  {
    question: "What are prototypes in JavaScript?",
    tip: "Think about inheritance.",
    answer:
      "Every JavaScript object has a prototype, which is another object it inherits properties from. Prototypal inheritance allows objects to share properties and methods.",
    type: "frontend",
    tags: ["javascript", "prototypes", "frontend"]
  },
  {
    question: "What are classes in JavaScript?",
    tip: "Think about ES6 syntax.",
    answer:
      "Introduced in ES6, classes are syntactic sugar over prototypal inheritance, providing a cleaner and more readable way to define objects and inherit properties.",
    type: "frontend",
    tags: ["javascript", "classes", "frontend"]
  },
  {
    question: "How do you handle errors in JavaScript?",
    tip: "Think about graceful error handling.",
    answer:
      "Errors are handled using `try...catch` blocks. `try` runs the code, and if an error occurs, the control is passed to `catch` to handle the error gracefully.",
    type: "frontend",
    tags: ["javascript", "error-handling", "frontend"]
  },
  {
    question: "What are CommonJS, AMD, and ES6 modules?",
    tip: "Think about module systems.",
    answer:
      "CommonJS is used in Node.js (using `require()` and `module.exports`). AMD is used for browser-based asynchronous module loading. ES6 modules use `import` and `export` syntax natively.",
    type: "frontend",
    tags: ["javascript", "modules", "frontend"]
  },
  {
    question: "What are common JavaScript design patterns?",
    tip: "Think about code organization and reusability.",
    answer:
      "Common patterns include:\n- **Singleton**: Ensures one instance of a class.\n- **Observer**: Allows one object to notify others of changes.\n- **Module**: Encapsulates code in a scope, exposing only what’s necessary.",
    type: "frontend",
    tags: ["javascript", "design-patterns", "frontend"]
  },
  {
    question: "How do you parse and stringify JSON in JavaScript?",
    tip: "Think about data interchange.",
    answer:
      "`JSON.parse()` converts a JSON string into a JavaScript object. `JSON.stringify()` converts a JavaScript object into a JSON string.",
    type: "frontend",
    tags: ["javascript", "json", "frontend"]
  },
  {
    question: "What is the Fetch API?",
    tip: "Think about modern HTTP requests.",
    answer:
      "The Fetch API is a modern way to make HTTP requests in JavaScript, returning Promises for easier asynchronous handling.",
    type: "frontend",
    tags: ["javascript", "fetch-api", "frontend"]
  },
  {
    question: "What are common web security vulnerabilities?",
    tip: "Think about attacks like XSS and CSRF.",
    answer:
      "Common vulnerabilities include:\n- **XSS (Cross-Site Scripting)**: Injecting malicious scripts into webpages.\n- **CSRF (Cross-Site Request Forgery)**: Tricking users into performing unintended actions.",
    type: "frontend",
    tags: ["javascript", "security", "frontend"]
  },
  {
    question: "How can you optimize web performance in JavaScript?",
    tip: "Think about lazy loading and caching.",
    answer:
      "Common performance optimization techniques include:\n- **Lazy loading**: Load resources only when needed.\n- **Code splitting**: Break the code into smaller, on-demand chunks.\n- **Caching**: Store frequently used data for faster access.",
    type: "frontend",
    tags: ["javascript", "performance", "frontend"]
  },
  {
    question: "What is garbage collection in JavaScript?",
    tip: "Think about memory management.",
    answer:
      "JavaScript uses an automatic memory management process called garbage collection. The mark-and-sweep algorithm frees up memory that is no longer referenced by the program.",
    type: "frontend",
    tags: ["javascript", "garbage-collection", "frontend"]
  },
  {
    question: "What is Type Coercion in JavaScript?",
    tip: "Think about implicit type conversion.",
    answer:
      "Type coercion is the automatic or implicit conversion of values from one data type to another, such as converting strings to numbers or booleans.",
    type: "frontend",
    tags: ["javascript", "type-coercion", "frontend"]
  },
  {
    question: "What’s the difference between Maps and WeakMaps in JavaScript?",
    tip: "Think about garbage collection.",
    answer:
      "- **Maps**: Allow you to store key-value pairs and retain strong references to keys, preventing garbage collection.\n- **WeakMaps**: Only allow objects as keys and hold them weakly, meaning keys can be garbage collected when no longer referenced elsewhere in the program.",
    type: "frontend",
    tags: ["javascript", "maps", "weakmaps", "frontend"]
  },
  {
    question:
      "What are the key concepts of functional programming in JavaScript?",
    tip: "Think about immutability and higher-order functions.",
    answer:
      "- **Higher-order functions**: Functions like `map()`, `filter()`, and `reduce()` allow manipulation of arrays in a functional style.\n- **Immutability**: Avoid changing the original data structure.",
    type: "frontend",
    tags: ["javascript", "functional-programming", "frontend"]
  },
  {
    question: "What are Webpack and Babel?",
    tip: "Think about modern JavaScript tooling.",
    answer:
      "- **Webpack**: A module bundler that compiles JavaScript files.\n- **Babel**: A transpiler that converts modern JavaScript (ES6+) into backward-compatible versions.",
    type: "frontend",
    tags: ["javascript", "webpack", "babel", "frontend"]
  },
  {
    question: "How do you debug JavaScript?",
    tip: "Think about browser developer tools.",
    answer:
      "Debugging can be done using browser developer tools to inspect elements, console log errors, and set breakpoints to pause execution and inspect variables.",
    type: "frontend",
    tags: ["javascript", "debugging", "frontend"]
  },
  {
    question: "What are task runners like Grunt and Gulp?",
    tip: "Think about automation in development workflows.",
    answer:
      "Task runners automate repetitive tasks like minification, compilation, and unit testing in development workflows.",
    type: "frontend",
    tags: ["javascript", "task-runners", "frontend"]
  },
  {
    question: "What are Progressive Web Apps (PWAs)?",
    tip: "Think about native app-like experiences.",
    answer:
      "PWAs are web applications that provide native app-like experiences, including offline functionality, using service workers.",
    type: "frontend",
    tags: ["javascript", "pwa", "frontend"]
  },
  {
    question: "What does export * do in JavaScript?",
    tip: "Think about module re-exports.",
    answer:
      "`export *` re-exports all the exports from a module. It’s useful when you want to aggregate multiple modules but can increase memory usage and may cause namespace conflicts if not used carefully.",
    type: "frontend",
    tags: ["javascript", "modules", "frontend"]
  },
  {
    question: "What tools can be used for testing JavaScript applications?",
    tip: "Think about testing frameworks and libraries.",
    answer:
      "Popular testing tools include:\n- **Jest**: A comprehensive JavaScript testing framework.\n- **Mocha**: A flexible JavaScript testing library.\n- **Chai**: An assertion library often used with Mocha.",
    type: "testing",
    tags: ["javascript", "testing", "jest", "mocha", "chai"]
  },
  {
    question: "Why is ESLint important in JavaScript?",
    tip: "Think about code quality and consistency.",
    answer:
      "ESLint helps enforce consistent code style, catches common errors, and ensures that the code is clean and maintainable.",
    type: "testing",
    tags: ["javascript", "eslint", "testing"]
  },
  {
    question: "How will you perform form validation in React?",
    tip: "Consider using libraries like Formik or React Hook Form for complex validation.",
    answer:
      "In React, form validation can be done using HTML5 validation attributes, controlled components with state management, or libraries like Formik with Yup or React Final Form.",
    type: "frontend",
    tags: ["reactjs", "form-validation"]
  },
  {
    question: "What is Reconciliation in React?",
    tip: "Think about how React updates the DOM efficiently.",
    answer:
      "Reconciliation is the process React uses to update the UI by comparing the current virtual DOM with the previous one and applying the minimal set of changes to the real DOM.",
    type: "frontend",
    tags: ["reactjs", "virtual-dom", "performance"]
  },
  {
    question: "What is Memoization and how is it used in React?",
    tip: "Memoization helps optimize performance by caching results.",
    answer:
      "Memoization is a technique to cache the result of expensive function calls. In React, it can be done using `React.memo`, `useMemo`, and `useCallback` to avoid unnecessary re-renders or recalculations.",
    type: "frontend",
    tags: ["reactjs", "performance", "hooks"]
  },
  {
    question: "Explain the 5 React hooks and their use cases.",
    tip: "Focus on the most commonly used hooks like useState and useEffect.",
    answer:
      "1. `useState`: Manages local state. 2. `useEffect`: Handles side effects. 3. `useContext`: Accesses context values. 4. `useRef`: Creates mutable references. 5. `useReducer`: Manages complex state logic.",
    type: "frontend",
    tags: ["reactjs", "hooks"]
  },
  {
    question: "What are Promises in JavaScript?",
    tip: "Think about asynchronous operations and their states.",
    answer:
      "Promises are objects representing the eventual completion (or failure) of an asynchronous operation. They have three states: Pending, Fulfilled, and Rejected.",
    type: "frontend",
    tags: ["javascript", "asynchronous"]
  },
  {
    question: "How do you handle asynchronous operations in JavaScript?",
    tip: "Consider using async/await for cleaner code.",
    answer:
      "Asynchronous operations can be handled using Promises with `.then()`, `.catch()`, and `.finally()`, or using `async/await` for cleaner syntax. Callback functions are also an option but can lead to callback hell.",
    type: "frontend",
    tags: ["javascript", "asynchronous"]
  },
  {
    question: "What are the key features of Next.js?",
    tip: "Think about SSR, SSG, and routing.",
    answer:
      "Next.js offers server-side rendering (SSR), static site generation (SSG), API routes, file-based routing, built-in CSS and image optimization, and automatic code splitting.",
    type: "frontend",
    tags: ["nextjs", "ssr", "ssg"]
  },
  {
    question:
      "How does routing work in Next.js, and what’s the difference between page routing and app routing?",
    tip: "App routing is more flexible with nested layouts.",
    answer:
      "Page routing uses the `pages/` directory, while app routing (Next.js 13+) uses the `app/` directory with nested layouts. App routing allows for more flexibility and improved data fetching.",
    type: "frontend",
    tags: ["nextjs", "routing"]
  },
  {
    question: "What are Higher Order Components in React?",
    tip: "Think about reusing component logic.",
    answer:
      "Higher-Order Components (HOCs) are functions that take a component as an argument and return a new component. They are used for reusing component logic, like `withRouter` or `withAuth`.",
    type: "frontend",
    tags: ["reactjs", "hoc"]
  },
  {
    question: "What’s the difference between React and Next.js?",
    tip: "React is a library, while Next.js is a framework.",
    answer:
      "React is a UI library for building components and managing state, while Next.js is a React-based framework that provides built-in features like SSR, SSG, and routing.",
    type: "frontend",
    tags: ["reactjs", "nextjs"]
  },
  {
    question: "Can you explain the React lifecycle?",
    tip: "Think about mounting, updating, and unmounting phases.",
    answer:
      "React components go through three phases: 1. Mounting (initialization), 2. Updating (state/props change), and 3. Unmounting (removal from the DOM).",
    type: "frontend",
    tags: ["reactjs", "lifecycle"]
  },
  {
    question:
      "How would you perform a function just before a React component unmounts?",
    tip: "Use the cleanup function in `useEffect`.",
    answer:
      "In functional components, use the cleanup function in `useEffect`. In class components, use `componentWillUnmount`.",
    type: "frontend",
    tags: ["reactjs", "lifecycle"]
  },
  {
    question:
      "How do you implement React lifecycle methods in functional components?",
    tip: "Use hooks like `useEffect` to mimic lifecycle methods.",
    answer:
      "Lifecycle methods can be implemented using hooks: `componentDidMount` → `useEffect` with empty dependencies, `componentDidUpdate` → `useEffect` with dependencies, and `componentWillUnmount` → cleanup function in `useEffect`.",
    type: "frontend",
    tags: ["reactjs", "hooks", "lifecycle"]
  },
  {
    question: "What are the benefits of reconciliation in React?",
    tip: "Think about performance optimization.",
    answer:
      "Reconciliation improves performance by updating only the parts of the DOM that have changed, rather than re-rendering the entire DOM tree.",
    type: "frontend",
    tags: ["reactjs", "virtual-dom", "performance"]
  },
  {
    question:
      "How do you identify if a website is client-side or server-side rendered?",
    tip: "Check the initial page load behavior.",
    answer:
      "Client-side rendering shows a blank page before content loads, while server-side rendering displays content immediately on page load.",
    type: "frontend",
    tags: ["ssr", "csr", "performance"]
  },
  {
    question:
      "How does Next.js work behind the scenes, and how does it create web pages, especially static ones?",
    tip: "Think about build-time and runtime rendering.",
    answer:
      "Next.js uses Node.js for server-side rendering. For static generation, it pre-renders HTML at build time using `getStaticProps` and serves it as static files. `getServerSideProps` is used for runtime data fetching.",
    type: "frontend",
    tags: ["nextjs", "ssr", "ssg"]
  },
  {
    question: "What problem do I solve as a frontend developer?",
    tip: "Think about component organization and reusability.",
    answer:
      "As a frontend developer, I solve the problem of disorganized components by creating a structured library of reusable, testable components with support for internationalization, semantic correctness, dark mode, and accessibility.",
    type: "frontend",
    tags: ["frontend", "components", "best-practices"]
  },
  {
    question:
      "React Search Bar Functionality - Implementing it with an API call",
    tip: "Consider debouncing for performance optimization.",
    answer:
      "To implement a search bar with an API call, use controlled components to manage input state and debounce the API call to avoid excessive requests. Libraries like `lodash.debounce` can help.",
    type: "frontend",
    tags: ["reactjs", "api", "performance"]
  },
  {
    question: "Debouncing for performance optimization",
    tip: "Use debouncing to limit the frequency of function calls.",
    answer:
      "Debouncing is a technique to limit the frequency of function calls, such as API requests, by delaying execution until a certain amount of time has passed without further input.",
    type: "frontend",
    tags: ["javascript", "performance"]
  },
  {
    question: "Lazy Loading - Making the app more efficient",
    tip: "Think about loading components or images only when needed.",
    answer:
      "Lazy loading delays the loading of non-critical resources (like images or components) until they are needed, improving initial load performance. In React, use `React.lazy` and `Suspense` for lazy loading components.",
    type: "frontend",
    tags: ["reactjs", "performance", "lazy-loading"]
  },
  {
    question: "How to improve React performance?",
    tip: "Consider memoization, lazy loading, and code splitting.",
    answer:
      "Improve React performance by using memoization (`React.memo`, `useMemo`, `useCallback`), lazy loading components, code splitting, and optimizing re-renders with proper state management.",
    type: "frontend",
    tags: ["reactjs", "performance"]
  },
  {
    question:
      "JavaScript Output Questions: Event loop, closures, lexical scope, hoisting (detailed explanation required!)",
    tip: "Understand the core concepts of JavaScript execution.",
    answer:
      "1. **Event Loop**: Manages asynchronous operations in JavaScript. 2. **Closures**: Functions that remember their lexical scope. 3. **Lexical Scope**: Determines variable accessibility based on where they are defined. 4. **Hoisting**: Moves variable and function declarations to the top of their scope during compilation.",
    type: "frontend",
    tags: ["javascript", "event-loop", "closures"]
  },
  {
    question: "Types vs. Interfaces in TypeScript",
    tip: "Think about flexibility and extensibility.",
    answer:
      "In TypeScript, `types` and `interfaces` are similar but have key differences. Interfaces are extendable and can be merged, while types are more flexible and can represent unions, intersections, and primitives.",
    type: "frontend",
    tags: ["typescript", "types", "interfaces"]
  },
  {
    question:
      "React Hooks deep dive: useEffect, useCallback, useMemo, useRef, useState",
    tip: "Understand the purpose and use cases of each hook.",
    answer:
      "1. `useEffect`: Handles side effects. 2. `useCallback`: Memoizes functions. 3. `useMemo`: Memoizes values. 4. `useRef`: Creates mutable references. 5. `useState`: Manages local state.",
    type: "frontend",
    tags: ["reactjs", "hooks"]
  },
  {
    question: "Custom Hooks vs. Utility Functions",
    tip: "Think about reusability and state management.",
    answer:
      "Custom hooks are reusable functions that can use React hooks (like `useState` or `useEffect`), while utility functions are plain JavaScript functions that don’t rely on React-specific features.",
    type: "frontend",
    tags: ["reactjs", "hooks", "utility"]
  },
  {
    question: "Error Handling best practices",
    tip: "Consider graceful degradation and user feedback.",
    answer:
      "Best practices for error handling include using try/catch blocks, providing meaningful error messages, logging errors for debugging, and ensuring the application degrades gracefully.",
    type: "softskills",
    tags: ["error-handling", "best-practices"]
  },
  {
    question:
      "Popular Array Methods (map & filter) and String Methods (slice, startsWith, splice)",
    tip: "Understand the purpose and return values of each method.",
    answer:
      "1. **Array Methods**: `map` transforms elements, `filter` selects elements based on a condition. 2. **String Methods**: `slice` extracts a portion of a string, `startsWith` checks if a string starts with a specific value, `splice` adds/removes elements from an array.",
    type: "frontend",
    tags: ["javascript", "arrays", "strings"]
  },
  {
    question: "Prop Drilling & how to manage state better in React",
    tip: "Consider using Context API or state management libraries.",
    answer:
      "Prop drilling is passing props through multiple levels of components. To manage state better, use the Context API or state management libraries like Redux or Zustand.",
    type: "frontend",
    tags: ["reactjs", "state-management"]
  },
  {
    question:
      "CSS Positioning - Got a fun challenge with some real-world examples!",
    tip: "Understand the difference between static, relative, absolute, fixed, and sticky positioning.",
    answer:
      "CSS positioning includes: 1. **Static**: Default positioning. 2. **Relative**: Positioned relative to its normal position. 3. **Absolute**: Positioned relative to the nearest positioned ancestor. 4. **Fixed**: Positioned relative to the viewport. 5. **Sticky**: Toggles between relative and fixed based on scroll position.",
    type: "frontend",
    tags: ["css", "positioning"]
  },
  {
    question: "What is TypeScript?",
    tip: "Think about how it extends JavaScript.",
    answer: "TypeScript is a programming language developed by Microsoft that builds on top of JavaScript by adding static types. This helps catch errors during development rather than at runtime, improving code quality and developer experience.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are the core components of TypeScript?",
    tip: "Think about the tools and features that make TypeScript work.",
    answer: "TypeScript has three core components: the **Language** (syntax and type system), the **Compiler (tsc)** (translates TypeScript to JavaScript), and the **Language Service** (provides IDE support like autocomplete and error checking).",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "Why use TypeScript?",
    tip: "Consider the benefits of static typing.",
    answer: "TypeScript improves code quality by catching errors early, provides better IDE support for autocomplete and error checking, and enhances maintainability by making refactoring and scaling large codebases easier.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are access modifiers in TypeScript?",
    tip: "Think about how visibility is controlled in classes.",
    answer: "Access modifiers in TypeScript control the visibility of class properties and methods. They include **public** (default, accessible from anywhere), **private** (only accessible within the class), and **protected** (accessible within the class and its subclasses).",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What types does TypeScript introduce that JavaScript doesn't have?",
    tip: "Think about advanced type features.",
    answer: "TypeScript introduces types like **tuples** (fixed-length arrays with different types), **interfaces** (define object structures), and **custom types** (defined using the `type` keyword).",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What is the difference between `interface` and `type` in TypeScript?",
    tip: "Think about flexibility and use cases.",
    answer: "An **`interface`** can be extended and merged with other interfaces, making it more flexible for object-oriented designs. A **`type`** is more versatile and can define unions, intersections, and complex types, but it cannot be merged or extended like an interface.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are generics in TypeScript?",
    tip: "Think about reusable and flexible components.",
    answer: "Generics allow you to write reusable and flexible components that work with various types. For example, you can create a function or class that works with any type of data by passing the type as a parameter.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What is structural typing in TypeScript?",
    tip: "Think about how TypeScript checks types based on structure.",
    answer: "In TypeScript, types are checked based on the structure (shape) of the object, not just its type. Two objects with the same properties and values can be assigned to each other even if they are declared with different types, as long as their structures match.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are private fields in TypeScript?",
    tip: "Think about encapsulation.",
    answer: "Private fields in TypeScript are declared with the `private` keyword, ensuring they cannot be accessed outside the class. This provides true encapsulation and prevents accidental access or modification from outside the class.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "When should you use `never`, `unknown`, and `any` in TypeScript?",
    tip: "Think about type safety and flexibility.",
    answer: "- **`never`**: Represents something that should never happen, like a function that throws an error.\n- **`unknown`**: Represents a value that can be any type but requires type checking before use. It's safer than `any`.\n- **`any`**: Disables type checking and should be avoided when possible because it removes TypeScript's safety features.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What is the `declare` keyword in TypeScript?",
    tip: "Think about external libraries and global variables.",
    answer: "The `declare` keyword is used to tell TypeScript about a variable, class, or module that exists in the environment but isn't defined in the TypeScript code. This is common when using JavaScript libraries without type information.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are ambient declarations in TypeScript?",
    tip: "Think about third-party libraries and global variables.",
    answer: "Ambient declarations allow you to tell TypeScript about variables or modules that exist in the environment. They are often used with third-party libraries or global variables.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What is type inference in TypeScript?",
    tip: "Think about how TypeScript automatically assigns types.",
    answer: "TypeScript's type inference system automatically assigns types to variables based on their initial values. For example, `let x = 5` infers `x` as a `number`.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are union and intersection types in TypeScript?",
    tip: "Think about combining multiple types.",
    answer: "- **Union Types**: Allow a variable to hold multiple types, e.g., `string | number`.\n- **Intersection Types**: Combine multiple types into one, e.g., `Person & Employee`.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What is type narrowing in TypeScript?",
    tip: "Think about conditionally narrowing types.",
    answer: "Type narrowing allows you to write safer code by narrowing the type of a variable based on condition checks. For example, using `typeof` to check if a variable is a `string`.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are enums in TypeScript?",
    tip: "Think about named constants.",
    answer: "Enums are a way to define named constants that represent a set of related values. They can be numeric or string-based.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are mapped types in TypeScript?",
    tip: "Think about transforming existing types.",
    answer: "Mapped types create new types by transforming existing ones. They are often used with utility types like `Partial`, `Readonly`, etc.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are utility types in TypeScript?",
    tip: "Think about built-in type helpers.",
    answer: "Utility types like `Partial`, `Readonly`, `Pick`, and `Omit` are built-in TypeScript tools for manipulating types. For example, `Partial<T>` makes all properties of a type optional.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are type guards in TypeScript?",
    tip: "Think about ensuring type safety in conditionals.",
    answer: "Type guards are used to narrow down types inside conditionals. For example, checking if a variable is a `string` using `typeof`.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are discriminated unions in TypeScript?",
    tip: "Think about distinguishing between different object shapes.",
    answer: "Discriminated unions use a common property to distinguish between different shapes of objects within a union. For example, a `Shape` type with `kind` as the discriminator.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What is the `as` keyword in TypeScript?",
    tip: "Think about type assertions.",
    answer: "The `as` keyword is used for type assertions, allowing you to tell TypeScript to treat a value as a specific type when it cannot infer it automatically.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are conditional types in TypeScript?",
    tip: "Think about types that depend on conditions.",
    answer: "Conditional types are advanced types that depend on a condition. For example, `IsString<T> = T extends string ? true : false`.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are `keyof` and index types in TypeScript?",
    tip: "Think about accessing object keys dynamically.",
    answer: "The `keyof` operator gets the keys of an object type, and index types allow you to access properties dynamically. For example, `keyof Person` returns `'name' | 'age'`.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What is the `Record` utility type in TypeScript?",
    tip: "Think about creating types from key-value pairs.",
    answer: "The `Record` utility type creates a new type from a union of keys and a type for values. For example, `Record<string, number>` creates an object with string keys and number values.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What is module augmentation in TypeScript?",
    tip: "Think about extending third-party libraries.",
    answer: "Module augmentation allows you to add additional functionality to existing modules. For example, extending the `express` module to add a `user` property to the `Request` object.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What is the difference between namespaces and modules in TypeScript?",
    tip: "Think about organizing code.",
    answer: "Namespaces are an older way to organize code in TypeScript, while ES Modules are the modern standard. Most code today uses ES Modules, but namespaces may still be relevant in legacy code.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "What are decorators in TypeScript?",
    tip: "Think about modifying classes and methods at design time.",
    answer: "Decorators are an experimental feature in TypeScript that allow you to modify classes and methods at design time. For example, marking a class property as `readonly`.",
    type: "frontend",
    tags: ["typescript", "frontend"]
  },
  {
    question: "How do you optimize a website's assets?",
    tip: "Think about file handling and performance",
    answer: "You can optimize a website's assets through file concatenation, file compression, CDN hosting, offloading assets, reorganizing and redefining code, and more.",
    type: "frontend",
    tags: ["optimization", "performance"]
  },
  {
    question: "What are the three ways to reduce page load time?",
    tip: "Think about performance optimization techniques",
    answer: "To reduce page load time, you can: 1. Reduce image sizes. 2. Remove unnecessary widgets. 3. Perform HTTP compression. Additionally, you can put CSS at the top, script references at the bottom, reduce lookups, minimize redirects, and enable caching.",
    type: "frontend",
    tags: ["performance", "optimization"]
  },
  {
    question: "What kind of things must you be wary of when designing or developing multilingual sites?",
    tip: "Think about language and encoding",
    answer: "When designing multilingual sites, you should: 1. Set the default language using Unicode encoding. 2. Use the `lang` attribute. 3. Be aware of standard font sizes and text direction. 4. Consider language word length.",
    type: "frontend",
    tags: ["multilingual", "html"]
  },
  {
    question: "What is HTML?",
    tip: "Think about markup languages",
    answer: "HTML stands for Hypertext Markup Language. It is the dominant markup language for creating websites and anything that can be viewed inside a web browser.",
    type: "html",
    tags: ["html", "basics"]
  },
  {
    question: "What is the difference between HTML elements and tags?",
    tip: "Think about syntax and structure",
    answer: "HTML elements communicate to the browser how to render the actual text. When surrounded by angular brackets, they form HTML tags. Tags usually come in pairs and surround the actual text.",
    type: "html",
    tags: ["html", "elements"]
  },
  {
    question: "What is 'Semantic HTML'?",
    tip: "Think about meaning and structure",
    answer: "Semantic HTML is a coding style where the tags embody what the text is meant to convey. Tags like `<b>` for bold and `<i>` for italic should not be used because they only represent formatting and provide no meaning or structure.",
    type: "html",
    tags: ["html", "semantics"]
  },
  {
    question: "What does DOCTYPE mean?",
    tip: "Think about document rendering",
    answer: "The `DOCTYPE` tells the browser which type of HTML is used on a web page. It helps the browser determine how to render the page. Failing to use a `DOCTYPE` or using the wrong one may load the page in quirks mode.",
    type: "html",
    tags: ["html", "doctype"]
  },
  {
    question: "What's the difference between standards mode and quirks mode?",
    tip: "Think about browser rendering",
    answer: "Quirks mode is a default compatibility mode that may differ between browsers, leading to inconsistencies in appearance. Standards mode ensures consistent rendering across browsers.",
    type: "html",
    tags: ["html", "rendering"]
  },
  {
    question: "What are the limitations when serving XHTML pages?",
    tip: "Think about browser compatibility",
    answer: "The biggest limitation is poor browser support. Some browsers, like Internet Explorer, cannot parse XHTML as XML, making it less extensible than promised.",
    type: "html",
    tags: ["html", "xhtml"]
  },
  {
    question: "How do you make comments without text being picked up by the browser?",
    tip: "Think about HTML syntax",
    answer: "Comments in HTML start with `<!--` and end with `-->`. They are used to explain or clarify code and prevent the browser from recognizing the text.",
    type: "html",
    tags: ["html", "comments"]
  },
  {
    question: "What is the difference between linking to an image, a website, and an email address?",
    tip: "Think about HTML attributes",
    answer: "To link an image, use the `<img>` tag with the `src` attribute. To link a website, use the `<a>` tag with the `href` attribute. To link an email, use `mailto:` followed by the email address in the `href` attribute.",
    type: "html",
    tags: ["html", "links"]
  },
  {
    question: "My hyperlink or image is not displaying correctly, what is wrong with it?",
    tip: "Think about common HTML errors",
    answer: "Common issues include missing tag brackets, missing quotes for `href` or `src`, or incorrect alternate text. Verify the link itself to ensure it is correct.",
    type: "html",
    tags: ["html", "debugging"]
  },
  {
    question: "What is the syntax difference between a bulleted list and a numbered list?",
    tip: "Think about HTML list tags",
    answer: "Bulleted lists use the `<ul>` tag (unordered list). Numbered lists use the `<ol>` tag (ordered list).",
    type: "html",
    tags: ["html", "lists"]
  },
  {
    question: "How are absolute, relative, static, and fixed positions different from each other?",
    tip: "Think about CSS positioning",
    answer: "Static: Default position, unchangeable. Relative: Position can be changed using attributes like alignment and size. Absolute: Position is relative to the parent element. Fixed: Position is relative to the browser window and remains fixed during scrolling.",
    type: "css",
    tags: ["css", "positioning"]
  },
  {
    question: "What is meant by a responsive website?",
    tip: "Think about adaptability",
    answer: "A responsive website fits any screen resolution, device type, and size, ensuring it looks good and is understandable to the user on all devices.",
    type: "frontend",
    tags: ["responsive", "css"]
  },
  {
    question: "Explain the difference between inline, inline-block, and block.",
    tip: "Think about CSS display properties",
    answer: "Block: Starts on a new line and takes up the full width. Inline: Does not start on a new line and only takes up as much width as necessary. Inline-block: Similar to inline but allows padding and margins on all sides.",
    type: "css",
    tags: ["css", "display"]
  },
  {
    question: "Does HTML need a compiler?",
    tip: "Think about front-end languages",
    answer: "No, HTML does not need a compiler because it is a front-end language. Other programming languages like Java or C++ require compilers to convert code into machine language.",
    type: "html",
    tags: ["html", "basics"]
  },
  {
    question: "What is the difference between document and window?",
    tip: "Think about browser objects",
    answer: "Window: The first thing that loads into the browser, with properties like `innerWidth`, `innerHeight`, and `name`. Document: Loads inside the window object and represents the HTML, PHP, or other documents with properties like `title`, `URL`, and `cookies`.",
    type: "javascript",
    tags: ["javascript", "dom"]
  },
  {
    question: "What is web accessibility?",
    tip: "Think about inclusivity",
    answer: "Web accessibility means providing access to websites for differently-abled and disabled persons so they can understand, navigate, and interact with the web easily.",
    type: "frontend",
    tags: ["accessibility", "best-practices"]
  },
  {
    question: "What is JavaScript hoisting?",
    tip: "Think about variable declaration",
    answer: "JavaScript hoisting allows variables to be accessed before they are declared. However, only declared variables are hoisted, and accessing them before assignment results in `undefined`.",
    type: "javascript",
    tags: ["javascript", "hoisting"]
  },
  {
    question: "Create an array in JavaScript with a list of cities and assign that array to the variable `City`.",
    tip: "Think about JavaScript arrays",
    answer: "```javascript\nvar City = [\"New York\", \"London\", \"Sydney\", \"Hyderabad\", \"Montreal\"];\n```",
    type: "javascript",
    tags: ["javascript", "arrays"]
  },
  {
    question: "How do you select all elements with the class of 'Apple' in jQuery?",
    tip: "Think about jQuery selectors",
    answer: "```javascript\n$(\".Apple\").show();\n```",
    type: "javascript",
    tags: ["jquery", "selectors"]
  },
  {
    question: "Declare a new variable in PHP equal to the number 6.",
    tip: "Think about PHP syntax",
    answer: "```php\n$number = 6;\n```",
    type: "php",
    tags: ["php", "variables"]
  },
  {
    question: "How do you check if a variable has been set in PHP?",
    tip: "Think about PHP functions",
    answer: "Use the `isset()` function: ```php\nisset($variable);\n```",
    type: "php",
    tags: ["php", "variables"]
  },
  {
    question: "How do you access a GET request URL parameter with PHP?",
    tip: "Think about PHP superglobals",
    answer: "Use the `$_GET` method: ```php\n$_GET['parameter'];\n```",
    type: "php",
    tags: ["php", "get"]
  },
  {
    question: "What is the difference between HTML and XHTML?",
    tip: "Think about markup languages",
    answer: "HTML: Hypertext Markup Language. XHTML: Extensible Hypertext Markup Language, which is stricter and XML-based. XHTML does not allow coding lapses.",
    type: "html",
    tags: ["html", "xhtml"]
  },
  {
    question: "What is the difference between local storage, session storage, and cookies?",
    tip: "Think about client-side storage",
    answer: "Local Storage: Stores data without expiry limits. Session Storage: Stores data only while the window is open. Cookies: Stores data between the client and server.",
    type: "javascript",
    tags: ["javascript", "storage"]
  },
  {
    question: "What can you do to increase page performance?",
    tip: "Think about optimization techniques",
    answer: "To increase page performance, you can: 1. Reduce image sizes. 2. Clear caches. 3. Reduce external HTTP requests. 4. Load JavaScript asynchronously. 5. Optimize the site for mobile.",
    type: "frontend",
    tags: ["performance", "optimization"]
  },
  {
    question: "Describe the new elements in HTML.",
    tip: "Think about HTML5",
    answer: "New elements in HTML include semantic tags (e.g., `<header>`, `<footer>`, `<figure>`, `<mark>`) and multimedia/graphic tags (e.g., `<audio>`, `<canvas>`).",
    type: "html",
    tags: ["html", "html5"]
  },
  {
    question: "Tell me how float works.",
    tip: "Think about CSS layout",
    answer: "Float pushes an element to the right or left. The `float` property has four values: `inherit`, `left`, `right`, and `none`.",
    type: "css",
    tags: ["css", "float"]
  }
];