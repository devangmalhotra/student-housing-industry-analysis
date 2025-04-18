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

function LineGraph(props) {
  const lineChartData = {
    labels: [
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday",
    ], 
    datasets: [
        {
            label: 'Steps', 
            data: [3000, 5000, 4500, 5000, 5000], 
            borderColor: 'rgb(5, 192, 192)', 
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
        text: 'Chart.js Line Chart',
      },
    },
  };

  return (
    <Bar data={lineChartData} options={options} />
   
  )
}

LineGraph.propTypes = {}

export default LineGraph
