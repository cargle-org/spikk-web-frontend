import React from 'react';
import { Route, Routes } from 'react-router';
import Dashboard from './Dashboard';
import DashboardLayout from './_components/DashboardLayout';

const DashboardRoutes = () => (
  <Routes>
    <Route element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
    </Route>
  </Routes>
);

export default DashboardRoutes;
