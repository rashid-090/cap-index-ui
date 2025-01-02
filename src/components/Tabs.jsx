import React, { useEffect, useState } from 'react';
import {capabt2,capabt,capabt3,capabt4,capabt5,capabt6} from '../assets'
import { Link } from 'react-router-dom';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const tabs = ['Lorem Lipsum', 'Lorem Lipsum', 'Lorem Lipsum'];
  const contents = [

    {
      title: `What is Lorem Ipsum ?`,
      description: `Cap Index is a leading financial services company based in Calicut, India. Since our inception in 2019, we have been dedicated to providing expert stock broking, investment solutions, portfolio management, and advisory services to our clients. Our mission is to deliver personalized financial solutions that help our society achieve their financial goals.`,
      image: capabt5
    },
    {
      title: `What is Lorem Ipsum ?`,
      description: `Cap Index is a leading financial services company based in Calicut, India. Since our inception in 2019, we have been dedicated to providing expert stock broking, investment solutions, portfolio management, and advisory services to our clients. Our mission is to deliver personalized financial solutions that help our society achieve their financial goals.`,
      image: capabt5
    },
    {
      title: `What is Lorem Ipsum ?`,
      description: `Cap Index is a leading financial services company based in Calicut, India. Since our inception in 2019, we have been dedicated to providing expert stock broking, investment solutions, portfolio management, and advisory services to our clients. Our mission is to deliver personalized financial solutions that help our society achieve their financial goals.`,
      image: capabt5
    },
  ];

  const handleTabChange = (index) => {
    if (index !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(index);
        setIsTransitioning(false);
      }, 300);
    }
  };


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleTabChange((activeTab + 1) % tabs.length);
  //   }, 3000); // 10 seconds

  //   return () => clearInterval(interval);
  // }, [activeTab]);

  return (
    <section className='w-11/12 2xl:w-10/12 mx-auto pb-10 xl:pb-20'>
      <div className="bg-white flex flex-col gap-y-5 md:gap-y-0 md:flex-row gap-5 w-full">
      {/* Tab Navigation */}
      {/* <div className="md:w-[5%] flex md:flex-col items-center justify-center gap-3">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`h-8 w-8 text-base xl:text-xl  pl-5 capitalize font-black ${
              activeTab === index
                ? ' bg-prmclr rounded-full '
                : 'bg-gray-200 rounded-full'
            }`}
            onClick={() => handleTabChange(index)}
          >
           
          </button>
        ))}
      </div> */}

      {/* Tab Content with Transition */}
      <div
        className={`md:w-[95%] bg-[#eef6fc] grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden gap-5  transition-opacity duration-200 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <img className='w-full h-[300px] xl:h-[400px]  shadow-lg object-cover object-top' src={contents[activeTab].image} alt="" />
        <div className='p-5 md:py-10 md:pr-10 text-secclr h-full flex justify-center flex-col'>
          {/* <h2 className="text-2xl xl:text-4xl  font-bold mb-2">{contents[activeTab].title}</h2> */}
          <p className="mb-4 text-sm xl:text-base">{contents[activeTab].description}</p>
          <Link to={'/about-us'} className='border border-secclr w-fit  text-sm hover:bg-secclr hover:text-white duration-200 px-5 py-2 rounded-full'>Learn more</Link>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Tabs