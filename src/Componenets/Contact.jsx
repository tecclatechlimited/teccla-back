import React from "react";
import classic from "../assets/classic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import Form from "../Componenets/Form";
import Footer from "../Componenets/Footer";

const Contact = () => {
  return (
    <div className="">
      <div className="w-full h-[65vh] ">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{
            backgroundImage: `url(${classic})`, // Replace with your image path
          }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-4xl  font-bold  mb-4">Contact</h1>
              <p className="text-lg font-regular">Home / Contact Us</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}

      <div className="mt-24 sm:mx-8 md:mx-12 lg:mx-20 grid md:grid-cols-3  gap-8 p-4 mb-20 ">
        <div className="max-w-sm rounded overflow-hidden flex flex-col items-center justify-center  shadow-lg">
          <PhoneIcon className="w-10 h-10 items-start" />
          <div className="px-20 py-8 ">
            <div className="font-bold text-xl   mb-2">Call Now</div>
            <p className="text-gray-700 text-base">080123456789</p>
            <p className="text-gray-700 text-base">080123456789</p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden flex flex-col items-center justify-center shadow-lg">
          <MailIcon className="w-10 h-10" />
          <div className="px-16 py-4">
            <div className="font-bold text-xl mb-2">Email us</div>
            <p className="text-gray-700 text-base">johndoe@gmail.com</p>
            <p className="text-gray-700 text-base">johndoe@gmail.com</p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden flex flex-col items-center justify-center shadow-lg">
          <LocationMarkerIcon className="w-10 h-10" />
          <div className="px-10 py-4">
            <div className="font-bold text-xl mb-2">Address</div>
            <p className="text-gray-700 text-base">
              10, Olusola street, Cement
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10 font-bold text-lg">
        <h2>Have Any Question?</h2>
      </div>
      <div className="">
        <Form />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
