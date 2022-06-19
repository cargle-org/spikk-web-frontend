import { Box, Divider, Flex, Grid, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import LandingFooter from "../../components/landing/LandingFooter";
import LandingHeader from "../../components/landing/LandingHeader";
import { BsCart2 } from "react-icons/bs";
import { VscPackage } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <LandingHeader />
      <Box as={"section"} bg={"spikk-dark-bg"}>
        <Flex paddingTop={ {base : "20px" , lg :"80px"}} maxWidth={"1440px"} margin={"0 auto"} flexWrap={{ base: "wrap", lg: "nowrap" }}>
          <Box paddingTop={"32px"} width={{ base: "100%", lg: "" }}>
            <Box>
              <Box
                paddingLeft={{ base: "16px", xl: "128px" }}
                paddingRight={{ base: "16px", md: "0" }}
                paddingTop={{ base: "16px", md: "32px" }}
                bg={`url(${require("../../assets/images/homepage/homepage-banner-rectangle.png")})`}
                bgSize={{ base: "150px 68px", md: "auto 104px" }}
                bgRepeat={"no-repeat"}
              >
                <Box marginBottom={"40px"} maxWidth={"675px"} textAlign={{ base: "center", md: "left" }}>
                  <Text
                    color={"spikk-white2"}
                    lineHeight={"110%"}
                    fontSize={{ base: "48px", md: "56px" }}
                    fontWeight={"semibold"}
                    marginBottom={"8px"}
                  >
                    Too tired to shop for groceries or make dinner?
                  </Text>
                  <Text color={"spikk-white"} fontSize={{ base: "initial", md: "lg" }} lineHeight={"30px"} maxW={{ base: "100%", md: "540px" }}>
                    Spikk has got you covered. Spikk saves you time and energy so you can relax and have us run that errand or pick up and deliver.
                  </Text>
                </Box>
                <Flex gap={"6px"} marginBottom={"40px"} width={"100%"} justifyContent={{ base: "center", md: "left" }}>
                  <Box height={"8px"} width={"36px"} borderRadius={"9999px"} bg={"spikk-orange"}></Box>
                  <Box height={"8px"} width={"8px"} borderRadius={"9999px"} bg={"spikk-orange"}></Box>
                </Flex>
                <HStack marginBottom={"96px"} width={"100%"} justifyContent={{ base: "center", md: "left" }}>
                  <NavLink to={"/buy-anything"}>

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
                      <BsCart2 size={18} />
                      <Text
                        as={"span"}
                        textTransform={"uppercase"}
                        fontWeight={"semibold"}
                        fontSize={{ base: "sm", md: "lg" }}
                        lineHeight={"100%"}
                        paddingTop={"4px"}
                      >
                        
                          Buy anything
                      </Text>

                  </Box>
                  </NavLink>

                  <Box
                    padding={"0 24px"}
                    border={"1px solid"}
                    color={"spikk-orange"}
                    borderRadius={"9999px"}
                    display={"flex"}
                    alignItems={"center"}
                    fontWeight={"semibold"}
                    gap={"10px"}
                    textTransform={"uppercase"}
                    height={"48px"}
                  >
                    <VscPackage size={18} />
                    <Text
                      as={"span"}
                      textTransform={"uppercase"}
                      fontWeight={"semibold"}
                      fontSize={{ base: "sm", md: "lg" }}
                      lineHeight={"100%"}
                      paddingTop={"4px"}
                    >
                      send anything
                    </Text>
                  </Box>
                </HStack>
              </Box>

              <Box display={{ base: "none", md: "block" }}>
                <Image src={require("../../assets/images/homepage/spikk-bike.png")} alt="spikk bike" maxH={"42px"} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Image maxH={"720px"} src={require("../../assets/images/homepage/homepage-banner1.png")} />
          </Box>

          <Box width={"100%"} display={{ base: "block", md: "none" }}>
            <Image
              width={"120px"}
              src={require("../../assets/images/homepage/spikk-bike.png")}
              alt="spikk bike"
              objectFit={"cover"}
              objectPosition={"top right"}
              height={"42px"}
            />
          </Box>
        </Flex>
        <Box marginTop={"120px"}>
          <Box textAlign={"center"} marginBottom={"18px"}>
            <Text className="about-header" textTransform={"uppercase"} color={"spikk-white2"} fontSize={""}>
              About Us
            </Text>
          </Box>
          <VStack maxW={"648px"} marginX={"auto"} paddingX={"16px"}>
            <Text fontSize={"36px"} textAlign={"center"} color={"spikk-white2"} marginBottom={"36px"}>
              <Text as={"span"} fontWeight={"semibold"}>
                Spikk is an on-demand delivery platform{" "}
              </Text>
              <Text as={"span"} fontStyle={"italic"}>
                that delivers just anything to customers.
              </Text>
            </Text>
            <Divider backgroundColor={"spikk-white2"} height={"3px"} width={"65px"} borderRadius={"9999px"} />
            <Text marginTop={"28px !important"} color={"spikk-white"} lineHeight={"22px"} fontWeight={"medium"} textAlign={"center"}>
              <Text>
                From the comfort of your home/offices, Spikk connects you to{" "}
                <Text as="span" display={{ base: "none", md: "inline" }}>
                  <br />{" "}
                </Text>{" "}
                dedicated shoppers that run errands and deliver top notch services.
              </Text>
              <Text marginTop={{ base: "8px", md: "0" }}>Spikk is dedicated to empowering people, communities and making life a lot easier.</Text>
            </Text>
          </VStack>
        </Box>

        <Box textAlign={"center"} marginTop={"40px"} paddingBottom={"120px"}>
          <Box display={"inline-block"} margin={"0 auto"} position={"relative"} padding={{ base: "0 32px", md: "" }}>
            <Image src={require("../../assets/images/homepage/about-banner-2.svg").default}  marginBottom={{ base: " 40px", lg: "0" }}/>
            <Box
              position={{ base: "initial", lg: "absolute" }}
              maxW={{ base: "320px", lg: "185px" }}
              margin={{ base: "0 auto 64px auto", lg: "0" }}
              textAlign={{ base: "center", lg: "right" }}
              top={"72px"}
              left={"-40px"}
              transform={{ base: "", lg: "translateX(-100%)" }}
            >
              <Box
                height={"32px"}
                width={"32px"}
                display={"inline-flex"}
                justifyContent={"center"}
                alignContent={"center"}
                fontSize={"lg"}
                color={"spikk-white2"}
                fontWeight={"black"}
                background={"rgba(255, 255, 255, 0.23);"}
                borderRadius={"4px"}
                paddingTop={"4px"}
                marginBottom={"12px"}
              >
                1
              </Box>
              <Heading fontSize={"lg"} fontWeight={"black"} color={"spikk-white2"} marginBottom={"4px"}>
                Request/Match
              </Heading>
              <Text lineHeight={"20px"} color={"spikk-white"}>
                List the item(s) you want to buy or send and we will connect you to the best Pickers that run errands and deliver top notch services.
              </Text>
            </Box>
            <Box
              position={{ base: "initial", lg: "absolute" }}
              maxW={{ base: "320px", lg: "185px" }}
              margin={{ base: "0 auto 64px auto", lg: "0" }}
              textAlign={{ base: "center", lg: "right" }}
              top={"310px"}
              left={"-40px"}
              transform={{ base: "", lg: "translateX(-100%)" }}
            >
              <Box
                height={"32px"}
                width={"32px"}
                display={"inline-flex"}
                justifyContent={"center"}
                alignContent={"center"}
                fontSize={"lg"}
                color={"spikk-white2"}
                fontWeight={"black"}
                background={"rgba(255, 255, 255, 0.23);"}
                borderRadius={"4px"}
                paddingTop={"4px"}
                marginBottom={"12px"}
              >
                2
              </Box>
              <Heading fontSize={"lg"} fontWeight={"black"} color={"spikk-white2"} marginBottom={"4px"}>
                Delivery
              </Heading>
              <Text lineHeight={"20px"} color={"spikk-white"}>
                Get a real-time update on the status of your request from start to finish{" "}
              </Text>
            </Box>
            <Box
              position={{ base: "initial", lg: "absolute" }}
              maxW={{ base: "320px", lg: "185px" }}
              margin={{ base: "0 auto 64px auto", lg: "0" }}
              textAlign={{ base: "center", lg: "left" }}
              top={"72px"}
              right={"-40px"}
              transform={{ base: "", lg: "translateX(100%)" }}
            >
              <Box
                height={"32px"}
                width={"32px"}
                display={"inline-flex"}
                justifyContent={"center"}
                alignContent={"center"}
                fontSize={"lg"}
                color={"spikk-white2"}
                fontWeight={"black"}
                background={"rgba(255, 255, 255, 0.23);"}
                borderRadius={"4px"}
                paddingTop={"4px"}
                marginBottom={"12px"}
              >
                3
              </Box>
              <Heading fontSize={"lg"} fontWeight={"black"} color={"spikk-white2"} marginBottom={"4px"}>
                Payments
              </Heading>
              <Text lineHeight={"20px"} color={"spikk-white"}>
                You can pay from your Spikk wallet when funded or simply pay the Picker with cash once your request is completed
              </Text>
            </Box>
            <Box
              position={{ base: "initial", lg: "absolute" }}
              maxW={{ base: "320px", lg: "185px" }}
              margin={{ base: "0 auto 64px auto", lg: "0" }}
              textAlign={{ base: "center", lg: "left" }}
              top={"310px"}
              right={"-40px"}
              transform={{ base: "", lg: "translateX(100%)" }}
            >
              <Box
                height={"32px"}
                width={"32px"}
                display={"inline-flex"}
                justifyContent={"center"}
                alignContent={"center"}
                fontSize={"lg"}
                color={"spikk-white2"}
                fontWeight={"black"}
                background={"rgba(255, 255, 255, 0.23);"}
                borderRadius={"4px"}
                paddingTop={"4px"}
                marginBottom={"12px"}
              >
                4
              </Box>
              <Heading fontSize={"lg"} fontWeight={"black"} color={"spikk-white2"} marginBottom={"4px"}>
                Rate your experience
              </Heading>
              <Text lineHeight={"20px"} color={"spikk-white"}>
                We want your next experience to be the best; let us know how we can improve our services.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <LandingFooter />
    </div>
  );
};

export default Homepage;
