import axios from "axios";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import api from '../api/baseUrl';

const CustomLineChart = ({ data }) => {
  const formatYAxis = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value;
  };

  const { minValue, maxValue } = useMemo(() => {
    const values = data.map((item) => item.value);
    return {
      minValue: Math.min(...values),
      maxValue: Math.max(...values),
    };
  }, [data]);

  const yAxisDomain = useMemo(() => {
    const padding = (maxValue - minValue) * 0.1;
    return [Math.floor(minValue - padding), Math.ceil(maxValue + padding)];
  }, [minValue, maxValue]);

  return (
    <div className="-ml-12 p-0 ">
      <ResponsiveContainer width="100%" height={100}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <YAxis
            domain={yAxisDomain}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#888", fontSize: 0 }}
            allowDataOverflow={true}
          />
          <Line
            type="linear"
            dataKey="value"
            stroke="#007fff"
            strokeWidth={3}
            dot={false}
            fill="#666"
            activeDot={{ r: 8, fill: "#", strokeWidth: 0 }}
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // Function to fetch historical data
  const fetchHistoricalData = useCallback(async (stockType = "NIFTY BANK") => {
    try {
      const res = await api.get("/historical");
      let data = [];

      if (stockType === "NIFTY 50") {
        data = res.data.niftyHistory;
        data.forEach((obj, index) => {
          obj.value = res.data.niftyHistory[index].open;
        });
      } else if (stockType === "NIFTY BANK") {
        data = res.data.bankNiftyHistory;
        data.forEach((obj, index) => {
          obj.value = res.data.bankNiftyHistory[index].open;
        });
      } else if (stockType === "S&P BSE SENSEX") {
        data = res.data.sensexHistory;
        data.forEach((obj, index) => {
          obj.value = res.data.sensexHistory[index].open;
        });
      }

      setChartData(data);
      return data;
    } catch (err) {
      console.error("Error fetching historical data:", err);
      throw err;
    }
  }, []);

  // Function to fetch live data
  const fetchLiveData = useCallback(async () => {
    try {
      const liveData = await api.get("/livedata");
      console.log("Live data refreshed:", liveData.data);
      setStocks(liveData.data);
      return liveData.data;
    } catch (err) {
      console.error("Error fetching live data:", err);
      throw err;
    }
  }, []);

  // Function to refresh all data
  const refreshAllData = useCallback(async () => {
    try {
      setRefreshing(true);
      setError(null);

      const [liveData, historicalData] = await Promise.all([
        fetchLiveData(),
        fetchHistoricalData(selectedStock || "NIFTY BANK")
      ]);

      console.log("Data refreshed successfully");
      return { liveData, historicalData };
    } catch (err) {
      console.error("Error refreshing data:", err);
      setError("Failed to refresh data. Please try again.");
      throw err;
    } finally {
      setRefreshing(false);
    }
  }, [fetchLiveData, fetchHistoricalData, selectedStock]);

  // Initial data load
  useEffect(() => {
    const initializeData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        await fetchHistoricalData("NIFTY BANK");
        await fetchLiveData();
        setSelectedStock("NIFTY BANK");
        
        setLoading(false);
      } catch (err) {
        console.error("Error initializing data:", err);
        setError("Failed to load initial data. Please try again.");
        setLoading(false);
      }
    };

    initializeData();
  }, [fetchHistoricalData, fetchLiveData]);

  // Auto-refresh live data every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (!refreshing) {
        try {
          await fetchLiveData();
          console.log("Auto-refreshed live data");
        } catch (err) {
          console.error("Error in auto-refresh:", err);
        }
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [fetchLiveData, refreshing]);

  const handleGraphChange = async (shortName) => {
    try {
      // Remove loading state to make it faster
      setSelectedStock(shortName);
      await fetchHistoricalData(shortName);
      // No loading state set to false - makes it instant
    } catch (err) {
      console.error("Error changing graph:", err);
      setError("Failed to load chart data. Please try again.");
    }
  };

  // Manual refresh handler
  const handleManualRefresh = async () => {
    await refreshAllData();
  };

  // Loading component
  if (loading && stocks.length === 0) {
    return (
      <div className="bg-transparent border rounded-xl p-6">
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Loading data...</p>
        </div>
      </div>
    );
  }

  // Error component
  if (error && stocks.length === 0) {
    return (
      <div className="bg-transparent border rounded-xl p-6">
        <div className="flex flex-col items-center justify-center text-red-500">
          <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-center">{error}</p>
          <button 
            onClick={handleManualRefresh} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-transparent relative">
      {/* Remove the loading overlay for chart switching */}
      
      {selectedStock && (
        <div className="mb-4 bg-transparent border rounded-xl overflow-hidden relative">
          <h2 className="text-lg font-bold p-2 mb-2">{selectedStock}</h2>
          {chartData.length > 0 ? (
            <CustomLineChart data={chartData} />
          ) : (
            <div className="h-24 flex items-center justify-center">
              <p className="text-gray-500">No chart data available</p>
            </div>
          )}
        </div>
      )}
      
      <div className="bg-transparent border border-t-0 rounded-xl overflow-hidden relative">
        {stocks.map((stock) => (
          <div
            key={stock.shortName}
            className="border-t border-gray-200 p-2 flex items-center cursor-pointer hover:bg-gray-50 relative"
            onClick={() => handleGraphChange(stock.shortName)}
          >
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-4">
              {stock.symbol == "^BSESN"
                ? "BSE"
                : stock.symbol == "^NSEI"
                ? "N"
                : stock.symbol == "^NSEBANK"
                ? "B"
                : null}
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
                <p
                  className={`text-sm ${
                    stock.regularMarketChange < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {stock.regularMarketChange.toFixed(2)} (
                  {stock.regularMarketChangePercent.toFixed(2)}%)
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