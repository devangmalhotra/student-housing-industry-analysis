import React from 'react'
import StatBox from './StatBox'
import BarGraph from './BarGraph'
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';

function MainContent(props) {
  return (
    <section id='home-main-content'>
        <StatBox statName='Total listings' city={props.city} />
        <StatBox statName='Average rent' city={props.city} />
        <StatBox statName='Most expensive listing' city={props.city} />
        <StatBox statName='Cheapest listing' city={props.city} />
        <BarGraph /> 
    </section>
  )
}

export default MainContent