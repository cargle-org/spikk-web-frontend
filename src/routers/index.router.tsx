import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "../pages/404";
import Layout from "../components/Layout";
import DashboardRoutes from "../pages/Dashboard";
import LandingRoutes from "../pages/Landing";
import PrivateRoutes from "./private.router";
import PublicRoutes from "./public.router";

const IndexRouter = () => {
  return (
    <>
      <React.Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/*" element={<LandingRoutes />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route element={<Layout />}>
              <Route path="dashboard/*" element={<DashboardRoutes />} />
            </Route>
          </Route>
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </>
  );
};

export default IndexRouter;
