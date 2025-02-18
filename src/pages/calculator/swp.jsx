import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const SWPCalculator = () => {
  const [investment, setInvestment] = useState("10000"); // Store as string to preserve leading zeros
  const [withdrawal, setWithdrawal] = useState("500"); // Store as string to preserve leading zeros
  const [returnRate, setReturnRate] = useState(1); // Expected return rate
  const [timePeriod, setTimePeriod] = useState(1); // Time period in years
  const [totalInvestment, setTotalInvestment] = useState(10000); // Default total investment
  const [totalWithdrawn, setTotalWithdrawn] = useState(0); // Default total amount withdrawn
  const [finalValue, setFinalValue] = useState(10000); // Default final value (initial investment)
  const [balanceHistory, setBalanceHistory] = useState([]); // History of remaining balance
  const [withdrawalHistory, setWithdrawalHistory] = useState([]); // History of cumulative withdrawal

  // Function to calculate SWP values
  const calculateSWP = () => {
    const P = parseFloat(investment); // Convert to number for calculations
    const W = parseFloat(withdrawal); // Convert to number for calculations
    const monthlyRate = returnRate / 100 / 12; // Monthly return rate
    const months = timePeriod * 12; // Total months for withdrawal

    let remainingBalance = P; // Start with the total investment
    let totalWithdrawals = 0;
    let balanceHistory = [remainingBalance]; // Track remaining balance over time
    let withdrawalHistory = [0]; // Track cumulative withdrawals over time

    for (let i = 0; i < months; i++) {
      remainingBalance += remainingBalance * monthlyRate; // Add monthly return
      if (remainingBalance >= W) {
        remainingBalance -= W; // Deduct monthly withdrawal
        totalWithdrawals += W; // Keep track of total withdrawals
      } else {
        totalWithdrawals += remainingBalance; // Withdraw whatever is left
        remainingBalance = 0;
        break; // No more balance to withdraw
      }
      balanceHistory.push(remainingBalance); // Record remaining balance for each month
      withdrawalHistory.push(totalWithdrawals); // Record cumulative withdrawals
    }

    setTotalInvestment(P.toFixed(2));
    setTotalWithdrawn(totalWithdrawals.toFixed(2));
    setFinalValue(remainingBalance.toFixed(2));
    setBalanceHistory(balanceHistory);
    setWithdrawalHistory(withdrawalHistory);
  };

  // Data for the line chart
  const lineData = {
    labels: Array.from({ length: balanceHistory.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Remaining Balance (₹)",
        data: balanceHistory,
        borderColor: "#16bbac",
        backgroundColor: "#16bbac", // Fill color
        fill: true, // Enable fill under the line
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0, // Remove points
      },
      {
        label: "Cumulative Withdrawn (₹)",
        data: withdrawalHistory,
        borderColor: "#007aff",
        backgroundColor: "#007aff", // Fill color
        fill: true, // Enable fill under the line
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0, // Remove points
      },
      {
        label: "Total Investment (₹)",
        data: Array(balanceHistory.length).fill(totalInvestment),
        borderColor: "#ff8c00",
        backgroundColor: "#ff8c00", // Fill color
        fill: true, // Enable fill under the line
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0, // Remove points
      },
    ],
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

  // Trigger calculation when inputs change
  useEffect(() => {
    calculateSWP();
  }, [investment, withdrawal, returnRate, timePeriod]);

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
          <h1 className="text-2xl font-bold text-center mb-6">SWP Calculator</h1>

          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              {/* Total Investment */}
              <div className="mb-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <label className="block text-gray-700 font-bold mb-2">
                    Total Investment (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={investment}
                    onChange={(e) => handleInputChange(e, setInvestment)}
                    className="w-full md:w-52 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <input
                  type="range"
                  min="5000"
                  max="10000000"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </div>

              {/* Monthly Withdrawal */}
              <div className="mb-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <label className="block text-gray-700 font-bold mb-2">
                    Withdrawal Per Month (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={withdrawal}
                    onChange={(e) => handleInputChange(e, setWithdrawal)}
                    className="w-full md:w-52 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <input
                  type="range"
                  min="100"
                  max="100000"
                  value={withdrawal}
                  onChange={(e) => setWithdrawal(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </div>

              {/* Expected Return Rate */}
              <div className="mb-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <label className="block text-gray-700 font-bold mb-2">
                    Expected Return Rate (% per year)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={returnRate}
                    onChange={(e) => handleInputChange(e, setReturnRate)}
                    className="w-full md:w-52 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </div>

              {/* Time Period */}
              <div className="mb-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <label className="block text-gray-700 font-bold mb-2">
                    Time Period (Years)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={timePeriod}
                    onChange={(e) => handleInputChange(e, setTimePeriod)}
                    className="w-full md:w-52 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="w-full h-full p-5 bg-[#eef6fc] flex flex-col gap-y-10 justify-between items-center">
          <div className="w-full h-full  grid place-items-center">
            {/* Line Chart Display */}
            {balanceHistory.length ? (
              <div className="w-full">
                <h2 className="text-2xl font-bold text-center mb-4">
                  SWP Breakdown
                </h2>
                <Line className="linechat border" data={lineData}  options={chartOptions}/>
              </div>
            ) : (
              <p className="capitalize font-semibold text-secclr text-lg">
                Adjust values to show results
              </p>
            )}
          </div>
          {/* Result Display */}
          <div className="w-full px-5">
            {balanceHistory.length ? (
              <div className="mt-6 text-xs md:text-sm p-4 py-6 bg-[#dcecf9] text-secclr font-semibold text-center rounded-lg">
                <div className="flex justify-between items-center">
                  <p>Total Investment</p>
                  <span className="font-semibold">₹ {totalInvestment}</span>
                </div>
                <div className="flex justify-between font-black text-sm md:text-base items-center">
                  <p>Total Withdrawn</p>
                  <span className="">₹ {totalWithdrawn}</span>
                </div>
                <div className="flex justify-between font-black text-sm md:text-base items-center">
                  <p>Final Value</p>
                  <span className="">₹ {finalValue}</span>
                </div>
              </div>
            ) : (
              <div className="mt-6 p-4 py-6 bg-[#dcecf9] text-secclr font-semibold text-center rounded-lg">
                <p>Adjust values to show results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SWPCalculator;
