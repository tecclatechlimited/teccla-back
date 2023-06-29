import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import {
  FiMessageSquare,
  FiFolder,
  FiShoppingCart,
  FiLogOut,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import ChatRoom from "../pages/ChatRoom";
import { userAuth } from "../Context/AuthContext";
import NewChatRoom from "./NewChatRoom";

const Portal = () => {
  const [open, setOpen] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [chatMessages, setChatMessages] = useState([]);

  const navigate = useNavigate();
  const { currentUser, logout } = userAuth();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(true);
        setIsLargeScreen(true);
      } else {
        setOpen(false);
        setIsLargeScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="flex flex-col">
      {/* Left Sidebar */}
      <div
        className={`bg-[#1c84ad] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4 fixed`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            // onClick={() => setOpen(!open)}
            onClick={toggleSidebar}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          <Link
            to="/user"
            className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div>
              <MdOutlineDashboard size="20" />
            </div>
            <h2
              style={{
                transitionDelay: `300ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              dashboard
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              dashboard
            </h2>
          </Link>

          {/* Repeat the above code block for each menu */}

          {/* Groupchat  */}

          <Link
            to="/dashboard"
            className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div>
              <FiMessageSquare size="20" />
            </div>
            <h2
              style={{
                transitionDelay: `300ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Groupchat
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Groupchat
            </h2>
          </Link>

          {/* SETTING*/}
          <Link
            to="/user"
            className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div>
              <RiSettings4Line size="20" />
            </div>
            <h2
              style={{
                transitionDelay: `1100ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Setting
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Setting
            </h2>
          </Link>

          {/* LOGOUT*/}

          <button
            onClick={handleLogout}
            className={`group flex items-center text-sm gap-3.5 font-medium p-2 border-none hover:bg-gray-800 rounded-md`}
          >
            <div>
              <FiLogOut size="20" />
            </div>
            <h2
              style={{
                transitionDelay: `1100ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Logout
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Logout
            </h2>
          </button>
        </div>
      </div>

      {/* Chatroom Content */}
      <div className={`flex flex-col flex-grow ${open ? "pl-72" : "pl-16"}`}>
      <NewChatRoom />
      </div>
    </section>
  );
};

export default Portal;
