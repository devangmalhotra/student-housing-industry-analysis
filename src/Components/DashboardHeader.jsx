import React from 'react'
import { useState } from 'react';
import { IoMdRefresh } from "react-icons/io";

function DashboardHeader(props) {
    const [childState, setChildState] = React.useState("");

  return (
    <div id='dashboard-header'>
        <form action="" onSubmit={props.onSubmit}>
            <label htmlFor="selectCity"><h4>{props.selectedCity.charAt(0).toUpperCase() + props.selectedCity.substring(1)} Dashboard</h4></label>
            <div id='select-and-submit-container'>
                <select name="selectCity" id="SelectCity" onChange={props.handleSelect}>
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