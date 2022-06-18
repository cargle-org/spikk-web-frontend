import { Container, Box, Flex, HStack, Grid, VStack } from "@chakra-ui/react";
import InnerFooter from "../../components/innerpages/InnerFooter";
import InnerHeader from "../../components/innerpages/InnerHeader";

function BuyAnything() {
    return ( 
        <>
            <InnerHeader/>
            < >

                {/* <Box as={"section"} background={"spikk-header-bg"}>
                    <Flex>   */}
                        {/* <Box h="200px" borderColor={"white"} borderRadius={'10%'} bgColor={"spikk-inner-header-bg"} color={"whiteAlpha.200"}>
                            
                        </Box>
                        <Box h="200px" borderRadius={'10%'} bgColor={"spikk-inner-header-bg"}>
                            Stuff
                        </Box> */}
                        {/* <HStack>
                            <Box p={'40px'} borderColor={"white"} borderRadius={'10%'} bgColor={"spikk-inner-header-bg"} color={"white"}>
                                sTUFF
                            </Box>
                            <Box borderColor={"white"} borderRadius={'10%'} bgColor={"spikk-inner-header-bg"} color={"white"}>
                                sTUFF
                            </Box>
                        </HStack> */}
                        {/* <Grid gap={2} autoFlow="column dense">
                            <Box bgColor={"red"} w={"full"}>
                                    HiHiHiHiHiHiHiHiHiHiHiHiHiHiHi
                            </Box>
                            <Box bgColor={"yellow"}>
                                    HiHiHiHiHiHiHiHiHiHiHiHiHiHiHi
                            </Box>
                        </Grid> */}
                    {/* </Flex>
                </Box> */}
                <Container maxW='container.x1' bg='#030319'>
                <Flex py={20} align={'left'} flexDirection={{base: 'column-reverse', xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row'}}>                        <HStack>
                            <VStack>
                                <Box bgColor={'white'}>
                                    Box
                                </Box>
                                <Box bgColor={'yellow'}>
                                    Another
                                </Box>
                            </VStack>
                            <VStack>
                                <Box bgColor={'yellow'}>
                                    Another
                                </Box>
                            </VStack>
                        </HStack>
                    
                    </Flex>
                </Container>
            </>
            <InnerFooter/>
        </>
     );
}

export default BuyAnything;