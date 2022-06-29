import { Flex, Spacer, Box, HStack, VStack, Heading,Collapse, Text, Button, useDisclosure, Icon, CloseButton, Image } from "@chakra-ui/react";
import { BsArrowBarDown, BsCart } from "react-icons/bs";

import { FiChevronDown } from "react-icons/fi";


function ShoppingGuidelines() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <>
            <VStack w={'container.md'}  mx={5}  borderRadius={"20px"}>
                        
                <Box w={'full'} borderTopRadius={"20px"} bgColor={"spikk-box-bg"} px={"10%"} py={10}  >
                    <HStack>
                        <VStack>
                            <Icon as={BsCart} boxSize={14} color={'spikk-gray'} bgColor={'spikk-inner-header-bg'} p={3} />
                        </VStack>
                        <VStack>
                            <Text color={'spikk-gray'} fontSize={'13px'} alignSelf={'start'}>
                                Shop Anything
                            </Text>
                            <Heading as='h2' size='md' color={'spikk-gray'}>
                            Shopping Guidelines
                            </Heading>
                        </VStack>
                        <VStack>
                            <Button w={10} onClick={onToggle} bgColor={'transparent'} _hover={{backgroundColor: 'transparent'}} _focus={{backgroundColor: 'spikk-gray'}} >
                                 <Icon as={FiChevronDown} boxSize={14} color={'white'} p={3} />

                            </Button>
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
                <Box w={'full'} borderBottomRadius={"20px"} bgColor={"spikk-box-bg"} px={"10%"} py={10}  >
                    <Flex>
                        <Box>

                        </Box>
                        <Spacer/>
                        <Box>

                        </Box>
                        <Spacer/>
                        <Box>

                        </Box>
                        <Spacer/>
                        <Box>

                        </Box>

                    </Flex>
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
                    <Box py={4}>
                        <Image src={require("../../assets/images/slider.png")}/>
                    </Box>
                </Box> 
            </VStack>
        </>
    )
}
export default ShoppingGuidelines;