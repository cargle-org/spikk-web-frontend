import React, { useState } from 'react';
import {
  Image,
  Box,
  Flex,
  VStack,
  Divider,
  Text,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { FiChevronDown, FiArrowUpRight, FiBell } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { VscHome } from 'react-icons/vsc';
import { BsCart } from 'react-icons/bs';
import { BiChat } from 'react-icons/bi';
import RegisterModal from '../pages/Landing/RegisterModal';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { onOpen, isOpen, onClose } = useDisclosure();

  const handleModalOpen = () => {
    setShowDropdown(false);
    onOpen();
  };
  return (
    <Box as="header" background="spikk-inner-header-bg">
      <Flex
        alignItems="center"
        maxW="1200px"
        paddingX="16px"
        marginX="auto"
        justifyContent="space-between"
      >
        <Image
          src="../assets/images/spikklogo.png"
          height="7"
          alt="Spikk Logo"
        />
        <Box as="nav" height="72px" display="flex" alignItems="center">
          <Box position="relative">
            <Box
              display="flex"
              gap="4px"
              padding="0 16px"
              height="32px"
              borderRadius="9999px"
              alignItems="center"
              backgroundColor="spikk-orange"
              textTransform="uppercase"
              fontWeight="medium"
              color="spikk-header-bg"
              cursor="pointer"
              fontSize="sm"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Join <FiChevronDown size="24px" />
            </Box>
            {showDropdown && (
              <Box
                position="absolute"
                top="110%"
                right="0"
                width="max-content"
                zIndex={10}
                background="white"
                borderRadius="16px"
              >
                <VStack>
                  <Box padding="32px 48px 20px 48px ">
                    <Box>
                      <Text
                        color="spikk-text1"
                        textAlign="center"
                        fontSize="small"
                      >
                        Don't have an account?
                      </Text>
                      <Box
                        onClick={handleModalOpen}
                        cursor="pointer"
                        height="36px"
                        width="140px"
                        backgroundColor="spikk-red"
                        borderRadius="9999px"
                        display="flex"
                        alignItems="center"
                        color="white"
                        textTransform="uppercase"
                        justifyContent="center"
                        gap="2px"
                      >
                        Join spikk <FiArrowUpRight size="24px" />{' '}
                      </Box>
                    </Box>
                  </Box>
                  <Divider />
                  <Box padding="20px 48px 32px 48px ">
                    <Text
                      color="spikk-text1"
                      textAlign="center"
                      fontSize="small"
                    >
                      Already have an account ?
                    </Text>
                    <Box
                      onClick={handleModalOpen}
                      cursor="pointer"
                      height="36px"
                      width="140px"
                      border="1px solid"
                      borderColor="spikk-text1"
                      borderRadius="9999px"
                      display="flex"
                      alignItems="center"
                      color="spikk-text1"
                      textTransform="uppercase"
                      justifyContent="center"
                      gap="2px"
                    >
                      LOG IN HERE
                    </Box>
                  </Box>
                </VStack>
              </Box>
            )}
          </Box>
        </Box>
      </Flex>

      {true && (
        <>
          <hr style={{ marginLeft: '9%', marginRight: '9%' }} />
          <Flex
            alignItems="center"
            maxW="1200px"
            paddingX="16px"
            marginX="auto"
            justifyContent="space-between"
          >
            <NavLink
              to="/order"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <Flex
                className="buy-anything-link"
                alignItems="center"
                gap="8px"
                bg="white"
                color="spikk-header-bg"
                rounded="full"
                padding="10px 20px"
              >
                <Icon as={BsCart} strokeWidth={0.5} />
                <Text fontSize="sm" fontWeight="semibold">
                  Start New Order
                </Text>
              </Flex>
            </NavLink>
            <Box as="nav" height="72px" display="flex" alignItems="center">
              <Box as="ul" display="flex" gap="40px" marginRight="40px">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                  }
                >
                  <div className="header-link">
                    {' '}
                    <VscHome /> &nbsp; &nbsp; Home
                  </div>
                </NavLink>
                <NavLink
                  to="/dashboard/orders"
                  className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                  }
                >
                  <div className="header-link">
                    {' '}
                    <BsCart /> &nbsp; &nbsp; Orders
                  </div>
                </NavLink>
                <NavLink
                  to="/dashboard/alerts"
                  className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                  }
                >
                  <div className="header-link">
                    {' '}
                    <FiBell /> &nbsp; &nbsp; Alerts
                  </div>
                </NavLink>
                <NavLink
                  to="/dashboard/chat"
                  className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                  }
                >
                  <div className="header-link">
                    {' '}
                    <BiChat /> &nbsp; &nbsp; Chat
                  </div>
                </NavLink>
              </Box>
            </Box>
          </Flex>
        </>
      )}
      <RegisterModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default Header;
