import React from "react";
import interior2 from "../assets/interior2.jpg";

const Updates = () => {
  return (
    // <div className="max-w-[1000px] grid md:grid-cols-2 py-8 mx-4 gap-12">
    <>
      <h3 className="justify-center items-center mt-16 font-bold text-4xl  text-orange-800">
        LATEST UPDATES
      </h3>
      <div className="max-w-[1100px] grid md:grid-cols-2 mx-auto mb-20 py-8 gap-12 justify-center items-center">
        {/* <div className="block text-left shadow-xl p-4  rounded-lg hover:scale-105 duration-300"> */}
        <div className="block text-left shadow-xl p-4 ">
          <img src={interior2} />
          <h2 className="font-bold mt-8 text-orange-800">PROPERTY DEVELOPER / BUILDER </h2>
          <h2 className="text-3xl mb-2">LK PROPERTY GROUP </h2>
          <p className="font-semibold font-serif">
            LK Property Group offers unparalleled service with over 20 years of
            experience in high end design and property development.
          </p>
          <h3 className="text-xl mt-4 mb-4 font-thin">
            LK Property Group provides concierge during, and after the
            purchasing process to help make things go smoothly, and provide a
            level of service you deserve.
          </h3>
          <h3 className="text-xl mt-4 font-thin">
            Projects by LK Property Group produce landmark residences on key
            sites for discerning buyers who want to be in the right location and
            live in their dream home.
          </h3>
        </div>
        {/* SECOND ONE  */}
        <div className="block text-left shadow-xl p-4  ">
          <img src={interior2} />
          <h2 className="font-bold mt-8 text-orange-800">
            PROPERTY DEVELOPER / STRUCTURAL ENGINEER
          </h2>
          <h2 className="text-3xl mb-2">LK PROPERTY GROUP </h2>
          <p className="font-semibold font-serif">
            LK Property Group offers unparalleled service with over 20 years of
            experience in high end design and property development.
          </p>
          <h3 className="text-xl mt-4 mb-4 font-thin">
            LK Property Group provides concierge during, and after the
            purchasing process to help make things go smoothly, and provide a
            level of service you deserve.
          </h3>
          <h3 className="text-xl mt-4 font-thin">
            Projects by LK Property Group produce landmark residences on key
            sites for discerning buyers who want to be in the right location and
            live in their dream home.
          </h3>
        </div>
      </div>

    </>
  );
};

export default Updates;
