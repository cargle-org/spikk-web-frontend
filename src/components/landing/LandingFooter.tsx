/* eslint-disable global-require */
import { Box, Flex, VStack, Image, Text, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import FooterFacebookLogo from '../../assets/icons/footer-facebook-logo';
import FooterGmailLogo from '../../assets/icons/footer-gmail-logo';
import FooterInstagramLogo from '../../assets/icons/footer-instagram-logo';
import FooterTwitterLogo from '../../assets/icons/footer-twitter-logo';

const LandingFooter = () => (
  <Box as="footer" background="spikk-header-bg">
    <Box
      maxW="1200px"
      paddingX="16px"
      marginX="auto"
      paddingTop="32px"
      paddingBottom="24px"
    >
      <Flex
        width="100%"
        gap="56px"
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        justifyContent="space-between"
      >
        <HStack spacing={{ base: '80px', lg: '180px' }}>
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Box
              height="24px"
              display="flex"
              marginBottom="32px"
              alignItems="flex-end"
              justifyContent={{ base: 'center', md: 'left' }}
            >
              <Link to="/">
                <Image
                  src={require('../../assets/images/spikklogo.png')}
                  height="24px"
                  alt="Spikk Logo"
                />
              </Link>
            </Box>
            <VStack spacing="12px" alignItems={{ md: 'flex-start' }}>
              <Text fontSize="sm" fontWeight="bold" color="white">
                © 2022 Spikk Technologies
              </Text>
              <Text fontSize="sm" color="spikk-white">
                <Link to="#">Terms and conditions</Link> |{' '}
                <Link to="#">Privacy Policy</Link>
              </Text>
            </VStack>
          </Box>
          <Box display={{ base: 'none', md: 'block' }}>
            <Box height="24px" display="flex" marginBottom="32px">
              <Text fontSize="xl" fontWeight="bold" color="spikk-orange">
                Quicklinks
              </Text>
            </Box>
            <VStack spacing="12px" alignItems="flex-start">
              <Text fontSize="sm" color="spikk-white">
                <Link to="#">About Us</Link>
              </Text>
              <Text fontSize="sm" color="spikk-white">
                <Link to="#">Contact Us</Link>
              </Text>
            </VStack>
          </Box>
        </HStack>
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Box
            height="24px"
            display="flex"
            marginBottom={{ base: '20px', md: '40px' }}
          >
            <Text fontSize="xl" fontWeight="bold" color="spikk-orange" w="100%">
              Get in touch with us
            </Text>
          </Box>
          <HStack spacing="36px" alignItems="flex-start ">
            <Link to="#">
              <FooterGmailLogo />
            </Link>
            <Link to="#">
              <FooterTwitterLogo />
            </Link>
            <Link to="#">
              <FooterFacebookLogo />
            </Link>
            <Link to="#">
              <FooterInstagramLogo />
            </Link>
          </HStack>
        </Box>
      </Flex>
    </Box>
  </Box>
);

export default LandingFooter;
