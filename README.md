React Basic Questions

1. What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax used in React that allows developers to write HTML-like code inside JavaScript.

2. What is the difference between State and Props?
Props are data passed from a parent component to a child component and cannot be changed. State is data managed inside a component and can be updated.

3. What is the useState hook, and how does it work?
`useState` is a React hook used to manage state in functional components. It returns a state value and a function to update that value.

Example:
```js
const [count, setCount] = useState(0);

### 4. How can you share state between components in React?

State can be shared by lifting the state up to a common parent component and passing it to child components using props.

5. How is event handling done in React?

Event handling in React is done using camelCase event names and passing functions as event handlers.

Example:

<button onClick={handleClick}>Click</button>