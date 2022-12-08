import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  pieSliceText: "label",
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'REVENUE',
    },
  },
};


export const data = {
  labels: ['R6', 'R7', 'R8', 'R1', 'R10', 'R4'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(118, 17, 17, .6)',
        'rgba(0, 0, 139, .6)',
        'rgba(199,21,133, .6)',
        'rgba(255, 159, 64, .6)',
        'rgba(54, 162, 235, .6)',
        'rgba(189,183,107, .6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(199,21,133, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(189,183,107, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


const RevenueChart = () => {
  return (
    <>
       <Pie options={options} data={data} />
    </>
  )
}

export default RevenueChart