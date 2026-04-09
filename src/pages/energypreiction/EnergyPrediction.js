import React, { useState, useEffect } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
function EnergyPrediction() {
  const [fileName, setFileName] = useState("");
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setPrediction(Math.floor(Math.random() * 500) + 100); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] p-[50px] rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] w-[450px] max-w-[90%] my-[50px] mx-auto text-center">
      <h2 className="text-white text-[22px] mb-[20px]" data-aos="fade-up">Upload Data for Energy Prediction</h2>
      
      <label htmlFor="energy-upload" className="w-full h-[160px] bg-white p-[20px] text-center border-2 border-dashed border-[#3498db] rounded-[10px] transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center justify-center relative hover:bg-[rgba(52,152,219,0.1)]" data-aos="zoom-in">
        <input id="energy-upload" type="file" accept=".csv, .xlsx" onChange={handleFileUpload} style={{ display: "none" }} />
        {fileName ? (
          <p className="text-[18px] font-bold text-[#2c3e50]">{fileName}</p>
        ) : (
          <>
            <FaCloudUploadAlt className="text-[50px] text-[#3498db] mb-[10px]" />
            <p>Drag & drop a CSV/Excel file or click to upload</p>
          </>
        )}
      </label>

      {fileName && (
        <button className="mt-[20px] py-[12px] px-[25px] bg-[#2ecc71] text-white border-none rounded-[8px] cursor-pointer text-[16px] transition-colors duration-300 ease-in-out shadow-[0_5px_15px_rgba(46,204,113,0.4)] hover:bg-[#27ae60]" data-aos="fade-up">Analyze Data</button>
      )}

      {prediction && (
        <div className="mt-[20px] p-[15px] bg-[rgba(255,255,255,0.1)] rounded-[10px] w-full text-white text-center text-[20px] shadow-[0_5px_15px_rgba(255,255,255,0.2)] transition-transform duration-300 ease-in-out hover:scale-105" data-aos="flip-left">
          <h3>Predicted Energy Output:</h3>
          <p>{prediction} kWh</p>
        </div>
      )}
    </div>
  );
}

export default EnergyPrediction;

