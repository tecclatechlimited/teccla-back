import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image1 from "../../assets/slider/slide4.jpg"
import Image2 from "../../assets/slider/slide5.jpg"
import Image3 from "../../assets/slider/slide6.jpg"


const ImageCarousel = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    {
      original: Image1,
      thumbnail: Image1,
      originalAlt: "Image 1",
      thumbnailAlt: "Image 1",
    },
    {
      original: Image2,
      thumbnail: Image2,
      originalAlt: "Image 2",
      thumbnailAlt: "Image 2",
    },
    {
      original: Image3,
      thumbnail: Image3,
      originalAlt: "Image 3",
      thumbnailAlt: "Image 3",
    },
    // Add more images as needed
  ];

  const openGallery = (index) => {
    setSelectedImageIndex(index);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const renderCustomControls = () => {
    return (
      <div className="image-gallery-custom-controls ">
        <button
          className="image-gallery-custom-control image-gallery-prev"
          onClick={() => imageGallery.slideToIndex(selectedImageIndex - 1)}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="image-gallery-custom-control image-gallery-next"
          onClick={() => imageGallery.slideToIndex(selectedImageIndex + 1)}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <button
          className="image-gallery-custom-control image-gallery-close"
          onClick={closeGallery}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    );
  };

  let imageGallery = null;

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openGallery(index)}
            className="cursor-pointer"
          >
            <img
              src={image.thumbnail}
              alt={image.thumbnailAlt}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      {showGallery && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="max-w-3xl w-full">
            <ImageGallery
              ref={(el) => (imageGallery = el)}
              items={images}
              startIndex={selectedImageIndex}
              showThumbnails={true}
              showFullscreenButton={false}
              showPlayButton={false}
              renderCustomControls={renderCustomControls}
              onSlide={() => setSelectedImageIndex(imageGallery.getCurrentIndex())}
              onBeforeSlide={() => setSelectedImageIndex(imageGallery.getCurrentIndex())}
            />
          </div>
        </div>
      )}
    </>
  );
};

//   return (
//     <>
//       <div className="grid grid-cols-3 gap-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             onClick={() => openGallery(index)}
//             className="cursor-pointer"
//           >
//             <img
//               src={image.thumbnail}
//               alt={image.thumbnailAlt}
//               className="w-full h-auto"
//             />
//           </div>
//         ))}
//       </div>

//       {showGallery && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
//           <div className="max-w-3xl w-full">
//             <ImageGallery
//               items={images}
//               startIndex={selectedImageIndex}
//               showThumbnails={true}
//               showFullscreenButton={false}
//               showPlayButton={false}
//               onClose={closeGallery}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

export default ImageCarousel;
