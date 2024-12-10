import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import contactImg from "../../public/ContactImg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope,faLink} from '@fortawesome/free-solid-svg-icons'

 
function Contact() {
  
  return (
    <>
    {/* Navbar start here */}
    <Navbar />

    {/* Contact section start here  */}

      <div className="max-w-screen-2xl max-h-5 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-9 ">
        <div className="mt-28 space-y-12 ">
          <h1 className="text-2xl md:text-4xl">
          Thank you for your interest in{" "}
            <span className="text-pink-500 font-semibold">BookShop </span>
          </h1>
          <p className="mt-10 text-xl ">
          you can find the best way to contact us below.
          </p>
            <div className="mt-4 bg-gray-800 mr-5 rounded-2xl dark:bg-slate-200 dark:text-black">
            <div className="text-2xl py-5 px-5">Contact Us</div>
         
            <div className="px-4 mt-2"> <FontAwesomeIcon icon={faLocationDot} className="mr-8"/> Birla Institute of Technology, Mesra</div>
            <div className="px-4 mt-6 "> <FontAwesomeIcon icon={faPhone} className=" mr-8"/> +91-1234567890</div>
            <div className="px-4 py-5  "> <FontAwesomeIcon icon={faEnvelope} className=" mr-8"/> nittprashant6070@gmail.com</div>
            <div className="px-4 py-1 text-blue-600 "><a href="https://my-portfolio-2-aqiw.onrender.com/" > <FontAwesomeIcon icon={faLink} className=" mr-8 text-gray-400"/> Click Here</a></div>
            </div>
        </div>
        <div className="w-full md:w-1/2  ">
          <img src={contactImg} className="rounded-md w-92 h-92" alt="" />
        </div>
      </div>

      {/* Footer start here */}
      <div className='flex flex-col min-h-screen flex-grow place-content-end'>
      <Footer /> 
      </div>
      
    </>
  );
}


export default Contact;
