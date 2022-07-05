import { Container, Box, Flex, HStack, Grid, VStack, TabList,Tabs, Tab, TabPanel, TabPanels,  Heading,Collapse, Text, Button, Progress, FormControl, Input,InputLeftElement, InputGroup, Spacer, Divider, Table, TableContainer, Th, Tr, Td, Thead, Tbody, Tfoot, TableCaption, InputAddon, Icon, useDisclosure, Image, CloseButton, Avatar, AvatarBadge, Badge, Center, Circle } from "@chakra-ui/react";
import InnerHeader from "../../components/innerpages/InnerHeader";
import InnerFooter from "../../components/landing/LandingFooter";
import { NavLink } from "react-router-dom";
import { ImLocation, ImLocation2 } from "react-icons/im";
import { BiChat, BiCommentDetail } from "react-icons/bi";
import { ChevronDownIcon, DownloadIcon, StarIcon } from "@chakra-ui/icons";
import { FaEquals } from "react-icons/fa";
import { RiEBike2Line } from "react-icons/ri";
import { MdStickyNote2 } from "react-icons/md";
import { HiOutlineDownload, HiOutlineLocationMarker } from "react-icons/hi";
import { FiChevronRight } from "react-icons/fi";
import { BsStar } from "react-icons/bs";
import Header from "../../components/Header";



function OrderHome() {
    return ( 
        <>
            <Header/>
            <Container maxW='container.x1' bg='spikk-inner-page-bg' color={'white'}>
                
                <Flex px={50} py={50} align={'left'} flexDirection={{base: 'column', xs: 'column', sm: 'column', md: 'column', lg: 'row'}}>
                    
                    <VStack  w={{base: '100%', xs: '100%', sm: '100%', md: '100%', lg: 'container.sm'}} alignItems={'left'} mr={{base: '0', xs: '0', sm: '0', md: '10', lg: '10'}}  mb={{base: '10', xs: '10', sm: '10', md: '10', lg: '0'}} >
                        <VStack alignItems={'left'} borderRadius={"20px"} borderTopRadius={"20px"} bgColor={"spikk-inner-header-bg"} borderWidth={'1px'} borderColor={'gray'} >
                            <Box h={10}>
                                <Text p={5} color={'spikk-light-gray'} fontSize={'sm'}>
                                    Your Current Order
                                </Text>
                            </Box>
                            <Divider/>
                            <HStack fontSize={'md'} p={3}>
                                <Heading as={'h4'} size={'sm'}>
                                    Pringles Sour Cream &  Onion Flavor 
                                </Heading>
                                <Spacer/>
                                <Text fontSize={'xs'}>
                                    #45271b34
                                </Text>
                            </HStack>
                            <HStack fontSize={'md'} p={3}>

                                <Text fontSize={'xs'}>
                                    10th June, 2021
                                </Text>
                                <Spacer/>
                                <Text fontSize={'xs'}>
                                    10:02 AM
                                </Text>
                            </HStack>
                        </VStack>
                        <VStack alignItems={'left'} borderRadius={"20px"} borderTopRadius={"20px"} bgColor={"spikk-inner-header-bg"}>
                            <Box h={10}>
                                <Text p={5} color={'spikk-light-gray'} fontSize={'sm'}>
                                    Your Current Order
                                </Text>
                            </Box>
                            <HStack p={5} fontSize={'13px'}>
                                <Image src={require("../../assets/images/pringles.png")} height={"25px"} alt="item" />
                                <Spacer/>
                                <Text>
                                    You ordered Bread and Pringles 
                                </Text>
                                <Spacer/>
                                <Text>
                                    10th June
                                </Text>
                            </HStack>
                            <Divider borderColor={'gray'} />
                            <Box w={'100%'} borderRadius={"20px"} p={4} bgColor={"spikk-inner-header-bg"}>
                                <Tabs variant='soft-rounded' colorScheme='yellow'>
                                    <TabList px={3}>
                                        <Tab>Completed Orders</Tab>
                                        <Tab>Saved Orders</Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <HStack p={5} fontSize={'13px'}>
                                                <Image src={require("../../assets/images/pringles.png")} height={"25px"} alt="item" />
                                                <Spacer/>
                                                <Text>
                                                    You ordered Bread and Pringles 
                                                </Text>
                                                <Spacer/>
                                                <Text>
                                                    10th June
                                                </Text>
                                            </HStack>
                                            <Divider borderColor={'gray'} />
                                            <HStack p={5} fontSize={'13px'}>
                                                <Image src={require("../../assets/images/pringles.png")} height={"25px"} alt="item" />
                                                <Spacer/>
                                                <Text>
                                                    You ordered Bread and Pringles 
                                                </Text>
                                                <Spacer/>
                                                <Text>
                                                    10th June
                                                </Text>
                                            </HStack>
                                            <Divider borderColor={'gray'} />
                                            <HStack p={5} fontSize={'13px'}>
                                                <Image src={require("../../assets/images/pringles.png")} height={"25px"} alt="item" />
                                                <Spacer/>
                                                <Text>
                                                    You ordered Bread and Pringles 
                                                </Text>
                                                <Spacer/>
                                                <Text>
                                                    10th June
                                                </Text>
                                            </HStack>
                                            <Divider borderColor={'gray'} />
                                            <HStack p={5} fontSize={'13px'}>
                                                <Image src={require("../../assets/images/pringles.png")} height={"25px"} alt="item" />
                                                <Spacer/>
                                                <Text>
                                                    You ordered Bread and Pringles 
                                                </Text>
                                                <Spacer/>
                                                <Text>
                                                    10th June
                                                </Text>
                                            </HStack>
                                        </TabPanel>
                                        <TabPanel>
                                            <HStack p={5} fontSize={'13px'}>
                                                <Image src={require("../../assets/images/pringles.png")} height={"25px"} alt="item" />
                                                <Spacer/>
                                                <Text>
                                                    You ordered Bread and Pringles 
                                                </Text>
                                                <Spacer/>
                                                <Text>
                                                    10th June
                                                </Text>
                                            </HStack>
                                            <Divider borderColor={'gray'} />
                                            <HStack p={5} fontSize={'13px'}>
                                                <Image src={require("../../assets/images/pringles.png")} height={"25px"} alt="item" />
                                                <Spacer/>
                                                <Text>
                                                    You ordered Bread and Pringles 
                                                </Text>
                                                <Spacer/>
                                                <Text>
                                                    10th June
                                                </Text>
                                            </HStack>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </Box>
                            
                            
                            <Divider/>
                            <HStack fontSize={'md'} p={3}>
                                <Heading as={'h4'} size={'sm'}>
                                    Pringles Sour Cream &  Onion Flavor 
                                </Heading>
                                <Spacer/>
                                <Text fontSize={'xs'}>
                                    #45271b34
                                </Text>
                            </HStack>
                            
                            <VStack>
                                <Badge borderRadius={'50%'} bgColor={'white'}>
                                    <ChevronDownIcon/>
                                </Badge>
                                <Center p={5} color={'yellow'} fontSize={'sm'}>
                                    View All
                                </Center>
                            </VStack>
                            
                        </VStack>
                        

                            
                        
                    </VStack>
                    <VStack alignItems={'left'} w={'100%'} borderRadius={"20px"} borderTopRadius={"20px"} bgColor={"spikk-inner-header-bg"} borderWidth={'1px'} borderColor={'gray'}>
                        <Flex alignItems={'left'} p={5}>
                            <Box>
                                Order placed on <b> 10th june, 2022, 10:02 AM </b>
                            </Box>
                            <Spacer/>
                            <Spacer/>
                            <Box>
                                <Text color={'spikk-orange'} fontSize={'13px'}>
                                    #4527b21   
                                </Text>
                                                         
                            </Box>
                        </Flex>
                        <Divider/>
                        <Flex px={5} py={3}>
                            <Box pt={2}>
                                <Avatar  mr={3} name='samp' src='https://bit.ly/dan-abramov'>
                                    <AvatarBadge boxSize='1.5em' bgColor='white' color='black' fontSize={10} w={8}>4.0*</AvatarBadge>
                                </Avatar>
                            </Box>
                            <Box>
                                <Heading as='h4' pt={3} textAlign={'left'} size='sm' color={'white'}>
                                    Kolawole Agbaje
                                </Heading>
                                <Text fontSize={13} color={'white'}>
                                    Picker
                                </Text>
                            </Box>
                            <Spacer/>
                            <Box pt={5} mr={4}>
                                <Icon as={BsStar} color={'white'}/> &nbsp; Rate Picker                                    
                            </Box>

                            <Box pt={3} mr={4}>
                                <Box
                                    display={"flex"}
                                    gap={"4px"}
                                    padding={"0 32px"}
                                    mx={3}
                                    height={"40px"}
                                    borderRadius={"9999px"}
                                    border={"solid"}
                                    borderWidth={"2px"}
                                    borderColor={'white'}
                                    alignItems={"center"}
                                    backgroundColor={"transparent"}
                                    fontWeight={"medium"}
                                    color={"white"}
                                    cursor={"pointer"}
                                    fontSize={"sm"}
                                    >
                                    <BiChat size={"24px"} /> Message
                                </Box>
                            </Box>
                        </Flex>
                        <Divider/>
                        <Flex>
                            <Flex p={5} flexDirection={{base: 'column', xs: 'column', sm: 'column', md: 'column', lg: 'row'}}>
                                <Box>
                                    <Box py={5} color={'spikk-gold'}>
                                        <Flex>
                                            <Text>Order Summary</Text>
                                        </Flex>
                                    </Box>
                                    <HStack p={5} fontSize={'13px'}>
                                        <Image src={require("../../assets/images/pringles.png")} height={"25px"} alt="item" />
                                        <Text>
                                            Pringles Sour Cream &  Onion Flavor 
                                        </Text>
                                        <Text>
                                            N3900 - N4100
                                        </Text>
                                    </HStack>
                                    <HStack p={5} fontSize={'13px'}>
                                        <Image src={require("../../assets/images/pringles.png")} height={"25px"} alt="item" />
                                        <Text>
                                            Pringles Sour Cream &  Onion Flavor 
                                        </Text>
                                        <Text>
                                            N3900 - N4100
                                        </Text>
                                    </HStack>
                                    <HStack p={5}>
                                        <Icon as={RiEBike2Line} borderRadius={5} boxSize={10} color={'black'} bgColor={'white'} p={3} />                                        
                                        <Text fontSize={'13px'}>
                                            Delivery Price
                                        </Text>
                                        <Spacer/>
                                        <Text>
                                            N1,500
                                        </Text>
                                    </HStack>
                                    <HStack p={5}>
                                        <Icon as={FaEquals} borderRadius={5} boxSize={10} color={'black'} bgColor={'white'} p={3} />                                        
                                        
                                        <Text>
                                            Total
                                        </Text>
                                        <Spacer/>
                                        <Text fontSize={'20px'}>
                                           <b>N9,700</b> 
                                        </Text>
                                    </HStack>
                                    <Divider py={5} color={'spikk-light-gold'}/>

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
                                        <Divider/>
                                        <Flex p={5}>
                                            <Image src={require("../../assets/images/receipt.png")} height={"40px"} alt="item" />
                                            <Text p={3} fontSize={'15px'} verticalAlign={'center'}>
                                                Receipt0011.PNG
                                            </Text>
                                            <Spacer/>
                                            <Icon as={HiOutlineDownload} boxSize={10} color={'white'}/>                                        

                                        </Flex>

                                                                            
                                    </Box>
                                </Box>
                                <Center my={10} height='auto'>
                                    <Divider bgColor={'spikk-light-gold'} color={'spikk-light-gold'} orientation='vertical' />
                                </Center>                                 
                                <Box>
                                    <Box py={5} px={5} color={'spikk-gold'}>
                                        <Flex>
                                            <Text>Track your Order</Text>
                                        </Flex>
                                    </Box>
                                    <HStack alignItems={'left'} p={5} fontSize={'13px'}>
                                        <Image src={require("../../assets/images/phone.png")} height={"25px"} alt="item" />
                                        <VStack>
                                            <Heading textAlign={'left'} size={'sm'}>
                                                Order Placed
                                            </Heading>
                                            <Text>
                                                We received your order at 10:02AM
                                            </Text>
                                        </VStack>
                                        
                                    </HStack>
                                    <HStack alignItems={'left'} p={5} fontSize={'13px'}>
                                        <Image src={require("../../assets/images/accepted.png")} height={"25px"} alt="item" />
                                        <VStack>
                                            <Heading textAlign={'left'} size={'sm'}>
                                                Order Placed
                                            </Heading>
                                            <Text>
                                                We received your order at 10:02AM
                                            </Text>
                                        </VStack>
                                        
                                    </HStack>
                                    <HStack alignItems={'left'} p={5} fontSize={'13px'}>
                                        <Image src={require("../../assets/images/greenbike.png")} width={"30px"} height={"25px"} alt="item" />
                                        <VStack>
                                            <Heading textAlign={'left'} size={'sm'}>
                                                Order Placed
                                            </Heading>
                                            <Text>
                                                We received your order at 10:02AM
                                            </Text>
                                        </VStack>
                                        
                                    </HStack>
                                    <HStack alignItems={'left'} p={5} fontSize={'13px'}>
                                        <Image src={require("../../assets/images/cart.png")} height={"25px"} alt="item" />
                                        <VStack>
                                            <Heading textAlign={'left'} size={'sm'}>
                                                Order Placed
                                            </Heading>
                                            <Text>
                                                We received your order at 10:02AM
                                            </Text>
                                        </VStack>
                                        
                                    </HStack>
                                    
                                </Box>
                            </Flex>
                        </Flex>
                    </VStack>

                </Flex>
            </Container>
            <InnerFooter/>
        </>
     );
}

export default OrderHome;