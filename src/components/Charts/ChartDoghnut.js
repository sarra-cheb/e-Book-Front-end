import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export const options = {
  responsive: true,
  maintainAspectRatio: false,
  // animation: {
  //   duration: 4000,
  //   easing: 'easeInOutQuart',
  // },
  plugins: {
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
          const value = dataset.data[tooltipItem.dataIndex];
          return `${value}`;
        }
      },
    },
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
            const value = data[index];
            return {
              text: `${label}: ${value}`,
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

  }
};

function DoghnutChart({ state }) {

  return (
    <div style={{ height: " 400px" }}>
      <Doughnut data={state} options={options} />
    </div>
  )
}

export default DoghnutChart