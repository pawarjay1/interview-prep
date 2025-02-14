import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './componets/header'; 

function App() {
  
  const [count, setCount] = useState(0); 

  return (
    <>
      <p>conter is : {count}</p>
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <h1 style={{ color: "green", textDecoration: "underline" }}>React Styling</h1>
      <Header />
    </>
  )
}

export default App
