import React, { useState } from "react";
import { Image, Box, Button, Spacer, Flex, VStack, Divider, Text, useDisclosure } from "@chakra-ui/react";
import { FiChevronDown, FiArrowUpRight } from "react-icons/fi";
import { FaBeer } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import RegisterModal from "../../pages/Landing/RegisterModal";

const LandingHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const {onOpen,isOpen, onClose} = useDisclosure();

  const handleModalOpen = () => {
    setShowDropdown(false);
    onOpen();
  }
  return (
    <Box as="header" background={"spikk-header-bg"}>
      <Flex height={"72px"} alignItems={"center"} maxW={"1200px"} paddingX={"16px"} marginX={"auto"} justifyContent={{ base: "center", md: "space-between" }}>
        <Image src={require("../../assets/images/spikklogo.png")} height={"32px"} alt="Spikk Logo" />
        <Box as="nav" height={"72px"} display={{ base: "none", md: "flex" }} alignItems={"center"}>
          <Box as="ul" display={"flex"} gap={"40px"} marginRight={"40px"}>
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "inactive")}>
              <div className="header-link">Home</div>
            </NavLink>
            <NavLink to={"/about"} className={({ isActive }) => (isActive ? "active" : "inactive")}>
              <div className="header-link">About</div>
            </NavLink>
          </Box>
          <Box position={"relative"}>
            <Box
              display={"flex"}
              gap={"4px"}
              padding={"0 16px"}
              height={"32px"}
              borderRadius={"9999px"}
              alignItems={"center"}
              backgroundColor={"spikk-orange"}
              textTransform={"uppercase"}
              fontWeight={"medium"}
              color={"spikk-header-bg"}
              cursor={"pointer"}
              fontSize={"sm"}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Join <FiChevronDown size={"24px"} />
            </Box>
            {showDropdown && (
              <Box position={"absolute"} top={"110%"} right={"0"} width={"max-content"} zIndex={10} background={"white"} borderRadius={"16px"}>
                <VStack>
                  <Box padding={"32px 48px 20px 48px "}>
                    <Box>
                      <Text color={"spikk-text1"} textAlign={"center"} fontSize={"small"}>
                        Don't have an account?
                      </Text>
                      <Box onClick={handleModalOpen} cursor={"pointer"}>
                        <Box
                          height={"36px"}
                          width={"140px"}
                          backgroundColor={"spikk-red"}
                          borderRadius={"9999px"}
                          display={"flex"}
                          alignItems={"center"}
                          color={"white"}
                          textTransform={"uppercase"}
                          justifyContent={"center"}
                          gap={"2px"}
                        >
                          Join spikk <FiArrowUpRight size={"24px"} />{" "}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Divider />
                  <Box padding={"20px 48px 32px 48px "}>
                    <Text color={"spikk-text1"} textAlign={"center"} fontSize={"small"}>
                      Already have an account ?
                    </Text>
                    <Link to="auth/login">
                      <Box
                        height={"36px"}
                        width={"140px"}
                        border={"1px solid"}
                        borderColor={"spikk-text1"}
                        borderRadius={"9999px"}
                        display={"flex"}
                        alignItems={"center"}
                        color={"spikk-text1"}
                        textTransform={"uppercase"}
                        justifyContent={"center"}
                        gap={"2px"}
                      >
                        LOG IN HERE
                      </Box>
                    </Link>
                  </Box>
                </VStack>
              </Box>
            )}
          </Box>
        </Box>
      </Flex>
      <RegisterModal isOpen={isOpen} onClose={onClose}/>
    </Box>
  );
};

export default LandingHeader;
