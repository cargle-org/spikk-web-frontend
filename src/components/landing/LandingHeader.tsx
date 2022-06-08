import React from 'react'
import { Image, Box, Button, Spacer, Flex } from '@chakra-ui/react'
import spikklogo from "./spikklogo.png";
const LandingHeader = () => {
  return (
    
    <div>
      <Flex bg='#0D0D26'>
        <Box>
          <Image p={6} src={spikklogo} alt='Spikk Logo' />
        </Box>
        <Spacer />
        <Box p='4' style={{color:'white'}}>
          Home
        </Box>
        <Box p='4' style={{color:'white'}}>
          About
        </Box>
        <Box pr={100} pt={2}>
          <Button bg='#FBA819' color='#0D0D26'>Join</Button>
        </Box>
      </Flex>
      
    </div>
  )
}

export default LandingHeader