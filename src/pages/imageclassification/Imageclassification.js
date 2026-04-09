import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
export default function ImageClassificationPage() {
  const [step, setStep] = useState('upload'); 
  const [uploadedImage, setUploadedImage] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setUploadedImage(url);
    setStep('preview');

    
    setTimeout(() => {
      const results = {
        diagnosis: 'A fine crack was detected in the upper right cell with hotspots.',
        tips: '• Turn off the system and clean the surface.\n• Replace the damaged panel if the spots persist.\n• Monitor the panel temperature regularly.',
        probabilities: {
          'Crack': 0.85,
          'Hotspot': 0.10,
          'Normal': 0.05,
        },
      };

      setClassificationResult(results);
      setStep('result');
    }, 2500);
  };

  const handleDownload = () => {
    Swal.fire({
      title: 'Downloading...',
      text: 'Your result is being downloaded.',
      icon: 'info',
      timer: 2000,
      timerProgressBar: true,
      willOpen: () => {
        Swal.showLoading();
      },
    });
  };

  return (
    <div className="bg-[#2B5161] min-h-screen p-[2rem] text-[#ffffff] font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
      <motion.h1
        className="text-center text-[2.8rem] mb-[2rem] tracking-[1px] max-md:text-[2rem] max-[480px]:text-[1.5rem]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Solar AI: Panel Fault Classification and Detection
      </motion.h1>

      <motion.div
        className="bg-[rgba(255,255,255,0.1)] rounded-[16px] p-[1.8rem] mx-auto my-[1.5rem] max-w-[650px] relative overflow-hidden max-md:p-[1.5rem] max-md:my-[1rem] max-[480px]:p-[1rem] max-[480px]:my-[0.5rem]"
        data-aos="fade-up"
        whileHover={{ scale: 1.02 }}
      >
        <label htmlFor="fileInput" className="cursor-pointer">
          Choose an image or drag it here
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
        />
      </motion.div>

      {step === 'preview' && (
        <div className="flex flex-col items-center my-[2rem]">
          <div className="border-[8px] border-[rgba(255,255,255,0.1)] border-t-[#ffffff] border-t-[8px] rounded-full w-[50px] h-[50px] animate-[spin_1s_linear_infinite] max-md:w-[40px] max-md:h-[40px] max-[480px]:w-[30px] max-[480px]:h-[30px]"></div>
          <p>Processing the image...</p>
        </div>
      )}

      {step === 'result' && classificationResult && (
        <>
          <motion.div
            className="bg-[rgba(255,255,255,0.1)] rounded-[16px] p-[1.8rem] mx-auto my-[1.5rem] max-w-[650px] relative overflow-hidden max-md:p-[1.5rem] max-md:my-[1rem] max-[480px]:p-[1rem] max-[480px]:my-[0.5rem]"
            data-aos="fade-up"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-[1.5rem] font-bold mb-[1rem]">Original Image</h2>
            <img src={uploadedImage} alt="Original" className="w-full rounded-[8px]" />
          </motion.div>

          <motion.div
            className="bg-[rgba(255,255,255,0.1)] rounded-[16px] p-[1.8rem] mx-auto my-[1.5rem] max-w-[650px] relative overflow-hidden max-md:p-[1.5rem] max-md:my-[1rem] max-[480px]:p-[1rem] max-[480px]:my-[0.5rem]"
            data-aos="fade-up"
            data-aos-delay="200"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-[1.5rem] font-bold mb-[1rem]">Analysis Result</h2>
            <div className="mt-[1rem]">
              <h3 className="font-bold text-[1.2rem] mt-[1rem]">Defect Description:</h3>
              <p>{classificationResult.diagnosis}</p>

              <h3 className="font-bold text-[1.2rem] mt-[1rem]">Repair Tips:</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{classificationResult.tips}</p>

              <h3 className="font-bold text-[1.2rem] mt-[1rem]">Probabilities:</h3>
              <ul>
                {Object.entries(classificationResult.probabilities).map(([key, value]) => (
                  <li key={key}>{key}: {(value * 100).toFixed(2)}%</li>
                ))}
              </ul>

              <div className="flex items-center my-[1rem] max-[480px]:flex-col max-[480px]:items-start">
                <span>Rate the accuracy of the analysis:</span>
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    className={`bg-none border-none text-[1.5rem] cursor-pointer max-md:text-[1.25rem] ${rating >= num ? 'text-[#ffa500]' : 'text-[#ffd700]'}`}
                    onClick={() => setRating(num)}
                  >
                    ★
                  </button>
                ))}
              </div>

              <button className="bg-[#4CAF50] text-white py-[10px] px-[20px] border-none rounded-[5px] cursor-pointer text-[1rem] hover:bg-[#45a049] max-md:py-[8px] max-md:px-[16px] max-md:text-[0.9rem] max-[480px]:w-full max-[480px]:p-[10px] max-[480px]:text-[1rem]" onClick={handleDownload}>
                Download Result
              </button>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}