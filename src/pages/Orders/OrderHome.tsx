import { Container, Box, Flex, HStack, Grid, VStack, Heading,Collapse, Text, Button, Progress, FormControl, Input,InputLeftElement, InputGroup, Spacer, Divider, Table, TableContainer, Th, Tr, Td, Thead, Tbody, Tfoot, TableCaption, InputAddon, Icon, useDisclosure, Image, CloseButton, Avatar, AvatarBadge, Badge, Center } from "@chakra-ui/react";
import InnerHeader from "../../components/innerpages/InnerHeader";
import InnerFooter from "../../components/landing/LandingFooter";
import { NavLink } from "react-router-dom";
import { ImLocation, ImLocation2 } from "react-icons/im";
import { BiChat } from "react-icons/bi";



function OrderHome() {
    return ( 
        <>
            <InnerHeader/>
            <Container maxW='container.x1' bg='spikk-inner-page-bg'>
                
                <Flex px={50} py={50} align={'left'} flexDirection={{base: 'column-reverse', xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row'}}>
                    
                    <VStack w={'container.sm'}  ml={5}  borderRadius={"20px"} borderTopRadius={"20px"} bgColor={"spikk-inner-header-bg"} borderWidth={'1px'} borderColor={'gray'}>
                        <Box h={10}></Box>
                        <Divider/>
                        <Center color={'white'}>
                            Nothing to see here
                        </Center>
                            
                        <Box w={'full'} borderRadius={"20px"} bgColor={"spikk-inner-page-bg"} px={"5%"} pt={4} pb={14} borderWidth={'1px'} borderColor={'gray'} >
                            <Box borderRadius={"20px"} px={3} py={7} color={'spikk-light-gray'}  >
                                <Box borderRadius={"20px"} my={4} p={3} bgColor={"spikk-inner-header-bg"}  borderWidth={'1px'} borderColor={'gray'}>
                                    <Flex>
                                        <Box pt={2}>
                                            <Avatar  mr={3} name='samp' src='https://bit.ly/dan-abramov'>
                                                <AvatarBadge boxSize='1.5em' bgColor='white' color='black' fontSize={10} w={8}>4.0*</AvatarBadge>
                                            </Avatar>
                                        </Box>
                                        <Box>
                                            <Heading as='h4' pt={3} textAlign={'left'} size='sm' color={'white'}>
                                                Wale Adebayo
                                            </Heading>
                                            <Text fontSize={13} color={'white'}>
                                                Picker
                                            </Text>
                                        </Box>
                                        <Spacer/>
                                        <Box pt={3} mr={4}>
                                            <Image src={require("../../assets/images/smallbike.png")}/>
                                        </Box>
                                    </Flex>
                                    <Box>
                                        <Divider my={3}/>
                                        <Flex fontSize={'13px'} p={3}>
                                            <HStack>
                                                <Icon as={ImLocation2} h={5} w={6} color={'black'} borderRadius={3} bgColor={'white'} p={1}  />
                                                <Text>10 mins away</Text>
                                            </HStack>
                                            <Spacer/>
                                            <HStack>
                                                <Badge colorScheme='gray'>187</Badge>
                                                <Text>deliveries completed</Text>
                                            </HStack>
                                        </Flex>
                                    </Box>
                                </Box>
                                <VStack>
                                    <Center>
                                        Tap to view Picker's profile
                                    </Center>
                                    <NavLink to={""}>
                                        <Box
                                            display={"flex"}
                                            gap={"4px"}
                                            padding={"0 32px"}
                                            height={"40px"}
                                            width={"max-content"}
                                            borderRadius={"9999px"}
                                            alignItems={"center"}
                                            backgroundColor={"spikk-red"}
                                            fontWeight={"medium"}
                                            color={"white"}
                                            cursor={"pointer"}
                                            fontSize={"sm"}
                                            my={3}
                                            >
                                                <Center> <b> Track Your Order</b> </Center>
                                            

                                        </Box>
                                    </NavLink>
                                    <NavLink to={""}>
                                        <Box
                                            display={"flex"}
                                            gap={"4px"}
                                            padding={"0 32px"}
                                            height={"40px"}
                                            width={"max-content"}
                                            borderRadius={"9999px"}
                                            borderWidth={2}
                                            alignItems={"center"}
                                            backgroundColor={"spikk-"}
                                            fontWeight={"medium"}
                                            color={"white"}
                                            cursor={"pointer"}
                                            fontSize={"sm"}
                                            >
                                                <Center><BiChat/> &nbsp; &nbsp; <b> Message Kolawole</b> </Center>
                                        </Box>
                                    </NavLink>
                                </VStack>
                                
                                
                                
                                
                            </Box>

                        </Box> 
                    </VStack>
                    <VStack w={'container.lg'}  mx={5}  borderRadius={"20px"} borderTopRadius={"20px"} bgColor={"spikk-inner-header-bg"} borderWidth={'1px'} borderColor={'gray'}>
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