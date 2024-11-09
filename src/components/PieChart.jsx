import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar elementos
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ dataValues, labels }) => {
  if (!dataValues || !labels || dataValues.length !== labels.length) {
    return <p>Error: `dataValues` y `labels` deben tener la misma longitud.</p>;
  }

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#AA65FF', '#FFC065'],
      },
    ],
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
