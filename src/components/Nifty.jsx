import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import {
  LineChart,
  Line,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import api from '../api/baseUrl'; 

// 1. Helper function to clean data (Forward Fill)
const processData = (data) => {
  if (!data) return [];

  let lastValidValue = null;

  return data.map((item) => {
    let currentValue = item.open;

    // Check if the current value is a valid number
    const isValid = currentValue !== null && currentValue !== undefined && !isNaN(currentValue);

    if (isValid) {
      // If valid, use it and update our 'last known' tracker
      lastValidValue = parseFloat(currentValue);
    } else {
      // If null (holiday), use the value from the previous day
      currentValue = lastValidValue;
    }

    return {
      ...item,
      value: currentValue, // This ensures no gaps in the graph
    };
  });
};

const CustomLineChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="-ml-12 p-0">
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <YAxis
            // 2. CRITICAL FIX: Forces graph to zoom in on price action
            domain={['dataMin', 'dataMax']} 
            axisLine={false}
            tickLine={false}
            hide={true} 
          />
         
          <Line
            type="linear" 
            dataKey="value"
            stroke="#007fff"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 4 }}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const TradingViewWidget = () => {
  const [chartData, setChartData] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [stocks, setStocks] = useState([]);
  
  // Store full history to avoid re-fetching
  const [fullHistory, setFullHistory] = useState(null);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const res = await api.get("/historical");
        setFullHistory(res.data);
        
        // Load default (Bank Nifty) with null-check processing
        if (res.data?.bankNiftyHistory) {
          const cleanData = processData(res.data.bankNiftyHistory);
          setChartData(cleanData);
          setSelectedStock("NIFTY BANK");
        }
      } catch (err) {
        console.error("Error fetching history:", err);
      }
    };

    const fetchLiveData = async () => {
      try {
        const liveData = await api.get("/livedata");
        setStocks(liveData.data);
      } catch (err) {
        console.error("Error fetching live data:", err);
      }
    };

    fetchHistoricalData();
    fetchLiveData();

    // 3. Fixed Memory Leak: Use setInterval instead of recursive setTimeout
    const interval = setInterval(fetchLiveData, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleGraphChange = (shortName) => {
    if (!fullHistory) return;
    
    setSelectedStock(shortName);

    let rawData = [];
    if (shortName === "NIFTY 50") {
      rawData = fullHistory.niftyHistory;
    } else if (shortName === "NIFTY BANK") {
      rawData = fullHistory.bankNiftyHistory;
    } else if (shortName === "S&P BSE SENSEX") {
      rawData = fullHistory.sensexHistory;
    }

    // Process the data before setting state
    setChartData(processData(rawData));
  };

  return (
    <div className="bg-transparent">
      {selectedStock && (
        <div className="mb-4 bg-transparent border rounded-xl overflow-hidden">
          <h2 className="text-lg font-bold p-2 mb-2">{selectedStock}</h2>
          <CustomLineChart data={chartData} />
        </div>
      )}
      <div className="bg-transparent border rounded-xl overflow-hidden">
        {stocks.map((stock) => (
          <div
            key={stock.shortName}
            className="border-t border-gray-200 p-2 flex items-center cursor-pointer hover:bg-gray-50"
            onClick={() => handleGraphChange(stock.shortName)}
          >
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-4">
              {stock.symbol === "^BSESN" ? "BSE" : 
               stock.symbol === "^NSEI" ? "N" : 
               stock.symbol === "^NSEBANK" ? "B" : null}
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-sm lg:text-base">{stock.shortName}</h3>
              <p className="text-xs lg:text-sm text-gray-500">{stock.longName}</p>
            </div>
            {stock.regularMarketPrice && (
              <div className="text-right">
                <p className="font-bold">
                  {stock.regularMarketPrice.toFixed(2)}
                </p>
                <p className={`text-sm ${stock.regularMarketChange < 0 ? "text-red-500" : "text-green-500"}`}>
                  {stock.regularMarketChange.toFixed(2)} ({stock.regularMarketChangePercent.toFixed(2)}%)
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingViewWidget;