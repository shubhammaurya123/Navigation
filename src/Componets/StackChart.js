import React from "react";
import '../App.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
    
    },
    
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      
    },
    y: {
      stacked: true,
    },

  },
  xAxes: [{
    gridLines: {
        color: "rgba(0, 0, 0, 0)",
    }
}],
yAxes: [{
    gridLines: {
        color: "rgba(0, 0, 0, 0)",
    }   
}]
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Spinning",
      data: [10, 31, 45, 21, 34, 54],
      backgroundColor: "#57CC78",
    },
    {
      label: "Transportation",
      data: [2, 54, 6, 6],
      backgroundColor: "#55DBDB",
    },
    {
      label: "Carding",
      data: [2, 6, 9, 19, 45, 67, 78],
      backgroundColor: "#E2FF32",
    },
    {
      label: "Heating & Cooling",
      data: [2, 6, 9, 19, 56, 65],
      backgroundColor: "#FEC102",
    },
  ],
};

export function StackChart() {
  return (
    <div className="barchart">
      <Bar options={options} data={data} />
    </div>
  );
}
