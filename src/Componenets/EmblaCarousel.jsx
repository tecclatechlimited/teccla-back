import React from "react";
import slide1 from "../assets/slider/slide1.jpg";
import slide4 from "../assets/slider/slide4.jpg";
import slide5 from "../assets/slider/slide5.jpg";
import slide6 from "../assets/slider/slide6.jpg";
import slide7 from "../assets/slider/slide7.jpg";
import slide8 from "../assets/slider/slide8.jpg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src={slide1} />
        </div>
        <div className="embla__slide">
          <img src={slide4} />
        </div>
        <div className="embla__slide">
          <img src={slide5} />
        </div>
        <div className="embla__slide">
          <img src={slide6} />
        </div>
        <div className="embla__slide">
          <img src={slide7} />
        </div>
        <div className="embla__slide">
          <img src={slide8} />
        </div>
      </div>
    </div>
  );
};
