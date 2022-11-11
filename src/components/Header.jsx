import React, {useState} from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'

export const Header = () => {

  // const [nav,setnav] = useState(false);

  // const changeBackground = ()=>{
  //   if (window.scrollY>=50) {
  //     setnav(true);
  //   } 
  //   else {
  //     setnav(false);
  //   }
  // }
  // window.addEventListener('scroll',changeBackground);

  return (
    <div>
        <nav className="header">
            <img src={logo} alt="logo" className='logo'/>
            <ul className='header-menu'>
              <li>Home</li>
              <li>Nosotros</li>
              <li>Rutinas</li>
              <li>Planes</li>
              <li>Contáctanos</li>
            </ul>
        </nav>
    </div>
  )
}

