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


### Hooks 



### useState hooks (variable of React)


- useEffect 


- two way binding. (form validation) 

- components (heart of React js) imp 

- fragments: <></>

- props : Props are arguments passed into React components.
- Props Drilling 

- Rendering JSON Data 

- Intergrating API (axios) : make a project in which we can use api data on a web page 



- React Router Dom (make a simple landing page with navigation links "page will change without loading")

- what is state management (context API)
- context API : contextAPI is used to centralized data. 




# imp topics of react.js

## hooks 

- useState()

- useEffect()

- useContext()

- useReduce()

- useMemo()

- useCallback()

- useRef()

 
## higher order components 

- what are the higher order components 

- why we use it higher order components 

- when we use 

- how we use higher order components 


## life cycle method of components 

## state managment 

- state/props 

- prop drilling 




