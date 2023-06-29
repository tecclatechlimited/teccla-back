// eslint-disable-next-line no-unused-vars
import React from "react";
// import classic from "../assets/classic.jpg";
import background from "../assets/background.jpg";
import { ScrollLink } from "react-scroll";

const Offers = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={background} alt="/" />
        <div className="flex flex-col text-left items-start m-5">
          <h3 className="font-bold text-orange-800 text-2xl p-1">
            CLEVER DESIGN
          </h3>
          <h2 className="block p-1 text-4xl">AMAZING LOCATION</h2>
          <p className="block text-left text-lg   p-3">
            Prepare to be captivated by the extraordinary design of our
            building, a true masterpiece that stands as a testament to
            architectural brilliance.Experience a space where
            design transcends limits, creating an atmosphere of unparalleled
            elegance and innovation.
            <span className="block text-lg  py-4 ">
              Situated in a prime location, our duplex building offers
              convenience and accessibility to the best amenities the area has
              to offer. From fine dining restaurants and shopping malls to
              cultural landmarks, everything you need is within reach, making
              this duplex the epitome of luxurious urban living.
            </span>
          </p>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <button className="border-black hover:shadow-md">
              ENQUIRE NOW
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Offers;
