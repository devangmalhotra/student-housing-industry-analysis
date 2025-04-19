import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  BarElement,
  Title, 
  Tooltip, 
  Legend,
 } from 'chart.js';

 ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    BarElement,
    Title, 
    Tooltip, 
    Legend,
 )

 ChartJS.defaults.color = '#FFF'
 

function BarGraph(props) {
  const barChartData = {
    labels: [
        "Waterloo",
        "Toronto", 
        "Hamilton"
    ], 
    datasets: [
        {
            label: 'avgPrice', 
            data: [0, 0, 0], 
            borderColor: 'rgb(5, 192, 192)', 
            backgroundColor: '#fff'
        }
    ]
  }; 

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Average Prices by City',
      },
    },
  };

  return (
    <Bar data={barChartData} options={options} />
   
  )
}

BarGraph.propTypes = {}

export default BarGraph
