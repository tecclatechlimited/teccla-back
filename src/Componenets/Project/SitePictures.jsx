import React from "react";
import ImageGallery from "./ImageGallery";
import classic from "../../assets/classic.jpg";
import Footer from "../Footer";


const SitePictures = () => {
  return (
    <div>
      <div className="w-full h-[65vh] ">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{
            backgroundImage: `url(${classic})`, // Replace with your image path
          }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-4xl  font-bold  mb-4">Architecture</h1>
              <p className="text-lg"> Project  / Site pictures</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Site Pictures</h1>
        <ImageGallery />
      </div>
      <Footer />
    </div>
  );
};

export default SitePictures;
