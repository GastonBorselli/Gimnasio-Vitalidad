import React from 'react'
import {Player} from '@lottiefiles/react-lottie-player'
import gym from '../assets/gym.json'
import heart from '../assets/heart.json'
import chart from '../assets/chart.json'
import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <div className='principal' name='home'>
        <div className="left">
            <div className="principal-text">
              <div>
                <span className='stroke-text'>Mejora </span>
                <span>Tu </span>
              </div>
              <div className='vitalidad'>
                <span>bienestar corporal</span>
              </div>

              <div className="description">
                Te ayudaremos a alcanzar el balance ideal entre tu cuerpo y mente
              </div>
            </div>

            <div className="figures">
              <div>
                <span>2</span>
                <span>Entrenadores profesionales</span>
              </div>
              <div>
                <span>+80</span>
                <span>Miembros</span>
              </div>                
              <div>
                <span>+50</span>
                <span>Rutinas fitness</span>
              </div>
            </div>

            <div className="principal-btn">
              <Link to='/contact' style={{color:'inherit', textDecoration:'inherit'}}><button className="btn btn-slide">Inscríbete ahora</button></Link>
            </div>
      </div>

        <div className="right">         
            <div className="heart-rate">
              <div className='heart'>
                <Player 
                src={heart}
                style={{width:'80px',height:'70px'}}
                autoplay
                loop
                speed={0.5}/>
              </div>
              <span>Ritmo cardíaco</span>
              <span>130 bpm</span>
            </div>

            <div className='gym-exercises'>
              <Player src={gym}
              style={{width:'450px'}}
              autoplay
              loop
              speed={1}/>
            </div>

            <div className="calories">
              <div className="burn-calories">
                  <Player src={chart}
                  style={{width:'60px',margin:'1rem .5rem 0 0',hover: 'autoplay'}}
                  autoplay
                  loop
                  speed={1}/>
                </div>
              <div>
                <span>Calorías quemadas</span>
                <span>220 kcal</span>
              </div>
            </div>
        </div>
    </div>
  )
}

