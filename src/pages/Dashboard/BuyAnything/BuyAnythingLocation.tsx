/* eslint-disable react/no-children-prop */
/* eslint-disable global-require */
import {
  Container,
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Input,
  InputLeftElement,
  InputGroup,
  Spacer,
  Divider,
  Image,
} from '@chakra-ui/react';
import { TbFlag3 } from 'react-icons/tb';
import { FiChevronRight } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import InnerHeader from '../../../components/innerpages/InnerHeader';
import InnerFooter from '../../../components/landing/LandingFooter';
import ShoppingGuidelines from '../../../components/dashboard/ShoppingGuidelines';

function BuyAnythingStep2() {
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
            w="container.xl"
            p={0}
            maxW="1000"
            bgColor="spikk-inner-header-bg"
            borderRadius="20px"
          >
            <HStack>
              <Image
                src={require('../../../assets/images/steparrow.png')}
                alt="item"
                h="80px"
                alignItems="normal"
              />

              <Box
                borderTopRadius="20px"
                borderBottomRadius="0px"
                borderBottomColor="spikk-gray"
                py={10}
                bgColor="spikk-inner-header-bg"
              >
                <Flex>
                  <Box p="2">
                    <Text color="spikk-yellow">
                      Kindly provide location information
                    </Text>
                  </Box>

                  <Spacer />

                  <Box p="2">
                    <Text color="spikk-yellow">
                      <b>2</b> of <b>3</b>
                    </Text>
                  </Box>
                </Flex>
                <div
                  style={{
                    height: '10px',
                    borderRadius: '3px',
                    background:
                      'linear-gradient(to right, #FFF59A 0%,#FFF59A 67%,#000000 67%,rgba(255, 245, 154, 0.25) 67%,rgba(255, 245, 154, 0.25) 100%)',
                  }}
                />

                {/* <Progress borderRadius={4} colorScheme={'yellow'} style={{backgroundColor: "rgb(255,254,224)"}} size='md' color={'spikk-yellow'} value={67} /> */}
                <HStack py={4}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<TbFlag3 color="gray" />}
                    />
                    <Input
                      size="lg"
                      colorScheme="blue"
                      bgColor="spikk-inner-page-bg"
                      variant="outline"
                      placeholder="Enter preferred shopping location"
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<TbFlag3 color="gray" />}
                    />
                    <Input
                      size="lg"
                      bgColor="spikk-inner-page-bg"
                      variant="outline"
                      placeholder="Enter preferred shopping location"
                    />
                  </InputGroup>
                </HStack>

                <Flex>
                  <InputGroup w="50%">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<HiOutlineLocationMarker color="gray" />}
                    />
                    <Input
                      size="lg"
                      bgColor="spikk-inner-page-bg"
                      variant="outline"
                      placeholder="Enter your delivery location"
                    />
                  </InputGroup>
                  <Spacer />
                </Flex>

                <Divider my={4} />
                <InputGroup my={4}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BiCommentDetail color="gray" />}
                  />
                  <Input
                    type="textarea"
                    size="lg"
                    bgColor="spikk-inner-page-bg"
                    variant="outline"
                    placeholder="Add a description/comment"
                  />
                </InputGroup>
              </Box>
            </HStack>

            <Divider />
            <Flex my={10} py={10} w="80%">
              <NavLink to="/buy-anything">
                <Box p="2">
                  <Text color="gray">BACK</Text>
                </Box>
              </NavLink>

              <Spacer />
              <NavLink to="/buy-anything-order-summary">
                <Box
                  display="flex"
                  gap="4px"
                  padding="0 32px"
                  height="40px"
                  borderRadius="9999px"
                  alignItems="center"
                  backgroundColor="spikk-red"
                  textTransform="uppercase"
                  fontWeight="medium"
                  color="white"
                  cursor="pointer"
                  fontSize="md"
                >
                  SEE SUMMARY <FiChevronRight size="24px" />
                </Box>
              </NavLink>
            </Flex>

            <Spacer />
          </VStack>

          <ShoppingGuidelines />
        </Flex>
      </Container>
      <InnerFooter />
    </>
  );
}

export default BuyAnythingStep2;
