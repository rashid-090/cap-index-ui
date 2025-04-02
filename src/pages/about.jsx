import React from "react";
import { Link } from "react-router-dom";
import { capabt2,capabtbg, metaicon,capabt,team1,team2,team3,team4,team5,team6, } from "../assets";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { BsEye } from "react-icons/bs";
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

const TeamData = [
  {
    name: `Thwayyb Mohiudheen`,
    resign: `Managing director - CEO`,
    teamImage:team4,
    linkedin: `https://in.linkedin.com/in/thwayyb-mohiudheen-793647172`,
    mail: `#`,
  },
  {
    name: `Hathim Mohammed`,
    resign: `Chairman`,
    teamImage:team1,
    linkedin: `#`,
    mail: `#`,
  },
  {
    name: `Sabir V M`,
    resign: `Chief operating officer`,
    teamImage:team3,
    linkedin: `https://in.linkedin.com/in/sabir-v-m-20099a23a?original_referer=https%3A%2F%2Fwww.google.com%2F`,
    mail: `#`,
  },
  

  {
    name: `Ummer PV`,
    resign: `General manager`,
    teamImage:team5,
    linkedin: `https://in.linkedin.com/in/ummer-p-v-3a02122b9`,
    mail: `#`,
  },
  {
    name: `Suhail P P`,
    resign: `Associate director`,
    teamImage:team6,
    linkedin: `#`,
    mail: `#`,
  },
  {
    name: `Nashik M`,
    resign: `Associate Director`,
    teamImage:team2,
    linkedin: `https://in.linkedin.com/in/nashik-m-4aa5098`,
    mail: `#`,
  },
];

const About = () => {
  return (
    <section className="w-11/12 2xl:w-10/12 mx-auto min-h-screen space-y-10 xl:space-y-40 py-20 pt-32 xl:pt-36 text-secclr">
      <div className="flex flex-col gap-7">
        <span className="flex capitalize gap-1 text-base font-medium">
          <Link to={"/"} className="font-bold hover:underline">
            home
          </Link>{" "}
          / <p>About Us</p>
        </span>
        {/* <h2 data-aos="fade-up" className="text-3xl text-secclr xl:text-5xl font-bold">About <span className="text-prmclr">Us</span></h2> */}
        <div className='bg-white'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 xl:gap-x-14'>
              <div className='flex flex-col items-center md:items-start gap-5'>
                  <img className='object-cover w-full h-full rounded-2xl md:rounded-[3rem]' src={capabtbg} alt="" />
              </div>
              <div className='flex flex-col justify-center gap-5'>
                  <h2 data-aos="fade-up"  data-aos-delay="100" className='text-3xl text-secclr xl:text-5xl font-bold'>About <span className='text-prmclr'>Us</span></h2>
                  <h4 data-aos="fade-up"  data-aos-delay="120" className="text-sm font-medium">Cap-Index Enterprises: A Premier Financial Powerhouse</h4>
                  <p data-aos="fade-up"  data-aos-delay="150" className='text-base font-medium text-justify'>Founded in 2019 by visionary leaders Mr. Thwayyb Mohiudheen (Managing Director and CEO) Cap-Index Enterprises stands as a distinguished financial broking firm delivering comprehensive financial solutions. Our robust service portfolio spanning equity and commodity trading, mutual fund investments, derivative trading, and insurance reflects our commitment to providing sophisticated, client-centric financial strategies that transform individual and institutional investment landscapes.</p>
                  <Link to={'/contact-us'} data-aos="fade-up"  data-aos-delay="200" className='border w-fit border-secclr font-semibold px-10 h-11 grid place-items-center rounded-full hover:bg-secclr text-secclr hover:text-white duration-300'>Learn More</Link>

                  {/* <div data-aos="fade-up"  data-aos-delay="250" className='grid grid-cols-3 gap-2 md:gap-5 capitalize'>
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
                       
                  </div> */}
              </div>
          </div>
      </div>
      {/* ================= */}
        {/* <p data-aos="fade-up"  data-aos-delay="50" className="text-base font-medium xl:w-[80%]">
          Cap-index Enterprises is a financial expertise hub, founded by Mr.
          Thwayyb Mohiudheen, the Managing Director and CEO and Mr. Hathim
          Mohammed, the Chairman. Established in 2019, our company has been
          dedicated to providing financial solutions. We offer a range of
          services, including equity trading, commodity trading, portfolio
          management, mutual funds investment, derivative trading and insurance
          services, catering to diverse financial needs with professionalism.
        </p>
        <img
          data-aos="fade-up"  data-aos-delay="100"
          className="h-[600px] object-cover rounded-2xl shadow-xl"
          src={capabt2}
          alt="about"
        /> */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-10">
          <div data-aos="fade-up"  data-aos-delay="200" className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-5xl font-extrabold">1.5M</h3>
            <p className="text-sm font-semibold text-mygray">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div data-aos="fade-up"  data-aos-delay="300" className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-5xl font-extrabold">49%</h3>
            <p className="text-sm font-semibold text-mygray">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div data-aos="fade-up"  data-aos-delay="400" className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-5xl font-extrabold">$2M</h3>
            <p className="text-sm font-semibold text-mygray">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div data-aos="fade-up"  data-aos-delay="500" className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-5xl font-extrabold">93%</h3>
            <p className="text-sm font-semibold text-mygray">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div> */}
      </div>
      {/*  */}
      <div className="">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 h-full pt-10">
          <div data-aos="fade-up"  data-aos-delay="100" className="flex flex-col gap-5 justify-center">
            <h2 className="text-3xl text-secclr xl:text-5xl font-bold">
              Our <span className="text-prmclr">Core<br className="hidden xl:block" /> Values</span>
            </h2>

            <p className="text-base font-medium ">
              Cap-index is committed to delivering exceptional financial
              services.
            </p>
          </div>
          <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div data-aos="fade-up"  data-aos-delay="200" className="flex flex-col gap-3">
            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-3 items-center">
                <div className="h-5 w-5 rounded-full bg-prmclr"></div>
                <h4 className="text-xl font-bold capitalize">Integrity</h4>
              </div>
              <p className="font-medium pl-8  text-sm xl:w-[80%]">
              Upholding honesty and ethical standards in all our dealings.
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
            <div className="flex gap-3 items-center">

              <div className="h-5 w-5 rounded-full bg-prmclr"></div>
              <h4 className="text-xl font-bold capitalize">
                Client-Centricity
              </h4>
            </div>
              <p className="font-medium pl-8  text-sm xl:w-[80%]">
              Putting our clients' needs first and tailoring our services to their specific goals.
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
            <div className="flex gap-3 items-center">

              <div className="h-5 w-5 rounded-full bg-prmclr"></div>
              <h4 className="text-xl font-bold capitalize">
                Profound Knowledge
              </h4>
            </div>
              <p className="font-medium pl-8  text-sm xl:w-[80%]">
                 Leveraging our deep understanding of the financial market to provide expert advice.
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
            <div className="flex gap-3 items-center">

              <div className="h-5 w-5 rounded-full bg-prmclr"></div>
              <h4 className="text-xl font-bold capitalize">Innovation</h4>
            </div>
              <p className="font-medium pl-8  text-sm xl:w-[80%]">
              Continuously seeking new ways to improve our services and stay ahead of the curve
              </p>
            </div>
          </div>
          <div data-aos="fade-up"  data-aos-delay="300" className="flex flex-col gap-3">
            <div className="bg-[#eef6fc] h-full w-full p-6 pr-16 rounded-2xl relative">
              <span className="bg-white grid place-items-center rounded-lg rounded-tl-none rounded-br-none w-12 h-28 absolute top-0 right-0">
                <div className="bg-prmclr rounded-lg h-[90%] w-[80%] flex justify-center items-center">
                    <TbTargetArrow className="text-white text-2xl"/>
                </div>
              </span>
              <h4 className="text-xl font-extrabold capitalize"><span className="font-medium">Our</span> Mission</h4>
             
                <ul className="list-disc pl-4 text-sm font-medium pt-2 space-y-1">
                    <li>Provide comprehensive financial broking services at affordable
                rates for all clients.</li>
                    <li>Foster long-term relationships by
                tailoring services to meet personal financial goals.</li>
                    {/* <li>Educate clients about the financial market and its scope.</li> */}
                </ul>
                  
         
            </div>
            <div className="bg-[#eef6fc] h-full w-full p-6 pl-16 rounded-2xl relative">
                <span className="bg-white grid place-items-center rounded-lg rounded-br-none rounded-tl-none w-12 h-28 absolute bottom-0 left-0">
                <div className="bg-prmclr rounded-lg h-[90%] w-[80%] flex justify-center items-center">
                <BsEye className="text-white text-xl"/>
                </div>
                
              </span>
              <h4 className="text-xl font-extrabold capitalize"><span className="font-medium">Our</span> Vision</h4>
              <ul className="list-disc pl-4 text-sm font-medium pt-2 space-y-1">
                <li>Earn reputation as a trusted industry leader through exceptional
                performance.</li>
                <li>Evolve into a one-stop
                destination for all financial services.</li>
                {/* <li>Perpetual growth through strategic investments in
                resources, technology and talent.</li> */}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="space-y-10">
        <div data-aos="fade-up"  data-aos-delay="100" className="grid grid-cols-1 xl:grid-cols-3 gap-10 overflow-hidden relative">
          <div className="bg-white hidden xl:block">
            <img src={metaicon} alt="" />
          </div>
          <div className="xl:col-span-2 flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl text-secclr xl:text-5xl font-bold">
                Our <span className="text-prmclr">Expertise</span>
              </h2>
              <p className="text-base font-medium text-justify">
              At Cap-index, our commitment to empowering clients extends beyond mere advisory services — it reflects our expertise in strategic decision-making. We understand that the success of any venture hinges on sound investment decision-making, and that's where our team of seasoned professionals excels. With a wealth of experience and a diverse skill set, our experts guide you to formulate tailored strategies for customers financial goal. At the heart of our approach is the dedication to leveraging our collective expertise to propel your enterprise towards sustained growth and prosperity.              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"  data-aos-delay="200" className="grid grid-cols-1 xl:grid-cols-3 gap-20 overflow-hidden">
          <div className="xl:col-span-2 flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl text-secclr xl:text-5xl font-bold">
                Building Wealth Strategically<br/> With <span className="text-prmclr">Cap-index</span>
              </h2>

              <p className="text-base font-medium text-justify">
                Discover a personalized approach to financial success as we
                guide you through the intricate landscape of wealth management.
                Whether you're aiming for long-term financial planning,
                retirement planning or investment growth, Cap-index is your
                trusted partner in navigating the path to prosperity. Embrace a
                future of financial well-being - let's build your wealth
                strategically, together
              </p>
            </div>
          </div>
          <div className="bg-white hidden xl:block">
            <img src={metaicon} alt="" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="space-y-10">
        <div data-aos="fade-up"  data-aos-delay="100" className="flex flex-col gap-y-3 md:flex-row justify-between items-start">
          <h2 className="text-3xl text-secclr xl:text-5xl font-bold capitalize">
            Introducing our
            <br /> incredible <span className="text-prmclr">team.</span>
          </h2>
          {/* <p className="font-medium text-mygray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Architecto, quos.
          </p> */}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-5 xl:gap-10">
          {TeamData?.map((data, i) => (
            <div data-aos="fade-up"  data-aos-delay="200" className="space-y-5">
              <div className="h-[250px] overflow-hidden md:h-[350px] xl:h-[450px] hover:shadow-xl w-full bg-gray-200 hover:bg-gray-300 duration-300 rounded-2xl">
                <img className="object-cover w-full h-full" src={data.teamImage} alt="" />
              </div>
              <div className="flex flex-col gap-y-2 md:flex-row justify-between items-center xl:items-start">
                <span className="flex flex-col items-center md:items-start">
                  <h5 className="text-xs xl:text-lg font-semibold">{data.name}</h5>
                  <p className="text-xs xl:text-sm font-medium text-mygray">
                    {data.resign}
                  </p>
                </span>
                <span className="flex gap-3 text-xl xl:text-2xl items-center">
                 
                  <a
                    className="hover:translate-y-1 duration-200"
                    target="_blank"
                    href={data.linkedin}
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    className="hover:translate-y-1 duration-200"
                    target="_blank"
                    href={data.mail}
                  >
                    <IoMailOutline />
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="">
        <div data-aos="fade-up"  data-aos-delay="300" className="grid grid-cols-1 xl:grid-cols-3 gap-5 ">
          <div className="bg-white hidden xl:block">
            <img src={metaicon} alt="" />
          </div>
          <div className="xl:col-span-2 flex flex-col justify-center items-center xl:items-start text-center xl:text-left">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl text-secclr xl:text-7xl font-black capitalize">
              create<br/> wealth<br/> by <span className="text-prmclr">investing.</span>
              </h2>
              {/* <p className="text-base font-medium xl:w-[60%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                omnis architecto reprehenderit ea vel dolorum.
              </p> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
