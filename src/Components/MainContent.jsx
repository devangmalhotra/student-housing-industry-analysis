import React from 'react'

function MainContent() {
  return (
    <section id='home-main-content'>
        <div className='stat-container'>
            <h4>-----</h4>
            <p>Total listings</p>
        </div>
        <div className='stat-container'>
            <h4>$-----</h4>
            <p>Average rent</p>
        </div>
        <div className='stat-container'>
            <h4>$-----</h4>
            <p>Most expensive listing</p>
        </div>
        <div className='stat-container'>
            <h4>$-----</h4>
            <p>Cheapest listing</p>
        </div>
    </section>
  )
}

export default MainContent