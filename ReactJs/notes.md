# react js 

### what is react 

React.js is a JavaScript library for building user interfaces.

Developed by Facebook (Meta), it is component-based and follows a virtual DOM approach.

useful in developing single page interfaces. 

It is helpful in building complex and reusable user interface(UI). 

#### important features of React are:

It supports server-side rendering.

It will make use of the virtual DOM rather than real DOM

It follows unidirectional data binding or data flow.


#### advantages of using React

- Component-Based Architecture

- Use Virtual DOM for High Performance.

- One-Way Data Binding (Data flows in one direction (from parent to child) )

- React Hooks for Simpler State Management

- Single Page Applications without full-page reloads.



### how to install react using vite 

1. Create a React App with Vite

> npm create vite@latest my-app

2. Install Dependencies

> npm install 

3. Start the Development Server

> npm run dev

4. stop the server 

> ctr + c

** Install Axios

> npm install axios


### real dom (slow) vs virtual dom (fast) 

#### Real Dom 

The Real DOM is the actual structure of a webpage that the browser renders.

Slow Performance becuse of small change (like updating a single button) can cause the entire page to reload.

#### virtual Dom

The Virtual DOM is a lightweight copy of the Real DOM stored in memory.

Instead of updating the Real DOM directly, React first updates the Virtual DOM, compares changes and then efficiently updates only the necessary parts of the Real DOM.

##### How Virtual DOM Works in React? 

1. Render Phase: React creates a Virtual DOM representation of the UI.

2. Diffing Phase: React compares (diffs) the old Virtual DOM with the new one.

3. Reconciliation Phase: React finds the minimal changes and updates only the required parts of the Real DOM.


### jsx(javascript xml) 

JSX stands for JavaScript XML.

It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).

### fragments in jsx  

React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.

To return multiple elements from a React component, you'll need to wrap the element in a root element.

> <>....</>  or <Fragment>....</Fragment>



### Import & Export in React.js

There are two ways to export and import:

1. Named Export / Import

> export const add = (a, b) => a + b;

> import { add, subtract } from "./math";

2. Default Export / Import

> export default Header;

> import Header from "./Header";





# techical thapa series imp 

- looping in jsx (using map)

- Passing JSX as Props 

- conditional css styling in react 



