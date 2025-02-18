import React from "react";

const Cards = (props) => {

    const pera = {
        color : "red"
    }
    return (
        <div>
            <h1>{props.c1}</h1>
            <p style={pera}>{props.msg}</p>
            <div>{props.children} </div>
        </div>
    )
}

export default Cards; 