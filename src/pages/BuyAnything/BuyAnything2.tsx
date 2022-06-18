import { Container, Box, Flex, HStack, Grid, VStack, Heading, Text, Button, Progress, FormControl, Input } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import InnerFooter from "../../components/innerpages/InnerFooter";
import InnerHeader from "../../components/innerpages/InnerHeader";

function BuyAnything2() {
    return ( 
        <>
            <InnerHeader/>
            <Container maxW='container.x1' bg='#030319'>
                <Flex p={30} align={'left'} flexDirection={{base: 'column-reverse', xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row'}}>
                    <VStack bgColor={"spikk-inner-header-bg"} borderRadius={"20px"} >
                        
                        <Box borderRadius={"20px"} p={30}>
                            <HStack>
                                <Text color={'#FFF59A'}>
                                    Let us know what you want to buy?
                                </Text>
                                <Text color={'#FFF59A'}>
                                    1 of 3
                                </Text>
                            </HStack>
                            
                            <Progress colorScheme='yellow' size='md' value={30} />
                            <HStack>
                                <Input variant='outline' placeholder='What can we get you?'></Input>
                                <Input variant='outline' placeholder='Attach Image- Optional'></Input>
                            </HStack>
                            <HStack>
                                <Input variant='outline' placeholder='Enter lowest price estimate'></Input>   
                                <Input variant='outline' placeholder='Enter highest price estimate'></Input>                             
                            </HStack>
                            <HStack>
                                <Box
                                    display={"flex"}
                                    gap={"4px"}
                                    padding={"0 16px"}
                                    height={"32px"}
                                    borderRadius={"9999px"}
                                    alignItems={"center"}
                                    backgroundColor={"spikk-red"}
                                    textTransform={"uppercase"}
                                    fontWeight={"medium"}
                                    color={"spikk-header-bg"}
                                    cursor={"pointer"}
                                    fontSize={"sm"}
                                    >
                                    NEXT <FiChevronRight size={"24px"} />
                                </Box>
                            </HStack>
                        </Box>  
                    </VStack>
                    <VStack bgColor={"spikk-inner-header-bg"} borderRadius={"20px"}>
                    <Box borderRadius={"20px"} p={30}>
                            <HStack>
                                <Text color={'#FFF59A'}>
                                    Let us know what you want to buy?
                                </Text>
                                <Text color={'#FFF59A'}>
                                    1 of 3
                                </Text>
                            </HStack>
                            
                            <Progress colorScheme='yellow' size='md' value={30} />
                            <HStack>
                                <Input variant='outline' placeholder='What can we get you?'></Input>
                                <Input variant='outline' placeholder='Attach Image- Optional'></Input>
                            </HStack>
                            <HStack>
                                <Input variant='outline' placeholder='Enter lowest price estimate'></Input>   
                                <Input variant='outline' placeholder='Enter highest price estimate'></Input>                             
                            </HStack>
                            <HStack>
                                <Box
                                    display={"flex"}
                                    gap={"4px"}
                                    padding={"0 16px"}
                                    height={"32px"}
                                    borderRadius={"9999px"}
                                    alignItems={"center"}
                                    backgroundColor={"spikk-red"}
                                    textTransform={"uppercase"}
                                    fontWeight={"medium"}
                                    color={"spikk-header-bg"}
                                    cursor={"pointer"}
                                    fontSize={"sm"}
                                    >
                                    NEXT <FiChevronRight size={"24px"} />
                                </Box>
                            </HStack>
                        </Box>  
                    </VStack>
                </Flex>
            </Container>
            <InnerFooter/>
        </>
     );
}

export default BuyAnything2;