import { AddIcon } from "@chakra-ui/icons";
import { Container, Box, Flex, HStack, Grid, VStack, Heading,Collapse, Text, Button, Progress, FormControl, Input,InputLeftElement, InputGroup, Spacer, Divider, Table, TableContainer, Th, Tr, Td, Thead, Tbody, Tfoot, TableCaption, InputAddon, Icon, useDisclosure } from "@chakra-ui/react";
import { BsArrowBarDown, BsCart, BsImage } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { SiAddthis } from "react-icons/si";
import { BiAddToQueue } from "react-icons/bi";

import { VscAdd } from "react-icons/vsc";
import InnerHeader from "../../components/innerpages/InnerHeader";
import InnerFooter from "../../components/landing/LandingFooter";

function BuyAnything2() {
    const { isOpen, onToggle } = useDisclosure()
    return ( 
        
        <>
            <InnerHeader/>
            <Container maxW='container.x1' bg='spikk-inner-page-bg'>
                
                <Flex px={100} py={50} align={'left'} flexDirection={{base: 'column-reverse', xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row'}}>
                    <VStack w={'container.xl'} p={0} maxW={'1000'} bgColor={"spikk-box-bg"} borderRadius={"20px"} >
                        
                        <Box borderTopRadius={"20px"} borderBottomRadius={"0px"} px={"20%"} py={10} bgColor={"spikk-inner-header-bg"} >
                            
                            <Flex>

                                <Box p='2'>

                                    <Text color={'spikk-yellow'}>
                                        Let us know what you want to buy?
                                    </Text>

                                </Box>

                                <Spacer />

                                <Box p='2'>

                                    <Text color={'spikk-yellow'}>
                                        <b>1</b> of <b>3</b>
                                    </Text>

                                </Box>

                            </Flex>
                            
                            <Progress borderRadius={4} colorScheme={'yellow'} style={{backgroundColor: "rgb(255,254,224)"}} size='md' color={'spikk-yellow'} value={30} />
                            <HStack py={4}>
                                <InputGroup>
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={<BsCart color='gray' />}
                                    />
                                    <Input size={'lg'} colorScheme={'blue'} bgColor={'spikk-inner-page-bg'} variant='outline' placeholder='What can we get you?'></Input>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={<BsImage color='gray' /> }
                                    />
                                    <Input size={'lg'} bgColor={'spikk-inner-page-bg'} variant='outline' placeholder='Attach Image- Optional'></Input>
                                </InputGroup>
                            </HStack>
                            <HStack py={4}>
                                <InputGroup>
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={<TbCurrencyNaira color="gray"/>}
                                    />
                                    <Input size={'lg'} bgColor={'spikk-inner-page-bg'} variant='outline' placeholder='Enter lowest price estimate'></Input>   
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={ <TbCurrencyNaira color="gray"/>}
                                    />
                                    <Input size={'lg'} bgColor={'spikk-inner-page-bg'} variant='outline' placeholder='Enter highest price estimate'></Input>                             
                                </InputGroup>
                                
                            </HStack>     
                            <HStack>
                                {/* <SiAddthis color="white" /> */}
                                <BiAddToQueue width={20} color="gray"/>
                                <Box p='1'>
                                    <Text color={'gray'}>
                                        Add Item
                                    </Text>
                                </Box>
                                <Spacer />
                            </HStack>                                 
                            <Flex>

                                <Box p='2'>

                                    <Text color={'gray'}>
                                        BACK
                                    </Text>

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
                                    NEXT <FiChevronRight size={"24px"} />
                                </Box>

                            </Flex>
                            
                        </Box>  
                        <Spacer/>
                        <Flex>
                            <Box p='1'>
                                <Text color={'gray'}>
                                    Summary
                                </Text>
                            </Box>
                            <Spacer />
                        </Flex>
                        
                        <Box px={"20%"} borderRadius={"20px"} bgColor={"spikk-inner-header-bg"} py={'10'} mt={'4'} style={{'marginBottom': "40px"}}>
                            
                            <VStack>                   
                                <TableContainer>
                                    <Table variant='simple' colorScheme={'whiteAlpha'}>
                                        <Thead>
                                        <Tr>
                                            <Th>Image</Th>
                                            <Th>Item Name</Th>
                                            <Th isNumeric >Price Estimate</Th>
                                        </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td></Td>
                                                <Td></Td>
                                                <Td isNumeric></Td>
                                            </Tr>
                                            <Tr>
                                                <Td></Td>
                                                <Td></Td>
                                                <Td isNumeric></Td>
                                            </Tr>
                                            <Tr>
                                                <Td></Td>
                                                <Td></Td>
                                                <Td isNumeric></Td>
                                            </Tr>
                                        </Tbody>
                                        <Tfoot>
                                        
                                        </Tfoot>
                                    </Table>
                                </TableContainer>
                            </VStack>
                        </Box>  
                    </VStack>
                    <VStack w={'container.md'}  mx={5}  borderRadius={"20px"}>
                        
                        <Box w={'full'} borderRadius={"20px"} bgColor={"spikk-box-bg"} px={"20%"} py={10}  >
                            <HStack>
                                <VStack>
                                    <Icon as={BsCart} boxSize={14} color={'spikk-gray'} bgColor={'spikk-inner-header-bg'} p={3} />
                                </VStack>
                                <VStack>
                                    <Text color={'spikk-gray'}>
                                        Shop Anything
                                    </Text>
                                    <Heading as='h2' size='lg' color={'spikk-gray'}>
                                    Shopping Guidelines
                                    </Heading>
                                    
                                    
                                </VStack>
                                <VStack>
                                    <Button onClick={onToggle} bgColor={'transparent'} _hover={{backgroundColor: 'transparent'}} _focus={{backgroundColor: 'spikk-gray'}} > <FiChevronDown  color="white"/> </Button>
                                </VStack>
                            </HStack>
                            <HStack>
                                <Collapse in={isOpen} animateOpacity>
                                    <Box
                                    color='spikk-light-gray'
                                    mt='4'
                                    bg='spikk-box-bg'
                                    rounded='md'
                                    shadow='md'
                                    >
                                    <Text>
                                        <b>
                                        Occasionally, the estimated price with the actual price of the product may differ.                                         
                                        </b>
                                        <br/><br/>

                                        In cases where the total actual price is more than the estimate, the picker will contact you to ask if you’d still like to proceed with the purchase. 
                                        <b>
                                        <br/><br/>
                                        If you do not want to proceed, your order will be cancelled or you can choose which of the order in the list should be cancelled.
                                        </b>
                                        <br/><br/>

                                        If you accept the change, the picker will proceed to purchase the products. 

                                    </Text>
                                    </Box>
                                </Collapse>
                            </HStack>
                            
                            
                            
                        </Box> 
                        <Box w={'full'} borderRadius={"20px"} bgColor={"spikk-box-bg"} px={"20%"} py={10}  >
                            <Heading as={'h3'} size={'lg'} color={'spikk-yellow'}>
                                Insert Ads here
                            </Heading>
                            <Text color={'spikk-gray'}>
                                Lorem ipsum dolor sit amet, consectetur adi
                                piscing elit, sed do eiusmod tempor incidid
                                unt ut labore et dolore magna aliqua
                            </Text>

                            
                            
                        </Box> 
                    </VStack>
                </Flex>
            </Container>
            <InnerFooter/>
        </>
     );
}

export default BuyAnything2;