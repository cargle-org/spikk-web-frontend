import React, { useState } from "react";
import { Image, Box, Button, Spacer, Flex, VStack, Divider, Text, Icon } from "@chakra-ui/react";
import { FiChevronDown, FiArrowUpRight, FiChevronLeft, FiHome, FiBell } from "react-icons/fi";
import { FaBeer, FaBell, FaCartPlus, FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { BellIcon, ChatIcon } from "@chakra-ui/icons";
import { SiChatbot } from "react-icons/si";
import { VscHome } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";
import { BiChat } from "react-icons/bi";


function InnerHeader() {
    const [showDropdown, setShowDropdown] = useState(false);
    return ( 
        <Box as="header"  background={"spikk-inner-header-bg"}>
            <Flex alignItems={"center"} maxW ={"1200px"} paddingX ={"16px"} marginX ={"auto"} justifyContent={"space-between"}>
                <Image src={require("../../assets/images/spikklogo.png")} height={"7"} alt="Spikk Logo" />
                <Box as="nav" height={"72px"} display={"flex"} alignItems={"center"}>
                
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
                            <Link to="auth/login">
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
                            </Link>
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
            <hr style={{marginLeft: '9%', marginRight: '9%'}} />


            <Flex alignItems={"center"} maxW ={"1200px"} paddingX ={"16px"} marginX ={"auto"} justifyContent={"space-between"}>
                <NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "inactive")}>
                            <div className="header-link"> 
                                <FiChevronLeft></FiChevronLeft>
                                Home
                            </div>
                </NavLink>            
                <Box as="nav" height={"72px"} display={"flex"} alignItems={"center"}>
                    <Box as="ul" display={"flex"} gap={"40px"} marginRight={"40px"}>
                        <NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "inactive")}>
                            <div className="header-link"> <VscHome/> &nbsp; &nbsp; Home</div>
                        </NavLink>
                        <NavLink to={"/about"} className={({ isActive }) => (isActive ? "active" : "inactive")}>
                            <div className="header-link"> <BsCart/> &nbsp; &nbsp; Orders</div>
                        </NavLink>
                        <NavLink to={"/about"} className={({ isActive }) => (isActive ? "active" : "inactive")}>
                            <div className="header-link"> <FiBell/> &nbsp; &nbsp; Alerts</div>
                        </NavLink>
                        <NavLink to={"/about"} className={({ isActive }) => (isActive ? "active" : "inactive")}>
                            <div className="header-link"> <BiChat/> &nbsp; &nbsp; Chat</div>
                        </NavLink>
                    </Box>
                </Box>
            </Flex>
        </Box>
     );
}

export default InnerHeader;