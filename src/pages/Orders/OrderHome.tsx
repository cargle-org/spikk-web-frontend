import { Container, Box, Flex, HStack, Grid, VStack, TabList,Tabs, Tab, TabPanel, TabPanels,  Heading,Collapse, Text, Button, Progress, FormControl, Input,InputLeftElement, InputGroup, Spacer, Divider, Table, TableContainer, Th, Tr, Td, Thead, Tbody, Tfoot, TableCaption, InputAddon, Icon, useDisclosure, Image, CloseButton, Avatar, AvatarBadge, Badge, Center, Circle } from "@chakra-ui/react";
import InnerHeader from "../../components/innerpages/InnerHeader";
import InnerFooter from "../../components/landing/LandingFooter";
import { NavLink } from "react-router-dom";
import { ImLocation, ImLocation2 } from "react-icons/im";
import { BiChat } from "react-icons/bi";
import { ChevronDownIcon } from "@chakra-ui/icons";



function OrderHome() {
    return ( 
        <>
            <InnerHeader/>
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
                    <VStack w={'100%'} borderRadius={"20px"} borderTopRadius={"20px"} bgColor={"spikk-inner-header-bg"} borderWidth={'1px'} borderColor={'gray'}>
                        <Box h={10}></Box>
                        <Divider/>
                        <Center color={'white'}>
                            Nothing to see here
                        </Center>
                    </VStack>

                </Flex>
            </Container>
            <InnerFooter/>
        </>
     );
}

export default OrderHome;