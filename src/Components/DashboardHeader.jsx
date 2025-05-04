import React, { useEffect } from 'react'
import { useState } from 'react';
import { IoMdRefresh } from "react-icons/io";
import MainContent from './MainContent';

function DashboardHeader(props) {
    const [selectedCity, setSelectedCity] = useState('waterloo');
    const [data, setData] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        updateAndGetInfo();
    };

    const handleSelect = e => {
        setSelectedCity(e.target.value);
        console.log(selectedCity);
    };

    async function getInfo() {
        const res = await fetch(`http://localhost:8000/lastupdatedresult?city=${selectedCity}`, 
            {method: 'GET'})

        const resJson = await res.json();
        setData(resJson);
        console.log(data);
    };

    // Updates and gets the scraped info
    async function updateAndGetInfo() {
        const res = await fetch(`http://localhost:8000/scrape?city=${selectedCity}`, 
            {method: 'GET'}
        )
        const resJson = await res.json();
        setData(resJson);
        console.log(data);
    };

    useEffect(() => {
        setData(getInfo())
    }, [selectedCity]); 
    

  return (
    <div>
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
        <MainContent city={selectedCity} totalListings={data.totallistings} averageRent={data.averagerent} mostExpensiveRent={data.mostexpensiverent} cheapestRent={data.cheapestrent}/>
    </div>
    
  )
}

export default DashboardHeader