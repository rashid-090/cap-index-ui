import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import {Logoh} from '../assets';
import ScrollToTopButton from './ScrollToTopButton';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { TbMail } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    once:true,
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease',
});



const Footer = () => {
  return (
    <footer className='w-full h-full bg-[#eef6fc]'>
      <div className='w-11/12 2xl:w-10/12 mx-auto py-10'>
          <div className='bg-[#1f2b5f] gap-y-6 text-white p-5 md:p-8 md:py-8 flex flex-col xl:flex-row shadow-xl justify-between md:items-center rounded-3xl'>
             <div className='flex flex-col gap-3'>
                <h4 className='text-2xl xl:text-4xl font-semibold'>Do you need help?</h4>
                <p className='text-sm'>Our experts are ready. Get personalized<br/>
                  assistance for all your questions.</p>
             </div>
             <a href='https://api.whatsapp.com/send?phone=917907302020' target='_blank' className='flex bg-white border hover:bg-transparent w-fit hover:text-white duration-200 text-secclr h-fit px-5 py-3 rounded-full items-center gap-3 text-sm capitalize font-medium'><p>Get free consultation</p><FaArrowRight/></a>
          </div>
          {/* ================ */}
          <div className='grid text-secclr grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 gap-y-10 xl:gap-5 pt-20 text-sm'>
              <div className=' flex flex-col items-center xl:items-start gap-0'>
                <Link to={'/'}><img className='w-40 object-cover' src={Logoh} alt="" /></Link>
                <div className='flex text-xs font-light flex-col gap-1 xl:pl-7 text-left  text-mygray'>
                  <span className='flex items-center gap-2 hover:text-secclr duration-300'>
                    <FiPhoneCall className='text-base'/>
                  <a href="tel:917907302020">+91 7907 3020 20</a>
                  </span>
                  <span className='flex items-center gap-2 hover:text-secclr duration-300'>
                    <TbMail className='text-base'/>
                  <a href="mailto:connect@cap-index.com">connect@cap-index.com</a>
                  </span>
                </div>
              </div>
              <div className='flex flex-col justify-start gap-4'>
                <h4 className='text-sm font-extrabold text-black'>PAGES</h4>
                <ul className='font-semibold flex flex-col gap-2'>
                  <Link to={'/'} className='hover:scale-95 hover:underline duration-300'>Home</Link>
                  <Link to={'/about-us'} className='hover:scale-95 hover:underline duration-300'>About</Link>
                  <Link to={'#'} className='hover:scale-95 hover:underline duration-300'>FAQ</Link>
                  <Link to={'/contact-us'} className='hover:scale-95 hover:underline duration-300'>Contact</Link>
                </ul>
              </div>
              <div className=' flex flex-col justify-start gap-4'>
                <h4 className='text-sm font-extrabold text-black'>SERVICES</h4>
                <ul className='font-semibold flex flex-col gap-2'>
                  <Link to={'/ipo'} className='hover:scale-95 hover:underline duration-300'>IPO</Link>
                  <Link to={'/mutual-fund'} className='hover:scale-95 hover:underline duration-300'>Mutual Fund</Link>
                  <Link to={'/equity'} className='hover:scale-95 hover:underline duration-300'>Equity</Link>
                  <Link to={'/alternative-investment-fund'} className='hover:scale-95 hover:underline duration-300'>Alternative Investment Fund</Link>
                  <Link to={'/insurance'} className='hover:scale-95 hover:underline duration-300'>Insurance</Link>
                  <Link to={'/intelligent-advisory-portfolios'} className='hover:scale-95 hover:underline duration-300'>Intelligent Advisory Portfolios</Link>
                  {/* <Link to={'/portfolio-management-services'} className='hover:scale-95 hover:underline duration-300'>Portfolio Management Services</Link> */}
                  <Link to={'/derivative'} className='hover:scale-95 hover:underline duration-300'>Derivative</Link>
                </ul>
              </div>
    
              <div className='flex flex-col justify-start gap-4'>
                <h4 className='text-sm font-extrabold text-black'>ADDRESS</h4>
                <ul className='font-semibold flex flex-col gap-2 '>
                  <p className=''>62/1155 The Hub Building,<br/> Near Gandhi Park, 
                  Cherooty Road,<br className='md:hidden'/> Kozhikode, Kerala, India - 673032</p>
                </ul>
                <div className='text-2xl flex gap-3 items-center'>
                  <a href="#" className='hover:scale-95 duration-200'><FaLinkedinIn/></a>
                  <a href="#" className='hover:scale-95 duration-200'><IoMailOutline/></a>
                  <a href='https://api.whatsapp.com/send?phone=917907302020' target='_blank' className='hover:scale-95 duration-200'><FaWhatsapp/></a>

                </div>
              </div>
             
              
          </div>
          
          {/* ======= */}
          <div className='pt-10 flex justify-between text-xs text-gray-500 '>
            <p>©2024 - Copyright</p>
            <a className='hover:underline hover:text-secclr duration-300' href='https://dostudio.co.in' target='_blank'>Powered by DO studio</a>
          </div>
      </div>
      <a href='https://api.whatsapp.com/send?phone=917907302020' target='_blank' className='fixed right-3 bottom-16 bg-secclr border shadow-xl border-white rounded-full w-14 h-14 text-white grid place-items-center'>
        <FaWhatsapp className='text-3xl'/>
      </a>
      <ScrollToTopButton/>
    </footer>
  )
}

export default Footer