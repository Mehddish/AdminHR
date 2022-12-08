import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
       labels:{
        color: "black"
       }
      },
      title: {
        display: true,
        text: 'TREND',
        color: "white"
        
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: [200, 2000, 3500, 1000, 550, 2800, 4000],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

const TrendChart = () => {
  return (
    <div>
        <Line options={options} data={data} />
    </div>
  )
}

export default TrendChart