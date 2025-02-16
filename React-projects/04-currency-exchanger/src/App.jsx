import { useState,useEffect,Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Header} from './components/Header'; 

function App() {

  const [count,setCount] = useState(0); 

  useEffect(()=>{
    console.log("count value is",count); 
  },[count]); 

  const age = 18; 

  return (
      <Fragment> 
      <h1>Counter</h1>

      <p>counter: {count}</p>
      <button onClick={()=>{setCount(count+1)} }>{ (age>=18) ? "you are 18+" : "you are not 18+"}</button>
      <Header />

      </Fragment> 
      
  )
}
export default App;
