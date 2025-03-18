import React from 'react'
import Scrape from './Scrape'
import { useState } from 'react'

function Home() {
    const [selectedCity, setSelectedCity] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const scrapeCityData = new Scrape(selectedCity);
        scrapeCityData.getCityFunction();
    }

    const handleSelect = e => {
        setSelectedCity(e.target.value);
    }


  return (
    <div id='home-main'>
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
    </div>
  )
}

export default Home