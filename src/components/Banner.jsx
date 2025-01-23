import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {shape1,shape2, cmp1,cmp2,cmp3,bansamp,mockMob} from '../assets'
import { FaArrowRight } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RiAwardFill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import {Nifty} from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    once:true,
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease',
});



const Banner = () => {

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
    <>
        {/* Banner */}
        <div className='w-11/12 2xl:w-10/12 mx-auto pt-32 xl:pt-36 h-full'>
            <div className='grid grid-cols-1 xl:grid-cols-5  bg-[#eef6fc] p-3 xl:p-10 gap-10 rounded-2xl h-full'>

                <div data-aos="fade-in"  className='col xl:col-span-3  flex items-center h-full'>
                   <div className='bg-secclr p-2 rounded-3xl w-full'>
                    <div className='bg-gray-50 xl:pb-20 shadow-2xl   rounded-2xl flex flex-col gap-5 h-fit w-full p-5 xl:p-10 text-secclr'>
                            <div className=''>
                                <h2 className='text-3xl xl:text-4xl font-black'>Act Fast,  Invest Wisely<br className='hidden md:block'/> with <span className='text-prmclr'>Cap Index</span>.</h2>
                                {/* <p className='text-lg font-medium'>Trusted by 1 Crore+ Indians</p> */}
                            </div>
                            <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-3 items-center mt-3 text-sm'>
                                <PhoneInput
                                placeholder='Mobile'
                                required
                                        className='border rounded-full xl:px-4 py-2'
                                        enableSearch={true}
                                        disableSearchIcon={true}
                                        inputProps={{name:"mobileNumber",required: true, autoFocus: true}}
                                        buttonStyle={{background:"transparent",border:"none"}}
                                        inputStyle={{background:"transparent",border:"none",fontSize:"14px",color:"#000"}}
                                        country={'in'}
                                        value={mobileNumber}
                                        onChange={(value) => setMobileNumber(value)}
                                    />   
                                <button className='border p-3 xl:px-10 xl:p-4 w-full md:w-fit px-10 bg-secclr hover:bg-prmclr duration-200 text-white rounded-full font-semibold'>Send</button>

                            </form>
                                {errorMessage && <p className="-mt-3 text-xs text-red-600">{errorMessage}</p>}
                            
                            <p className='text-xs md:text-sm text-secclr'>Your financial future is in your hands.<br/> Make the right choice today.</p>
                            <span className='h-[2px] bg-prmclr w-32'></span>
                            
                        </div>
                   </div>
                </div>
                <div className='xl:col-span-2  flex items-center  graphss'>
                    <div className='w-full '>
                        <Nifty/>
                    </div>
                    {/* <img className=' object-cover aspect-square' src={mockMob} alt="sample" /> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner

{/* <div className='w-11/12 2xl:w-10/12 mx-auto text-secclr grid grid-cols-1 pt-40 xl:pt-28 md:grid-cols-5 gap-10 xl:gap-20 h-screen'>
<div data-aos="fade-up" className='md:col-span-2 flex flex-col justify-center text-left gap-5 '>
    <div className='bg-secclr shadow-2xl text-white h-fit p-5 md:p-10 rounded-3xl flex flex-col gap-5 md:gap-10'>
        <div className='space-y-2'>
            <h1 className='text-3xl xl:text-5xl font-extrabold'>Your queries are our concern.</h1>
            <p  className='text-sm'>Discover your greater business potentials with our array of dynamic services that covers stock broking.</p>
        </div>
        <form className='flex flex-col gap-5 text-black'>
            <input className='border p-2 border-gray-400 rounded-lg bg-[white] placeholder:text-gray-500' type="text" placeholder='Name' name="" id="" required/>
            <input className='border p-2 border-gray-400 rounded-lg bg-[white] placeholder:text-gray-500 [&::-webkit-inner-spin-button]:appearance-none' type="number" placeholder='Mobile' name="" id="" required/>
            <input className='border p-2 border-gray-400 rounded-lg bg-[white] placeholder:text-gray-500' type="email" placeholder='Email' name="" id="" required/>
            <button className='bg-white hover:bg-secclr border border-white text-secclr hover:text-white duration-300 w-40 h-12 mx-auto rounded-full font-extrabold capitalize'>Join us</button>
        </form>
    </div>
        
</div>
<div data-aos="fade-up"  data-aos-delay="100"  className='md:col-span-3 flex flex-col justify-center gap-2 md:gap-5 '>
    <div>
        <div className='grid grid-cols-2 gap-2 md:gap-5'>
            <div className='relative'>
                <img className='absolute' src={shape2} alt="" />
                <img className='w-full' src={shape1} alt="" />
                <div className='absolute right-10 bottom-10 hidden md:flex justify-end xl:justify-start items-end gap-2'>
                    <div className='w-12 bg-[#23b2e7] h-10 xl:h-24'></div>
                    <div className='w-12 bg-[#70c0dd] h-14 xl:h-32'></div>
                    <div className='w-12 bg-secclr h-20 xl:h-40'></div>
                </div>
            </div>
            <div className='bg-gray-100 p-5 xl:p-10 rounded-2xl flex flex-col justify-center items-start gap-3'>
                <h1 className='text-4xl xl:text-7xl font-extrabold'>500+</h1>
                <p className='text-xs md:text-sm text-gray-500 font-medium'>Satisfied customers have benefited from our expert portfolio 
                management.</p>
                <div className='relative h-4 w-full  md:mt-5'>
                    <span className='absolute h-2 bg-secclr z-20 w-[80%]'></span>
                    <span className='absolute h-2 bg-gray-300 z-10 w-[100%]'></span>
                </div>
            </div>
        </div>
    </div>
    <div className=''>
        <div data-aos="fade-up"  data-aos-delay="200"  className='grid grid-cols-1 md:grid-cols-6 gap-y-3 gap-2 place-items-start  md:pt-10'>
            <h5 className='text-center w-full md:text-left md:col-span-2 text-[10px] md:text-sm font-semibold pt-2'>Build wealth strategically<br/> with Cap-index.</h5>
            <div className='col-span-4  grid grid-cols-3 place-items-center gap-5'>
                <div className='flex items-center gap-2'>
                    <IoLocation className='text-xl xl:text-5xl text-prmclr'/>
                    <p className='capitalize text-xs xl:text-base font-semibold'>5<br/>  Countries</p>
                </div>
                <div className='flex items-center gap-2'>
                    <RiAwardFill className='text-xl xl:text-5xl text-prmclr'/>
                    <p className='capitalize text-xs xl:text-base font-semibold'>3<br/>  Awards</p>
                </div>
                <div className='flex items-center gap-3'>
                    <BsGraphUpArrow className='text-xl xl:text-4xl text-prmclr'/>
                    <p className='capitalize text-xs xl:text-base font-semibold'>500+<br/> Portfolios</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div> */}