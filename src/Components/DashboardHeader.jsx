import React, { useEffect } from 'react'
import { useState } from 'react';
import { IoMdRefresh } from "react-icons/io";
import MainContent from './MainContent';

function DashboardHeader(props) {
    const [selectedCity, setSelectedCity] = useState('waterloo');
    const [data, setData] = useState({
        'totalListings': 0, 
        'averageRent': 0,
        'mostExpensiveRent': 0, 
        'cheapestRent': 0, 
    });

    const handleSubmit = e => {
        e.preventDefault();
        updateAndGetInfo();
    };

    const handleSelect = e => {
        setSelectedCity(e.target.value);
        console.log(selectedCity);
        getInfo();
    };

    async function getInfo() {
        const res = await fetch(`http://localhost:8000/lastupdatedresult?city=${selectedCity}`, 
            {method: 'GET'})

        console.log(res);
        const resJson = await res.json();
        eval(`setData(resJson.${selectedCity}Payload)`);
        eval(`console.log(resJson.${selectedCity}Payload)`);
        return eval(`resJson.${selectedCity}Payload`);
    };

    // Updates and gets the scraped info
    async function updateAndGetInfo() {
        const res = await fetch(`http://localhost:8000/scrape?city=${selectedCity}`, 
            {method: 'GET'}
        )

        console.log(res);
        const resJson = await res.json();
        console.log(resJson);
        //eval(`setData(resJson.${selectedCity}Payload)`);
        //eval(`console.log(resJson.${selectedCity}Payload)`);
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
        <MainContent city={selectedCity} totalListings={data.totalListings} averageRent={data.averageRent} mostExpensiveRent={data.mostExpensiveRent} cheapestRent={data.cheapestRent}/>
    </div>
    
  )
}

export default DashboardHeader