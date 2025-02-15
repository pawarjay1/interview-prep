import Test2 from './Test2'; 

const Test = (props) => {

    // console.log(props); 
    return (
        <>
            <h1>hello from test file</h1>
            <p>counter is {props.counter}</p>

            <Test2 counter={props.counter}/>
        </>
    )
}

export default Test; 