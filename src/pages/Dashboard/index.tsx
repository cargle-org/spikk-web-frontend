import React from "react";
import { Route, Routes } from "react-router";
import OrderRoutes from "../Order";
import OrderHome from "../Orders/OrderHome";
import Dashboard from "./Dashboard";
import DashboardLayout from "./_components/DashboardLayout";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
        <Route path="orders" element={<OrderHome />}/>
        <Route path="order/*" element={<OrderRoutes />} />
    </Routes>
  );
};

export default DashboardRoutes;
