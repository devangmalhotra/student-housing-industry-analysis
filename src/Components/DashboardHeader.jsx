import React from 'react'
import { useState } from 'react';
import { IoMdRefresh } from "react-icons/io";

function DashboardHeader() {
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
  )
}

export default DashboardHeader