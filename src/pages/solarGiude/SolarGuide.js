import React, { useState } from "react";
import { motion } from "framer-motion";
const faqData = [
  {
    question: "How does solar energy work?",
    answer:
      "Solar energy is harnessed through photovoltaic (PV) cells, typically made of silicon. When sunlight strikes these cells, it excites electrons and generates a direct current (DC). This DC electricity is then converted to alternating current (AC) by an inverter, making it usable for homes and businesses. The electricity produced can power appliances or be fed back into the grid, and excess energy can be stored in batteries for later use.",
  },
  {
    question: "How much does a solar energy system cost?",
    answer:
      "The cost of a solar energy system varies based on factors such as system size, location, type of panels, and installation complexity. As of late 2023, the average cost for a residential solar panel installation in the U.S. ranges from $15,000 to $30,000 before tax credits and incentives, which can significantly reduce the overall cost.",
  },
  {
    question: "What maintenance is required for solar panels?",
    answer:
      "As of late 2023, the cost of a solar energy system for residential installations in the United States typically ranges from $15,000 to $30,000 before any tax credits or incentives. The final price can vary based on several factors, including:",
  },
  {
    question: "What is net metering, and how does it work?",
    answer:
      "Net metering is a billing arrangement that allows residential and commercial customers who generate their own electricity (typically through renewable energy sources like solar panels) to receive credit for the excess electricity they produce and feed back into the grid. Here’s how it works:",
  },
  {
    question: "What are the benefits of installing solar panels?",
    answer:
      "Reduced Electricity Bills: Solar panels can significantly lower your electricity costs by generating your own power, which reduces reliance on the grid.",
  },
  {
    question: "How long do solar panels last?",
    answer:
      "Solar panels typically have a lifespan of 25 to 30 years or more. Most manufacturers provide warranties that guarantee performance for at least 25 years; however, many panels continue to produce electricity beyond this period at reduced efficiency levels (often around 80% of their original capacity). Regular maintenance and proper installation can help maximize their lifespan and efficiency over time.",
  },
  {
    question: "Can I completely go off-grid with solar energy?",
    answer:
      "Going off-grid requires a battery storage system to store excess energy for nighttime use.Yes, it is possible to go completely off-grid with solar energy, and many people successfully do so. Here are the key components and considerations for setting up an off-grid solar system:",
  },
  {
    question: "Do I need a solar battery storage system?",
    answer:
      "Battery storage is optional but useful for backup power and off-grid setups. solar energy is feasible with careful planning and consideration of your specific needs and circumstances. While battery storage is optional, it significantly enhances reliability by providing backup power when needed",
  },
];

const SolarGuide = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      className="w-[90%] max-md:w-[80%] max-w-[1200px] mx-auto my-[60px] p-[40px] bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-[34px] font-bold mb-[10px] text-[#00c6ff] max-md:text-[24px]">Your Guide to Solar Solutions</div>
      <p className="text-[16px] mb-[20px] opacity-80 text-center max-md:text-[14px]">
        Explore everything you need to know about solar energy, from installation to savings.
      </p>

      <div className="text-left">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className={`bg-[rgba(255,255,255,0.1)] p-[15px] mb-[10px] rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.2)] ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleAccordion(index)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-[18px] font-bold max-md:text-[16px]">{item.question}</div>
            <motion.div
              className="text-[14px] pt-[10px] overflow-hidden max-md:text-[12px]"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              {item.answer}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SolarGuide;