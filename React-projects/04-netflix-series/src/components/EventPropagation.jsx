import React from 'react';
import styles from './Event.module.css'; 
const EventPropagation = () => {

    const grandParendClicked = () => {
        // event1.stopPropagation(); 
        console.log("dada ji ne click kiya"); 
    }

    const parentClicked = () => {
        // event2.stopPropagation(); 
        console.log("papa ji ne click kiya"); 
    }

    const childClicked = (event) => {
        // event.stopPropagation(); 
        console.log("bache ne click kiya "); 
    }
  return (
    <>
        <div className={styles.gdiv} onClickCapture={grandParendClicked}>
            <div className={styles.pdiv} onClickCapture={parentClicked}>
                <div className={styles.cdiv} onClickCapture={childClicked}>
                    <h1>child div</h1>
                </div>
            </div>
        </div>
    </>
  ); 
}

export default EventPropagation; 