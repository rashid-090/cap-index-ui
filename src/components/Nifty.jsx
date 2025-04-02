import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import api from '../api/baseUrl'; // 

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
    const padding = (maxValue - minValue) * 0.1; // Add 10% padding
    return [Math.floor(minValue - padding), Math.ceil(maxValue + padding)];
  }, [minValue, maxValue]);

  return (
    <div className="-ml-12 p-0 ">
      <ResponsiveContainer width="100%" height={100}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" /> */}

          <YAxis
            domain={yAxisDomain}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#888", fontSize: 0 }}
            // tickFormatter={formatYAxis}
            allowDataOverflow={true}
          />
          {/* <Tooltip 
            contentStyle={{width:100, backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
            labelStyle={{ fontWeight: 'bold' }}
            formatter={(value) => [`${value.toFixed(2)}`, 'Value']}
          /> */}
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
  // const ChartData = [
  //   { date: "2024-09-25", value: 200 },
  //   { date: "2024-09-26", value: 300 },
  //   { date: "2024-09-27", value: 300 },
  //   { date: "2024-09-28", value: 500 },
  //   { date: "2024-09-29", value: 480 },
  //   { date: "2024-09-30", value: 600 },
  //   { date: "2024-10-01", value: 780 },
  //   { date: "2024-10-02", value: 910 },
  //   { date: "2024-10-03", value: 660 },
  //   { date: "2024-10-04", value: 700 },
  //   { date: "2024-10-05", value: 510 },
  // ];

  const [chartData, setChartData] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [stocks, setStocks] = useState([]);

  // const stocks = [
  //   { shortName: "NIFTY", name: "Nifty 50 Index", logo: "N" },
  //   { shortName: "BANKNIFTY", name: "Nifty Bank Index", logo: "B" },
  //   {
  //     shortName: "SENSEX",
  //     name: "S&P BSE Sensex Index",
  //     logo: "BSE",
  //     value: 85571.85,
  //     change: -264.27,
  //     changePercent: -0.31,
  //   },
  // ];

  useEffect(() => {
    const fetchHistoricalData = async () => {
      const res = await api.get("/historical");
      let data = res.data.bankNiftyHistory;
      data.map((obj, index) => {
        obj.value = res.data.bankNiftyHistory[index].open;
      });
      console.log(data);

      setChartData(res.data.bankNiftyHistory);
      setSelectedStock("NIFTY BANK");
    };
    const fetchLiveData = async () => {
      const liveData = await api.get("/livedata");
      console.log(liveData.data);
      setStocks(liveData.data);
      setTimeout(() => {
        fetchLiveData();
      }, 5000);
    };

    fetchHistoricalData();
    fetchLiveData();
  }, []);

  const handleGraphChange = async (shortName) => {
    setSelectedStock(shortName);

    const res = await api.get("/historical");

    if (shortName == "NIFTY 50") {
      let data = res.data.niftyHistory;
      data.map((obj, index) => {
        obj.value = res.data.niftyHistory[index].open;
      });
      setChartData(data);
    } else if (shortName === "NIFTY BANK") {
      let data = res.data.bankNiftyHistory;
      data.map((obj, index) => {
        obj.value = res.data.bankNiftyHistory[index].open;
      });
      setChartData(data);
    } else if (shortName === "S&P BSE SENSEX") {
      let data = res.data.sensexHistory;
      data.map((obj, index) => {
        obj.value = res.data.sensexHistory[index].open;
      });
      setChartData(data);
    }
  };

  return (
    <div className=" bg-transparent ">
      {selectedStock && (
        <div className="mb-4 bg-transparent border rounded-xl overflow-hidden">
          <h2 className="text-lg font-bold p-2 mb-2">{selectedStock}</h2>
          <CustomLineChart data={chartData} />
        </div>
      )}
      <div className="bg-transparent border rounded-xl  overflow-hidden">
        {stocks.map((stock) => (
          <div
            key={stock.shortName}
            className="border-t border-gray-200 p-2 flex items-center cursor-pointer hover:bg-gray-50"
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
