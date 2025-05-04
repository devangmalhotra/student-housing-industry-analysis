import React from 'react';
import { Link } from 'react-router-dom';
import infoIcon from '../assets/info-circle-svgrepo-com.svg';
import darkModeIcon from '../assets/moon-svgrepo-com.svg';
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  } 

  return (
    <nav id='navbar'>
      <Link to='/'><h3>Student Housing Industry Analysis</h3></Link>
    </nav>
  )
}

export default Navbar
