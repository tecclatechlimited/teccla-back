import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./Componenets/Home";
import Navbar from "./Componenets/Navbar";
import Contact from "./Componenets/Contact";
import Sidebar from "./Componenets/Sidebar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ChatRoom from "./pages/ChatRoom";
import User from "./pages/User";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import { AuthProvider } from "./Context/AuthContext";
import Project from "./Componenets/Project/Project";
import ProjectDocs from "./Componenets/Project/ProjectDocs";
import SitePictures from "./Componenets/Project/SitePictures";
import ImageGallery from "./Componenets/Project/ImageGallery";
import Portal from "./pages/Portal";
import { useState, useEffect } from "react";
import RenderModel from "./Componenets/Project/Model/RenderModel";
import UsersList from "./pages/Admin/SideUsersList";
import TestProfile from "./Componenets/Profile/Profile";
import TestMessage from "./Componenets/Chat/TestMessage";

function App() {
  const hideNavbarRoutes = ["/dashboard", "/user", "/portal"]; // Add more routes if needed

  const [shouldShowNavbar, setShouldShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShouldShowNavbar(!hideNavbarRoutes.includes(location.pathname));
  }, [location]);
  return (
    <AuthProvider>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        {/* <Route path="/forum" element={<ChatRoom />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-details" element={<Project />} />
        <Route path="/project-documents" element={<ProjectDocs />} />
        <Route path="/site-pictures" element={<SitePictures />} />
        <Route path="/imagegallery" element={<ImageGallery />} />
        <Route path="/rendermodel" element={<RenderModel />} />
        <Route path="/testmessage" element={<TestMessage />} />
        <Route path="/portal" element={
            <PrivateRoutes>
              <Portal />
            </PrivateRoutes>
          }
        />
        <Route path="/user" element={
            <PrivateRoutes>
              <User />
            </PrivateRoutes>
          }
        />
        <Route path="/usersList" element={
            <PrivateRoutes>
              <User />
            </PrivateRoutes>
          }
        />

        <Route path="/testprofile" element={<TestProfile />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
