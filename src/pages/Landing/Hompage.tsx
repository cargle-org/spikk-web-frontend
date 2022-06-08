import { Box, Container, Flex, VStack, Image, Heading, Text, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import LandingFooter from '../../components/landing/LandingFooter'
import LandingHeader from '../../components/landing/LandingHeader'
import userImage from './femaleuserimage.svg';
import userImage2 from './femaleuserimage2.png';
import progress from './progress.png';
import bike from './bike.png';

const Hompage = () => {
  return (
    <div>
      <LandingHeader/>
      <Container maxW='container.x1' bg='#0D0D26'>
        <Flex h='100vh' py={20}>
          <VStack w='full' h='full'>
            <Heading as='h2' size='3xl' style={{color:'white'}}>
              Too tired to shop for groceries or make dinner?
            </Heading>
            <Text fontSize='1xl' style={{color:'white'}}>
              Spikk has got you covered. Spikk saves you time and energy so you can relax and have us run that errand or pick up and deliver.
            </Text>
            <HStack>
              <Image src={progress} alt='progress' />
            </HStack>
            <HStack>
              <Button colorScheme='yellow' variant='outline'   borderRadius='20px'>
                BUY ANYTHING
              </Button>
              {/* <Button leftIcon={<EmailIcon />} colorScheme='yellow' variant='outline'>
                BUY ANYTHING
              </Button> */}
              <Button colorScheme='yellow' variant='outline'   borderRadius='20px'>
                SEND ANYTHING
              </Button>
            </HStack>
            <HStack>
              <Image src={bike} alt='bike' />
            </HStack>
          </VStack>
          <VStack w='full' h='full' >
            <Image src={userImage2} alt='Spikk Logo' />
          </VStack>
        </Flex>
      </Container>
      <LandingFooter/>
    </div>
  )
}

export default Hompage