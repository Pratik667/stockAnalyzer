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
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GraphChart = (mydata) => {
  // Example data
  const data = {
    labels: [...mydata.timestamp],
    datasets: [
      {
        label: 'Stocks Graph',
        data: [...mydata.value],
        fill: 2,
        borderColor: 'rgb(50, 100, 10)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div id="chart-component">     
      <Line data={data} />
    </div>
    
  );
};

export default GraphChart;
