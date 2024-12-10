import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMeImg from "../../public/AboutMeImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      {/* Navbar start here */}
      <Navbar />

      {/* Contact section start here  */}

      <div className="max-w-screen-2xl max-h-5 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-9 ">
        <div className="w-full md:w-1/2 mt-12 md:mt-28">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Yes, you are at the{" "}
              <span className="text-pink-500"> Right Place</span>
            </h1>
            <p className="text-xl">
              This website is a testing project that implements user
              authentication and features virtual payment integration using
              RazorPay, which is available after logging in. The technologies
              used in this project include React.js, Node.js, Express.js, and
              MongoDB. To explore the features, please sign up or register.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={AboutMeImg} className="rounded-md w-92 h-92" alt="" />
        </div>
      </div>

      {/* Footer start here */}
      <div className="flex flex-col min-h-screen flex-grow place-content-end">
        <Footer />
      </div>
    </>
  );
}

export default Contact;
