import React, { useState } from "react";

import styles from './Toggle.module.css';

import { TiCogOutline } from "react-icons/ti";

const Toggle = () => {

    const [isOn, setIsON] = useState(false);

    const handdleToggleSwitch = () => {
        setIsON(!isOn);

    }


    // className={isOn ? styles.on : styles.off}

    return (
        <div className={styles.main} style={{ backgroundColor: isOn ? "white" : "black" }}>

            <div className={styles.outer} style={{ backgroundColor: isOn ? "green" : "grey" }} onClick={handdleToggleSwitch}>

                <div className={`styles.inner ${isOn ? styles.on : styles.off}`}  >

                    <span className={styles.state}  >
                        {isOn ? "ON" : "OFF"}
                    </span>
                </div>
            </div>


        </div>

    )
}

export default Toggle; 