import React from "react";
import { Route, Routes } from "react-router";
import LandingFooter from "../../components/landing/LandingFooter";
import LandingHeader from "../../components/landing/LandingHeader";
import PickerSelected from "../Dashboard/BuyAnything/PickerSelected";
import OrderHome from "../Orders/OrderHome";
const Homepage = React.lazy(() => import("./Homepage"));
const PrivacyPolicy = React.lazy(() => import("./PrivacyPolicy"));

const LandingRoutes = () => {
  return (
    <>
      <LandingHeader />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <LandingFooter />
    </>
  );
};

export default LandingRoutes;
