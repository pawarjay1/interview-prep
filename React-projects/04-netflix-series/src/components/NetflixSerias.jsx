import React from 'react'
import seriesData from '../api/seriesData.json';
import {SeriasCard} from './SeriasCard'; 

const NetflixSerias = () => {

  return (
      <ul className='grid grid-three--cols'>
      {
        seriesData.map((element)=>{
          return( <SeriasCard key={element.key} element={element} />)
        })
      }

    </ul>
  )
}

export default NetflixSerias; 