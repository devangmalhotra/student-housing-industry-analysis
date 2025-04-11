import React from 'react'
import Navbar from './Components/Navbar';
import DashboardHeader from './Components/DashboardHeader';

function Home() {
    


  return (
    <div id='home-main'>
        <Navbar />
        <DashboardHeader />
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
    </div>
/*     <div id='home-main'>
        <div id='home-content'>
            <div id='title'>
                <h1>Student Housing Industry Analysis</h1>
            </div>
            <div id='content'>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="selectCity">Select a City</label>
                    <select name="selectCity" id="SelectCity" onChange={handleSelect}>
                        <option value="default" disabled selected>Select</option>
                        <option value="waterloo">Waterloo</option>
                        <option value="toronto">Toronto</option>
                        <option value="hamilton">Hamilton</option>
                    </select>
                    <button id='submit-button' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div> */
  )
}

export default Home