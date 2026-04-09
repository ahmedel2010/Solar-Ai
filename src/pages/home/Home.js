import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronUp } from "react-icons/fa"; 

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(() => {
    return localStorage.getItem("modalOpen") === "true";
  });

  useEffect(() => {
    const ele = document.getElementById('scrollToTopBtn');
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      ele.style.display = scrollTop > 800 ? 'block' : 'none';
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    localStorage.setItem("modalOpen", isModalOpen);
  }, [isModalOpen]);

  const handleLearnMoreClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalAnimation = useSpring({
    opacity: isModalOpen ? 1 : 0,
    transform: isModalOpen ? "scale(1)" : "scale(0.8)",
    config: { tension: 200, friction: 20 },
  });

  const overlayAnimation = useSpring({
    opacity: isModalOpen ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  return (
  return (
    <div className="relative min-h-[100vh] flex flex-col overflow-hidden text-white bg-[#203a4344]">
      
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover -z-10">
        <source src={require('../../assests/back.mp4')} type="video/mp4" />
      </video>

      
      <div className="relative flex flex-col items-center justify-center text-center h-[100vh] bg-[rgba(0,0,0,0.6)] w-full" data-aos="fade-up">
        <h1 className="text-[48px] font-bold text-[#fff] [text-shadow:2px_2px_10px_rgba(0,0,0,0.6)] max-md:text-[36px]">
          Harness the <span className="text-[#00c6ff] text-[50px] max-md:text-[40px]">Power of</span> the Sun
        </h1>
        <p className="text-[18px] text-[#ddd] max-w-[600px] mt-[10px] leading-[1.6] max-md:text-[16px]">
          Solar panels are a renewable source of energy that can reduce your electricity bills, minimize your carbon footprint, and help you save money in the long term.
        </p>
        <button className="mt-[20px] py-[12px] px-[24px] text-[18px] font-bold text-white bg-gradient-to-tr from-[#00c6ff] to-[#0072ff] border-none rounded-[6px] cursor-pointer shadow-[0_0_10px_#00c6ff] transition-all duration-300 ease-in-out hover:scale-110 hover:from-[#0072ff] hover:to-[#00c6ff] max-md:text-[16px] max-md:py-[10px] max-md:px-[20px]" onClick={handleLearnMoreClick}>
          Learn More
        </button>
      </div>

      
      {isModalOpen && (
        <animated.div className="fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-[1000]" style={overlayAnimation}>
          <animated.div className="bg-white p-[30px] rounded-[10px] text-center w-[90%] max-w-[500px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] max-md:w-[70%]" style={modalAnimation}>
            <div>
              <h2 className="text-[24px] text-[#333] mb-[10px]">Why Choose Solar Panels?</h2>
              <p className="text-[16px] text-[#666] leading-[1.6] mb-[20px]">Solar panels are a renewable source of energy that can reduce your electricity bills, minimize your carbon footprint, and help you save money in the long term.</p>
              <button className="py-[10px] px-[20px] text-[16px] font-bold bg-[#ff4c4c] text-white border-none shadow-[0_0_10px_red] rounded-[5px] cursor-pointer transition-all duration-300 hover:bg-[#d43f3f] hover:scale-105" onClick={closeModal}>Close</button>
            </div>
          </animated.div>
        </animated.div>
      )}
      
      
      <div className="hidden fixed bottom-[30px] right-[30px] bg-[firebrick] text-white border-none rounded-full p-[15px] shadow-[0_4px_10px_rgba(0,0,0,0.2)] cursor-pointer transition-all duration-300 z-[1000] hover:bg-[red] hover:scale-110" id="scrollToTopBtn" onClick={handleTop}>
        <FaChevronUp className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
}

export default Home;