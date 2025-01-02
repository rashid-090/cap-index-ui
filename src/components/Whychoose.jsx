import React, { useState } from 'react';

const WhyChooseData = [
    {
        id:1,
        title:`Diverse Investment Services`,
        desc:`Our comprehensive service offerings include derivatives, alternative investment funds (AIFs), initial public offerings (IPOs), equity trading, insurance, investment advisory plans (IAPs), and mutual funds. Whether you’re looking to trade equities, explore new IPOs, diversify with AIFs, or safeguard your future with insurance, we have the expertise to cater to all your financial needs under one roof.`
    },
    {
        id:2,
        title:`Expert Guidance and Insights`,
        desc:`With a team of seasoned professionals, we bring extensive market experience and deep financial knowledge to the table. Our experts are constantly monitoring market trends and economic indicators to provide you with timely and informed advice. Our goal is to empower you with the insights needed to make well-informed investment decisions.`
    },
    {
        id:3,
        title:`Customized Solutions for Your Financial Goals`,
        desc:`We understand that every investor has unique goals and risk tolerances. That’s why we offer personalized investment strategies tailored specifically to your individual needs. Whether you’re planning for retirement, seeking growth, or managing risk, we develop solutions that align with your objectives and financial situation.`
    },
    {
        id:4,
        title:`Cutting-Edge Technology and Tools`,
        desc:`In today’s fast-moving financial markets, having access to the latest technology is crucial. We leverage state-of-the-art trading platforms and analytical tools to ensure you have real-time information and seamless trading experiences. Our technology helps you stay ahead of market trends and make quick, informed decisions.`
    },
    {
        id:5,
        title:`Transparent and Ethical Practices`,
        desc:`We are dedicated to maintaining the highest standards of transparency and integrity. Our clear communication and ethical approach ensure that you always understand what’s happening with your investments. Trust and honesty are at the core of our business practices, providing you with peace of mind and confidence in every transaction.`
    },
  
    {
        id:6,
        title:`Holistic Financial Planning`,
        desc:`Beyond investment management, we offer holistic financial planning services. From insurance solutions to comprehensive investment advisory plans (IAPs), our goal is to support your overall financial well-being. We look at the bigger picture to help you achieve long-term financial stability and growth.`
    },
    {
        id:7,
        title:`Dedicated Client Support`,
        desc:`Exceptional service is at the heart of what we do. Our dedicated client support team is always available to assist with your inquiries, provide guidance, and address any concerns. We are committed to delivering a personalized experience and ensuring that your investment journey is smooth and successful.`
    },
   
    {
        id:8,
        title:`Proven Track Record of Success`,
        desc:`Our track record of delivering successful investment outcomes and high client satisfaction speaks volumes. We pride ourselves on our ability to help clients achieve their financial goals and navigate the complexities of the financial markets with confidence.`
    },
]

const Whychoose = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <section className='w-11/12 2xl:w-10/12 mx-auto space-y-10 py-10 xl:py-20'>
        <div className='flex flex-col justify-center items-center text-secclr'>
            <h2 data-aos="fade-up" className='text-2xl xl:text-5xl font-black pb-5 text-center capitalize'>Why We’re<br/> the <span className='text-prmclr'>Right Choice</span></h2>
            {/* <p className='text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, officiis?</p> */}
        </div>
        <div className='xl:hidden grid grid-cols-1 xl:grid-cols-4 gap-5 text-secclr'>
            {WhyChooseData.slice(0, showMore ? WhyChooseData.length : 4).map((data,i)=>(
                <div key={i} className='group relative rounded-3xl h-fit min-h-20 xl:min-h-40 bg-white cursor-pointer p-5 xl:py-8  xl:pt-14 shadow-xl hover:shadow-2xl duration-200 flex flex-col text-center gap-2'>
                    <span className='bg-secclr group-hover:bg-prmclr duration-200 rounded-full text-white shadow-xl text-sm xl:text-base h-8 w-8 xl:w-10 xl:h-10 grid place-items-center absolute -top-3 -left-3 font-black'>{data.id}</span>
                    <h4 className='text-base xl:text-lg font-black z-20'>{data.title}</h4>
                    <p className='text-sm z-20 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 duration-300'>
                            {data.desc}
                        </p>
                </div>
            ))}
        </div>
        <div className='hidden xl:grid grid-cols-1 xl:grid-cols-4 gap-5 text-secclr'>
            {WhyChooseData.slice(0, showMore ? WhyChooseData.length : 4).map((data,i)=>(
                <div key={i} className='group relative rounded-3xl h-full bg-white cursor-pointer p-5 xl:py-8  xl:pt-14 shadow-xl hover:shadow-2xl duration-200 flex flex-col text-center gap-2'>
                    <span className='bg-secclr group-hover:bg-prmclr duration-200 rounded-full text-white shadow-xl text-sm xl:text-base h-8 w-8 xl:w-10 xl:h-10 grid place-items-center absolute -top-3 -left-3 font-black'>{data.id}</span>
                    <h4 className='text-base xl:text-lg font-black z-20'>{data.title}</h4>
                    <p className='text-sm z-20 '>
                            {data.desc}
                        </p>
                </div>
            ))}
        </div>
        <div className="grid place-items-center">
            <button
            onClick={() => setShowMore(!showMore)}
            className="text-secclr hover:text-prmclr font-semibold text-sm mt-3"
            >
            {showMore ? "Show less" : "Show more"}
            </button>
        </div>
    </section>
  )
}

export default Whychoose;