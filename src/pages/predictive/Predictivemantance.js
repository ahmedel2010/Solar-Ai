import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function PredictiveMaintenance() {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null); 

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      alert("File uploaded successfully!");
    }
  };

  const handleClickUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv, .xlsx';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setFile(file);
        alert("File uploaded successfully!");
      }
    };
    input.click();
  };

  return (
    <div className="text-center pt-[120px] bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white min-h-[100vh]">
      <h2 className="text-[26px] mb-[20px] uppercase" data-aos="fade-down">Upload Data for Predictive Maintenance</h2>
      <div
        className={`w-[60%] my-[20px] mx-auto p-[50px] border-2 border-dashed rounded-[10px] transition-all duration-300 ease-in-out text-center text-[18px] ${dragging ? "bg-[rgba(255,255,255,0.2)] border-[#00c3ff] scale-105" : "bg-[rgba(255,255,255,0.1)] border-white"}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        data-aos="zoom-in"
        onClick={handleClickUpload}
      >
        <i className="text-[40px] block mb-[10px]">⬆️</i>
        <p>Drag & drop a CSV/Excel file or click to upload</p>
      </div>
      {file && (
        <div className="file-info">
          <p>Uploaded File: {file.name}</p>
        </div>
      )}
      <button className="py-[12px] px-[30px] bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white font-bold border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out text-[18px] hover:from-[#c0392b] hover:to-[#e74c3c] hover:-translate-y-[3px]" data-aos="fade-up">
        Analyze Data
      </button>
    </div>
  );
}

export default PredictiveMaintenance;