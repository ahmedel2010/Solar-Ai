import React, { useEffect } from "react";
import { FaTwitter, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <footer className="bg-black text-[#ffffff] py-[40px] px-[20px] relative">
      <div className="absolute top-[-80px] left-0 right-0 z-0 opacity-70">
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#002244" fillOpacity="1" d="M0,288L48,266.7C96,245,192,203,288,192C384,181,480,203,576,192C672,181,768,139,864,138.7C960,139,1056,181,1152,202.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="flex flex-wrap justify-between z-10 max-w-[1200px] mx-auto max-md:flex-col max-md:items-center max-[480px]:p-[20px] relative">
        <div className="flex-1 min-w-[200px] m-[20px] max-md:text-center max-md:my-[20px] max-md:mx-0">
          <h2 className="mb-[10px] max-[480px]:text-[1.8rem]">SOLAR TECH</h2>
          <p className="text-[0.9rem] max-[480px]:text-[0.8rem]">Innovating the future of solar energy.</p>
        </div>

        <div className="flex-1 min-w-[200px] m-[20px] max-md:text-center max-md:my-[20px] max-md:mx-0">
          <h3 className="mb-[10px] max-[480px]:text-[1.2rem]">GET STARTED</h3>
          <ul className="list-none p-0">
            <li className="my-[5px]">Start</li>
            <li className="my-[5px]">Documentation</li>
            <li className="my-[5px]">Installation</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px] m-[20px] max-md:text-center max-md:my-[20px] max-md:mx-0">
          <h3 className="mb-[10px] max-[480px]:text-[1.2rem]">COMPANY</h3>
          <ul className="list-none p-0">
            <li className="my-[5px]">Contact</li>
            <li className="my-[5px]">News</li>
            <li className="my-[5px]">Careers</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px] m-[20px] max-md:text-center max-md:my-[20px] max-md:mx-0">
          <h3 className="mb-[10px] max-[480px]:text-[1.2rem]">QUICK LINKS</h3>
          <ul className="list-none p-0">
            <li className="my-[5px]">Support Center</li>
            <li className="my-[5px]">Service Status</li>
            <li className="my-[5px]">Security</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px] m-[20px] max-md:text-center max-md:my-[20px] max-md:mx-0">
          <h3 className="mb-[10px] max-[480px]:text-[1.2rem]">LET'S CHAT</h3>
          <p className="text-[0.9rem] max-[480px]:text-[0.8rem]">Have a support question?</p>
          <button className="py-[10px] px-[15px] border-none rounded-[5px] bg-[#ff6347] text-white cursor-pointer transition-colors duration-300 hover:bg-[#ff4500] max-[480px]:w-full max-[480px]:py-[12px] max-[480px]:px-[20px]">GET IN TOUCH</button>
        </div>

        <div className="flex-1 mt-[20px]">
          <h3 className="mb-[10px] max-[480px]:text-[1.2rem]">Follow Us</h3>
          <div className="flex gap-[15px] mt-[10px] max-md:justify-center">
            <FaLinkedin className="text-[#ffffff] text-[1.5rem] transition-colors duration-300 hover:text-[#ff6347]" />
            <FaTwitter className="text-[#ffffff] text-[1.5rem] transition-colors duration-300 hover:text-[#ff6347]" />
            <FaYoutube className="text-[#ffffff] text-[1.5rem] transition-colors duration-300 hover:text-[#ff6347]" />
            <FaGithub className="text-[#ffffff] text-[1.5rem] transition-colors duration-300 hover:text-[#ff6347]" />
          </div>
        </div>
      </div>

      <div className="text-center mt-[20px] text-[0.8rem] max-[480px]:text-[0.7rem] relative z-10">
        <p className="text-[0.9rem] max-[480px]:text-[0.8rem]">© 2025 Solar Tech.All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;