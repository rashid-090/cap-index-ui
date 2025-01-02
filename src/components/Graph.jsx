import { useEffect, useState } from "react";
import axios from "axios";
import AnimatedBanner from "./AnimatedBanner";
import Marquee from "react-fast-marquee";
import api from '../api/baseUrl'; // 

const TradingViewWidget1 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
    const res = await api.get("/");
    setData(res.data);

    setTimeout(() => {
      fetchData();
    }, 5000);
  };
    fetchData();
  }, []);

  return (
    <section className="w-full overflow-hidden">
      {/* <div className="tradingview-widget-container1 scale-150">
        <div className="tradingview-widget-container__widget1"></div>
      </div> */}
        <AnimatedBanner stocks={data} />
    </section>
  );
};

export default TradingViewWidget1;
