import React from "react";
import { nifty,niftybank,sensex} from '../assets'

const AnimatedBanner = ({ stocks }) => {
  return (
    <div className="bg-white border-y border-gray-200 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {/* Render the stocks twice for continuous effect */}
          {stocks.concat(stocks).map((stock, index) => (
            <div key={index} className="flex items-center px-20 py-5">
              <img
                src={
                  stock.shortName === "S&P BSE SENSEX"
                    ? sensex
                    : stock.shortName === "NIFTY 50"
                    ? nifty
                    : stock.shortName === "NIFTY BANK"
                    ? niftybank
                    : null
                }
                className="w-20 h-8 mr-3 object-contain"
                alt={`${stock.shortName} logo`}
              />
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-bold text-xl text-gray-800">
                    {stock.shortName}
                  </span>
                  <span className="ml-2 text-xl">{stock.regularMarketPrice}</span>
                  <div className="flex items-center">
                    <span className="text-lg font-mono">
                      {stock.regularMarketChange.toFixed(2)}
                    </span>
                    <span
                      className={`ml-2 text-lg ${
                        stock.regularMarketChange >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      ({stock.regularMarketChangePercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          display: flex;
        }
        .ticker-content {
          display: flex;
          white-space: nowrap;
          animation: ticker 20s linear infinite;
        }
        @keyframes ticker {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBanner;
