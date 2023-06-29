// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import slide1 from "../assets/slider/slide1.jpg";
import slide2 from "../assets/slider/slide2.jpg";
import slide3 from "../assets/slider/slide3.jpg";
import slide4 from "../assets/slider/slide4.jpg";
import slide5 from "../assets/slider/slide5.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const slides = [slide1, slide2, slide3, slide4, slide5];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group">
      <img
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        src={slides[currentIndex]}
      />

      {/* <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
          style={{backGroundImage:` url{${slides[currentIndex].url}}`}}
      </div> */}

      {/* left Arrow */}
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2
       group-hover:bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* right Arrow */}
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2
       group-hover:bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-4">
        {slides.map((slide, slideIndex) => (
          <div 
          className="text-2xl cursor-pointer"
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
           >
            <RxDotFilled size={25} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
