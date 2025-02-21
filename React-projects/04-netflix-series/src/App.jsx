import './App.css'; 
import './components/Netflix.module.css'
import './components/Event.module.css'; 
import './toggleSwitch/Toggle.module.css'
// import NetflixSerias from './components/NetflixSerias'; 
// import Cards from './components/Cards'; 
// import EventHandling from './components/EventHandling'; 
// import EventPropagation from './components/EventPropagation';
import Toggle from './toggleSwitch/Toggle'; 

const Card1 = () => {
  return (
    <h1>hello</h1>
  )
}



function App() {

  return (
    <>
      {/* <NetflixSerias /> */}

      {/* <Cards
      c1={<Card1 />}
      msg={
        <p>this is msg from jay</p>
      }> 
        <p>my fav bike is xpulse</p>
      </Cards> */}
      
      {/* <EventHandling /> */}


      {/* <EventPropagation /> */}

      <Toggle />

      
    </>

  )
}
export default App;
