import { Box, Container, Flex, VStack, Image, Heading, Text, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import FooterFacebookLogo from "../../assets/icons/footer-facebook-logo";
import FooterGmailLogo from "../../assets/icons/footer-gmail-logo";
import FooterInstagramLogo from "../../assets/icons/footer-instagram-logo";
import FooterTwitterLogo from "../../assets/icons/footer-twitter-logo";

const InnerFooter = () => {
  return (
    <Box as={"footer"} background={"spikk-inner-header-bg"}>
      <Box maxW={"1200px"} paddingX={"16px"} marginX={"auto"} paddingTop={"32px"} paddingBottom={"24px"}>
        <Flex width={"100%"} justifyContent={"space-between"}>
          <HStack spacing={"180"}>
            <Box>
              <Box height={"24px"} display={"flex"} marginBottom={"32px"} alignItems={"flex-end"}>
                <Link to={"/"}>
                  <Image src={require("../../assets/images/spikk-logo2.png")} height={"24px"} alt="Spikk Logo" />
                </Link>
              </Box>
              <VStack spacing={"12px"} alignItems={"flex-start"}>
                <Text fontSize="sm" fontWeight={"bold"} color={"white"}>
                  © 2022 Spikk Technologies
                </Text>
                <Text fontSize="sm" color={"spikk-white"}>
                  <Link to={"#"}>Terms and conditions</Link> | <Link to={"#"}>Privacy Policy</Link>
                </Text>
              </VStack>
            </Box>
            <Box>
              <Box height={"24px"} display={"flex"} marginBottom={"32px"}>
                <Text fontSize="xl" fontWeight={"bold"} color={"spikk-yellow"}>
                  Quicklinks
                </Text>
              </Box>
              <VStack spacing={"12px"} alignItems={"flex-start"}>
                <Text fontSize="sm" color={"spikk-white"}>
                  <Link to={"#"}>About Us</Link>
                </Text>
                <Text fontSize="sm" color={"spikk-white"}>
                  <Link to={"#"}>Contact Us</Link>
                </Text>
              </VStack>
            </Box>
          </HStack>
          <Box>
            <Box height={"24px"} display={"flex"} marginBottom={"40px"}>
              <Text fontSize="xl" fontWeight={"bold"} color={"spikk-yellow"}>
                Get in touch with us
              </Text>
            </Box>
            <HStack spacing={"36px"} alignItems={"flex-start "}>
              <Link to="#">
                <FooterGmailLogo />
              </Link>
              <Link to="#">
                <FooterTwitterLogo />
              </Link>
              <Link to="#">
                <FooterFacebookLogo />
              </Link>
              <Link to="#">
                <FooterInstagramLogo />
              </Link>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default InnerFooter;
