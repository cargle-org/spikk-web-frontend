import { Box, Container, Flex, VStack, Image, Heading, Text, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import LandingFooter from '../../components/landing/LandingFooter'
import LandingHeader from '../../components/landing/LandingHeader'
import LandingHeader2 from '../../components/landing/LandingHeader2'
import userImage from './femaleuserimage.svg';
import userImage2 from './femaleuserimage2.png';
import progress from './progress.png';
import bike from './bike.png';
import fadedrectangle from './fadedrectangle.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { VscGift, VscChevronDown } from 'react-icons/vsc';

const Hompage = () => {
  return (
    <div>
      <LandingHeader2/>
      <Container maxW='container.x1' bg='#030319'>
        <Flex py={20} align={'left'} flexDirection={{base: 'column-reverse', xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row'}}>
          <VStack>
            <div style={{backgroundRepeat : 'no-repeat',backgroundImage:`url(${fadedrectangle})`}}>
              <Heading as='h2' size='3xl' style={{color:'white'}}>
                Too tired to shop for 
              </Heading>
            </div>
            <Heading as='h2' size='3xl' style={{color:'white'}} pl={{ base: '0px', md: '15px', lg:'55px' }}>
              groceries or make dinner?              
            </Heading>
            <Text fontSize='1xl' style={{color:'white'}} pl={{ base: '0px', md: '15px', lg:'55px' }}>
              Spikk has got you covered. Spikk saves you time and energy so you can relax and have us run that errand or pick up and deliver.
            </Text>
            {/* <HStack align={'start'}>
              <Image src={progress} alt='progress' />
            </HStack> */}
            <div style={{paddingTop: '20px', marginLeft: '15px', marginTop: '20px', backgroundRepeat : 'no-repeat',backgroundImage:`url(${progress})`}}>
              <Heading as='h3' size='2xl' style={{color:'transparent'}}>
                groceries or make dinner?            
              </Heading>
            </div>
            <HStack>
              <Button p={6} colorScheme='#FBA819' variant='outline' borderWidth={'2px'}  borderRadius='25px' style={{borderColor: '#FBA819', color: '#FBA819'}}>
                <AiOutlineShoppingCart/> &nbsp;  BUY ANYTHING
              </Button>
              <Button p={6} colorScheme='#FBA819' variant='outline' borderWidth={'2px'}   borderRadius='25px' style={{borderColor: '#FBA819', color: '#FBA819'}}>
                <VscGift/> &nbsp; SEND ANYTHING
              </Button>
            </HStack>
            <div style={{paddingTop: '20px', marginTop: '20px', backgroundRepeat : 'no-repeat',backgroundImage:`url(${bike})`}}>
              <Heading as='h2' size='3xl' style={{color:'transparent'}} pl={12}>
                groceries or make dinner?              
              </Heading>
            </div>
          </VStack>
          <VStack>
            <Image src={userImage2} alt='Spikk Logo'/>
          </VStack>
        </Flex>
      </Container>
      <LandingFooter/>
    </div>
  )
}

export default Hompage