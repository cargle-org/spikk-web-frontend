import React from "react";
import { Route, Routes } from "react-router";
import LandingFooter from "../../components/landing/LandingFooter";
import LandingHeader from "../../components/landing/LandingHeader";
import NotFound from "../404";
import PickerSelected from "../Dashboard/BuyAnything/PickerSelected";
import OrderHome from "../Orders/OrderHome";
const Homepage = React.lazy(() => import("./Homepage"));
const PrivacyPolicy = React.lazy(() => import("./PrivacyPolicy"));
// const About = React.lazy(() => import('../About/About'))
// const BuyAnything = React.lazy(() => import('../Dashboard/BuyAnything/BuyAnything'))
// const BuyAnythingLocation = React.lazy(() => import('../Dashboard/BuyAnything/BuyAnythingLocation'))
// const BuyAnythingOrderSummary = React.lazy(() => import('../Dashboard/BuyAnything/BuyAnythingOrderSummary'))
// const AvailablePickers = React.lazy(() => import('../Dashboard/BuyAnything/AvailablePickers'))
// const FindingPickers = React.lazy(() => import('../Dashboard/BuyAnything/FindingPickers'))
// const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'))

const LandingRoutes = () => {
  return (
    <>
      <LandingHeader />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <LandingFooter />
    </>
  );
};

export default LandingRoutes;
