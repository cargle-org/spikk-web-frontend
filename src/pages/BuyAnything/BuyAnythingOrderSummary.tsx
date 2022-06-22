import { AddIcon } from "@chakra-ui/icons";
import { Container, Box, Flex, HStack, Grid, VStack, Heading,Collapse, Text, Button, Progress, FormControl, Input,InputLeftElement, InputGroup, Spacer, Divider, Table, TableContainer, Th, Tr, Td, Thead, Tbody, Tfoot, TableCaption, InputAddon, Icon, useDisclosure, Image, CloseButton, Center } from "@chakra-ui/react";
import { BsArrowBarDown, BsCart, BsImage } from "react-icons/bs";
import { FaDollarSign, FaEquals } from "react-icons/fa";
import { TbCurrencyNaira, TbZoomCancel } from "react-icons/tb";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { SiAddthis } from "react-icons/si";
import { BiAddToQueue } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { MdStickyNote2 } from "react-icons/md";
import { TbFlag3 } from "react-icons/tb";
import { RiEBike2Line } from "react-icons/ri";
import { GrLocation, GrNotes } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCommentDetail } from "react-icons/bi";
import { VscAdd } from "react-icons/vsc";
import InnerHeader from "../../components/innerpages/InnerHeader";
import InnerFooter from "../../components/landing/LandingFooter";
import ShoppingGuidelines from "../../components/innerpages/ShoppingGuidelines";
import { NavLink } from "react-router-dom";

function BuyAnything3() {
    return ( 
        
        <>
            <InnerHeader/>
            <Container maxW='container.x1' bg='spikk-inner-page-bg'>
                
                <Flex mx={'10%'} py={50} align={'left'} flexDirection={{base: 'column-reverse', xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row'}}>
                    
                    <VStack w={'container.xl'}  maxW={'1000'} bgColor={"spikk-inner-header-bg"} borderRadius={"20px"} >

                        <Box borderTopRadius={"20px"} borderBottomRadius={"0px"} borderBottomColor={'spikk-gray'}  py={10} bgColor={"spikk-inner-header-bg"} >
                            
                            <Flex mx={5}>

                                <Box p='2'>

                                    <Text color={'spikk-yellow'}>
                                        Order Summary
                                    </Text>

                                </Box>

                                <Spacer />

                                <Box p='2'>

                                    <Text color={'spikk-yellow'}>
                                        <b>3</b> of <b>3</b>
                                    </Text>

                                </Box>

                            </Flex>
                            <Box h={'10px'} mx={7} borderRadius={'3'} bgColor={'spikk-yellow'}>

                            </Box>
                            
                            
                            <Flex gap={"15px"} py={8} color={'white'} marginBottom={"40px"} width={"100%"} justifyContent={{ base: "center", md: "left" }}>
                                <Box p={10}>
                                    <Box color={'spikk-gold'}>
                                       <MdStickyNote2 color={'spikk-gold'}></MdStickyNote2> Items
                                    </Box>
                                    <HStack>
                                        <Image src={require("../../assets/images/pringles.png")} height={"25px"} alt="item" />
                                        <Text>
                                            Pringles Sour Cream &  Onion Flavor 
                                        </Text>
                                        <Text>
                                            N3900 - N4100
                                        </Text>
                                    </HStack>
                                    <HStack>
                                        <Image src={require("../../assets/images/pringles.png")} height={"25px"} alt="item" />
                                        <Text>
                                            Pringles Sour Cream &  Onion Flavor 
                                        </Text>
                                        <Text>
                                            N3900 - N4100
                                        </Text>
                                    </HStack>
                                    <Divider py={5} color={'gray'}/>
                                    <HStack py={5}>
                                        <Icon as={RiEBike2Line} borderRadius={5} boxSize={10} color={'black'} bgColor={'white'} p={3} />                                        
                                        <Text>
                                            Delivery Price
                                        </Text>
                                        <Spacer/>
                                        <Text>
                                            N1500
                                        </Text>
                                    </HStack>
                                    <HStack>
                                        <Icon as={FaEquals} borderRadius={5} boxSize={10} color={'black'} bgColor={'white'} p={3} />                                        
                                        
                                        <Text>
                                            Total
                                        </Text>
                                        <Spacer/>
                                        <Text>
                                           <b>N9700</b> 
                                        </Text>
                                    </HStack>

                                </Box>
                                <Center height='auto'>
                                    <Divider orientation='vertical' />
                                </Center>           
                                <Box>

                                    <Text color={'spikk-gold'}>
                                        <HiOutlineLocationMarker color={'spikk-gold'}/> Locations
                                    </Text>
                                    <Text>
                                        Shopping Location(s)
                                    </Text>
                                    <Text>
                                        Shoprite, Jakande, Lekki  & Hubmart, Lekki
                                    </Text>
                                    <Box py={8}>
                                        <Text color={'spikk-gold'}>
                                            <BiCommentDetail color={'spikk-gold'}/> Comment
                                        </Text>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                        </Text>
 
                                    </Box>
                                                                           
                                </Box>
                            </Flex>


                            
                        </Box> 

                           
                             
                        <Divider/>                       
                        <Flex my={10} py={10} w={'80%'}>
                            <NavLink to={"/buy-anything-location"}>

                                <Box p='2'>
                                    <Text color={'gray'}>
                                        BACK
                                    </Text>
                                </Box>
                            </NavLink>

                            <Spacer />
                            <Spacer />
                            <Spacer />

                            <Box
                                display={"flex"}
                                gap={"4px"}
                                padding={"0 32px"}
                                height={"40px"}
                                borderRadius={"9999px"}
                                border={"solid"}
                                borderWidth={"1px"}
                                borderColor={'white'}
                                alignItems={"center"}
                                backgroundColor={"transparent"}
                                textTransform={"uppercase"}
                                fontWeight={"medium"}
                                color={"white"}
                                cursor={"pointer"}
                                fontSize={"md"}
                                >
                                SAVE REQUEST <FiChevronRight size={"24px"} />
                            </Box>
                            <Spacer />

                            <Box
                                display={"flex"}
                                gap={"4px"}
                                padding={"0 32px"}
                                height={"40px"}
                                borderRadius={"9999px"}
                                alignItems={"center"}
                                backgroundColor={"spikk-red"}
                                textTransform={"uppercase"}
                                fontWeight={"medium"}
                                color={"white"}
                                cursor={"pointer"}
                                fontSize={"md"}
                                >
                                MAKE REQUEST <FiChevronRight size={"24px"} />
                            </Box>

                        </Flex>
                            
                        <Spacer/>
                        
                    
                    </VStack>
                    
                    <ShoppingGuidelines/>

                </Flex>
            </Container>
            <InnerFooter/>
        </>
     );
}

export default BuyAnything3;