import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
// import { Transition } from "react-transition-group";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdown = (e) => {
    e.stopPropagation(); // Stop event propagation here

    e.currentTarget.nextSibling.classList.toggle("hidden");
  };



  const closeNavbar = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setNav]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between h-20 px-2 max-w-6xl mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-2" />
        </Link>

        <div className="hidden md:flex">
          <ul className="flex items-center space-x-6 ">
            <li>
              <Link
                className="p-4 text-lg font-medium text-gray-700 hover:text-blue-500"
                exact={true}
                to="/"
                  >
                Home
              </Link>
            </li>

            <li className="relative">
              <button
                className="p-2 flex items-center text-lg font-medium border-none text-gray-700 hover:text-blue-500 focus:outline-none"
                onClick={handleDropdown}
              >
                Project <FaAngleDown className="ml-1" />
              </button>
              <ul className="absolute hidden mt-2 py-2 px-4 bg-white border border-gray-300 shadow left-0 w-56">
                <li>
                  <Link
                    to="/project-details"
                    className="block py-1 font-normal text-gray-700 hover:text-blue-500"
                          >
                    Project Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/project-documents"
                    className="block py-1 font-normal text-gray-700 hover:text-blue-500"
                          >
                    Project Documents
                  </Link>
                </li>
                <li>
                  <Link
                    to="/site-pictures"
                    className="block py-1 font-normal text-gray-700 hover:text-blue-500"
                          >
                    Ongoing Project Pictures
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/contact"
                className="p-4 text-lg font-medium text-gray-700 hover:text-blue-500"
                  >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/portal"
                className="p-4 text-lg font-medium text-gray-700 hover:text-blue-500"
                  >
                Forum
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button
            onClick={handleNav}
            className="p-2 text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Small menu */}
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li>
          <Link
            className="block px-6 py-4 font-medium text-gray-700 hover:text-blue-500"
            exact={true}
            to="/"
            onClick={closeNavbar}
          >
            Home
          </Link>
        </li>
        <li className="block">
          <button
            className="p-2  items-center text-lg font-medium border-none text-gray-700 hover:text-blue-500 focus:outline-none"
            onClick={handleDropdown}
          >
            <span className="ml-6 flex">
              Project
              <FaAngleDown className="mt-2 ml-2" />
            </span>
          </button>

          <ul className="hidden py-2 bg-white border-t border-gray-300">
            <li>
              <Link
                to="/project-details"
                className="block px-6 py-3 font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                activeclassname="text-blue-500 bg-gray-100"
                onClick={closeNavbar}
              >
                Project Details
              </Link>
            </li>
            <li>
              <Link
                to="/project-documents"
                className="block px-6 py-3 font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                activeclassname="text-blue-500 bg-gray-100"
                onClick={closeNavbar}
              >
                Project Documents
              </Link>
            </li>
            <li>
              <Link
                to="/site-pictures"
                className="block px-6 py-3 font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                activeclassname="text-blue-500 bg-gray-100"
                onClick={closeNavbar}
              >
                Ongoing Project Pictures
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to="/contact"
            className="block px-6 py-4 font-medium text-gray-700 hover:text-blue-500"
            onClick={closeNavbar}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/portal"
            className="block px-6 py-4 font-medium text-gray-700 hover:text-blue-500"
            onClick={closeNavbar}
          >
            Forum
          </Link>
        </li>
 
      </ul>
    </nav>
  );
};

export default Navbar;
