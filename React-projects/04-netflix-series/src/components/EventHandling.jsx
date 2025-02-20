import React from "react";


const HandleClick = ({handleclk}) => {
    return (
        <button onClick={handleclk}>click me</button>
    ); 
}

const EventHandling = () => {

    const showMessage = () => {
        alert("button is clicked"); 
    }

    return (
        <HandleClick handleclk={showMessage} /> 
    )
}
export default EventHandling; 