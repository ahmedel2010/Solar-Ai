import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaComment } from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-[#00c6ff] min-h-screen flex flex-col items-center justify-center p-[50px]">
      
      <motion.h1
        className="text-[3rem] font-bold mb-[30px] text-center text-[#00c6ff] max-md:text-[2rem] max-[480px]:text-[1.5rem]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>

      
      <div className="flex justify-center gap-[30px] mb-[30px] max-md:flex-col max-md:items-center max-md:gap-[20px] max-[480px]:gap-[15px]">
        <motion.div className="flex items-center gap-[10px] bg-[rgba(255,255,255,0.1)] py-[15px] px-[20px] rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:scale-105" data-aos="fade-up">
          <FaPhoneAlt className="text-[1.5rem] text-[#00c6ff]" />
          <p>01025563979</p>
        </motion.div>
        <motion.div className="flex items-center gap-[10px] bg-[rgba(255,255,255,0.1)] py-[15px] px-[20px] rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:scale-105" data-aos="fade-up">
          <FaEnvelope className="text-[1.5rem] text-[#00c6ff]" />
          <p>ahmed2065f@gmail.com</p>
        </motion.div>
        <motion.div className="flex items-center gap-[10px] bg-[rgba(255,255,255,0.1)] py-[15px] px-[20px] rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:scale-105" data-aos="fade-up">
          <FaMapMarkerAlt className="text-[1.5rem] text-[#00c6ff]" />
          <p>kafrelsheikh </p>
        </motion.div>
      </div>

      
      <div className="flex max-w-[900px] w-full bg-[rgba(255,255,255,0.1)] p-[50px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] justify-between overflow-hidden relative rounded-[10px] max-md:flex-col max-md:p-[30px] max-md:max-w-full max-[480px]:p-[20px] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[rgba(255,255,255,0.05)] before:to-transparent before:-skew-y-3 before:-z-10">
        <motion.form className="contact-form w-full md:w-[45%]" data-aos="fade-left">
          <div className="relative mb-[15px]">
            <FaUser className="absolute top-[50%] left-[10px] -translate-y-1/2 text-white" />
            <input className="w-full p-[12px] pl-[45px] my-[10px] border-none rounded-[5px] bg-[rgba(255,255,255,0.2)] text-white text-[1rem] transition-all duration-300 ease-in-out focus:bg-[rgba(255,255,255,0.3)] focus:outline-none max-[480px]:text-[0.9rem]" type="text" placeholder="Your Name" required />
          </div>
          <div className="relative mb-[15px]">
            <FaEnvelope className="absolute top-[50%] left-[10px] -translate-y-1/2 text-white" />
            <input className="w-full p-[12px] pl-[45px] my-[10px] border-none rounded-[5px] bg-[rgba(255,255,255,0.2)] text-white text-[1rem] transition-all duration-300 ease-in-out focus:bg-[rgba(255,255,255,0.3)] focus:outline-none max-[480px]:text-[0.9rem]" type="email" placeholder="Your Email" required />
          </div>
          <div className="relative mb-[15px]">
            <FaPhoneAlt className="absolute top-[50%] left-[10px] -translate-y-1/2 text-white" />
            <input className="w-full p-[12px] pl-[45px] my-[10px] border-none rounded-[5px] bg-[rgba(255,255,255,0.2)] text-white text-[1rem] transition-all duration-300 ease-in-out focus:bg-[rgba(255,255,255,0.3)] focus:outline-none max-[480px]:text-[0.9rem]" type="tel" placeholder="Your Phone" required />
          </div>
          <div className="relative mb-[15px]">
            <FaComment className="absolute top-[50%] left-[10px] -translate-y-1/2 text-white" />
            <textarea className="w-full p-[12px] pl-[45px] my-[10px] border-none rounded-[5px] bg-[rgba(255,255,255,0.2)] text-white text-[1rem] transition-all duration-300 ease-in-out focus:bg-[rgba(255,255,255,0.3)] focus:outline-none max-[480px]:text-[0.9rem]" placeholder="Your Message" required></textarea>
          </div>
          <motion.button
            className="bg-[#00c6ff] text-[#fff] text-[1rem] p-[10px] border-none cursor-pointer shadow-[0_0_10px_#00c6ff] w-[60%] transition-all duration-300 ease-in-out rounded-[5px] mb-[10px] hover:bg-[#00a4e0] max-md:w-full max-[480px]:text-[0.9rem] max-[480px]:p-[8px]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            Submit
          </motion.button>
        </motion.form>

        
        <motion.div className="w-full md:w-[50%]" data-aos="fade-right">
          <iframe
            className="w-full h-[300px] rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] max-[480px]:h-[250px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111003.58784345229!2d30.86524316104445!3d31.108985160867086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d6f5d81b37dd%3A0xc665126f5d946571!2sKafr%20El-Shaikh%2C%20Kafr%20El-Sheikh%20Governorate!5e0!3m2!1sen!2seg!4v1703620311244!5m2!1sen!2seg"
            allowFullScreen=""
            loading="lazy"
            title="Kafr El-Sheikh Map"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
