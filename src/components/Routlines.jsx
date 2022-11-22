import React from 'react'
// import Slider from 'react-slick';
import {Cards} from './Cards'
import functional from '../assets/functional.mp4'
import localized from '../assets/localized.mp4'
import recreative from '../assets/recreative.mp4'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const Routlines =() => {
 

  return (
    <div className='div-rutlines'>
        <div className='routlines' id='routlines'>
            <div className="routlines-header">
                <span className='stroke-text'>Explora </span> 
                <span className='stroke-text'> nuestras </span>
                <span className='white-text'>Rutinas.</span>
            </div>
        </div>
        <div className='program-categories'>
          <Cards
          vid = {functional}
          title = "Entrenamiento Funcional"
          description = "Con el entrenamiento funcional se busca trabajar los músculos imitando los movimientos cotidianos"
          />
          <Cards 
          vid = {localized}
          title = "Gimnasia localizada"
          description = "La gimnasia localizada es una modalidad de gimnasia, en la cual se trabaja principalmente las capacidades de resistencia y fuerza muscular, por medio de ejercicios que involucran el trabajo de los principales grupos musculares, utilizando diferentes tipos de sobrecarga o con el peso del propio cuerpo."
          />
          <Cards
          vid = {recreative}
          title = "Gimnasia para adultos mayores"
          description = "La gimnasia para adultos mayores es una actividad perfecta para las personas en este rango de edad que quieran mantenerse en forma sin hacer grandes esfuerzos y a partir de ejercicios adaptados a su estado físico"
          />
        </div>
        

    </div>
  )
}

