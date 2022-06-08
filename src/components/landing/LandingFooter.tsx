import { Box, Container, Flex, VStack, Image, Heading, Text, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import spikklogo from "./spikklogoyellow.png";

const LandingFooter = () => {
  return (
    <div>
      <Container maxW='container.x1' bg='#0D0D26'>
        <Flex h='50vh' py={20}>
          <VStack w='full' h='full'>
            <Box>
              <Image p={6} src={spikklogo} alt='Spikk Logo' />
            </Box>
            <Text fontSize='1xl' style={{color:'white'}}>
              Spikk has got you covered. Spikk saves you time and energy so you can relax and have us run that errand or pick up and deliver.
            </Text>
          </VStack>
          <VStack w='full' h='full' >
            <Heading as='h4' size='1xl' style={{color:'yellow'}}>
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
            <Heading as='h4' size='1xl' style={{color:'yellow'}}>
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