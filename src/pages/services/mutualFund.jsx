import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SiWindows } from "react-icons/si";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { BsSubstack } from "react-icons/bs";
import { SiElasticstack } from "react-icons/si";
import {metaicon,servbg1,bansamp,ServMutual} from '../../assets'
import { Faq } from '../../components';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



const MutualFund = () => {

  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mobileNumber) {
      setErrorMessage('Please enter your mobile number.');
      return;
    }

    // Clear error if the field is valid
    setErrorMessage('');

    // WhatsApp API URL to send message to the given phone number
    const whatsappNumber = '917907302020';
    const whatsappApiUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=
      Mobile: ${encodeURIComponent(mobileNumber)}`;

    // Open the WhatsApp URL with the form data
    window.open(whatsappApiUrl, '_blank');

    // Clear form fields after sending
    setMobileNumber('');
  };



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
              <h2 className='text-3xl md:text-5xl xl:text-7xl font-black text-center'>Invest in</h2>
              <h2 className='text-3xl md:text-5xl xl:text-7xl font-black text-center '><span className='text-prmclr'>Mutual Funds</span> Today</h2>
            </div>
            <div className='grid place-items-center pt-10'>
            <form onSubmit={handleSubmit}  className='relative font-bold rounded-full xl:w-[40%] flex flex-col md:flex-row gap-y-5 md:gap-y-0 justify-between items-center md:border p-1'>
                      <PhoneInput
                    required
                    className='p-2 h-full w-full border md:border-none rounded-full'
                    enableSearch={true}
                    disableSearchIcon={true}
                    inputProps={{ name: "mobileNumber", required: true, autoFocus: true }}
                    buttonStyle={{ background: "transparent", border: "none" }}
                    inputStyle={{ background: "transparent", border: "none" }}
                    country={'in'}
                    value={mobileNumber} // Bind the value to state
                    onChange={(value) => setMobileNumber(value)} // Update the state
                  />
                  <button  className='bg-secclr hover:bg-prmclr duration-200 px-5 text-nowrap py-3 font-normal rounded-full text-white capitalize text-sm'>Apply now</button>
              </form>
              {errorMessage && <p className=" text-xs text-red-600">{errorMessage}</p>}
            </div>
        </div>

        <div className='flex flex-col-reverse md:flex-row pt-20'>
          <div className='basis-1/2 xl:p-10'>
            <img className='p-10 object-cover aspect-square' src={ServMutual} alt="service" />
          </div>
          <div className='basis-1/2 flex flex-col justify-center gap-3'>
            <h2 className='text-2xl xl:text-4xl font-bold capitalize'>what is mutual funds ?</h2>
            <p className='text-base xl:text-justify'>An investment strategy that consolidates money from various investors, allowing them to collectively own a diverse set of stocks, bonds, and other financial securities through a single, professionally managed fund. It allows individual investors to gain exposure to a professionally-managed portfolio and potentially benefit from economies of scale, while spreading risk across multiple investments.</p>
          </div>
        </div>

        <div className='py-20'>
            <h3 className='text-2xl xl:text-7xl font-black text-center'>Why Mutual Fund<br/> <span className='text-prmclr'>Investment</span></h3>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 pt-10'>
                <div className='bg-white shadow-xl p-7 rounded-3xl hover:shadow-2xl duration-200 flex flex-col gap-2'>
                  <h4 className='text-xl font-extrabold'>Diversification</h4>
                  <p className='text-sm'>Mutual funds allow investors to spread their investment across a wide range of assets, reducing the risk of losing money. This diversification helps protect against market volatility, as losses in one area can be balanced out by gains in another.</p>
                </div>
                <div className='bg-white shadow-xl p-7 rounded-3xl hover:shadow-2xl duration-200 flex flex-col gap-2'>
                  <h4 className='text-xl font-extrabold'>Professional Management</h4>
                  <p className='text-sm'>Mutual funds are managed by experienced professionals who make investment decisions based on research and market analysis. This is especially beneficial for those who don’t have the time or expertise to manage their investments on their own.</p>
                </div>
                <div className='bg-white shadow-xl p-7 rounded-3xl hover:shadow-2xl duration-200 flex flex-col gap-2'>
                  <h4 className='text-xl font-extrabold'>Liquidity</h4>
                  <p className='text-sm'>Most mutual funds offer high liquidity, meaning you can easily buy or sell your fund units on any business day. This provides flexibility in accessing your money when needed, unlike other long-term investments like fixed deposits or bonds.</p>
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

export default MutualFund