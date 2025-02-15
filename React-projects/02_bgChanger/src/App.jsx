import { useState } from 'react'
import reactLogo from './assets/react.svg'; 
import viteLogo from '/vite.svg'; 
import './App.css'

function App() {

  const [color, setColor] = useState("grey"); 

  return (
    <div
      className='box'
      style={{backgroundColor: color}}
    >
      <div>
        <button onClick={() => setColor("red")} style={{backgroundColor: "red"}}>Red</button>
        <button onClick={() => setColor("green")} style={{backgroundColor: "green"}}>green</button>
        <button onClick={() => setColor("black")} style={{backgroundColor: "#000", color:"#fff"}}>black</button>
        <button onClick={() => setColor("white")} style={{backgroundColor: "#fff"}}>white</button>
      </div>
    </div>
  )
}

export default App
