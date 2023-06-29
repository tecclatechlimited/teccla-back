import React from "react";
import melback from "../assets/melback.jpg";
import logo from "../assets/logo.svg";
import map from "../assets/location/map.svg";
import one from "../assets/location/one.svg";
import two from "../assets/location/two.svg";
import three from "../assets/location/three.svg";
import four from "../assets/location/four.svg";
import five from "../assets/location/five.svg";
import six from "../assets/location/six.svg";
import seven from "../assets/location/seven.svg";

const Landmarks = () => {
  return (
    <div className="py-20">
      <h2 className="text-3xl">LANDMARKS</h2>
      <div className="relative bg-[url('../assets/landback.jpg')] flex flex-wrap bg-cover bg-center h-screen">
        <img src={melback} height={120} />
        <div className="absolute top-0 left-0 right-0 bottom-0 p-8 ">
          {/* <div className=" mx-auto grid md:grid-cols-2"> */}
          {/* <img src={map} /> */}
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-4">
            <div className="">
              <img className="w-52" src={logo} alt="Image" />
              Tram stop at doorstep  z
            </div>
            <div>
              <img className="w-16" src={one} alt="Image" />
            </div>

            <div>
              <img className="w-16" src={two} alt="Image" />
            </div>

            <div>
              <img className="w-16" src={three} alt="Image" />
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-4">
            <div>
              <img className="w-16" src={four} alt="Image" />
            </div>
            <div>
              <img className="w-16" src={five} alt="Image" />
            </div>
            <div>
              <img className="w-16" src={six} alt="Image" />
            </div>
            <div>
              <img className="w-16" src={seven} alt="Image" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Landmarks;
