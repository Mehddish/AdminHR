import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  import { Bar } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'SALARY STATISTICS',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: [3200, 1200, 450, 2890, 3400, 5600, 4444],
        backgroundColor: 'rgba(0, 0, 128, 0.5)',
      },
      {
        label: 'Expense',
        data: [4900, 80, 450, 5000, 3400, 200, 1000],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

const SalaryChart = () => {
  return (
    <>
        <Bar options={options} data={data} />
    </>
  )
}

export default SalaryChart