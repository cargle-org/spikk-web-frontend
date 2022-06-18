import { AddIcon } from "@chakra-ui/icons";
import { Container, Box, Flex, HStack, Grid, VStack, Heading, Text, Button, Progress, FormControl, Input,InputLeftElement, InputGroup, Spacer, Divider, Table, TableContainer, Th, Tr, Td, Thead, Tbody, Tfoot, TableCaption, InputAddon } from "@chakra-ui/react";
import { BsCart, BsImage } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { SiAddthis } from "react-icons/si";
import { BiAddToQueue } from "react-icons/bi";

import { VscAdd } from "react-icons/vsc";
import InnerHeader from "../../components/innerpages/InnerHeader";
import InnerFooter from "../../components/landing/LandingFooter";

function BuyAnything2() {
    return ( 
        <>
            <InnerHeader/>
            <Container maxW='container.x1' bg='spikk-inner-page-bg'>
                
                <Flex p={30} align={'left'} flexDirection={{base: 'column-reverse', xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row'}}>
                    <VStack w={'full'}  bgColor={"spikk-box-bg"} borderRadius={"20px"} >
                        
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
                            
                            <Progress borderRadius={4} colorScheme='yellow' size='md' color={'spikk-yellow'} value={30} />
                            <HStack py={4}>
                                <InputGroup>
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={<BsCart color='gray' />}
                                    />
                                    <Input colorScheme={'blue'} bgColor={'spikk-inner-page-bg'} variant='outline' placeholder='What can we get you?'></Input>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={<BsImage color='gray' /> }
                                    />
                                    <Input bgColor={'spikk-inner-page-bg'} variant='outline' placeholder='Attach Image- Optional'></Input>
                                </InputGroup>
                            </HStack>
                            <HStack py={4}>
                                <InputGroup>
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={<FaDollarSign color="gray"/>}
                                    />
                                    <Input bgColor={'spikk-inner-page-bg'} variant='outline' placeholder='Enter lowest price estimate'></Input>   
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={ <FaDollarSign color="gray"/>}
                                    />
                                    <Input bgColor={'spikk-inner-page-bg'} variant='outline' placeholder='Enter highest price estimate'></Input>                             
                                </InputGroup>
                                
                            </HStack>     
                            <HStack>
                                {/* <SiAddthis color="white" /> */}
                                <BiAddToQueue width={20} color="white"/>
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
                        
                        <Box px={"10%"} borderRadius={"20px"} bgColor={"spikk-inner-header-bg"} py={'10'} mt={'4'} style={{'marginBottom': "40px"}}>
                            <Flex>
                                <Box p='1'>
                                    <Text color={'gray'}>
                                        Summary
                                    </Text>
                                </Box>
                                <Spacer />
                            </Flex>
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
                                            <Td>inches</Td>
                                            <Td>millimetres (mm)</Td>
                                            <Td isNumeric>25.4</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>feet</Td>
                                            <Td>centimetres (cm)</Td>
                                            <Td isNumeric>30.48</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>yards</Td>
                                            <Td>metres (m)</Td>
                                            <Td isNumeric>0.91444</Td>
                                        </Tr>
                                        </Tbody>
                                        <Tfoot>
                                        
                                        </Tfoot>
                                    </Table>
                                </TableContainer>
                            </VStack>
                        </Box>  
                    </VStack>
                    <VStack w={'full'} mx={5} bgColor={"spikk-inner-header-bg"} borderRadius={"20px"}>
                        <Box borderRadius={"20px"} p={30}>
                            
                        </Box>  
                    </VStack>
                </Flex>
            </Container>
            <InnerFooter/>
        </>
     );
}

export default BuyAnything2;