import { Box, Container, Flex, VStack, Image, Heading, Text, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import spikklogo from "./spikklogoyellow.png";

const LandingFooter = () => {
  return (
    <div>
      <Container maxW='container.x1' bg='#0D0D26'>
        <Flex h='50vh' py={20}>
          <VStack w='full' h='full'>
            {/* <Box> */}
              <Image p={6} src={spikklogo} alt='Spikk Logo' />
            {/* </Box> */}
            <Text fontSize='1xl' style={{color:'white'}}>
              © 2022 Spikk Technologies
            </Text>
            <Text fontSize='1xl' style={{color:'white'}}>
              Terms and conditions | Privacy Policy
            </Text>
          </VStack>
          <VStack w='full' h='full' >
            <Heading as='h4' size='1xl' style={{color:'#FFF59A'}} m={6}>
              Quicklinks
            </Heading>
            <Text fontSize='1xl' style={{color:'white'}}>
              About            
            </Text>   
            <Text fontSize='1xl' style={{color:'white'}}>
              Contact Us            
            </Text>              
          </VStack>
          <VStack w='full' h='full' >
                     
          </VStack>
          <VStack w='full' h='full' >
            <Heading as='h4' size='1xl' style={{color:'#FFF59A'}}>
            </Heading>
            <Text fontSize='1xl' style={{color:'white'}}>
            </Text>   
            <Text fontSize='1xl' style={{color:'white'}}>
            </Text>        
          </VStack>
        </Flex>
      </Container>
    </div>
  )
}

export default LandingFooter