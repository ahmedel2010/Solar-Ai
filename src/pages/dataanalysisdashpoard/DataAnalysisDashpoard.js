import React, { useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, 
         CategoryScale, 
         LinearScale, 
         BarElement, 
         LineElement, 
         PointElement, 
         Title, 
         Tooltip, 
         Legend } from "chart.js";
import AOS from "aos";
import "aos/dist/aos.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement, 
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  
  const energyData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Energy Produced (kWh)",
        data: [320, 450, 410, 380, 500, 620, 580],
        backgroundColor: "rgba(46, 204, 113, 0.2)",
        borderColor: "#2ecc71",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  
  const consumptionData = {
    labels: ["Household", "Industry", "Commercial", "Agriculture"],
    datasets: [
      {
        label: "Energy Consumption (kWh)",
        data: [150, 300, 200, 180],
        backgroundColor: ["#3498db", "#e74c3c", "#f1c40f", "#8e44ad"],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] p-[50px] rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] w-[80%] my-[50px] mx-auto text-center">
      <h2 className="text-white text-[24px] mb-[30px]" data-aos="fade-down">Solar AI - Data Analysis Dashboard</h2>

      <div className="flex justify-between w-full gap-[20px]">
        
        <div className="bg-white p-[20px] rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.2)] w-[48%]" data-aos="fade-right">
          <h3 className="mb-[10px] text-[#2c3e50] text-[18px]">Energy Production Over the Week</h3>
          <Line data={energyData} />
        </div>

        
        <div className="bg-white p-[20px] rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.2)] w-[48%]" data-aos="fade-left">
          <h3 className="mb-[10px] text-[#2c3e50] text-[18px]">Energy Consumption Distribution</h3>
          <Bar data={consumptionData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
