// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({redirectTo }) => {
  const isLoggedIn  = useSelector(store=>store?.user?.isLoggedIn)
  return isLoggedIn ? < Navigate to={redirectTo } /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
