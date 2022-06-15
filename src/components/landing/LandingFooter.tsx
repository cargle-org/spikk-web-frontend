import { Box, Container, Flex, VStack, Image, Heading, Text, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom';

const LandingFooter = () => {
  return (
    <div>
      <Container maxW='container.x1' bg='#0D0D26'>
        <Flex py={5}>
          <VStack w='full' h='full'>
            <NavLink to="/" >
              <Image p={6} src={require("../../assets/images/spikklogo.png").default} alt='Spikk Logo' />
            </NavLink>
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
            <Button
                fontWeight={400}
                color={'white'}
                variant={'link'}
                _hover={{
                  color: 'rgb(251, 168, 25)',
                }}
                _active={{
                  color: 'rgb(251, 168, 25)',
                }}
                >
                <NavLink
                    to="/about"
                >About</NavLink>
            </Button>
            <Button
                fontWeight={400}
                color={'white'}
                variant={'link'}
                _hover={{
                  color: 'rgb(251, 168, 25)',
                }}
                _active={{
                  color: 'rgb(251, 168, 25)',
                }}
                >
                <NavLink
                    to="/"
                >Contact us</NavLink>
            </Button>           
          </VStack>
          <VStack w='full' h='full' >
                     
          </VStack>
          <VStack w='full' h='full' >
            <Heading as='h4' size='1xl' style={{color:'#FFF59A'}} m={6}>
              Get in touch with us
            </Heading>
            <Flex direction={{base: 'column', md: 'row' }} >
         
            </Flex>
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