import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import { SiWindows } from "react-icons/si";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { BsSubstack } from "react-icons/bs";
import { SiElasticstack } from "react-icons/si";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { capabt2,maclap,brandicn } from "../assets";
// ..
AOS.init({
    once:true,
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease',
});


const ServiceData = [
  {
    id: 1,
    icon: <BsSubstack />,
    title: `IPO`,
    para: `An IPO, or Initial Public Offering, is the process through which a previously completely private business opens up its shares to be traded in public on an exchange.`,
  },
  {
    id: 2,
    icon: <BsSubstack />,
    title: `Mutual Fund`,
    para: `A mutual fund is an investment vehicle that pools money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities (according to the fund's stated strategy).`,
  },
  // {
  //   id: 3,
  //   icon: <BsSubstack />,
  //   title: `Portfolio Management Services`,
  //   para: `Portfolio Management Services (PMS) offer tailored investment solutions to high-net-worth individuals (HNIs). PMS involves a professional fund manager who manages your investments based on your financial goals and risk profile.`,
  // },
  {
    id: 4,
    icon: <BsSubstack />,
    title: `Equity`,
    para: `Equity is a common way to invest involving buying and selling shares or stocks of companies traded on the stock market. It is a way for investors to own a piece of a company and benefit from its growth and profits.`,
  },
  {
    id: 5,
    icon: <BsSubstack />,
    title: `Alternative Investment Fund`,
    para: `Alternative Investment Fund or AIF is a privately pooled investment vehicle that invests in alternative asset classes such as private equity, venture capital, hedge funds, real estate, commodities, and derivatives`,
  },
  {
    id: 6,
    icon: <BsSubstack />,
    title: `Insurance`,
    para: `Insurance is a contract, represented by a policy, in which a policyholder receives financial protection or reimbursement against losses from an insurance company.`,
  },
  {
    id: 7,
    icon: <BsSubstack />,
    title: `Intelligent Advisory Portfolios (IAPs)`,
    para: `Intelligent Advisory Portfolios (IAPs) are pre-designed innovative investment solutions, curated to simplify equity market investing for those who don’t have time to stop and invest. `,
  },
  {
    id: 8,
    icon: <BsSubstack />,
    title: `derivative`,
    para: `A derivative is a structured financial contract that enables an investor to buy or sell an asset at a specified future date. Moreover, derivative trading is a leveraged form of trading, meaning you can buy a large quantity of the underlying assets by paying a small amount.`,
  },


];

const Service = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <div className="w-11/12 2xl:w-10/12 mx-auto">
      
      <div>
        <h2 data-aos="fade-up"  className="text-2xl xl:text-5xl capitalize text-center font-black text-secclr">
          choose the <span className="text-prmclr">right one</span>
        </h2>
        <p className="text-center text-secclr pt-2">Choose Capindex to invest in your future.</p>
        <Swiper
        data-aos="fade-in"  data-aos-delay="100"
        className="mt-20"
          spaceBetween={20}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween:20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          modules={[Autoplay, Navigation]}
        >
          {ServiceData?.map((dt) => (
            <SwiperSlide key={dt.id} className="h-full w-full">
              <div className="h-full xl:h-60 flex flex-col gap-2 border rounded-lg p-5 mb-5">
                <img className="h-10 w-10 object-cover" src={brandicn} alt="" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-secclr capitalize">{dt.title}</h3>
                  <p className="text-sm text-mygray">{dt.para}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div data-aos="fade-in"  data-aos-delay="500" className="w-full flex justify-end gap-3">
          <button
            className="border px-5 py-2.5 rounded-full hover:bg-secclr hover:text-white border-secclr text-secclr overflow-hidden"
            ref={prevRef}
          >
            <FaArrowLeft className="text-xs" />
          </button>
          <button
            className="border px-5 py-2.5 rounded-full hover:bg-secclr hover:text-white border-secclr text-secclr overflow-hidden"
            ref={nextRef}
          >
            <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
