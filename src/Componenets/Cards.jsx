import React from "react";
import furniture from "../assets/cards/dream.jpg";
import dream from "../assets/cards/dream.jpg";
import bedroom from "../assets/cards/bedroom.png";
import toilet from "../assets/cards/toilet.png";

const Cards = () => {
  return (
    <div className="w-full py-[3rem] px-4 bg-white">
      <div className="font-bold text-4xl  text-orange-800">
        <h1>THE FLOORPLANS</h1>
        <p className="px-10 text-3xl text-black">
          THE CLARENDON RESIDENCES OFFER 39 LEVELS OF LIVING WITH 1, 2 AND 3
          BEDROOM FLOORPLANS TO SUIT YOUR LIFESTYLE.
        </p>
      </div>  
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 py-8 gap-24">
        <div className="w-full h-[auto] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-auto mx-auto bg-white" src={furniture} alt="/" />

          <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-4 text-orange-800">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold pt-6 pb-4">2</h2>
              <img className="w-20 mx-auto bg-white" src={bedroom} alt="/" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold py-6">2</h2>
              <img className="w-20 mx-auto bg-white" src={toilet} alt="/" />
            </div>
          </div>

          {/* <p className="text-center text-4xl  text-orange-800 mt-6">
            From $140,000
          </p> */}

          <button className="bg-[#ff5722] w-[200px] rounded-md hover:scale-105  font-medium my-8 mx-auto px-6 py-3">
            ENQUIRE NOW
          </button>
        </div>

        <div className="w-full h-[auto] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-auto mx-auto bg-white" src={furniture} alt="/" />

          <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-4 text-orange-800">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold pt-6 pb-4">3</h2>
              <img className="w-20 mx-auto bg-white" src={bedroom} alt="/" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold py-6">2</h2>
              <img className="w-20 mx-auto bg-white" src={toilet} alt="/" />
            </div>
          </div>

          {/* <p className="text-center text-4xl  text-orange-800 mt-6">
            From $150,000
          </p> */}

          <button className="bg-[#ff5722] w-[200px] rounded-md hover:scale-105  font-medium my-8 mx-auto px-6 py-3">
            ENQUIRE NOW
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default Cards;
