/* eslint-disable global-require */
import {
  Container,
  Box,
  Flex,
  VStack,
  Heading,
  SkeletonCircle,
  SkeletonText,
  Text,
  Spacer,
  Image,
} from '@chakra-ui/react';
import InnerHeader from '../../../components/innerpages/InnerHeader';
import InnerFooter from '../../../components/landing/LandingFooter';

function FindingPickers() {
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
            bg={`url(${require('../../../assets/images/map.png')})`}
            bgPosition="center"
            bgRepeat="no-repeat"
            w="container.lg"
            p={0}
            maxW="1000"
            bgColor="spikk-inner-header-bg"
            borderRadius="20px"
          />

          <VStack
            w="container.md"
            alignItems="left"
            mx={5}
            borderRadius="20px"
            borderTopRadius="20px"
            bgColor="spikk-inner-header-bg"
            borderWidth="1px"
            borderColor="gray"
          >
            <Flex py={8}>
              <Box>
                <Heading
                  as="h2"
                  pl={2}
                  alignSelf="self-start"
                  size="lg"
                  color="white"
                >
                  Please Wait...
                </Heading>
              </Box>
              <Spacer />
              <Box pr={2}>
                <Box
                  borderRadius={5}
                  verticalAlign="bottom"
                  borderColor="spikk-deep-yellow.50"
                  borderWidth={1}
                  borderStyle="solid"
                  p={2}
                >
                  <Image
                    src={require('../../../assets/images/driverswaiting.png')}
                  />
                </Box>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <Text pl={2} alignSelf="self-start" color="white">
                  <b>While a picker close to you</b> tries to accept your
                  shopping request.
                </Text>
              </Box>
            </Flex>

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
                <Flex
                  borderRadius="20px"
                  my={4}
                  p={3}
                  bgColor="spikk-inner-header-bg"
                  borderWidth="1px"
                  borderColor="gray"
                >
                  <Box pt={2}>
                    <SkeletonCircle mr={3} size="10" />
                  </Box>
                  <Box>
                    <SkeletonText pt={3} noOfLines={1} spacing="4" />
                    <SkeletonText pt={3} noOfLines={1} spacing="4" />
                  </Box>
                  <Spacer />
                  <Box pt={3} mr={4}>
                    <SkeletonCircle mr={3} size="3" />
                  </Box>
                </Flex>

                <Flex
                  borderRadius="20px"
                  my={4}
                  p={3}
                  bgColor="spikk-inner-header-bg"
                  borderWidth="1px"
                  borderColor="gray"
                >
                  <Box pt={2}>
                    <SkeletonCircle mr={3} size="10" />
                  </Box>
                  <Box>
                    <SkeletonText pt={3} noOfLines={1} spacing="4" />
                    <SkeletonText pt={3} noOfLines={1} spacing="4" />
                  </Box>
                  <Spacer />
                  <Box pt={3} mr={4}>
                    <SkeletonCircle mr={3} size="3" />
                  </Box>
                </Flex>
                <Flex
                  borderRadius="20px"
                  my={4}
                  p={3}
                  bgColor="spikk-inner-header-bg"
                  borderWidth="1px"
                  borderColor="gray"
                >
                  <Box pt={2}>
                    <SkeletonCircle mr={3} size="10" />
                  </Box>
                  <Box>
                    <SkeletonText pt={3} noOfLines={1} spacing="4" />
                    <SkeletonText pt={3} noOfLines={1} spacing="4" />
                  </Box>
                  <Spacer />
                  <Box pt={3} mr={4}>
                    <SkeletonCircle mr={3} size="3" />
                  </Box>
                </Flex>
              </Box>
            </Box>
          </VStack>
        </Flex>
      </Container>
      <InnerFooter />
    </>
  );
}

export default FindingPickers;
