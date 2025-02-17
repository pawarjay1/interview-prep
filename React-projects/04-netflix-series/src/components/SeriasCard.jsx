import React from 'react'

export const SeriasCard = (props) => {

    const {img_url,name,rating,description,watch_url} = props.element;
    return (
        <>
            <li>
                <div>
                    <img src={img_url} alt="" width="50%" height="50%" />
                </div>
                <h4>Name : {name}</h4>
                <h5>Rating : {rating}</h5>
                <h6>Summary : {description}</h6>
                <a href={watch_url}>whatch now</a>
            </li>
        </>

    )
}

// export default SeriasCard; 