'use client';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    datasets: [
      {
        label: 'Sales $',
        data: [181127, 222301, 191490, 179238, 241842, 1784112, 223475],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(53, 162, 235, 0.4)'
      }
    ]
  });

  const [chartOptions, setChartOptions] = useState({
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Daily Revenue'
      }
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  });

  return (
    <div className='w-full lg:w-4/5'>
      <div className='h-full w-full bg-white p-4 rounded-sm border border-gray-200'>
        <Bar
          data={chartData}
          options={chartOptions}
        />
      </div>
    </div>
  );
};

export default BarChart;
