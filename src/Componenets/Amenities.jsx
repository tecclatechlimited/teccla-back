import React from "react";
import dream from "../assets/dream.jpg";

const Amenities = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 mt-12">
      <div className="">
        <div className="flex flex-col text-left items-start m-5">
          <h3 className="font-bold text-orange-800 text-2xl p-1">AMENITIES</h3>
          <h2 className="block p-1 text-4xl">MODERN LIVING</h2>
          <p className="block text-left text-xl font-bold p-3">
            The future of communal living is here. Perfect for business or
            entertaining friends Clarendon Residences offers luxury amenities
            like no other central city building.
          </p>
          <div className="block text-left text-xl  p-3">
            <ul class="list-none pl-4">
              <li class="flex items-center">
                <span class="text-orange-700 mr-2">&#10148;</span> Concierge
              </li>
              <li class="flex items-center">
                <span class="text-orange-700 mr-2">&#10148;</span> Lounge
              </li>
              <li class="flex items-center">
                <span class="text-orange-700 mr-2">&#10148;</span> Business Lounge
              </li>
              <li class="flex items-center">
                <span class="text-orange-700 mr-2">&#10148;</span> Meeting  Rooms 
              </li>
              <li class="flex items-center">
                <span class="text-orange-700 mr-2">&#10148;</span> Sports Lounge
              </li>
              <li class="flex items-center">
                <span class="text-orange-700 mr-2">&#10148;</span> Games Room
              </li>
              <li class="flex items-center">
                <span class="text-orange-700 mr-2">&#10148;</span> Terrace
              </li>
            </ul>
          </div>
          <button className="border-black bg-orange-600 w-40 hover:shadow-md">ENQUIRE NOW</button>
        </div>
      </div>
      <div>
        <img src={dream} />
      </div>
    </div>
  );
};

export default Amenities;
