import React from 'react'
import seriesData from '../api/seriesData.json';
import { SeriasCard } from './SeriasCard';

const NetflixSerias = () => {

  return (
        <ul>
          {
            seriesData.map((element) => {
              return (<SeriasCard key={element.key} element={element} />)
            })
          }
        </ul>
  )
}

export default NetflixSerias; 