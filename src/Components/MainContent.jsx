import React from 'react'
import StatBox from './StatBox'
import BarGraph from './BarGraph'
import { useState } from 'react';

function MainContent() {
  const [selectedCity, setSelectedCity] = useState(localStorage.getItem('selected-city'));

  return (
    <section id='home-main-content'>
        <StatBox city={selectedCity} statName='Total listings'/>
        <StatBox city={selectedCity} statName='Average rent'/>
        <StatBox city={selectedCity} statName='Most expensive listing'/>
        <StatBox city={selectedCity} statName='Cheapest listing'/>
        <BarGraph /> 
    </section>
  )
}

export default MainContent