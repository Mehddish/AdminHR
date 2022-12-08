import React from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    interaction: {
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis',
      },
    },
    scales: {
      y: {
        type: 'linear' ,
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'R7',
        data: [100, 300, 350, 300, 600, 820],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'R6',
        data: [100, 100, 200, 300, 440, 700],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'R8',
        data: [10, 200, 200, 350, 480, 500],
        borderColor: 'rgb(0, 255, 235)',
        backgroundColor: 'rgba(0, 255, 235, 0.5)',
        yAxisID: 'y2',
      },
      {
        label: 'R10',
        data: [10, 20, 30, 40, 100, 200],
        borderColor: 'rgb(0, 0, 235)',
        backgroundColor: 'rgba(0, 0, 235, 0.5)',
        yAxisID: 'y3',
      },
    ],
  };
  

const LineChart = () => {
  return (
    <div>
        <Line options={options} data={data} />
    </div>
  )
}

export default LineChart