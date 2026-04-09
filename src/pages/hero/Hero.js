import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import solarImage from "../../assests/men.avif";

export default function DrivingChange() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] p-[60px] max-[920px]:p-0">
      <div className="container mx-auto">
    
        <motion.div 
          className="text-center" 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-[2.5rem] font-bold text-[#00c6ff] max-[920px]:text-[2rem]" data-aos="fade-up">Driving Change with Renewable Energy</h1>
          <p className="text-[1.2rem] text-[#ddeeff] mt-[10px] max-[920px]:text-[1rem] max-[920px]:text-center" data-aos="fade-up" data-aos-delay="200">
            Empowering a sustainable future through innovative renewable energy solutions. 
            Together, we can make a difference—transforming the way we power our world with clean, green, 
            and efficient energy solutions.
          </p>
        </motion.div>

        <div className="flex items-center gap-[80px] h-[600px] max-[920px]:flex-col max-[920px]:h-auto max-[920px]:items-center max-[920px]:gap-[20px]">
          <motion.div 
            className="w-full h-0 overflow-hidden transition-[height] duration-300 ease-out" 
            ref={imageRef}
            animate={{ height: isVisible ? 400 : 0 }} 
            transition={{ duration: 0.5}}
          >
            <img src={solarImage} className="w-[90%] object-cover rounded-[14px] max-[920px]:w-full max-[920px]:mt-[50px]" alt="Solar Worker" />
          </motion.div>

          
          <div className="grid grid-cols-2 gap-[20px] mt-[40px]">
            <motion.div className="p-[20px] rounded-[8px] text-left" data-aos="fade-right">
              <h3 className="text-[#007bff] text-[1.3rem]">Energy Dependence</h3>
              <p className="text-[#ddeeff] text-[1rem]">Reducing reliance on non-renewable resources to create a more sustainable energy future.</p>
            </motion.div>

            <motion.div className="p-[20px] rounded-[8px] text-left" data-aos="fade-left">
              <h3 className="text-[#007bff] text-[1.3rem]">Eco Impact</h3>
              <p className="text-[#ddeeff] text-[1rem]">Minimizing environmental impact by leveraging sustainable and eco-friendly energy solutions.</p>
            </motion.div>

            <motion.div className="p-[20px] rounded-[8px] text-left" data-aos="fade-right">
              <h3 className="text-[#007bff] text-[1.3rem]">Clean Energy</h3>
              <p className="text-[#ddeeff] text-[1rem]">Capturing the power of renewable resources to create sustainable and eco-friendly energy solutions.</p>
            </motion.div>

            <motion.div className="p-[20px] rounded-[8px] text-left" data-aos="fade-left">
              <h3 className="text-[#007bff] text-[1.3rem]">Preserve Nature</h3>
              <p className="text-[#ddeeff] text-[1rem]">Protecting natural ecosystems through sustainable practices and responsible energy solutions.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
