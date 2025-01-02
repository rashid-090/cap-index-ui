import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import {metaicon} from '../assets'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    once:true,
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease',
});


const TestiData=[
    {
        testimonial:`Cap-index has been a game-changer for my stock
        market journey . Their commitment to transparency
        and cutting-edge technology sets them apart. I trust
        Cap-Index to navigate the complexities of the market,
        and the results speak for themselves.`,
        username:`MR.SHAMLAL AHAMED`,
        userImage:metaicon
    },
    {
        testimonial:`Cap-index made navigating the financial markets a
        breeze for a beginner like me. Thwayyb and the
        team's guidance and personalized service have been
        invaluable in building my confidence in investing in
        the share market wisely.`,
        username:`MR.PAULSON JOSEPH`,
        userImage:metaicon
    },
    {
        testimonial:`Cap-index is more than an investment partner;
        they're strategic architects of financial success. Their
        personalized approach and insightful guidance have
        not only secured my investments but have consistently
        outperformed market expectations. Trust Cap-index
        for a journey of financial prosperity.`,

        username:`MR.MUHAMMED RAFEEK.T`,
        userImage:metaicon
    },
    {
        testimonial:`As a finance professional in a Danish logistics
        company, Cap-index has helped me manage my
        portfolio. I am highly satisfied with their services and
        expertise in investment strategies. I appreciate their
        consistent updates and follow-ups regarding my
        portfolio-related transactions.`,

        username:`MR.JAYAKUMAR`,
        userImage:metaicon
    },
    {
        testimonial:`Coming from a petrochemical engineering
        background, delving into the markets felt daunting.
        Cap-index changed the game for me. The team
        provided expert assistance tailored to my needs,
        making the financial landscape more accessible. Their
        guidance has been a catalyst in my journey to navigate
        and invest confidently.`,

        username:`MR.SHABEER USMAN`,
        userImage:metaicon
    },
    
    {
        testimonial:`From the time I first connected with Cap-index about four years ago, the feel-good element was present. Professional, friendly,
        and proactive advice and suggestions, have always been provided in the best interests of the client. I continue to be very happy
        with all interactions with Cap-index from my designated Financial Planner, to whoever else might be on the end of a telephone call
        or e-mail. Staff are very helpful and competent making your experience with Cap-index a pleasurable one.`,

        username:`ADV.RIAZ KHALID`,
        userImage:metaicon
    },
    
    
]

const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handleSlideChange = (swiper) => {
      setCurrentSlide(swiper.realIndex);
    };
  
  return (
    <div className='w-11/12 2xl:w-10/12 mx-auto '>
         <h2 data-aos="fade-up" className='text-2xl xl:text-5xl text-center font-bold pb-10 text-secclr capitalize'>hear from <span className='text-prmclr'>our clients</span></h2>
         <Swiper
         data-aos="fade-in"  data-aos-delay="100"
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      loop={true}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
      modules={[Autoplay,Navigation]}
    >
        {TestiData?.map((dt,i)=>(
      <SwiperSlide className='' key={i}>
          <div className='flex flex-col gap-10 text-secclr' key={i}>
                    <h2 className='text-base xl:text-2xl font-semibold leading-7 xl:leading-10'>" {dt.testimonial} "</h2>
                    <span className='flex gap-3 items-center'>
                        <img className='w-10 bg-secclr p-1 rounded-full h-10 object-cover' src={dt.userImage} alt="" />
                        <p className='text-sm capitalize font-semibold'>{dt.username}</p>
                        
                    </span>
                </div>
      </SwiperSlide>
      ))}
    </Swiper>

    <div data-aos="fade-in"  data-aos-delay="150" className="w-full flex justify-end gap-3">
        <button className="border px-5 py-2.5 rounded-full hover:bg-secclr hover:text-white border-secclr text-secclr overflow-hidden" ref={prevRef}>
        <FaArrowLeft className="text-xs" />
        </button>
        <button className="border px-5 py-2.5 rounded-full hover:bg-secclr hover:text-white border-secclr text-secclr overflow-hidden" ref={nextRef}>
        <FaArrowRight className="text-xs" />
        </button>
      </div>

    </div>
  )
}

export default Testimonials