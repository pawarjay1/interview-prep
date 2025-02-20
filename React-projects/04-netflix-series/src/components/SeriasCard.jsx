import React from 'react'; 
import styles from './Netflix.module.css';

import styled from 'styled-components'; 

export const SeriasCard = ({element}) => {

    const {id,img_url,name,rating,description,watch_url} = element;

    const rattingClass = rating >= 8.5 ? styles.super_hit : styles.average; 

    const Url_movie = styled.a({
        border: "1px solid transparent",
        margin: "3px",
        padding: "5px",
        borderRadius: "1px",
        backgroundColor:rating>= 8.5 ? "rgb(68, 247, 68)":"rgb(255, 61, 61)",
        textDecoration: "none",
        color: "white",
        fontSize: "13px"
    })

    return (
        <>
        <div className={styles["card-container"]}>
            <div className="styles.card">
                <li key={id}>
                    <div>
                        <img src={img_url} alt="" width="50%" height="50%" />
                    </div>
                    <h4>Name : {name}</h4>

                    <h5>
                        <span  className={` ${rattingClass}`} > {rating} </span> 
                    </h5>
                    <h6>Summary : {description}</h6>
                    {/* <a className='btn' >whatch now</a> */}
                    
                    <Url_movie href={watch_url}>whatch now</Url_movie>
                </li>
            </div>
        </div>
        </>
    )
}

// export default SeriasCard; 



