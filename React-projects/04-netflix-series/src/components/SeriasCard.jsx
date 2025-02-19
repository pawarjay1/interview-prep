import React from 'react'

export const SeriasCard = ({element}) => {

    const {img_url,name,rating,description,watch_url} = element;

    return (
        <>
        <div className='card-container'>
            <div className="card">
            <li>
                <div>
                    <img src={img_url} alt="" width="50%" height="50%" />
                </div>
                <h4>Name : {name}</h4>

                <h5>
                    <span  className={` rating rating2 ${rating >= 8.5 ? "super_hit" : "average"}`} > {rating} </span> 
                </h5>
                <h6>Summary : {description}</h6>
                <a href={watch_url}>whatch now</a>
            </li>
            </div>
        </div>
        </>

    )
}

// export default SeriasCard; 



