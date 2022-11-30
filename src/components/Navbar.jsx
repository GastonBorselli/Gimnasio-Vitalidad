import React, {useState} from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'

export const Navbar = () => {

  const [nav,setnav] = useState(false);
  const handleNav = () => setnav(!nav);

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
    <div className='navbar'>
        <nav className='container-nav'>
          <Link to='/'>
            <div className="logo">
              <img src={logo} alt="logo"/>
              <span className='title-nav'>Gimnasio Vitalidad</span>
            </div>
          </Link>
            <ul className={nav ? 'header-menu active' : 'header-menu'}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/routlines'>Rutinas</Link></li>
              <li><Link to='/classes'>Horarios</Link></li>
              <li><Link to='/prices'>Precios</Link></li>
              <li><Link to='/contact'>Contáctanos</Link></li>             
              <Link to='/contact' style={{color:'inherit',textDecoration:'inherit'}}><button type='button' className='btn-right'>Únete ahora</button></Link>
            </ul>
            <div className="hamburguer" onClick={handleNav}>
              {!nav ? (<FaBars className='icon'/>):(<FaTimes className='icon'/>)}              
            </div>
        </nav>
        
    </div>
  )
}

