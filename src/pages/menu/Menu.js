import React from "react";
import { FaPerson } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";


import workersImage from "../../assests/fault-detection.jpg"; 
import houseImage from "../../assests/energy-prediction.jpg"; 

export default function SolarSolutions() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-[50px] bg-[#203a4344]">
      <div className="w-[90%] max-w-[1200px] mx-auto">
    
        <div className="flex items-center justify-between gap-[50px] max-[920px]:flex-col max-[920px]:text-center">
          <motion.div 
            className="max-w-[500px] max-[920px]:max-w-full" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
          >
            <h1 className="text-[2.5rem] text-[#00c6ff]" data-aos="fade-up">Sun-Powered Solutions for Every Home</h1>
            <p className="text-[1.1rem] text-[#ddeeff] mt-[10px] text-center leading-[1.6] tracking-[0.5px] my-[15px] px-[20px] py-[10px] rounded-[5px] shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-[2px]" data-aos="fade-up" data-aos-delay="200">
            Sun-Powered Solutions for Every Home" sounds like a fantastic initiative! Using solar energy for home solutions is not only sustainable but can also reduce utility costs. Solar power offers a range of solutions that can be applied to various home needs. Here are a few examples:

            Solar Panels – The most common application of solar energy. Solar panels can generate electricity, which can power everything from lights to appliances.
        
            Solar Water Heaters – These systems use the sun’s energy to heat water for household use, reducing dependence on gas or electric water heaters.
        
            Solar Lighting – Outdoor solar lights for gardens, pathways, or driveways that use solar energy to illuminate without relying on grid electricity.
        
            Solar Roof Tiles – For homeowners looking for a more aesthetically pleasing option, solar roof tiles can generate energy while blending seamlessly into the roof.
        
            Solar-Powered Ventilation Systems – Solar attic fans or ventilation systems that help regulate temperature and air quality without using conventional electricity.
        
            </p>
         
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            <img src={workersImage} alt="Solar Workers" className="w-full max-w-[500px] rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.2)]" data-aos="zoom-in" />
          </motion.div>
        </div>

        
        <div className="flex items-center justify-between gap-[50px] mt-[50px] max-[920px]:flex-col max-[920px]:text-center">
          <motion.div 
            className="max-[920px]:max-w-full" 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
          >
            <h2 className="text-[2rem] text-[#00c6ff]" data-aos="fade-up">Our Specialty</h2>
            <ul className="list-none p-0">
              <li className="text-[1.2rem] text-[#fff] my-[10px]" data-aos="fade-right">1- Sustainable Freedom</li>
              <li className="text-[1.2rem] text-[#fff] my-[10px]" data-aos="fade-left">2- Reduce Power Bills</li>
              <li className="text-[1.2rem] text-[#fff] my-[10px]" data-aos="fade-right">3- Property Value</li>
              <li className="text-[1.2rem] text-[#fff] my-[10px]" data-aos="fade-left">4- Green Energy</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            <img src={houseImage} alt="Solar House" className="w-full max-w-[500px] rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.2)]" data-aos="zoom-in" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
