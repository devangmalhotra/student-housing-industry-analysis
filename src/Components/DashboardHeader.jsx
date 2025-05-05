import React, { useEffect } from 'react'
import { useState } from 'react';
import { IoMdRefresh } from "react-icons/io";
import MainContent from './MainContent';

function DashboardHeader(props) {
    const [selectedCity, setSelectedCity] = useState('waterloo');
    const [statData, setStatData] = useState({});
    const [chartData, setChartData] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        updateAndGetInfo();
    };

    const handleSelect = e => {
        setSelectedCity(e.target.value);
        console.log(selectedCity);
    };

    async function getInfo() {
        const res = await fetch(`https://student-housing-industry-analysis-backend.onrender.com/lastupdatedresult?city=${selectedCity}`, 
            {method: 'GET'})

        const resJson = await res.json();
        setStatData(resJson[0][0]);
        setChartData(resJson[1]);
        console.log(statData);
        console.log(chartData);
    };

    // Updates and gets the scraped info
    async function updateAndGetInfo() {
        const res = await fetch(`https://student-housing-industry-analysis-backend.onrender.com/scrape?city=${selectedCity}`, 
            {method: 'GET'}
        )
        const resJson = await res.json();
        setStatData(resJson[0][0]);
        setChartData(resJson[1]);
        console.log(statData);
        console.log(chartData);
    };

    useEffect(() => {
        setStatData(getInfo())
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
        <MainContent city={selectedCity} totalListings={statData.totallistings} averageRent={statData.averagerent} mostExpensiveRent={statData.mostexpensiverent} cheapestRent={statData.cheapestrent} chartData={chartData}/>
    </div>
    
  )
}

export default DashboardHeader