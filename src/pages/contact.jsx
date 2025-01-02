import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { capabt3 } from '../assets';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Nifty, TestApi } from '../components';

const Contact = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp API URL to send message to the given phone number
    const whatsappNumber = '917907302020'; // The WhatsApp number to send the message to
    const whatsappApiUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=
      Name: ${encodeURIComponent(name)}
      Mobile: ${encodeURIComponent(mobileNumber)}
      Email: ${encodeURIComponent(email)}
      Message: ${encodeURIComponent(message)}`;

    // Open the WhatsApp URL with the form data
    window.open(whatsappApiUrl, '_blank');
     // Clear form fields after sending
     setName('');
     setMobileNumber('');
     setEmail('');
     setMessage('');
  };

  return (
    <>
      <section className="w-11/12 2xl:w-10/12 mx-auto min-h-screen py-20 pt-36 text-secclr">
        <div className="flex flex-col gap-7">
          <span className="flex capitalize gap-1 text-base font-medium">
            <Link to={"/"} className="font-bold hover:underline">home</Link> / <p>Contact Us</p>
          </span>
          <h2 data-aos="fade-up" className="text-3xl text-secclr xl:text-5xl font-bold">
            Contact <span className="text-prmclr">Us</span>
          </h2>
        </div>
        {/* Contact form */}
        <div data-aos="fade-up" data-aos-delay="100" className='grid grid-cols-1 md:grid-cols-3 gap-5 pt-10'>
          <div className='md:col-span-2 rounded-3xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={capabt3} alt="" />
          </div>
          <div className=' bg-[#eef6fc] text-black font-medium p-5 py-10 xl:p-10 rounded-3xl shadow-md'>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
              <div className='flex flex-col text-gray-600'>
                <label>Name</label>
                <input
                  className='border-b p-2 border-gray-300 text-black'
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col text-gray-600'>
                <label>Mobile</label>
                <PhoneInput
                  required
                  className='border-b border-gray-300'
                  enableSearch={true}
                  disableSearchIcon={true}
                  inputProps={{name: "mobileNumber", required: true, autoFocus: true}}
                  buttonStyle={{ background: "transparent", border: "none" }}
                  inputStyle={{ background: "transparent", border: "none", fontSize: "16px", color: "#000" }}
                  country={'in'}
                  value={mobileNumber}
                  onChange={(value) => setMobileNumber(value)}
                />
              </div>
              <div className='flex flex-col text-gray-600'>
                <label>Email</label>
                <input
                  className='border-b p-2 border-gray-300 text-black'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col text-gray-600'>
                <label>Message</label>
                <textarea
                  className='p-2 bg-transparent border-b border-gray-300 text-black'
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button className='w-fit border border-secclr px-16 py-2.5 font-semibold rounded-full bg-secclr text-white'>
                Send
              </button>
            </form>
          </div>
        </div>

        {/* <TestApi/>/ */}
      </section>
    </>
  );
};

export default Contact;
