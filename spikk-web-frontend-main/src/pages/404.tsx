import React from 'react'
import { Box, Divider, Flex, Grid, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { BsCart2, BsHouse } from "react-icons/bs";
import { VscPackage } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <Box as={"section"} bg={"spikk-dark-bg"}>
    <Flex paddingTop={{ base: "20px", lg: "80px" }} maxWidth={"1440px"} margin={"0 auto"} flexWrap={{ base: "wrap", lg: "nowrap" }}>
      <Box paddingTop={"200px"} paddingBottom={"200px"} width={{ base: "100%", lg: "" }}>
        <Box>
    <Box
    paddingLeft={{ base: "16px" }}
    paddingRight={{ base: "16px" }}
    paddingTop={{ base: "16px", md: "32px" }}
    bg={`url(${require("../assets/images/homepage/homepage-banner-rectangle.png")})`}
    bgSize={{ base: "150px 158px", md: "auto 104px" }}
    bgRepeat={"no-repeat"}
    textAlign={"center"}
  >
    <Box marginBottom={"40px"} maxWidth={"100%"} textAlign={{ base: "center", md: "center" }}>
      <Text
        color={"spikk-white2"}
        lineHeight={"110%"}
        fontSize={{ base: "38px", md: "56px" }}
        fontWeight={"semibold"}
        marginBottom={"8px"}
      >
        OOPS...Page Not Found
      </Text>
      <Text color={"spikk-white"} fontSize={{ base: "initial", md: "lg" }} lineHeight={"25px"} maxW={{ base: "100%" }}>
        It appears the page you were looking for doesn't exist.
      </Text>
    </Box>
    <HStack marginBottom={"96px"} width={"100%"} justifyContent={{ base: "center", md: "center" }}>
      <NavLink to={"/"}>
        <Box
          padding={"0 24px"}
          border={"1px solid"}
          color={"spikk-orange"}
          borderRadius={"9999px"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          height={"48px"}
        >
          <BsHouse size={18} />
          <Text
            as={"span"}
            textTransform={"uppercase"}
            fontWeight={"semibold"}
            fontSize={{ base: "sm", md: "lg" }}
            lineHeight={"100%"}
            paddingTop={"4px"}
          >
          Back To Home
          </Text>
        </Box>
      </NavLink>

   
    </HStack>
  </Box>
  </Box>
  </Box>
  </Flex>
  </Box>
  )
}

export default NotFound
