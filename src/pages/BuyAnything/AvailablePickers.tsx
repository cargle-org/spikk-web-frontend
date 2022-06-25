import { Container, Box, Flex, HStack, Grid, VStack, Heading,Collapse, Text, Button, Progress, FormControl, Input,InputLeftElement, InputGroup, Spacer, Divider, Table, TableContainer, Th, Tr, Td, Thead, Tbody, Tfoot, TableCaption, InputAddon, Icon, useDisclosure, Image, CloseButton, Avatar, AvatarBadge } from "@chakra-ui/react";
import InnerHeader from "../../components/innerpages/InnerHeader";
import InnerFooter from "../../components/landing/LandingFooter";
import { NavLink } from "react-router-dom";


function AvailablePickers() {
    return ( 
        <>
            <InnerHeader/>
            <Container maxW='container.x1' bg='spikk-inner-page-bg'>
                
                <Flex px={100} py={50} align={'left'} flexDirection={{base: 'column-reverse', xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row'}}>
                    
                    <VStack bg={`url(${require("../../assets/images/map.png")})`} bgPosition="center" bgRepeat="no-repeat" w={'container.xl'} p={0} maxW={'1000'} bgColor={"spikk-inner-header-bg"} borderRadius={"20px"} >
                    </VStack>
                    
                    <VStack w={'container.md'}  mx={5}  borderRadius={"20px"} borderTopRadius={"20px"} bgColor={"spikk-inner-header-bg"} borderWidth={'1px'} borderColor={'gray'}>
                        
                            <Heading as='h2' pl={2}  alignSelf={'self-start'} py={10}  size='lg' color={'white'}>
                                Available Pickers
                            </Heading>
                            
                        <Box w={'full'} borderRadius={"20px"} bgColor={"spikk-inner-page-bg"} px={"5%"} pt={4} pb={14} borderWidth={'1px'} borderColor={'gray'} >
                            <Box borderRadius={"20px"} px={3} py={7} color={'spikk-light-gray'}  >
                                <Flex borderRadius={"20px"} my={4} p={3} bgColor={"spikk-inner-header-bg"}  borderWidth={'1px'} borderColor={'gray'}>
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
                                <Flex borderRadius={"20px"} my={4} p={3} bgColor={"spikk-inner-header-bg"}  borderWidth={'1px'} borderColor={'gray'}>
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
                                <Flex borderRadius={"20px"} my={4} p={3} bgColor={"spikk-inner-header-bg"}  borderWidth={'1px'} borderColor={'gray'}>
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
                                
                                
                            </Box>

                        </Box> 
                    </VStack>

                </Flex>
            </Container>
            <InnerFooter/>
        </>
     );
}

export default AvailablePickers;