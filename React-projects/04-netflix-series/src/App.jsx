import './App.css'; 
import './components/Netflix.css'
import NetflixSerias from './components/NetflixSerias'; 
import Cards from './components/Cards'; 


const Card1 = () => {
  return (
    <h1>hello</h1>
  )
}

function App() {

  return (
    <>
      <NetflixSerias />

      <Cards
      c1={<Card1 />}
      msg={
        <p>this is msg from jay</p>
      }> 
        <p>my fav bike is xpulse</p>
      </Cards>
      
      
    </>

  )
}
export default App;
