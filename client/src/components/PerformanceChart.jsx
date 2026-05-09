import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PerformanceChart = ({ user }) => {

  const data = {

    labels: [
      "Easy",
      "Medium",
      "Hard",
    ],

    datasets: [
      {
        data: [
          user.easySolved,
          user.mediumSolved,
          user.hardSolved,
        ],

        backgroundColor: [
          "#22c55e",
          "#eab308",
          "#ef4444",
        ],

        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">

      <h2 className="text-2xl font-bold mb-6 text-white">
        Problem Analytics
      </h2>

      <div className="w-[300px] mx-auto">

        <Doughnut data={data} />

      </div>

    </div>
  );
};

export default PerformanceChart;