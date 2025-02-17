import React from 'react'
import seriesData from '../api/seriesData.json'; 

export const Header = () => {

  const i = 3; 
  return (
    <div>
      <div>
        <img src={seriesData[i].img_url} alt="" width="50%" height="50%" />
      </div>
      <h4>Name : {seriesData[i].name}</h4>
      <h5>Rating : {seriesData[i].rating}</h5>
      <h6>Summary : {seriesData[i].description}</h6>
      <a href={seriesData[i].watch_url}>whatch now</a>
    </div>
  )
}

// export default Header; 