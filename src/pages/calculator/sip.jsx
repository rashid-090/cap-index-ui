import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  const [growthRate, setGrowthRate] = useState(1);
  const [duration, setDuration] = useState(1);
  const [stepUp, setStepUp] = useState(0);
  const [result, setResult] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [sipData, setSipData] = useState([]); // Data for SIP Value
  const [investedData, setInvestedData] = useState([]); // Data for total investment
  const [returnsData, setReturnsData] = useState([]); // Data for returns

  // Function to calculate SIP with step-up and store data for chart
  const calculateSIP = () => {
    // Ensure the growth rate is not zero and calculate monthly rate
    const r = growthRate / 100 / 12; // Monthly growth rate
    let totalValue = 0;
    let investment = parseFloat(monthlyInvestment); // Ensure it's treated as a number
    let totalInvestedAmount = 0;
    const sipValues = []; // Store values for each month (future SIP value)
    const investedValues = []; // Store invested values for each month
    const returnsValues = []; // Store returns values for each month

    // Check if investment is a valid number
    if (isNaN(investment) || investment <= 0) {
      console.error("Invalid monthly investment value");
      return;
    }

    for (let year = 1; year <= duration; year++) {
      for (let month = 1; month <= 12; month++) {
        totalValue +=
          investment *
          Math.pow(1 + r, duration * 12 - ((year - 1) * 12 + month));

        // Accumulate the total invested amount over time
        totalInvestedAmount += investment;

        // Store the SIP values (future SIP value), investment value, and returns for each month
        sipValues.push(totalValue.toFixed(2));
        investedValues.push(totalInvestedAmount.toFixed(2));
        returnsValues.push((totalValue - totalInvestedAmount).toFixed(2));
      }

      // Apply step-up percentage after each year
      investment += (investment * stepUp) / 100;
    }

    // Ensure totalInvestedAmount is a valid number before calling toFixed
    const validTotalInvestedAmount = isNaN(totalInvestedAmount)
      ? 0
      : totalInvestedAmount;

    setResult(totalValue.toFixed(2));
    setTotalInvestment(validTotalInvestedAmount.toFixed(2)); // Ensure it's properly formatted to two decimals
    setSipData(sipValues); // Update the SIP data for the chart
    setInvestedData(investedValues); // Update the total investment data for the chart
    setReturnsData(returnsValues); // Update the returns data for the chart
  };

  // Function to handle input changes and prevent 0 in the first position
  const handleInputChange = (e, setterFunction) => {
    const value = e.target.value;

    // Prevent entering 0 in the first position
    if (value && value[0] === "0") {
      setterFunction(value.slice(1)); // Remove the first 0 if it's there
    } else {
      setterFunction(value);
    }
  };

  // Data for the line chart
  const lineData = {
    labels: Array.from({ length: duration * 12 }, (_, i) => i + 1), // Monthly labels
    datasets: [
      {
        label: "Future SIP Value",
        data: sipData,
        borderColor: "#16bbac",
        backgroundColor: "#16bbac",
        fill: true, // Enable fill under the line
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Total Investment",
        data: investedData,
        borderColor: "#007aff",
        backgroundColor: "#007aff",
        fill: true, // Enable fill under the line
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Estimated Returns",
        data: returnsData,
        borderColor: "#ff8c00",
        backgroundColor: "#ff8c00",
        fill: true, // Enable fill under the line
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  // Automatically calculate SIP on input change
  useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, growthRate, duration, stepUp]);

  const chartOptions = {
    scales: {
      x: {
        display: false, // Hide X axis
      },
      y: {
        display: false, // Hide Y axis
      },
    },
    plugins: {
      legend: {
        display: true, // Show the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips for hover effect
      },
    },
  };

  return (
    <section className="w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 h-fit shadow-xl xl:rounded-2xl overflow-hidden">
        <div className="p-5 h-fit bg-gray-50 text-sm">
          <h1 className="text-2xl font-bold text-center mb-6">
            SIP Calculator
          </h1>

          <div className="flex flex-col gap-1">
            {/* Monthly Investment Amount */}
            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <label className="block text-gray-700 font-bold mb-2">
                  Monthly Investment Amount (₹)
                </label>
                <input
                  min="0"
                  type="number"
                  value={monthlyInvestment}
                  onChange={(e) => handleInputChange(e, setMonthlyInvestment)}
                  className="w-full md:w-52 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <input
                type="range"
                min="500"
                max="1000000"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full mt-3"
              />
            </div>

            {/* Expected Growth Rate */}
            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <label className="block text-gray-700 font-bold mb-2">
                  Expected Growth Rate (% per year)
                </label>
                <input
                  min="0"
                  type="number"
                  value={growthRate}
                  onChange={(e) => handleInputChange(e, setGrowthRate)}
                  className="w-full md:w-52 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 [&::-webkit-inner-spin-button]:appearance-none"
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
                  min="0"
                  value={duration}
                  onChange={(e) => handleInputChange(e, setDuration)}
                  className="w-full md:w-52 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 [&::-webkit-inner-spin-button]:appearance-none"
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
                  min="0"
                  value={stepUp}
                  onChange={(e) => handleInputChange(e, setStepUp)}
                  className="w-full md:w-52 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 [&::-webkit-inner-spin-button]:appearance-none"
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
        </div>

        {/* Line Chart and Result Display */}
        <div className="w-full p-5 h-full bg-[#eef6fc] flex flex-col gap-y-5 justify-between">
          <div className="w-full h-full  grid place-items-center">
            {/* Line Chart Display */}
            {result ? (
              <div className="">
                <h2 className="text-2xl font-bold text-center mb-4">
                  Investment Breakdown
                </h2>
                <Line
                  className="linechat border"
                  data={lineData}
                  options={chartOptions}
                />
              </div>
            ) : (
              <p className="capitalize font-semibold text-secclr text-lg">
                Adjust the inputs to see results
              </p>
            )}
          </div>
          <div className="w-full px-5">
            {/* Result Display */}
            {result ? (
              <div className="mt-6 text-xs md:text-sm p-4 py-6 bg-[#dcecf9] text-secclr font-semibold text-center rounded-lg">
                <div className="flex items-center justify-between">
                  <p>Total Investment</p>
                  <span className="font-semibold">₹ {totalInvestment}</span>
                </div>
                <div className="flex items-center font-black text-sm md:text-base justify-between">
                  <p>Estimated Returns</p>
                  <span className="">
                    ₹ {(result - totalInvestment).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center font-black text-sm md:text-base justify-between">
                  <p>Future Value of SIP</p>
                  <span className="">₹ {result}</span>
                </div>
              </div>
            ) : (
              <div className="mt-6 p-4 py-6 bg-[#dcecf9] text-secclr font-semibold text-center rounded-lg">
                <p className="capitalize font-semibold text-secclr text-sm">
                  Adjust the inputs to see results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SipCalculator;
