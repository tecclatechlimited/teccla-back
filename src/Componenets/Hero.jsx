// eslint-disable-next-line no-unused-vars
import React from "react";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";
import {Link as ScrollLink } from "react-scroll";
// import classic from "../assets/classic.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      {/* <div className="flex h-10 mg-0 w-full items-center justify-center rounded-lg bg-black dark:bg-neutral-900">
        <p className="text-yellow-400">Building Constructions and Developmets </p>
        <button>Enquire Now</button> 
      </div> */}

      <img
        src={background}
        className="absolute  left-0 w-full h-screen bg-cover bg-no-repeat bg-center"
        alt="Background"
      />
      {/* To Darker the Background */}
      {/* <div className=" bg-black/50 absolute top-0 left-0 w-full h-screen" /> */}
      <div className="absolute   left-0 w-full h-screen bg-black bg-opacity-60" />

      <div className="text-left absolute top-4 h-full flex flex-col justify-center text-white">
        <div className="flex items-center p-6 justify-start">
          {/* <img src={logo4} alt="Logo" className="w-30 h-16 mr-2"  /> */}
        </div>
        <div className="md:left-[10%] max-w-[2000px] m-auto p-4">
          <p className=" text-3xl md:text-4xl  drop-shadow-2xl">
            {/* ARCHITECTURE AND INTERIOR */}
          </p>
          <h1 className="max-w-[900px] drop-shadow-2xl font-thin py-6 px-2 text-3xl md:text-6xl ">
            EXCLUSIVE CITY LIVING
          </h1>
          <p className="text-3xl md:text-4xl sm:text-2xl  drop-shadow-2xl ">
            THE BEST OF MARYLAND
          </p>
          <p className="max-w-[900px] text-gray-300 drop-shadow-2xl py-2 px-2">
            Right design and tight ideas matter a lot of in interior design
            business. A style that makes a statement
          </p>
          <ScrollLink to="contactId" smooth={true} duration={2000} offset={-50}>
            <button className="mt-4 bg-orange-900">
              Enquire Now
              </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
