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
  const chartLabels = props.data.map(i => i.city);
  const chartData = props.data.map(i => i.averagerent);
  console.log(chartLabels);
  console.log(chartData);

  const barChartData = {
    labels: chartLabels, 
    datasets: [
        {
            label: 'avgPrice', 
            data: chartData, 
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
