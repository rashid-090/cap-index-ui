import React, { useState } from "react";
import Sipcalculator from "../pages/calculator/sip";
import Lumpsumcalculator from "../pages/calculator/lumpsum";
import SWPcalculator from "../pages/calculator/swp";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [animatingTab, setAnimatingTab] = useState(activeTab);

  const handleTabChange = (tabNumber) => {
    setAnimatingTab(tabNumber);
    setTimeout(() => setActiveTab(tabNumber), 300); // Delay to allow animation to finish
  };

  return (
    <div className="w-11/12 2xl:w-10/12 mx-auto">
     
      {/* Tabs */}
      <div className="flex gap-2 text-base text-secclr font-bold items-center ">
        <button
          className={`py-2 text-center ${
            activeTab === 1
              ? "bg-[#eef6fc] px-5 rounded-full"
              : "text-gray-400 px-5"
          }`}
          onClick={() => handleTabChange(1)}
        >
          SIP
        </button>
        <button
          className={`py-2 text-center ${
            activeTab === 2
              ? "bg-[#eef6fc] px-5 rounded-full"
              : "text-gray-400 px-5"
          }`}
          onClick={() => handleTabChange(2)}
        >
          Lumpsum
        </button>
        <button
          className={`py-2 text-center ${
            activeTab === 3
              ? "bg-[#eef6fc] px-5 rounded-full"
              : "text-gray-400 px-5"
          }`}
          onClick={() => handleTabChange(3)}
        >
          SWP
        </button>
      </div>

      {/* Tab Content */}
      <div className="relative h-full w-full">
        <div
          className={`pt-5 pb-10 w-full transition-opacity duration-300  ${
            animatingTab === 1 ? "opacity-100 " : "opacity-0 "
          } ${activeTab === 1 ? "" : "hidden"}`}
        >
          <Sipcalculator />
        </div>
        <div
          className={`pt-5 pb-10 w-full transition-opacity duration-300  ${
            animatingTab === 2 ? "opacity-100 " : "opacity-0 "
          } ${activeTab === 2 ? "" : "hidden"}`}
        >
          <Lumpsumcalculator/>
        </div>
        <div
          className={`pt-5 pb-10 w-full transition-opacity duration-300  ${
            animatingTab === 3 ? "opacity-100 " : "opacity-0 "
          } ${activeTab === 3 ? "" : "hidden"}`}
        >
          <SWPcalculator/>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
