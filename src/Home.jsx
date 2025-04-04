import React from 'react'
import Scrape from './Scrape'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import infoIcon from './assets/info-circle-svgrepo-com.svg';
import darkModeIcon from './assets/moon-svgrepo-com.svg';
import Navbar from './Navbar';

function Home() {
    const [selectedCity, setSelectedCity] = useState('waterloo');

    const handleSubmit = e => {
        e.preventDefault();
        //const scrapeCityData = new Scrape(selectedCity);
        //scrapeCityData.getCityFunction();
        getInfo();
    }

    const handleSelect = e => {
        setSelectedCity(e.target.value);
    }

    // Tells the server which city to scrape information for
    async function postInfo() {

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
        <div id='dashboard-header'>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="selectCity"><h4>{selectedCity.charAt(0).toUpperCase() + selectedCity.substring(1)} Dashboard</h4></label>
                <div id='select-and-submit-container'>
                    <select name="selectCity" id="SelectCity" onChange={handleSelect}>
                        <option value="waterloo" selected>Waterloo</option>
                        <option value="toronto">Toronto</option>
                        <option value="hamilton">Hamilton</option>
                    </select>
                    <button id='submit-button' type='submit'>Refresh</button>
                </div>
            </form>
        </div>
        <section id='home-main-content'>
            <div className='stat' id='avg-rent-stat-container'>
                
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