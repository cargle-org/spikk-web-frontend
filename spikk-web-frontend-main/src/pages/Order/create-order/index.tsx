import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import OrderSummary from "./_components/OrderSummary";
import SelectItems from "./_components/SelectItems";
import SelectLocations from "./_components/SelectLocations";

type OrderStep = 1 | 2 | 3;

const CreateOrder = () => {
  const [activeStep, setActiveStep] = useState<OrderStep>(1);
  return (
    <Stack bg={"spikk-inner-header-bg"} borderRadius={"20px"} overflow="hidden" >
      <Stack spacing={4} width={"full"} padding={"36px"}>
        <Flex color={"spikk-yellow"} justifyContent={"space-between"}>
          <Text>
            {activeStep === 1
              ? "Let us know what you want to buy?"
              : activeStep === 2
              ? "Kindly provide location information"
              : activeStep === 3
              ? "Order Summary"
              : null}
          </Text>
          <Text>
            <Text as={"strong"}>{activeStep}</Text>
            {" "}of{" "}
            <Text as={"strong"}>3</Text>
          </Text>
        </Flex>
        <Box rounded={"full"} overflow={"hidden"} background={"rgba(255, 245, 154, 0.25)"}>
            <Box rounded={"full"} height={"8px"} bg={"spikk-yellow"} width ={`${(activeStep/3)*100}%`}/>
        </Box>
      </Stack>
      <Box>
        {activeStep === 1 ? (
            <SelectItems/>
        ) : activeStep === 2? (
          <SelectLocations/>
        ) : activeStep === 3?(
          <OrderSummary/>
        ) : null}
      </Box>
    </Stack>
  );
};

export default CreateOrder;
