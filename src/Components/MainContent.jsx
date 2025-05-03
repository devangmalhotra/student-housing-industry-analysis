import React from 'react'
import StatBox from './StatBox'
import BarGraph from './BarGraph'
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';

function MainContent(props) {
  return (
    <section id='home-main-content'>
        <StatBox statName='Total listings' city={props.city} val={props.totalListings}/>
        <StatBox statName='Average rent' city={props.city} val={`$${props.averageRent}`}/>
        <StatBox statName='Most expensive listing' city={props.city} val={`$${props.mostExpensiveRent}`}/>
        <StatBox statName='Cheapest listing' city={props.city} data={props.data} val={`$${props.cheapestRent}`}/>
        <BarGraph /> 
    </section>
  )
}

export default MainContent