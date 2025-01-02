import React from 'react'
import { Link } from 'react-router-dom';
import { SiWindows } from "react-icons/si";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { BsSubstack } from "react-icons/bs";
import { SiElasticstack } from "react-icons/si";
import {metaicon,servbg1,bansamp, ServIPO} from '../../assets'
import { Faq } from '../../components';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ServiceData = [
  {
    id: 1,
    icon: <BsSubstack />,
    title: `IPO`,
    para: `An IPO, or Initial Public Offering, is the process through which a previously completely private business opens up its shares to be traded in public on an exchange. When a company goes public, it hires investment banks to ensure that the IPO results in a high influx of capital from the public. Share markets are of two types: primary markets and secondary markets.`,
  },
  {
    id: 1,
    icon: <BsSubstack />,
    title: `Mutual Fund`,
    para: `A mutual fund is an investment vehicle that pools money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities (according to the fund's stated strategy). It allows individual investors to gain exposure to a professionally-managed portfolio and potentially benefit from economies of scale, while spreading risk across multiple investments.`,
  },
  {
    id: 1,
    icon: <BsSubstack />,
    title: `Futures and Options`,
    para: `Futures and options are the major types of stock derivatives trading in a share market. These are contracts signed by two parties for trading a stock asset at a predetermined price on a later date. Such contracts try to hedge market risks involved in stock market trading by locking in the price beforehand.`,
  },
  {
    id: 1,
    icon: <BsSubstack />,
    title: `Equity trading`,
    para: `Equity trading is a common way to invest involving buying and selling shares or stocks of companies traded on the stock market. It is a way for investors to own a piece of a company and benefit from its growth and profits.`,
  },
  {
    id: 1,
    icon: <BsSubstack />,
    title: `Alternative Investment Fund`,
    para: `Alternative Investment Fund or AIF is a privately pooled investment vehicle that invests in alternative asset classes such as private equity, venture capital, hedge funds, real estate, commodities, and derivatives`,
  },
  {
    id: 1,
    icon: <BsSubstack />,
    title: `Insurance`,
    para: `Insurance is a contract, represented by a policy, in which a policyholder receives financial protection or reimbursement against losses from an insurance company.`,
  },
  {
    id: 1,
    icon: <BsSubstack />,
    title: `Intelligent Advisory Portfolios (IAPs)`,
    para: `Intelligent Advisory Portfolios (IAPs) are pre-designed innovative investment solutions, curated to simplify equity market investing for those who don’t have time to stop and invest. `,
  },
  {
    id: 1,
    icon: <BsSubstack />,
    title: `Derivative`,
    para: `A derivative is a structured financial contract that enables an investor to buy or sell an asset at a specified future date. Moreover, derivative trading is a leveraged form of trading, meaning you can buy a large quantity of the underlying assets by paying a small amount.`,
  },


];

const IPO = () => {
  return (
    <section className='w-11/12 2xl:w-10/12 mx-auto min-h-screen py-20 pt-32 xl:pt-40 text-secclr'>
         {/* <span className="flex capitalize gap-1 text-base font-medium">
          <Link to={"/"} className="font-bold hover:underline">
            home
          </Link>{" "}
          / <p>Services</p>
        </span> */}

        <div className='py-32'>
            <div className='space-y-3'>
              <h2 className='text-3xl md:text-5xl xl:text-7xl font-black text-center'>Apply for</h2>
              <h2 className='text-3xl md:text-5xl xl:text-7xl font-black text-center '>Upcoming <span className='text-prmclr'>IPO</span></h2>
            </div>
            <div className='grid place-items-center pt-10'>
            <div className='relative font-bold rounded-full xl:w-[40%] flex flex-col md:flex-row gap-y-5 md:gap-y-0 justify-between items-center md:border p-1'>
                  <PhoneInput
                            required
                            className='p-2 h-full w-full border md:border-none rounded-full'
                            enableSearch={true}
                            disableSearchIcon={true}
                            inputProps={{name:"mobileNumber",required: true, autoFocus: true}}
                            buttonStyle={{background:"transparent",border:"none"}}
                            inputStyle={{background:"transparent",border:"none",}}
                            country={'in'}
                        /> 
                  <button className='bg-secclr hover:bg-prmclr duration-200 px-5 text-nowrap py-3 font-normal rounded-full text-white capitalize text-sm'>Apply now</button>
              </div>
            </div>
        </div>

        <div className='flex flex-col-reverse md:flex-row pt-20'>
          <div className='basis-1/2'>
          <img className='p-10 object-cover aspect-square' src={ServIPO} alt="service" />
          </div>
          <div className='basis-1/2 flex flex-col justify-center gap-3'>
            <h2 className='text-2xl xl:text-4xl font-bold capitalize'>what is IPO ?</h2>
            <p className='text-base xl:text-justify'>An IPO, or Initial Public Offering, is the process through which a previously completely private business opens up its shares to be traded in public on an exchange. When a company goes public, it hires investment banks to ensure that the IPO results in a high influx of capital from the public. Share markets are of two types: primary markets and secondary markets.</p>
          </div>
        </div>

        <div className='py-20'>
            <h3 className='text-2xl xl:text-7xl font-black text-center'>Why Apply for <span className='text-prmclr'>IPO</span></h3>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 pt-10'>
                <div className='bg-white shadow-xl p-7 rounded-3xl hover:shadow-2xl duration-200 flex flex-col gap-2'>
                  <h4 className='text-xl font-extrabold'>Expert Analysis on IPO Suitability</h4>
                  <p className='text-sm'>CAP Index advisory services provide expert guidance on whether a particular IPO fits well with the investment strategy of the index. This analysis is based on factors such as market capitalization, growth potential, and industry trends.</p>
                </div>
                <div className='bg-white shadow-xl p-7 rounded-3xl hover:shadow-2xl duration-200 flex flex-col gap-2'>
                  <h4 className='text-xl font-extrabold'>Accurate Valuation Insights</h4>
                  <p className='text-sm'>IPO pricing can often be volatile. Advisory services help investors understand whether the IPO is fairly valued compared to similar companies in the CAP Index, helping avoid overpaying for newly listed stocks.</p>
                </div>
                <div className='bg-white shadow-xl p-7 rounded-3xl hover:shadow-2xl duration-200 flex flex-col gap-2'>
                  <h4 className='text-xl font-extrabold'>Risk Management Strategies</h4>
                  <p className='text-sm'>CAP Index advisors offer strategies to mitigate risks associated with IPO investments. This includes evaluating the company’s financial health, potential market share, and long-term growth projections to assess how it could impact the index's performance.</p>
                </div>
               
            </div>
        </div>
        <div className='bg-white'>
          <Faq/>
        </div>
        {/* ===========/////================= */}
        {/* <div className='mt-8 grid grid-cols-3 gap-5'>
              {ServiceData?.map((dt,i)=>(
                <div data-aos="fade-up"  data-aos-delay={100 * i} className='text-secclr border rounded-3xl p-8 shadow-xl flex flex-col gap-5' key={i}>
                    <span className='text-4xl text-gray-300 '>{dt.icon}</span>
                    <div className='space-y-1'>
                      <h2 className='text-lg font-black'>{dt.title}</h2>
                      <p className='text-sm'>{dt.para}</p>
                    </div>
                </div>
              ))}
        </div> */}
    </section>
  )
}

export default IPO