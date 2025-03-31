import React from 'react'
import Scrape from './Scrape'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import infoIcon from './assets/info-circle-svgrepo-com.svg';
import darkModeIcon from './assets/moon-svgrepo-com.svg';

function Home() {
    const [selectedCity, setSelectedCity] = useState('');

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
        <header>
            <Link to='/'><h3>Student Housing Industry Analysis</h3></Link>
            <div id='header-icons'>
                <img className='header-icon' src={darkModeIcon} alt="Switch modes" />
                <img className='header-icon' src={infoIcon} alt="About" />
            </div>
        </header>
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