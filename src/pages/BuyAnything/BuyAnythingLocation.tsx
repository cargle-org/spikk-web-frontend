import { AddIcon } from "@chakra-ui/icons";
import { Container, Box, Flex, HStack, Grid, VStack, Heading,Collapse, Text, Button, Progress, FormControl, Input,InputLeftElement, InputGroup, Spacer, Divider, Table, TableContainer, Th, Tr, Td, Thead, Tbody, Tfoot, TableCaption, InputAddon, Icon, useDisclosure, Image, CloseButton } from "@chakra-ui/react";
import { BsArrowBarDown, BsCart, BsImage } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { TbCurrencyNaira, TbZoomCancel } from "react-icons/tb";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { SiAddthis } from "react-icons/si";
import { BiAddToQueue } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { TbFlag3 } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCommentDetail } from "react-icons/bi";
import { VscAdd } from "react-icons/vsc";
import InnerHeader from "../../components/innerpages/InnerHeader";
import InnerFooter from "../../components/landing/LandingFooter";
import ShoppingGuidelines from "../../components/innerpages/ShoppingGuidelines";
import { NavLink } from "react-router-dom";

function BuyAnythingStep2() {
    return ( 
        <>
            <InnerHeader/>
            <Container maxW='container.x1' bg='spikk-inner-page-bg'>
                
                <Flex px={100} py={50} align={'left'} flexDirection={{base: 'column-reverse', xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row'}}>
                    
                    <VStack w={'container.xl'} p={0} maxW={'1000'} bgColor={"spikk-inner-header-bg"} borderRadius={"20px"} >
                        <HStack>
                            <Image  src={require("../../assets/images/steparrow.png")} alt="item" h={'80px'} alignItems={'normal'} />

                            <Box borderTopRadius={"20px"} borderBottomRadius={"0px"} borderBottomColor={'spikk-gray'}  py={10} bgColor={"spikk-inner-header-bg"} >
                                
                                <Flex>

                                    <Box p='2'>

                                        <Text color={'spikk-yellow'}>
                                            Kindly provide location information
                                        </Text>

                                    </Box>

                                    <Spacer />

                                    <Box p='2'>

                                        <Text color={'spikk-yellow'}>
                                            <b>2</b> of <b>3</b>
                                        </Text>

                                    </Box>

                                </Flex>
                                <div style={{height: '10px', borderRadius:'3px', background: "linear-gradient(to right, #FFF59A 0%,#FFF59A 67%,#000000 67%,rgba(255, 245, 154, 0.25) 67%,rgba(255, 245, 154, 0.25) 100%)"}} >
                                
                                </div>
                                
                                {/* <Progress borderRadius={4} colorScheme={'yellow'} style={{backgroundColor: "rgb(255,254,224)"}} size='md' color={'spikk-yellow'} value={67} /> */}
                                <HStack py={4}>
                                    <InputGroup>
                                        <InputLeftElement
                                        pointerEvents='none'
                                        children={<TbFlag3 color='gray' />}
                                        />
                                        <Input size={'lg'} colorScheme={'blue'} bgColor={'spikk-inner-page-bg'} variant='outline' placeholder='Enter preferred shopping location'></Input>
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftElement
                                        pointerEvents='none'
                                        children={<TbFlag3 color='gray' /> }
                                        />
                                        <Input size={'lg'} bgColor={'spikk-inner-page-bg'} variant='outline' placeholder='Enter preferred shopping location'></Input>
                                    </InputGroup>
                                </HStack>
                                
                                <Flex>
                                    <InputGroup w={'50%'}>
                                        <InputLeftElement
                                        pointerEvents='none'
                                        children={ <HiOutlineLocationMarker color="gray"/>}
                                        />
                                        <Input size={'lg'} bgColor={'spikk-inner-page-bg'} variant='outline' placeholder='Enter your delivery location'></Input>                             
                                    </InputGroup>
                                    <Spacer/>
                                    
                                </Flex>

                                <Divider my={4} />
                                <InputGroup my={4}>
                                        <InputLeftElement
                                        pointerEvents='none'
                                        children={ <BiCommentDetail color="gray"/>}
                                        />
                                        <Input type={'textarea'} size={'lg'} bgColor={'spikk-inner-page-bg'} variant='outline' placeholder='Add a description/comment'></Input>                             
                                    </InputGroup>

                            </Box> 

                        </HStack>
                           
                             
                        <Divider/>                       
                        <Flex my={10} py={10} w={'80%'}>
                            <NavLink to={"/buy-anything"}>

                                <Box p='2'>
                                    <Text color={'gray'}>
                                        BACK
                                    </Text>
                                </Box>
                            </NavLink>

                            <Spacer />
                            <NavLink to={"/buy-anything-order-summary"}>
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
                                    SEE SUMMARY <FiChevronRight size={"24px"} />
                                </Box>
                            </NavLink>

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

export default BuyAnythingStep2;