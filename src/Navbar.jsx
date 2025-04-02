import React from 'react';
import { Link } from 'react-router-dom';
import infoIcon from './assets/info-circle-svgrepo-com.svg';
import darkModeIcon from './assets/moon-svgrepo-com.svg';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav id='navbar'>
      <Link to='/'><h3>Student Housing Industry Analysis</h3></Link>
      <ul id='header-icons'>
        <li><img className='header-icon' src={darkModeIcon} alt="Switch modes" /></li>
        <li><img className='header-icon' src={infoIcon} alt="About" /></li>
      </ul>
    </nav>
  )
}

export default Navbar
