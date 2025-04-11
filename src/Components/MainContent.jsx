import React from 'react'
import StatBox from './StatBox'
import LineGraph from './LineGraph'

function MainContent() {
  return (
    <section id='home-main-content'>
        <StatBox statName='Total listings'/>
        <StatBox statName='Average rent'/>
        <StatBox statName='Most expensive listing'/>
        <StatBox statName='Cheapest listing'/>
        <LineGraph />
    </section>
  )
}

export default MainContent