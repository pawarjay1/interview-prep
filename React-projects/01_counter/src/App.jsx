import { useState } from 'react'
import Test from './components/Test'; 
import './App.css'

function App() {

  const [count, setCount] = useState(0); 

  function Counter(){
    setCount( prevCount => prevCount+1); 
    setCount( prevCount => prevCount+1); 
    setCount( prevCount => prevCount+1); 
    setCount( prevCount => prevCount+1); 

    // setCount(count+1); 
  }
  
  return (
    <>
      <h1>Counter App</h1>
      <p>counter : {count}</p>
      <button onClick={Counter}>Increment</button>
      <button onClick={()=> setCount(count-1)}>Decrement</button>

      <Test counter={count} />
    </>
  )
}

export default App
