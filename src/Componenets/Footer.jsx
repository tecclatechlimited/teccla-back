import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
import logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-black bg-opacity-10 text-black py-2 px-2  ">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4">
        <div className="col-span-2">
          <img src={logo} alt="Logo" className="w-32 h-28" />
          <h6 className="text-left  mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tempore sit repellat nihil perferendis, esse distinctio eos dolorem
            facilis rerum quia ad et nisi maxime beatae, quam magnam fugiat nam.
          </h6>
        </div>

        <div>
          <h6 className="font-bold uppercare pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 md:pt-2  ">
          <p className="font-bold uppercase">Subscribe to our newsletters</p>
          <p className="py-4 text-left">
            The Latest deals, articles and resources sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 rounded-md text-white border-2 bg-orange-800">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Experiences, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
