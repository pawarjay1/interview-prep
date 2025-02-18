import React from 'react'

export const SeriasCard = ({element}) => {

    const {img_url,name,rating,description,watch_url} = element;

    const ratting = {
        backgroundColor: ({rating}<8.5) ? "rgb(83, 231, 83)":"rgb(255, 61, 61)"
    }

    return (
        <>
            <li>
                <div>
                    <img src={img_url} alt="" width="50%" height="50%" />
                </div>
                <h4>Name : {name}</h4>

                <h5>
                    <span  className={rating >= 8.5 ? "super_hit" : "average"} > {rating} </span> 
                </h5>
                <h6>Summary : {description}</h6>
                <a href={watch_url}>whatch now</a>
            </li>
        </>

    )
}

// export default SeriasCard; 



