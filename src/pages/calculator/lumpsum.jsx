import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

const LumpsumCalculator = () => {
  const [investment, setInvestment] = useState(500); // Initial investment
  const [returnRate, setReturnRate] = useState(1); // Expected return rate
  const [timePeriod, setTimePeriod] = useState(5); // Time period in years
  const [futureValue, setFutureValue] = useState(0); // Future value
  const [totalInvestment, setTotalInvestment] = useState(0); // Invested amount
  const [estimatedReturns, setEstimatedReturns] = useState(0); // Estimated returns
  const [chartData, setChartData] = useState({}); // Data for line chart

  // Function to calculate lumpsum future value
  const calculateLumpsum = () => {
    const P = investment;
    const r = returnRate / 100;
    const t = timePeriod;

    // Future Value formula for lumpsum
    const A = P * Math.pow(1 + r, t);
    const returns = A - P; // Estimated returns

    setFutureValue(A.toFixed(2));
    setTotalInvestment(P.toFixed(2));
    setEstimatedReturns(returns.toFixed(2));

    // Generate chart data for each year
    const labels = Array.from({ length: t }, (_, i) => i + 1);
    const futureValueData = labels.map((year) =>
      (P * Math.pow(1 + r, year)).toFixed(2)
    );
    const investmentData = Array(t).fill(P.toFixed(2));
    const returnsData = futureValueData.map(
      (fv, idx) => (fv - investmentData[idx]).toFixed(2)
    );

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Total Investment",
          data: investmentData,
          borderColor: "#16bbac",
          backgroundColor: "#16bbac",
          fill: true, // Enable fill under the line
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0, 
        },
        {
          label: "Estimated Returns",
          data: returnsData,
          borderColor: "#007aff",
          backgroundColor: "#007aff",
          fill: true, // Enable fill under the line
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0, 
        },
        {
          label: "Future Value",
          data: futureValueData,
          borderColor: "#ff8c00",
          backgroundColor: "#ff8c00",
          fill: true, // Enable fill under the line
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0, 
        },
      ],
    });
  };

  // Automatically calculate Lumpsum on input change
  useEffect(() => {
    calculateLumpsum();
  }, [investment, returnRate, timePeriod]);

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
            Lumpsum Calculator
          </h1>

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
                    onChange={(e) => setInvestment(Number(e.target.value))}
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
                    onChange={(e) => setReturnRate(Number(e.target.value))}
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
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
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
        <div className="w-full h-full p-5 bg-[#eef6fc] flex flex-col gap-y-5 justify-between items-center">
          <div className="w-full h-full  grid place-items-center">
            {/* Line Chart Display */}
            {futureValue ? (
              <div className="w-full">
                <h2 className="text-2xl font-bold text-center mb-4">
                  Investment Breakdown
                </h2>
                <Line className="linechat border" data={chartData} options={chartOptions}/>
              </div>
            ) : (
              <p className="capitalize font-semibold text-secclr text-lg">
                Adjust the inputs to see results
              </p>
            )}
          </div>

          {/* Result Display */}
          <div className="w-full px-5">
            {futureValue ? (
              <div className="mt-6 text-xs md:text-sm p-4 py-6 bg-[#dcecf9] text-secclr font-semibold text-center rounded-lg">
                <div className="flex items-center justify-between">
                  <p>Invested Amount</p>
                  <span className="font-black">₹ {totalInvestment}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p>Estimated Returns</p>
                  <span className="font-black">₹ {estimatedReturns}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p>Total Value</p>
                  <span className="font-black">₹ {futureValue}</span>
                </div>
              </div>
            ) : (
              <div className="mt-6 p-4 py-6 bg-[#dcecf9] text-secclr font-semibold text-center rounded-lg">
                <p>Adjust the inputs to see results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LumpsumCalculator;
