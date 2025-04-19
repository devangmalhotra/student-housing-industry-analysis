import React from 'react'
import Navbar from './Components/Navbar';
import DashboardHeader from './Components/DashboardHeader';
import MainContent from './Components/MainContent';
import LineGraph from './Components/BarGraph';

function Home() {
  return (
    <div id='home-main'>
        <Navbar />
        <DashboardHeader />
        <MainContent />
    </div>
  )
}

export default Home