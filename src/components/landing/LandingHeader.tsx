import React from 'react'
import { Image, Box, Button, Spacer, Flex } from '@chakra-ui/react'
import spikklogo from "./spikklogo.png";
import { VscGift, VscChevronDown } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';

const LandingHeader = () => {
  return (
    
    <div>
      <Flex bg='#0D0D26'>
        <Box>
          <NavLink to="/" >
            <Image p={6} src={spikklogo} alt='Spikk Logo' />
          </NavLink>
        </Box>
        <Spacer />
        <Box p='4' style={{color:'white'}}>
          
          <NavLink
              to="/"
          >Home</NavLink>
        </Box>
        <Box p='4' style={{color:'white'}}>
        <NavLink
              to="/"
          >About</NavLink>
        </Box>
        <Box pr={100} pt={2}>
          <Button bg='#FBA819' color='#0D0D26'> Join &nbsp; <VscChevronDown/></Button>
        </Box>
      </Flex>
      
    </div>
  )
}

export default LandingHeader