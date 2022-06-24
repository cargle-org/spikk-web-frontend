import { AddIcon } from "@chakra-ui/icons";
import { Container, Box, Flex, HStack, Grid, VStack, Heading,Collapse, Text, Button, Progress, FormControl, Input,InputLeftElement, InputGroup, Spacer, Divider, Table, TableContainer, Th, Tr, Td, Thead, Tbody, Tfoot, TableCaption, InputAddon, Icon, useDisclosure, Image, CloseButton, Center, Checkbox } from "@chakra-ui/react";
import { BsArrowBarDown, BsBoxArrowDownLeft, BsCart, BsImage } from "react-icons/bs";
import { FaDollarSign, FaEquals } from "react-icons/fa";
import { TbCurrencyNaira, TbZoomCancel } from "react-icons/tb";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { SiAddthis } from "react-icons/si";
import { BiAddToQueue, BiWallet } from "react-icons/bi";
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
                            
                            
                            <Flex py={1} color={'white'} marginBottom={"40px"} width={"100%"} justifyContent={{ base: "center", md: "left" }}>
                                <Box p={5}>
                                    <Box color={'spikk-gold'}>
                                        <Flex>
                                            <Center>
                                                <MdStickyNote2 color={'spikk-gold'}></MdStickyNote2> 
                                            </Center>
                                            <Text px={5}>Items</Text>
                                        </Flex>
                                    </Box>
                                    <HStack fontSize={'13px'}>
                                        <Image src={require("../../assets/images/pringles.png")} height={"25px"} alt="item" />
                                        <Text>
                                            Pringles Sour Cream &  Onion Flavor 
                                        </Text>
                                        <Text>
                                            N3900 - N4100
                                        </Text>
                                    </HStack>
                                    <HStack fontSize={'13px'}>
                                        <Image src={require("../../assets/images/pringles.png")} height={"25px"} alt="item" />
                                        <Text>
                                            Pringles Sour Cream &  Onion Flavor 
                                        </Text>
                                        <Text>
                                            N3900 - N4100
                                        </Text>
                                    </HStack>
                                    <Divider py={5} color={'spikk-light-gold'}/>
                                    <HStack py={5}>
                                        <Icon as={RiEBike2Line} borderRadius={5} boxSize={10} color={'black'} bgColor={'white'} p={3} />                                        
                                        <Text fontSize={'13px'}>
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
                                        <Text fontSize={'20px'}>
                                           <b>N9700</b> 
                                        </Text>
                                    </HStack>

                                </Box>
                                <Center my={10} height='auto'>
                                    <Divider bgColor={'spikk-light-gold'} color={'spikk-light-gold'} orientation='vertical' />
                                </Center>           
                                <Box p={5}>
                                    <Box color={'spikk-gold'}>
                                        <Flex>
                                            <Center>
                                                <HiOutlineLocationMarker color={'spikk-gold'}></HiOutlineLocationMarker> 
                                            </Center>
                                            <Text px={5}>Locations</Text>
                                        </Flex>
                                    </Box>

                                    <Box fontSize={'13px'} py={3}>
                                        <Heading as='h4' size='xs' color={'spikk-light-gold'}>
                                            Shopping Location(s)
                                        </Heading>
                                        <Text>
                                            Shoprite, Jakande, Lekki  & Hubmart, Lekki
                                        </Text>
                                    </Box>

                                    <Box fontSize={'13px'}>
                                        <Heading as='h4' size='xs' color={'spikk-light-gold'}>
                                            Delivery Location
                                        </Heading>
                                        <Text>
                                            17 Admiralty Lekki
                                        </Text>
                                    </Box>
                                    
                                    
                                    <Box py={8}>
                                        <Flex color={'spikk-gold'}>
                                            <Center>
                                                <BiCommentDetail color={'spikk-gold'}/>
                                            </Center>
                                            <Text px={5}>Comment</Text>
                                        </Flex>
                                        <Text fontSize={'13px'}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                        </Text>
                                    </Box>
                                                                           
                                </Box>
                            </Flex>
                            <Flex  bg='spikk-inner-page-bg' p={1} alignContent={'left'}>
                                <Box>
                                    <Flex>
                                        <Box p={5}>
                                            <Icon as={BiWallet} borderRadius={5} boxSize={10} color={'spikk-gold'} bgColor={'spikk-inner-header-bg'} p={3} />      
                                        </Box>
                                        <Spacer/>
                                        <Box p={5} alignItems={'left'}>
                                            <Text  color={'spikk-gold'}>
                                                Pay with Wallet
                                            </Text>    
                                            <Text color={'spikk-light-gray'} textAlign={'left'} >
                                                1007832738 ABC Bank PLC
                                            </Text>
                                            <Text color={'spikk-light-gray'} textAlign={'left'}>
                                                Jennele Sanya
                                            </Text>
                                        </Box>
                                        <Spacer/>
                                        <Box p={5}>
                                            <Checkbox size='lg' colorScheme='red' defaultChecked/>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Spacer/>

                                <Box>
                                    <Flex>
                                        <Box p={5}>
                                            <Icon as={BiWallet} borderRadius={5} boxSize={10} color={'spikk-gold'} bgColor={'spikk-inner-header-bg'} p={3} />      
                                        </Box>
                                        <Spacer/>
                                        <Box p={5} alignItems={'left'}>
                                            <Text color={'spikk-gold'}>
                                                Pay with Cash
                                            </Text>    
                                            <Text color={'spikk-light-gray'} textAlign={'left'} >
                                                Pay cash when the picker delivers
                                            </Text>
                                            
                                        </Box>
                                        <Spacer/>
                                        <Box p={5}>
                                            <Checkbox size='lg' colorScheme='red' defaultChecked/>
                                        </Box>
                                    </Flex>
                                </Box>

                            </Flex>
                            


                            
                        </Box> 

                           
                             
                        <Flex pb={6}>
                            

                            <Box py='2'>
                                <NavLink to={"/buy-anything-location"}>
                                    <Text color={'gray'}>
                                        BACK
                                    </Text>
                                </NavLink>
                            </Box>
                            

                            <Spacer />
                            <Spacer />

                            <Box
                                display={"flex"}
                                gap={"4px"}
                                padding={"0 32px"}
                                mx={3}
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
                                fontSize={"sm"}
                                >
                                SAVE REQUEST <FiChevronRight size={"24px"} />
                            </Box>
                            <Spacer />
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
                                fontSize={"sm"}
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