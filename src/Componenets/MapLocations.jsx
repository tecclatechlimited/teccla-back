import React from "react";
import melback from "../assets/melback.jpg";
import map from "../assets/location/map.svg";
import one from "../assets/location/one.svg";
import two from "../assets/location/two.svg";
import three from "../assets/location/three.svg";
import four from "../assets/location/four.svg";
import five from "../assets/location/five.svg";
import six from "../assets/location/six.svg";
import seven from "../assets/location/seven.svg";
import logo from "/assets/logo/logo.png";

const MapLocations = () => {
    const images = [
        { src: "/assets/location/one.svg", alt: "Image 1", distance: "5 mins to", description: "Central Train Terminal Point, Ikeja" },
        { src: "/assets/location/two.svg", alt: "Image 2", distance: "10 mins to", description: "Computer Village" },
        { src: "/assets/location/three.svg", alt: "Image 3", distance: "15 mins to", description: "Muritala Muhammed International Airport, Ikeja" },
        { src: "/assets/location/four.svg", alt: "Image 4", distance: "12 mins to", description: "Mma 1 Domestic Airport " },
        { src: "/assets/location/five.svg", alt: "Image 5", distance: "12 mins to", description: "Mm2 Local AIrport" },
        { src: "/assets/location/six.svg", alt: "Image 6", distance: "10 mins to", description: "Sam Ethnan Airforce (Logistic Base)" },
        { src: "/assets/location/seven.svg", alt: "Image 7", distance: "10 mins to", description: "Sam Ethnan Airforce (Logistic Base)" },
        // { src: "/assets/location/six.svg", alt: "Image 8", distance: "10 mins to", description: "Nigeria Police College, Ikeja" },


        // Add more image data objects as needed
      ];
  return (
    <div className="relative flex flex-wrap bg-cover mt-24  bg-center h-screen">
      <img src={melback} className="flex flex-wrap" />
      <div className="absolute grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-6">
        {/* First Row */}
        <div className="col-span-1 items-center">
          {/* Space for Logo */}
          <img src={logo} className="w-32 h-32 items-center ml-14" alt="TECCLA" />
          {/* Add your logo component or content here */}
        </div>

        {/* Second Row */}

            {/* Spaces for Images */}
    {images.map((image, index) => (
      <div className="col-span-1" key={index}>
        {/* Space for Image */}
        <div className="flex flex-col items-center">
          <img
            className="w-16 max-w-xs"
            src={image.src}
            alt={image.alt}
          />
          <p className="text-center text-cyan-500">{image.distance}</p>
          <p className="text-center text-white">{image.description}</p>
        </div>
      </div>
    ))}

      </div>
    </div>
  );
};

export default MapLocations;

  
