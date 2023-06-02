import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(
  ArcElement,
  Legend,
  Tooltip,
  Legend
);


export const options = {

  responsive: true,

  maintainAspectRatio: false,
  plugins: {

    title: {
      display: false,
      text: 'Total QRcode',
      fontSize: 15,
      fontStyle: 'bold'
    },
    legend: {
      position: 'bottom',
      align: 'center',
      labels: {
        generateLabels: (chart) => {
          const data = chart.data.datasets[0].data;
          const labels = chart.data.labels;

          return labels.map((label, index) => {
            const value = data[index].toFixed(2);
            return {
              text: `${label}: ${value}%`,
              fillStyle: chart.data.datasets[0].backgroundColor[index],
              hidden: false,
              index: index
            }
          })
        },
        padding: 20,
        usePointStyle: true,
        font: {
          family: 'Poppins',
          size: 16,
          weight: 'bold'
        }
      }
    },
    tooltip: {
      enabled: true,
      yAlign: 'bottom',
      backgroundColor: "grey",
      displayColors: false,
      padding: 10,
      caretPadding: 10,
      bodyFont: {
        family: 'Inter',
        size: 16,
      },
      callbacks: {
        label: (tooltipItem) => {
          const dataset = tooltipItem.dataset;
          const value = dataset.data[tooltipItem.dataIndex].toFixed(2);
          return `${value}%`;
        }
      },
    },
  }

}



function PieChart({ state }) {
  const sortedData = state.datasets[0].data.slice().sort((a, b) => b - a);
  const sortedState = {
    ...state,
    datasets: [
      {
        ...state.datasets[0],
        data: sortedData,
      }
    ]
  };


  return (

    <div style={{ height: " 400px" }}>
      <Pie data={sortedState} options={options} />
    </div>
  )
}

export default PieChart