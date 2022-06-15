import { Box } from "@chakra-ui/react"
import LandingFooter from "../../components/landing/LandingFooter"
import LandingHeader from "../../components/landing/LandingHeader"

const Homepage = () => {
  return (
    <div>
      <LandingHeader/>
      <Box as={"section"} backgroundColor ={""}>
      </Box>
      <LandingFooter/>
    </div>
  )
}

export default Homepage