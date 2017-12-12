1. What is React JS?

React JS is a JavaScript library that allows you to quickly build interactive user interface, made up of several efficient and easy to update sections. These smaller divisions of the UI known as components, are easier to create, easier manage and resuseable, each with its own code, structure and API.

React JS uses JSX or JavaScript syntax which is consistent and easy to learn and makes for machine readable code that can be compounded. React JS also offers much faster optimization and uptdating by use of the virtual DOM.

2. Explain briefly the React Component lifecycle.

The React Component Lifecycle refers to the methods that control initiation (pre-mounting) all the way to the end (unmounting) of the React component. The lifecycle methods include: 
    -componentWillMount
    -componentDidMount
    -componentWillRecieveProps
    -shouldComponentUpdate
    -componentWillUpdate
    -componentDidUpdate
    -componentWillUnmount

"componentDidMount" is the method that is invoked as soon as the component is mounted, and is the place for all the DOM essential nodes. It is the place for any event listeners and all incoming data.
"componentDidUpdate" is the method that is used for operating on the DOM following in changes such as prop or state changes. This method returns a Boolean.
"componentWillUnmount" is invoked immediately before the component is removed from the DOM and signals the need to cancel network requests and clean up any subscriptions.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Functional component is a the most basic component and is just a render function of a class component. In a Functional component only props (not state) can be accessed, and no lifecyle method can be used and no 'this' keyword is required. It used mainly for arrangint and presenting to the UI and allows no app behavior features.

A Class component extends the React Component and the use of the 'this' keywords to acces the props and other associated functions. The Class components require instantiation, is where the lifecycle methods are called and offers more features. 

4. Name the three arguments that can be passed to the React.createElement() function?

React.createElement() function can take three types of arguments. The first is 'type' and refers to the type of element and it is passed in as a string eg 'h1' for <h1> element. The second argument is 'props' represents and object containing properties. The third argument is the children of the component, passed either as a string or as a reference to another component.

