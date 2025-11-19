import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { capabt3 } from '../assets';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Nifty, TestApi } from '../components';
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(''); // Error state for validation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if mobileNumber is empty
    if (!mobileNumber) {
      setError('Mobile number is required.');
      return;
    }

    setError(''); // Clear error if validation passes

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
                  inputProps={{ name: "mobileNumber", required: true, autoFocus: true }}
                  buttonStyle={{ background: "transparent", border: "none" }}
                  inputStyle={{ background: "transparent", border: "none", fontSize: "16px", color: "#000" }}
                  country={'in'}
                  value={mobileNumber}
                  onChange={(value) => setMobileNumber(value)}
                />
                {error && <p className="text-red-500 text-xs mt-2">{error}</p>} {/* Display error */}
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
         <h2 data-aos="fade-up" className="mt-40 mb-10 text-center text-xl text-secclr xl:text-3xl font-bold">
            Our <span className="text-prmclr">Locations</span>
          </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
  {[
    {
      city: "Kozhikode",
      address: [
        "62/1155, The Hub, Cherootty Road, Near Gandhi Park, Kozhikode, 673032, Kerala, India."
      ],
      phone: "+91 7907 30 20 20",
      tel: "917907302020"
    },
    {
      city: "Kochi",
      address: [
        "Door No. 46/3583/G-6 8G, Level-8, Nippon Q1 Business Park, Service road East, NH-66 Bypass, Vennala PO, Eranakulam, Kochi-682028."
      ],
      phone: "+91 7907 30 20 11",
      tel: "917907302011"
    },
    {
      city: "Wayanad",
      address: [
        "Room No. 17/479 G",
        "Near Canal Road, Muttil Panchayat,",
        "Wayanad - 673122"
      ],
      phone: "+91 6282 75 20 20",
      tel: "916282752020"
    },
    {
      city: "Kannur",
      address: [
        "Cap-index, 45/608, Beside Louis Philippe, Opposite Specialty Hospital, Thana, Kannur, Kerala - 670012."
      ],
      phone: "+91 8848 77 20 20",
      tel: "918848772020"
    }
  ].map((loc, i) => (
    <div
      key={i}
      data-aos="fade-up"
      className="space-y-3 border p-5 rounded-2xl shadow-lg hover:shadow-2xl duration-200 h-full flex flex-col justify-between"
    >
      <p className="font-semibold text-lg">{loc.city}</p>

      <div className="flex gap-2 items-start">
        <div>
          <MdLocationPin className="mt-[2px]" />
        </div>

        <p className="text-sm leading-relaxed">
          {loc.address.map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>

      <a
        href={`tel:${loc.tel}`}
        className="text-sm font-semibold flex gap-2 items-start mt-2"
      >
        <FaPhoneAlt className="mt-[3px]" />
        <p>{loc.phone}</p>
      </a>
    </div>
  ))}
</div>


      </section>
    </>
  );
};

export default Contact;
