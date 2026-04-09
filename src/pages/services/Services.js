import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import faultDetectionImage from '../../assests/solar1.webp';
import energyPredictionImage from '../../assests/solar2.webp';
import dataAnalysisImage from '../../assests/solar3.avif';
import predictiveMaintenanceImage from '../../assests/predictive-maintenance.jpg';
import { Link } from "react-router";



export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [activeImage, setActiveImage] = useState(0);
  const images = [predictiveMaintenanceImage, dataAnalysisImage, energyPredictionImage, faultDetectionImage];

  const services = [
    { title: "fault detection", link: "/fault-detection" },
    { title: "energy predection", link: "/energy-predection" },
    { title: "data analysis dashpoard", link: "/data-analysis-dashpoard" },
    { title: "image classification", link: "/classification" },
    { title: "predictive mentance", link: "/predictive-mentance" },
    
  ];

  return (
  return (
    <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-[#fff] py-[60px] px-[20px] text-center">
      <div className="max-w-[1200px] mx-auto">
        
    
        <motion.h2 
          className="text-[32px] font-bold text-[#00c6ff] mb-[20px] max-md:text-[28px] max-[480px]:text-[24px]" 
          data-aos="fade-up"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Find High & Best Use For All Resources
        </motion.h2>

        <p className="text-[18px] mb-[40px] text-[#ccc] max-md:text-[16px] max-[480px]:text-[14px]" data-aos="fade-up" data-aos-delay="200">
          Discover innovative solutions for energy efficiency and sustainability.
        </p>

  
        <div className="flex justify-between items-center flex-wrap max-md:flex-col max-md:items-center">
       
          <div className="w-[30%] max-md:w-full max-md:mb-[20px]">
            {services.slice(0, 3).map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-[rgba(255,255,255,0.1)] p-[15px] mb-[20px] rounded-[8px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                data-aos="fade-right" 
                data-aos-delay={index * 100}
              >
                <h3 className="text-[#00c6ff]">{service.title}</h3>
                <p className="text-[#ddd]">Explore innovative energy solutions.</p>
                <Link to={service.link} className="text-[#00c6ff] no-underline font-bold hover:underline">Learn More →</Link>
              </motion.div>
            ))}
          </div>

         
          <div data-aos="zoom-in">
            <motion.img 
              key={activeImage} 
              src={images[activeImage]} 
              alt="Solar Service"
              className="w-[300px] h-[300px] rounded-[10px] transition-all duration-[500ms] ease-in-out max-md:w-[250px] max-md:h-[250px] max-[480px]:w-[200px] max-[480px]:h-[200px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

        
          <div className="w-[30%] max-md:w-full max-md:mb-[20px]">
            {services.slice(3, 5).map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-[rgba(255,255,255,0.1)] p-[15px] mb-[20px] rounded-[8px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)]"

whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                data-aos="fade-left" 
                data-aos-delay={index * 100}
              >
                <h3 className="text-[#00c6ff]">{service.title}</h3>
                <p className="text-[#ddd]">Bringing efficiency to energy management.</p>
                <Link to={service.link} className="text-[#00c6ff] no-underline font-bold hover:underline">Learn More →</Link>
              </motion.div>
            ))}
          </div>
        </div>

     
        <motion.button 
          className="bg-[#00c6ff] border-none py-[12px] px-[24px] text-[18px] mt-[20px] text-white rounded-[6px] cursor-pointer transition-all duration-300 hover:bg-[#0086b3] max-md:text-[16px] max-md:py-[10px] max-md:px-[20px] max-[480px]:text-[14px] max-[480px]:py-[8px] max-[480px]:px-[16px]" 
          data-aos="fade-up" 
          data-aos-delay="300"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          CONTACT US
        </motion.button>

      </div>
    </section>
  );
}

