import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

type OrderStep = 1 | 2 | 3;

const CreateOrder = () => {
  const [activeStep, setActiveStep] = useState<OrderStep>(1);
  return (
    <Stack>
      <Stack spacing={4} bg={"spikk-inner-header-bg"} borderTopRadius={"20px"} width={"full"} padding={"36px"}>
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
    </Stack>
  );
};

export default CreateOrder;
