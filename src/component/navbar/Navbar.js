import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlertOctagon } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa"; 
import imgage from '../../assests/solari_logo.svg'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-[#0f2027] w-full m-0 px-[20px] py-[10px] box-border h-[60px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] rounded-none transition-all duration-300 ease-in-out relative">
      <div className="flex items-center gap-[10px]">
        
        <Link to="/">   <img src={imgage} style={{height:'100px',width:'140px'}} alt=""></img></Link>
      </div>

      
      <div className={`flex gap-[20px] transition-all duration-300 ease-out max-md:absolute max-md:top-[70px] max-md:left-0 max-md:w-full max-md:bg-[#0f2027] max-md:py-[10px] max-md:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] max-md:text-center max-md:z-[1000] max-md:flex-col ${isOpen ? "max-md:flex" : "max-md:hidden"}`}>
        <Link to="/" onClick={() => setIsOpen(false)} className="no-underline capitalize px-[15px] py-[5px] font-bold text-[16px] text-[#00aeef] relative transition-all duration-300 ease-out hover:text-[#2E7D32] md:animate-fadeIn max-md:bg-[darkslategray] max-md:text-white max-md:m-[10px] max-md:rounded-[10px] max-md:p-[10px]">Home</Link>
        <Link to="/services" onClick={() => setIsOpen(false)} className="no-underline capitalize px-[15px] py-[5px] font-bold text-[16px] text-[#00aeef] relative transition-all duration-300 ease-out hover:text-[#2E7D32] md:animate-fadeIn max-md:bg-[darkslategray] max-md:text-white max-md:m-[10px] max-md:rounded-[10px] max-md:p-[10px]" style={{ animationDelay: '0.1s' }}>Services</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="no-underline capitalize px-[15px] py-[5px] font-bold text-[16px] text-[#00aeef] relative transition-all duration-300 ease-out hover:text-[#2E7D32] md:animate-fadeIn max-md:bg-[darkslategray] max-md:text-white max-md:m-[10px] max-md:rounded-[10px] max-md:p-[10px]" style={{ animationDelay: '0.4s' }}>About</Link>
        <Link to="/guide" onClick={() => setIsOpen(false)} className="no-underline capitalize px-[15px] py-[5px] font-bold text-[16px] text-[#00aeef] relative transition-all duration-300 ease-out hover:text-[#2E7D32] md:animate-fadeIn max-md:bg-[darkslategray] max-md:text-white max-md:m-[10px] max-md:rounded-[10px] max-md:p-[10px]" style={{ animationDelay: '0.8s' }}>Guide</Link>
        <Link to="/soltain" onClick={() => setIsOpen(false)} className="no-underline capitalize px-[15px] py-[5px] font-bold text-[16px] text-[#00aeef] relative transition-all duration-300 ease-out hover:text-[#2E7D32] md:animate-fadeIn max-md:bg-[darkslategray] max-md:text-white max-md:m-[10px] max-md:rounded-[10px] max-md:p-[10px]" style={{ animationDelay: '0.12s' }}>Soltain</Link>
      </div>

      <div className="flex items-center gap-[8px] font-['Sigmar',_cursive]">
        <Link to="/contact">
          <button className="bg-[#00c6ff] border-none px-[20px] py-[10px] text-[18px] text-white rounded-[6px] cursor-pointer transition-all duration-300 hover:bg-[#1E3A8A] hover:scale-105">Contact Us</button>
        </Link>
 

 
      <div className="hidden max-md:block text-[24px] text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      </div>
    </nav>
  );
}

export default Navbar;