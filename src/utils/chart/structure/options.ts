// Types
import type { ChartOptions } from 'chart.js';

export const options: ChartOptions = {

  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'x',
  animations: {
    // tension: {
    //   duration: 2000,
    //   easing: 'easeInQuad',
    //   from: .5,
    //   to: 1,
    //   loop: true
    // }
  },
  scales: {
    y: {
      ticks: {
        color: "#0d6efd",
        font: {
          weight: "500",
          family: 'Rubik',
          size: 11

        }
      },
      grid: {
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
      }
    },
    x: {
      ticks: {
        color: "#0d6efd",
        font: {
          weight: "500",
          family: 'Rubik',
          size: 11
        }
      },
      grid: {
        display: true,
        drawOnChartArea: true,
        drawTicks: true
      }
    },
  },


  plugins: {
    legend: {
      display: true,
      labels: {
        color: "#0d6efd",
        font: {
          weight: "600",
          family: "Rubik"
        }
      }
    },
    subtitle: {
      display: false,
      text: 'Custom Chart Subtitle'
    }
  }
}

export default options;
