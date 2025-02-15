import { useState,useCallback,useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(5); 

  const [numberAllowed, setNumberallowed] = useState(false); 
  const [charAllowed, setCharallowed] = useState(false); 
  const [password, setPassword] = useState(""); 

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = " "; 
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 

    if(numberAllowed){ str+="0123456789";  }
    if(charAllowed){ str+="! @ # $ % ^ & * ( ) _ + - = { } [ ] | \ : ;  ' < > , . ? /";  }

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*string.length+1); 
      pass += string.charAt(char);  
    }

    setPassword(pass); 
  },[length,numberAllowed,charAllowed,setPassword]); 

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator]); 

  passwordGenerator();
  return (
    <>
          <div>
      <h1>password genertor</h1>
      <div>
        <input 
        type="text"
        value={password}
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        >copy</button>
      </div>

      <div>
        <input type="range" 
        value={length}
        onChange={(e)=> setLength(e.target.value)}
        />
        <label> lavel : {length} </label>
      </div>

      <div>
        <input type="checkbox" value={numberAllowed} defaultChecked={numberAllowed} onChange={() => { setNumberallowed((prev) => !prev);}} />
        <label htmlFor="">Number</label>

        <input type="checkbox" value={charAllowed} defaultChecked={charAllowed} onChange={()=>{setCharallowed((prev) => !prev) }} />
        <label htmlFor="">Character</label>
      </div>

      
    </div>
    </>
  )
}

export default App
