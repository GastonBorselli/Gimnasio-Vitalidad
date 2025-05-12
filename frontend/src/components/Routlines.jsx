import React from 'react'
// import Slider from 'react-slick';
import {Cards} from './Cards'
import functional from '../assets/functional.mp4'
import localized from '../assets/localized.mp4'
import recreative from '../assets/recreative.mp4'




export const Routlines =() => {
 

  return (
    <div className='div-rutlines' name='home'>
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
          description = "Con este entrenamiento vas a trabajar tus músculos y articulaciones, imitando tus movimientos cotidianos. Te va a ayudar a mejorar la movilidad corporal, el equilibrio, la salud cardiovascular, corrigir la postura y fortalecer la masa muscular"
          />
          <Cards 
          vid = {localized}
          title = "Gimnasia localizada"
          description = "Con esta modalidad de gimnasia vas a trabajar ejercicios de efectos localizados, utilizarás el peso de tú cuerpo y una variedad de elementos con el objetivo de aumentar la resistencia y tonificar músculos."
          />
          <Cards
          vid = {recreative}
          title = "Gimnasia para adultos mayores"
          description = "Esta actividad es perfecta para las personas que esten en un rango de edad avanzado y quieran mantenerse en forma sin hacer grandes esfuerzos a partir de ejercicios adaptados a su estado físico."
          />
        </div>
        

    </div>
  )
}

