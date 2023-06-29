import React from "react";
import { Navigate } from "react-router-dom";
import { userAuth } from "../Context/AuthContext";

export const PrivateRoutes = ({ children }) => {
  const {currentUser} = userAuth()

  if (!currentUser) {
    return <Navigate to="/login" replace={true} />
  }

  return children;
};
