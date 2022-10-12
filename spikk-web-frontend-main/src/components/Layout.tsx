import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router'
import ShoppingGuidelines from './dashboard/ShoppingGuidelines'
import Header from './Header'
import PutAds from './dashboard/PutAds'

const Layout = () => {
  return (
    <Box as ="main" minH={"100vh"} bg ={"spikk-dark-bg"}>
        <Header/>
        <Box maxW={"1200px"} paddingX={"16px"} marginX={"auto"} paddingY={"28px"}>
          <Outlet/>
        </Box>
    </Box>
  )
}

{/* <Box as ="main" minH={"100vh"} bg ={"spikk-dark-bg"}>
<Header/>
<Grid maxW={"1200px"} paddingX={"16px"} marginX={"auto"} paddingY={"28px"} gridTemplateColumns ={"1fr 480px"} gap={"24px"}>
  <Outlet/>
   <Box>
    <ShoppingGuidelines/>
    <PutAds/>
  </Box> 
</Grid>
</Box> */}

export default Layout