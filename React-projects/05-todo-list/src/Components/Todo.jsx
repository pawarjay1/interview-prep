import { React, useState } from "react";

import './Todo.css';

const Todo = () => {


    const [inptuValue, setInputValue] = useState("");

    const [task, setTask] = useState([]);

    const handlerInput = (event) => {
        setInputValue(event); // this sets the input text 
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();  // It is commonly used in event handlers to stop actions like form submission, link navigation, or other default browser behaviors.

        if (!inptuValue) return; // if the input fiald is empty then dont add in array

        if (task.includes(inptuValue)){

            setInputValue(""); 
            return; // if the duplicate data then dont add in array    

        } 
        setTask((prev) => [...prev, inptuValue]); // store previus data as it is and store the new data in array

        setInputValue(""); // after submiting clear the input field  
    }

    return (
        <section className="todo-container">
            <header>
                <h1>ToDo List</h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>

                    <input type="text" className="todo-input" autoComplete="off" value={inptuValue} onChange={(event) => handlerInput(event.target.value)} />

                    <input type="submit" value="Add Task" className="todo-btn" />
                </form>
            </section>

            <div>
                <ul>
                    {
                        task.map((currentTask, index) => {
                            return (
                                <div>
                                    <li key={index} style={{listStyle:"none"}}>
                                        <span>{currentTask}</span>
                                    </li>
                                </div>

                            )
                        })
                    }
                </ul>

            </div>
        </section>
    )
}

export default Todo