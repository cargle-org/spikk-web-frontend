import React from 'react';
import { Route, Routes } from 'react-router';

const Login = React.lazy(() => import('./Login'));

const AuthRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default AuthRoutes;
