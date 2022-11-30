import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import {Link as Up} from 'react-scroll'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="container-footer">
        <div className="top">
          <div className="logo-footer">
            <Link activeClass='active' to='/' spy={true} smooth={true} duration={1200}>
              <img src={logo} alt="logo" className='icon' />
            </Link>
            <h2>Gimnasio Vitalidad</h2>
          </div>
          <Up activeClass='active' to='home' spy={true} smooth={true} duration={1200}>
            <BsFillArrowUpCircleFill className='icon arrow-up'/>
          </Up>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navegación</h3>
            <Link to='/'><p>Home</p></Link>
            <Link to='/routlines'><p>Rutinas</p></Link>
            <Link to='/classes'><p>Horario</p></Link>
            <Link to='/prices'><p>Precios</p></Link>
            <Link to='/contact'><p>Contáctanos</p></Link>
          </div>
          <form>
            <h3>Redes sociales</h3>
            <div className="social-group">
              <FiInstagram className='social-icon'/>
              <FaWhatsapp className='social-icon'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
