import React from 'react';
import { Navigate, Outlet } from 'react-router';

const PrivateRoutes = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;
