import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "../404";
import Dashboard from "./Dashboard";
import DashboardLayout from "./_components/DashboardLayout";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
