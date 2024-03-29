/* eslint-disable global-require */
import {
  Container,
  Box,
  Flex,
  HStack,
  VStack,
  Heading,
  Text,
  Spacer,
  Divider,
  Icon,
  Image,
  Avatar,
  AvatarBadge,
  Badge,
  Center,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ImLocation2 } from 'react-icons/im';
import { BiChat } from 'react-icons/bi';
import InnerFooter from '../../../components/landing/LandingFooter';
import InnerHeader from '../../../components/innerpages/InnerHeader';

function PickerSelected() {
  return (
    <>
      <InnerHeader />
      <Container maxW="container.x1" bg="spikk-inner-page-bg">
        <Flex
          px={100}
          py={50}
          align="left"
          flexDirection={{
            base: 'column-reverse',
            xs: 'column-reverse',
            sm: 'column-reverse',
            md: 'row',
            lg: 'row',
          }}
        >
          <VStack
            bg={`url(${require('../../../assets/images/map-single-driver.png')})`}
            bgPosition="center"
            bgRepeat="no-repeat"
            w="container.xl"
            p={0}
            maxW="1000"
            bgColor="spikk-inner-header-bg"
            borderRadius="20px"
          />

          <VStack
            w="container.md"
            mx={5}
            borderRadius="20px"
            borderTopRadius="20px"
            bgColor="spikk-inner-header-bg"
            borderWidth="1px"
            borderColor="gray"
          >
            <Heading
              as="h2"
              pl={2}
              alignSelf="self-start"
              py={10}
              size="lg"
              color="white"
            >
              Available Pickers
            </Heading>

            <Box
              w="full"
              borderRadius="20px"
              bgColor="spikk-inner-page-bg"
              px="5%"
              pt={4}
              pb={14}
              borderWidth="1px"
              borderColor="gray"
            >
              <Box borderRadius="20px" px={3} py={7} color="spikk-light-gray">
                <Box
                  borderRadius="20px"
                  my={4}
                  p={3}
                  bgColor="spikk-inner-header-bg"
                  borderWidth="1px"
                  borderColor="gray"
                >
                  <Flex>
                    <Box pt={2}>
                      <Avatar
                        mr={3}
                        name="samp"
                        src="https://bit.ly/dan-abramov"
                      >
                        <AvatarBadge
                          boxSize="1.5em"
                          bgColor="white"
                          color="black"
                          fontSize={10}
                          w={8}
                        >
                          4.0*
                        </AvatarBadge>
                      </Avatar>
                    </Box>
                    <Box>
                      <Heading
                        as="h4"
                        pt={3}
                        textAlign="left"
                        size="sm"
                        color="white"
                      >
                        Wale Adebayo
                      </Heading>
                      <Text fontSize={13} color="white">
                        Picker
                      </Text>
                    </Box>
                    <Spacer />
                    <Box pt={3} mr={4}>
                      <Image
                        src={require('../../../assets/images/smallbike.png')}
                      />
                    </Box>
                  </Flex>
                  <Box>
                    <Divider my={3} />
                    <Flex fontSize="13px" p={3}>
                      <HStack>
                        <Icon
                          as={ImLocation2}
                          h={5}
                          w={6}
                          color="black"
                          borderRadius={3}
                          bgColor="white"
                          p={1}
                        />
                        <Text>10 mins away</Text>
                      </HStack>
                      <Spacer />
                      <HStack>
                        <Badge colorScheme="gray">187</Badge>
                        <Text>deliveries completed</Text>
                      </HStack>
                    </Flex>
                  </Box>
                </Box>
                <VStack>
                  <Center>Tap to view Picker's profile</Center>
                  <NavLink to="/orders">
                    <Box
                      display="flex"
                      gap="4px"
                      padding="0 32px"
                      height="40px"
                      width="max-content"
                      borderRadius="9999px"
                      alignItems="center"
                      backgroundColor="spikk-red"
                      fontWeight="medium"
                      color="white"
                      cursor="pointer"
                      fontSize="sm"
                      my={3}
                    >
                      <Center>
                        {' '}
                        <b> Track Your Order</b>{' '}
                      </Center>
                    </Box>
                  </NavLink>
                  <NavLink to="">
                    <Box
                      display="flex"
                      gap="4px"
                      padding="0 32px"
                      height="40px"
                      width="max-content"
                      borderRadius="9999px"
                      borderWidth={2}
                      alignItems="center"
                      backgroundColor="spikk-"
                      fontWeight="medium"
                      color="white"
                      cursor="pointer"
                      fontSize="sm"
                    >
                      <Center>
                        <BiChat /> &nbsp; &nbsp; <b> Message Kolawole</b>{' '}
                      </Center>
                    </Box>
                  </NavLink>
                </VStack>
              </Box>
            </Box>
          </VStack>
        </Flex>
      </Container>
      <InnerFooter />
    </>
  );
}

export default PickerSelected;
