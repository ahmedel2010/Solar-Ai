import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaSolarPanel, FaLeaf, FaBolt, FaCheck, FaTools, FaHeadset } from 'react-icons/fa'; 
import menImage from '../../assests/men.avif'; 

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const imageAnimation = useSpring({
    from: { height: "0px", opacity: 0 },
    to: { height: imageInView ? "500px" : "0px", opacity: imageInView ? 1 : 0 },
    config: { tension: 200, friction: 30 },
  });

  return (
  return (
    <div className="flex justify-between items-center p-[60px] bg-[#0f2027] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] max-[920px]:flex-col">
      <div className="flex-1 overflow-hidden rounded-[10px]" ref={imageRef}>
        <animated.img src={menImage} alt="Solar Panel Service" className="w-[80%] object-cover rounded-[10px] max-[920px]:w-full max-[920px]:flex max-[920px]:items-center max-[920px]:justify-center max-[920px]:text-center" style={imageAnimation} />
      </div>

      <div className="flex-1 p-[20px]">
        <h1 className="text-[2.5rem] text-[#00c6ff] text-center mb-[20px] max-[920px]:text-[2rem] max-[480px]:text-[1.8rem]" data-aos="fade-up">35 Years Of Experience In Solar Panels Service</h1>
        <p className="text-[1.2rem] text-[#ddeeff] mb-[30px] max-[920px]:text-[1rem] max-[480px]:text-[0.9rem]" data-aos="fade-up" data-aos-delay="200">
          We provide high-quality solar panel installation, maintenance, and energy solutions to help you save costs and protect the environment.
        </p>

        <div className="flex justify-between mb-[30px] gap-[20px] max-[920px]:flex-col max-[480px]:mt-[20px]">
          <div className="flex-1 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-[8px] p-[20px] text-center transition-transform duration-300 hover:-translate-y-[5px] max-[920px]:my-[10px] max-[480px]:p-[15px] max-[480px]:text-[0.9rem]" data-aos="zoom-in" data-aos-delay="400">
            <FaSolarPanel className="text-[2rem] text-[#fff] mb-[10px]" />
            <h2 style={{color:'#00aeef'}}>5000+</h2>
            <p className="text-[1rem] text-[#ddeeff] mt-[5px]">Installed Panels</p>
          </div>
          <div className="flex-1 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-[8px] p-[20px] text-center transition-transform duration-300 hover:-translate-y-[5px] max-[920px]:my-[10px] max-[480px]:p-[15px] max-[480px]:text-[0.9rem]" data-aos="zoom-in" data-aos-delay="600">
            <FaLeaf className="text-[2rem] text-[#fff] mb-[10px]" />
            <h2 style={{color:'#00aeef'}}>100% Eco-Friendly</h2>
            <p className="text-[1rem] text-[#ddeeff] mt-[5px]">Sustainable Solutions</p>
          </div>
          <div className="flex-1 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-[8px] p-[20px] text-center transition-transform duration-300 hover:-translate-y-[5px] max-[920px]:my-[10px] max-[480px]:p-[15px] max-[480px]:text-[0.9rem]" data-aos="zoom-in" data-aos-delay="800">
            <FaBolt className="text-[2rem] text-[#fff] mb-[10px]" />
            <h2 style={{color:'#00aeef'}}>24/7</h2>
            <p className="text-[1rem] text-[#ddeeff] mt-[5px]">Energy Support</p>
          </div>
        </div>

        <div className="rounded-[8px] p-[20px]" data-aos="fade-up" data-aos-delay="1000">
          <h3 className="text-[#00c6ff] text-[24px] mb-[15px] max-[480px]:text-[20px]">Why Choose Us?</h3>
          <ul className="list-none p-0">
            <li className="my-[5px] text-[#ddeeff]"><FaCheck className="mr-[8px] text-[#00aeef]" /> Certified and experienced professionals.</li>
            <li className="my-[5px] text-[#ddeeff]"><FaTools className="mr-[8px] text-[#00aeef]" /> Cutting-edge solar technology.</li>
            <li className="my-[5px] text-[#ddeeff]"><FaLeaf className="mr-[8px] text-[#00aeef]" /> Cost-effective and energy-efficient solutions.</li>
            <li className="my-[5px] text-[#ddeeff]"><FaHeadset className="mr-[8px] text-[#00aeef]" /> 24/7 customer support and maintenance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;