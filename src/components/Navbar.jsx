import React, {useState} from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'

export const Navbar = () => {

  const [nav,setnav] = useState(false);

  const changeBackground = ()=>{
    if (window.scrollY>=50) {
      setnav(true);
    } 
    else {
      setnav(false);
    }
  }
  window.addEventListener('scroll',changeBackground);

  return (
    <div>
        <nav className={nav ? 'nav active' :'nav'}>
            <Link to='#' className='logo'>
              <img src={logo} alt="logo"/>
            </Link>
            <input className='menu-btn' type="checkbox" id='menu-btn'/>
            <label className='menu-icon' htmlFor="menu-btn">
              <span className='nav-icon'></span>
            </label>
            <ul className='header-menu'>
              <li><Link to='#'>Home</Link></li>
              <li><Link to='#'>Nosotros</Link></li>
              <li><Link to='#'>Rutinas</Link></li>
              <li><Link to='#'>Horarios</Link></li>
              <li><Link to='#'>Precios</Link></li>
              <li><Link to='#'>Contáctanos</Link></li>             
            </ul>
        </nav>
        <a href="#/" className='btn-right'>Únete ahora</a>
    </div>
  )
}

