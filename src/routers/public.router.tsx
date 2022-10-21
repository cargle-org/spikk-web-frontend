import React from 'react';
import {Navigate, Outlet} from 'react-router';

const PublicRoutes = () => {
  const isAuthenticated = false;
  return !isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PublicRoutes;
