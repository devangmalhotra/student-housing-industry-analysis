import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar';
import { IoMdRefresh } from "react-icons/io";

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
                    <button id='submit-button' type='submit'>Refresh <IoMdRefresh size={10}/></button>
                </div>
            </form>
        </div>
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