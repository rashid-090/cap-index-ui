import React from 'react'
import { Link } from 'react-router-dom';
import { Banner,Faq, Testimonials, Service, Tabs, HomeCal, Whychoose,Calculator,Graph } from '../components';
import {ellips,capabt,capmap} from '../assets';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    once:true,
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease',
});


const Home = () => {
  return (
    <section>
      {/* banner */}
      <Banner/>
      {/* about */}
      <div className='w-11/12 xl:w-9/12 mx-auto pt-20 py-10 xl:pb-20'>
        <h2 data-aos="fade-up" className='text-2xl xl:text-5xl capitalize text-center font-black text-secclr'>We are at your service,<br className='hidden xl:block'/> <span className='text-prmclr'>guiding you in the right way.</span></h2>
      </div>
      {/* <div className='bg-white pt-28 py-10 xl:py-20 xl:pt-24'>
          <div className='w-11/12 2xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 xl:gap-x-20'>
              <div className='flex flex-col items-center md:items-start gap-5'>
                  <img className='object-cover w-full h-full rounded-2xl md:rounded-[3rem]' src={capabt} alt="" />
              </div>
              <div className='flex flex-col justify-center gap-5'>
                  <h2 data-aos="fade-up"  data-aos-delay="100" className='text-3xl text-secclr xl:text-5xl font-bold'>About <span className='text-prmclr'>Us</span></h2>
                  <p data-aos="fade-up"  data-aos-delay="150" className='text-base font-normal text-mygray text-justify'>Cap-index Enterprises is a financial expertise hub, founded by Mr. Thwayyb 
                  Mohiudheen, the Managing Director and CEO and Mr. Hathim Mohammed, the
                  Chairman. Established in 2019, our company has been dedicated to providing 
                  financial solutions. We offer a range of services, including equity trading, 
                  commodity trading, portfolio management, mutual funds investment, derivative 
                  trading and insurance services, catering to diverse financial needs with 
                  professionalism. As a premium franchise of Motilal Oswal in India, we excel in all 
                  our operations. Our success is reflected in our substantial client base and our 
                  commitment to providing exceptional service.</p>
                  <Link to={'/about'} data-aos="fade-up"  data-aos-delay="200" className='border w-fit border-secclr font-semibold px-10 h-11 grid place-items-center rounded-full hover:bg-secclr text-secclr hover:text-white duration-300'>Learn More</Link>

                  <div data-aos="fade-up"  data-aos-delay="250" className='grid grid-cols-3 gap-2 md:gap-5 capitalize'>
                        <div className='bg-white border shadow-xl rounded-2xl p-2 py-5 xl:p-10 flex flex-col items-center justify-center'>
                          <h4 className='text-secclr text-lg xl:text-2xl font-extrabold'>10k+</h4>
                          <p className='text-mygray text-xs xl:text-base'>happy client</p>
                        </div>
                        <div className='bg-white border shadow-xl rounded-2xl p-2 py-5 xl:p-10 flex flex-col items-center justify-center'>
                          <h4 className='text-secclr text-lg xl:text-2xl font-extrabold'>20k+</h4>
                          <p className='text-mygray text-xs xl:text-base'>destination</p>
                        </div>
                        <div className='bg-white border shadow-xl rounded-2xl p-2 py-5 xl:p-10 flex flex-col items-center justify-center'>
                          <h4 className='text-secclr text-lg xl:text-2xl font-extrabold'>15k+</h4>
                          <p className='text-mygray text-xs xl:text-base'>akomodasi</p>
                        </div>
                       
                  </div>
              </div>
          </div>
      </div> */}

      {/* tabs */}
      <Tabs/>
      {/*  */}
      <div className='w-11/12 xl:w-9/12 mx-auto py-10 xl:pb-20'>
        <h2 data-aos="fade-up" className='text-2xl xl:text-5xl capitalize text-center font-black text-secclr'>The earlier you start,<br className='md:hidden'/> the better. Start small,<br className='md:hidden'/> <span className='text-prmclr'>Grow big.</span></h2>
      </div>
      {/*  */}
      <Calculator/>
      {/*  */}
      <div className='w-full py-10 pt-20'>
        <Graph/>
      </div>
      {/* service */}
      <div className='bg-white pt-20 py-10'>
          <Service/>
      </div>

      {/*  */}
      <Whychoose/>
  
      {/* testimonials */}
      <div className='bg-white py-10 '>
          <Testimonials/>
      </div>
      {/* faq */}
      <div className='bg-white py-10 w-11/12 2xl:w-10/12 mx-auto'>
          <Faq/>
      </div>
      {/*  */}
      <div className='bg-white pt-10 w-11/12 2xl:w-7/12 mx-auto text-center'>
        {/* <h1 data-aos="fade-up"  className='text-3xl xl:text-5xl font-bold text-secclr'>Lorem ipsum dolor sit amet.</h1>
        <p data-aos="fade-up"  className='text-secclr pb-5 pt-5 text-base xl:w-[80%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reprehenderit magni eligendi cumque suscipit voluptate architecto atque incidunt nemo similique?</p> */}
          <img className=' w-full object-cover' src={capmap} alt="" />
      </div>
    </section>
  )
}

export default Home