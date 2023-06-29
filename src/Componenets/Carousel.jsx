import React from "react";
import { EmblaCarousel } from "./EmblaCarousel";

const Carousel = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      <EmblaCarousel />

      <div className="flex flex-col text-left items-start m-5">
        <h3 className="font-bold text-orange-800 text-2xl p-1">
          CLEVER DESIGN
        </h3>
        <h2 className="block p-1 text-4xl">AMAZING LOCATION</h2>
        <p className="block text-left text-xl p-3">
          The Clarendon Residences is located in the perfect pocket a mere
          kilometre from Melbourne’s CBD.
          <span className="block text-lg py-4 ">
            Close to the best that Melbourne has to offer with Crown Casino,
            Southbank, Clarendon Street, the South Melbourne market and many of
            the city’s best bars and restaurants. A short tram ride to the CBD
            or the beach, everything is within reach living at the Clarendon
            Residences.
          </span>
        </p>
        <button className="border-black hover:shadow-md">ENQUIRE NOW</button>
      </div>
    </div>
  );
};

export default Carousel;
