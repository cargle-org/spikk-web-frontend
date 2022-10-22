import {
  Flex,
  Box,
  Heading,
  Collapse,
  Text,
  useDisclosure,
  Icon,
  Stack,
  Button,
} from '@chakra-ui/react';
import { BsCart } from 'react-icons/bs';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function ShoppingGuidelines() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack w="full" borderRadius="20px" bgColor="spikk-box-bg">
      <Box padding="40px">
        <Flex justifyContent="space-between">
          <Flex alignItems="center" gap="12px">
            <Icon
              as={BsCart}
              boxSize={14}
              borderRadius="4px"
              color="spikk-gray"
              bgColor="spikk-inner-header-bg"
              p={3}
            />
            <Box>
              <Text fontSize="sm" color="spikk-text2" fontWeight="medium">
                {' '}
                Shop Anything
              </Text>
              <Heading
                as="h4"
                size="md"
                fontSize="24px"
                fontWeight="normal"
                color="spikk-text2"
              >
                Shopping Guidelines
              </Heading>
            </Box>
          </Flex>
          <Icon
            as={isOpen ? FiChevronUp : FiChevronDown}
            boxSize={14}
            rounded="full"
            color="white"
            bgColor="spikk-dark-bg"
            p={3}
            cursor="pointer"
            onClick={onToggle}
          />
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Box
            color="spikk-light-gray"
            mt="4"
            bg="spikk-box-bg"
            rounded="md"
            shadow="md"
          >
            <Text>
              <b>
                Occasionally, the estimated price with the actual price of the
                product may differ.
              </b>
              <br />
              <br />
              In cases where the total actual price is more than the estimate,
              the picker will contact you to ask if you’d still like to proceed
              with the purchase.
              <b>
                <br />
                <br />
                If you do not want to proceed, your order will be cancelled or
                you can choose which of the order in the list should be
                cancelled.
              </b>
              <br />
              <br />
              If you accept the change, the picker will proceed to purchase the
              products.
            </Text>
          </Box>
        </Collapse>
      </Box>
      <Flex
        paddingX="32px"
        paddingY="18px"
        border="1px solid #17173F"
        borderBottomRadius="20px"
        gap="32px"
      >
        <Box border="1px solid #8685A4" borderRadius="8px">
          <Box padding="4px 20px" textAlign="center">
            <Text fontSize="12px" fontWeight="semibold" color="#A5A4C0">
              Monday
            </Text>
            <Text
              fontSize="32px"
              fontWeight="bold"
              color="#A5A4C0"
              lineHeight="36px"
            >
              16
            </Text>
          </Box>
          <Box
            padding="4px 20px"
            textAlign="center"
            borderTop="1px solid #8685A4"
          >
            <Text
              fontSize="16px"
              fontWeight="bold"
              color="#A5A4C0"
              textTransform="capitalize"
            >
              MARCH
            </Text>
          </Box>
        </Box>
        <Flex flexDir="column" justifyContent="space-between">
          <Text fontSize="base" mt="2">
            Fetch Period
          </Text>
          <Flex gap={1}>
            <Flex
              w="112px"
              gap="10px"
              padding="10px 12px"
              borderRadius="8px"
              border="1px solid #8685A4"
              alignItems="center"
            >
              <Icon as={IoCalendarClearOutline} boxSize={5} />
              <Text fontSize="12px" color="#8E8DA6" fontWeight="semibold">
                From
              </Text>
            </Flex>
            <Flex
              w="112px"
              gap="10px"
              padding="10px 12px"
              borderRadius="8px"
              border="1px solid #8685A4"
              alignItems="center"
            >
              <Icon as={IoCalendarClearOutline} boxSize={5} />
              <Text fontSize="12px" color="#8E8DA6" fontWeight="semibold">
                To
              </Text>
            </Flex>
            <Button
              fontWeight="semibold"
              color="#E43F3C"
              padding="10px 16px"
              borderRadius="full"
              textTransform="uppercase"
              bg="none"
              border="1px solid #E43F3C"
            >
              Fetch
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
}
export default ShoppingGuidelines;
