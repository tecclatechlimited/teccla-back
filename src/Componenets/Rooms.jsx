import React from "react";
import slide1 from "../assets/slider/slide1.jpg";
import slide4 from "../assets/slider/slide4.jpg";
import slide5 from "../assets/slider/slide5.jpg";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[540px] bg-blue-100 mx-auto mt-20  lg:mb-[5%] md:mb-[35%] grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p className="pt-4  text-left">
          Experience the epitome of luxury in our duplex's fine interior rooms.
          From the grand foyer with its mesmerizing chandelier to the spacious
          living room filled with natural light, every detail exudes elegance.
          The bedrooms offer a serene retreat, while the bathrooms showcase
          impeccable craftsmanship. Work or study in style in the private office
          space. Discover the perfect balance of beauty and comfort in our
          meticulously designed interior rooms.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img className="object-cover w-full h-full" src={slide1} alt="/" />
        <img
          className="row-span-2 object-cover w-full h-full"
          src={slide4}
          alt="/"
        />
        <img className="object-cover w-full h-full" src={slide5} alt="/" />
      </div>
    </div>
  );
};

export default Rooms;
