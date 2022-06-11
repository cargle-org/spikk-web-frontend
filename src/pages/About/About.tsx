import { Box, Container, Flex, VStack, Image, Heading, Text, HStack, Button, Badge } from '@chakra-ui/react'
import React from 'react'
import LandingFooter from '../../components/landing/LandingFooter'
import LandingHeader from '../../components/landing/LandingHeader'
import LandingHeader2 from '../../components/landing/LandingHeader2'
import Rectangle from './rectangle.png'
import AboutHero from './abouthero.png'
import Ellipse from './ellipse.png'

const About = () => {
  return (
    <div>
      <LandingHeader2/>
      <Container maxW='container.x1' bg='#030319'>
        <Flex color={'white'} align={'center'}>
            <VStack>
                <Heading as={'h3'} size='lg'>
                    Spikk is an on-demand delivery platform that
                </Heading>
                <Heading as={'i'} size='lg'>
                    delivers just anything to customers.
                </Heading>
                <Image src={Rectangle} />
                <Text>
                    From the comfort of your home/offices, Spikk connects you to 
                    dedicated shoppers that run errands and deliver top notch services.
                </Text>
                <Text>
                    Spikk is dedicated to empowering people, communities and making life a lot easier.
                </Text>
                <HStack flexDirection={{base: 'column', xs: 'column', sm: 'column', md: 'row', lg: 'row'}}>
                    <VStack>
                        <VStack>
                            <Badge fontSize='large' px={5} py={3} bg={'gray.600'} color={'white'}>
                                1
                            </Badge>
                            <Heading as={'h4'} size={'md'}>
                                Request/Match
                            </Heading>
                            <Text>
                                List the item(s) you want to buy or send and we will connect you to the best Pickers that run errands and deliver top notch services.
                            </Text>
                        </VStack>
                        <VStack>
                            <Badge fontSize='large' px={5} py={3} bg={'gray.600'} color={'white'}>
                                2
                            </Badge>
                            <Heading as={'h4'} size={'md'}>
                                Request/Match
                            </Heading>
                            <Text>
                                List the item(s) you want to buy or send and we will connect you to the best Pickers that run errands and deliver top notch services.
                            </Text>
                        </VStack>
                    </VStack>
                    {/* <Text>Some Text</Text> */}
                    {/* <Box bgImage={Ellipse}>
                        <Image src={AboutHero} />
                    </Box> */}
                    <div style={{backgroundRepeat : 'no-repeat',backgroundImage:`url(${Ellipse})`}}>
                        <Image src={AboutHero} />
                    </div>
                    
                    <VStack>
                        <VStack>
                            <Badge fontSize='large' px={5} py={3} bg={'gray.600'} color={'white'}>
                                3
                            </Badge>
                            <Heading as={'h4'} size={'md'}>
                                Request/Match
                            </Heading>
                            <Text>
                                List the item(s) you want to buy or send and we will connect you to the best Pickers that run errands and deliver top notch services.
                            </Text>
                        </VStack>
                        <VStack>
                            <Badge fontSize='large' px={5} py={3} bg={'gray.600'} color={'white'}>
                                4
                            </Badge>
                            <Heading as={'h4'} size={'md'}>
                                Request/Match
                            </Heading>
                            <Text>
                                List the item(s) you want to buy or send and we will connect you to the best Pickers that run errands and deliver top notch services.
                            </Text>
                        </VStack>
                    </VStack>
                </HStack>
            </VStack>
            
        </Flex>
      </Container>
      <LandingFooter/>
    </div>
  )
}

export default About