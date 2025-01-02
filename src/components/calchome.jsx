import React, { useState } from "react";
import {calbg} from '../assets'

const calchome = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(500);
    const [growthRate, setGrowthRate] = useState(1);
    const [duration, setDuration] = useState(1);
    const [stepUp, setStepUp] = useState(1);
    const [result, setResult] = useState(1);
    const [totalInvestment, setTotalInvestment] = useState(0);
  
    // Function to calculate SIP with step-up
    const calculateSIP = () => {
      const r = growthRate / 100 / 12; // Monthly growth rate
      let totalValue = 0;
      let investment = monthlyInvestment;
      let totalInvestedAmount = 0;
  
      for (let year = 1; year <= duration; year++) {
        for (let month = 1; month <= 12; month++) {
          totalValue +=
            investment *
            Math.pow(1 + r, duration * 12 - ((year - 1) * 12 + month));
          totalInvestedAmount += investment;
        }
        // Apply step-up percentage after each year
        investment += (investment * stepUp) / 100;
      }
  
      setResult(totalValue.toFixed(2));
      setTotalInvestment(totalInvestedAmount.toFixed(2));
    };

  return (
    <>
    <section className="w-11/12 xl:w-8/12 mx-auto py-10 xl:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-5 xl:p-10 border bg-white shadow-2xl rounded-2xl text-sm">
          <div className="flex flex-col gap-2">
            {/* Monthly Investment Amount */}
            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <label className="block text-gray-700 font-bold mb-2">
                  Monthly Investment Amount (₹)
                </label>
                <input
                  type="number"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  className="w-full md:w-28 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <input
                type="range"
                min="500"
                max="1000000"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full mt-3 "
              />
            </div>

            {/* Expected Growth Rate */}
            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <label className="block text-gray-700 font-bold mb-2">
                  Expected Growth Rate (% per year)
                </label>
                <input
                  type="number"
                  value={growthRate}
                  onChange={(e) => setGrowthRate(Number(e.target.value))}
                  className="w-full md:w-28 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 [&::-webkit-inner-spin-button]:appearance-none"
                  />
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={growthRate}
                onChange={(e) => setGrowthRate(Number(e.target.value))}
                className="w-full mt-3"
              />
            </div>

            {/* Investment Duration */}
            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <label className="block text-gray-700 font-bold mb-2">
                  Investment Duration (Years)
                </label>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full md:w-28 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full mt-3"
              />
            </div>

            {/* Step Up Percentage */}
            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <label className="block text-gray-700 font-bold mb-2">
                  Step-Up Percentage (% per year)
                </label>
                <input
                  type="number"
                  value={stepUp}
                  onChange={(e) => setStepUp(Number(e.target.value))}
                  className="w-full md:w-28 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 [&::-webkit-inner-spin-button]:appearance-none"
                  />
              </div>
              <input
                type="range"
                min="0"
                max="50"
                value={stepUp}
                onChange={(e) => setStepUp(Number(e.target.value))}
                className="w-full mt-3"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <div className="w-fit mx-auto">
            <button
                onClick={calculateSIP}
                className="w-fit bg-secclr  hover:bg-[#8ca2ff] text-white font-bold py-3 px-5 rounded-3xl  transition duration-300"
            >
                Calculate SIP
            </button>
          </div>
         
        </div>
        {/* <div className="w-full h-full flex justify-center items-center px-5">
           
           {result && (
             <div className="w-full p-4 py-6 bg-[#dcecf9] text-secclr font-semibold text-center rounded-lg">
             Future Value of SIP: ₹
             <span className="font-black">{result}</span>
             </div>
             )}
            </div> */}
          <div className="grid place-items-center w-full h-full relative overflow-hidden ">
            <div className="absolute calculsss z-20 top-[18%] md:top-[25%] lg:top-[20%] xl:top-[20%] left-[29%] w-36  xl:w-52 overflow-x-scroll">
                {result && (
                <div className="w-full text-secclr font-semibold ">
                    <span className="font-black text-nowrap ">₹ {result}</span>
                </div>
                )}
            </div>
            <img className="aspect-square object-cover scale-125" src={calbg} alt="" />
          </div>
      </div>

     
    </section>
    <div className="w-11/12 mx-auto pt-20 flex flex-col gap-7 text-center">
        <p className="text-3xl xl:text-7xl font-black capitalize text-secclr ">Investing doesn't have to be complicated.<br/> Start small, <span className="text-prmclr">grow big.</span></p>

        <a href='https://api.whatsapp.com/send?phone=917907302020' target="_blank" className="bg-secclr hover:bg-prmclr duration-200 text-white capitalize w-fit mx-auto px-10 py-3 font-semibold rounded-full">invest now</a>
    </div>
    </>
  );
};

export default calchome;
