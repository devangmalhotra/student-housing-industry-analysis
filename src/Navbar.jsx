import React from 'react';
import { Link } from 'react-router-dom';
import infoIcon from './assets/info-circle-svgrepo-com.svg';
import darkModeIcon from './assets/moon-svgrepo-com.svg';
import { NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';

function Navbar() {
  

  return (
    <nav id='navbar'>
      <Link to='/'><h3>Student Housing Industry Analysis</h3></Link>
      <ul id='header-icons'>
        <li><img className='header-icon' src={darkModeIcon} alt="Switch modes" /><h5>Dark</h5></li>
        <li><img className='header-icon' src={infoIcon} alt="About" /><h5>About</h5></li>
      </ul>
      <FiMenu id='hamburger'/>
    </nav>
  )
}

export default Navbar
