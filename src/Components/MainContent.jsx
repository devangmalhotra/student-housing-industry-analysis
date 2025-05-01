import React from 'react'
import StatBox from './StatBox'
import BarGraph from './BarGraph'
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';

function MainContent() {
  return (
    <section id='home-main-content'>
        <StatBox statName='Total listings'/>
        <StatBox statName='Average rent'/>
        <StatBox statName='Most expensive listing'/>
        <StatBox statName='Cheapest listing'/>
        <BarGraph /> 
    </section>
  )
}

export default MainContent