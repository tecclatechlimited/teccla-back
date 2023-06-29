import React from "react";
import WSPGallery from "./SIteGallery/WSPGallery";

const ImageGallery = () => {
  // Dummy image data
  const galleryImages = [
    {
      id: 1,
      img: "../../assets/slider/slide4.jpg",
      alt: "Image 1",
      title: "Site Image 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    { 
      id: 2,
      img: "../../assets/slider/slide5.jpg",
      alt: "Image 2",
      title: "Site Image 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: "../../assets/slider/slide4.jpg",
      alt: "Image 1",
      title: "Site Image 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    { 
      id: 4,
      img: "../../assets/slider/slide5.jpg",
      alt: "Image 2",
      title: "Site Image 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      img: "../../assets/slider/slide6.jpg",
      alt: "Image 1",
      title: "Site Image 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    { 
      id: 6,
      img: "../../assets/slider/slide7.jpg",
      alt: "Image 2",
      title: "Site Image 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more images...
  ];

  return (
    <div>
          <WSPGallery galleryImages={galleryImages} />
    </div>
  );
};

export default ImageGallery;
