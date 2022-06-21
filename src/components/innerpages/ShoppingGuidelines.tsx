import { Box, HStack, VStack, Heading,Collapse, Text, Button, useDisclosure, Icon, CloseButton } from "@chakra-ui/react";
import { BsArrowBarDown, BsCart } from "react-icons/bs";

import { FiChevronDown } from "react-icons/fi";


function ShoppingGuidelines() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <>
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
        </>
    )
}
export default ShoppingGuidelines;