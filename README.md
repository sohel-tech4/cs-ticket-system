React Basic Questions

1. What is JSX, and why is it used?

Answer: JSX (JavaScript XML) is a syntax used in React that allows developers to write HTML-like code inside JavaScript.

2. What is the difference between State and Props?

Answer: Props are data passed from a parent component to a child component. State is data managed inside a component.

3. What is the useState hook, and how does it work?

Answer: useState is a React hook used to manage state in functional components. It returns a state value and a function to update that value.

Example: const [count, setCount] = useState(0);

4. How can you share state between components in React?

Answer: State can be shared by lifting to common parent component and passing it to child components using props.

5. How is event handling done in React?

Answer: Event handling in React is done using camelCase event names and passing functions as event handlers.

Example:

<button onClick={handleClick}>Click</button>