import React from 'react'
import StatBox from './StatBox'

function MainContent() {
  return (
    <section id='home-main-content'>
        <StatBox statName='Total listings'/>
        <StatBox statName='Average rent'/>
        <StatBox statName='Most expensive listing'/>
        <StatBox statName='Cheapest listing'/>
    </section>
  )
}

export default MainContent