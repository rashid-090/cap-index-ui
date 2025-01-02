import React from 'react'
import { Link } from 'react-router-dom';
import { SiWindows } from "react-icons/si";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { BsSubstack } from "react-icons/bs";
import { SiElasticstack } from "react-icons/si";
import {metaicon,servbg1,bansamp} from '../assets'
import { Faq } from '../components';
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

const Services = () => {
  return (
    <section className='w-11/12 2xl:w-10/12 mx-auto min-h-screen py-20 pt-32 xl:pt-40 text-secclr'>
         {/* <span className="flex capitalize gap-1 text-base font-medium">
          <Link to={"/"} className="font-bold hover:underline">
            home
          </Link>{" "}
          / <p>Services</p>
        </span> */}

        <div className='pt-10'>
            <h2 className='text-3xl xl:text-7xl font-black text-center'>Invest in <br/> <span className='text-prmclr'>Mutual Funds</span><br/> Today</h2>
            <div className='grid place-items-center pt-10'>
              <div className='relative font-bold rounded-full w-[50%] flex justify-between border p-1'>
                  <p className='absolute  text-sm top-4 left-3 border-r-2 pr-2'>+91</p>
                  <input className='pl-12 text-sm w-full placeholder:text-gray-300 [&::-webkit-inner-spin-button]:appearance-none' type="number" placeholder='Mobile Number' />
                  <button className='bg-secclr hover:bg-prmclr duration-200 px-5 text-nowrap py-3 font-normal rounded-full text-white capitalize text-sm'>invest now</button>
              </div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 pt-20'>
          <img className='p-10 object-cover aspect-square' src={bansamp} alt="service" />
          <div className='flex flex-col justify-center gap-3'>
            <h2 className='text-3xl xl:text-4xl font-bold capitalize'>what is mutual funds ?</h2>
            <p className='text-base xl:text-justify'>A mutual fund is an investment vehicle that pools money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities (according to the fund's stated strategy). It allows individual investors to gain exposure to a professionally-managed portfolio and potentially benefit from economies of scale, while spreading risk across multiple investments.</p>
          </div>
        </div>

        <div className='py-20'>
            <h3 className='text-3xl xl:text-7xl font-black text-center'>Why Mutual Fund<br/> <span className='text-prmclr'>Investment</span></h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pt-10'>
                <div className='bg-white shadow-xl p-10 rounded-3xl hover:shadow-2xl duration-200 flex flex-col gap-1'>
                  <h4 className='text-xl font-extrabold'>Diversification of Investment</h4>
                  <p className='text-sm'>Mutual funds spread your investment across various assets, reducing risk and enhancing potential returns through diversification.</p>
                </div>
                <div className='bg-white shadow-xl p-10 rounded-3xl hover:shadow-2xl duration-200 flex flex-col gap-1'>
                  <h4 className='text-xl font-extrabold'>80C Benefits</h4>
                  <p className='text-sm'>Certain mutual funds, like ELSS, offer tax benefits under Section 80C, helping you save on taxes while investing for future goals.</p>
                </div>
                <div className='bg-white shadow-xl p-10 rounded-3xl hover:shadow-2xl duration-200 flex flex-col gap-1'>
                  <h4 className='text-xl font-extrabold'>Highly Regulated</h4>
                  <p className='text-sm'>Mutual funds are regulated by SEBI, ensuring transparency and protecting investor interests through stringent guidelines. This gives a sense of safety to investors.</p>
                </div>
                <div className='bg-white shadow-xl p-10 rounded-3xl hover:shadow-2xl duration-200 flex flex-col gap-1'>
                  <h4 className='text-xl font-extrabold'>Lower Transaction Costs</h4>
                  <p className='text-sm'>Investing in mutual funds typically incurs lower transaction costs compared to individual stock trading, making it cost-effective.</p>
                </div>
                <div className='bg-white shadow-xl p-10 rounded-3xl hover:shadow-2xl duration-200 flex flex-col gap-1'>
                  <h4 className='text-xl font-extrabold'>Liquid Assets</h4>
                  <p className='text-sm'>Mutual funds offer high liquidity, allowing you to easily redeem your investments (if invested in open-ended funds) when needed, providing financial flexibility.</p>
                </div>
                <div className='bg-white shadow-xl p-10 rounded-3xl hover:shadow-2xl duration-200 flex flex-col gap-1'>
                  <h4 className='text-xl font-extrabold'>Invest in Smaller Amounts</h4>
                  <p className='text-sm'>You can start investing in mutual funds with small amounts, making them accessible and ideal for beginners and seasoned investors alike.</p>
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

export default Services