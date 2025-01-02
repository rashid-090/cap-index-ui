import React, { useEffect, useState } from "react";
import { KiteConnect } from "kiteconnect";

const TickerBoard = () => {
  const [tickerData, setTickerData] = useState([]);
  const [error, setError] = useState(null);

  // Replace with your actual Kite Connect API key and access token
  const apiKey = "1f6gyxooyf5jjtmg";
  const accessToken = "A4E3MGJIXA4XM32N53ZNYU6OYAGY3RGI";
  const apiSecret = " l5mfn8pgnkuzyswn8m7ij6zthc1qicro";

  useEffect(() => {
    const kc = new KiteConnect({
      api_key: apiKey,
    });
    kc.setAccessToken(accessToken);
    const fetchTradeDetails = async () => {
      try {
        // Fetch trades using getTrades method
        const trades = await kc.getTrades();
        console.log("Trades:", trades);
        setTradeData(trades);
      } catch (err) {
        console.error("Error fetching trades:", err);
        setError(err.message);
      }
    };
    fetchTradeDetails();

    async function generateSession() {
      try {
        const response = await kc.generateSession(accessToken, apiSecret);
        console.log(response);

        kc.setAccessToken(response.access_token);
        console.log("Session generated:", response);
      } catch (err) {
        console.error("Error generating session:", err);
      }
    }
    async function getProfile() {
      try {
        const profile = await kc.getProfile();
        console.log("Profile:", profile);
      } catch (err) {
        console.error("Error getting profile:", err);
      }
    }



    const fetchTickerData = async () => {
      try {
        const instruments = ["NSE:RELIANCE", "NSE:TCS"]; // Replace with your instruments
        const data = await kc.getQuote(instruments);
        setTickerData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    // fetchTickerData();

    // Fetch data every 5 seconds
    const interval = setInterval(fetchTickerData, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [apiKey, accessToken, apiSecret]);

  return (
    <div className="ticker-board">
      <h1>Market Ticker</h1>
      {error && <p>Error fetching data: {error}</p>}
      <ul>
        {tickerData.map((item, index) => (
          <li key={index}>
            <strong>{item.instrument_token}</strong>: {item.last_price} (
            {item.change}%)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TickerBoard;
