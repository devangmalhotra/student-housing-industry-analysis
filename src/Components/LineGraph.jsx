import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement,
  Title, 
  Tooltip, 
  Legend,
 } from 'chart.js';

function LineGraph(props) {
  const lineChartData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], 
    datasets: {
      label: 'Steps', 
      data: [3000, 5000, 4500, 5000, 5000], 
      borderColor: 'rgb(5, 192, 192)', 
    }
  };

  return (
    <div>LineGraph</div>
   
  )
}

LineGraph.propTypes = {}

export default LineGraph
