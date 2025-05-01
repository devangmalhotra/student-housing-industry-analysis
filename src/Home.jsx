import React from 'react'
import Navbar from './Components/Navbar';
import DashboardHeader from './Components/DashboardHeader';
import MainContent from './Components/MainContent';
import LineGraph from './Components/BarGraph';
import { useState } from 'react';

function Home() {
  const [selectedCity, setSelectedCity] = useState('waterloo');

  const handleSubmit = e => {
    e.preventDefault();
    getInfo();
  }

  const handleSelect = e => {
      setSelectedCity(e.target.value);
  }

  // Gets the scraped info
  async function getInfo() {
      const res = await fetch(`http://localhost:8000/scrape?city=${selectedCity}`, 
          {method: 'GET'}
      )

      console.log(res);
      const data = await res.json();
      console.log(data);
  };

  return (
    <div id='home-main'>
        <Navbar />
        <DashboardHeader />
        <MainContent />
    </div>
  )
}

export default Home