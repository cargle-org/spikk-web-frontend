import React from 'react'
import { Image, Box, Button } from '@chakra-ui/react'
import spikklogo from "./spikklogo.png";
const LandingHeader = () => {
  return (
    
    <div>
      <Box bg='#0D0D26'>
        <Image p={6} src={spikklogo} alt='Spikk Logo' />
      </Box>
      {/* <div style={{color:'white'}}>
          <div>Home</div>
        </div>
        <div style={{color:'white'}}>
          <div>About</div>
        </div>
      <Box bg='#0D0D26'>
        <Box>
          <Button bg='#FBA819' color='#0D0D26'>Join</Button>
        </Box>
      </Box> */}
    </div>
  )
}

export default LandingHeader