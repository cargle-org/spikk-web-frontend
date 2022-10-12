import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";
import PutAds from "../../../components/dashboard/PutAds";
import ShoppingGuidelines from "../../../components/dashboard/ShoppingGuidelines";

const OrderLayout = () => {
  return (
    <Grid as={"section"} gridTemplateColumns={"1fr 480px"} gap={"24px"}>
      <Outlet />
      <Box>
        <ShoppingGuidelines />
        <PutAds />
      </Box>
    </Grid>
  );
};

export default OrderLayout;
