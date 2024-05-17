// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ redirectTo }) => {
  const isLoggedIn = useSelector((store) => store?.user?.isLoggedIn);
  if (!isLoggedIn) {
  return  <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
