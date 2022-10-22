import {
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Box,
  Flex,
  VStack,
  Text,
  Icon,
  CloseButton,
  Circle,
  Square,
} from '@chakra-ui/react';
import { FaEquals } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { TbCurrencyNaira } from 'react-icons/tb';

const Dashboard = () => (
  <Box as="section" bg="spikk-inner-page-bg" color="white" className="hello">
    <Flex
      align="left"
      flexDirection={{
        base: 'column',
        xs: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row',
      }}
    >
      <VStack
        alignItems="left"
        w="100%"
        borderRadius="20px"
        borderTopRadius="20px"
      >
        <StatGroup py={0} display="flex" gap="8px">
          <Stat bgColor="#4FE26733" borderRadius="20px" p={5}>
            <Circle
              size="28px"
              marginBottom="8px"
              bg="transparent"
              borderColor="yellowgreen"
              borderWidth={1}
              color="yellowgreen"
            >
              <Icon as={TbCurrencyNaira} />
            </Circle>
            <StatLabel
              marginBottom="12px"
              fontSize="medium"
              color="spikk-text2"
            >
              Amount Spent
            </StatLabel>
            <StatNumber color="spikk-text2">15,500</StatNumber>
          </Stat>

          <Stat bgColor="#4D79FF26" borderRadius="20px" p={5}>
            <Square
              size="28px"
              marginBottom="8px"
              bg="transparent"
              borderRadius={8}
              borderColor="blue"
              borderWidth={1}
              color="blue"
            >
              <Icon as={FaEquals} />
            </Square>
            <StatLabel
              marginBottom="12px"
              fontSize="medium"
              color="spikk-text2"
            >
              Total Orders
            </StatLabel>
            <StatNumber color="spikk-text2">25</StatNumber>
          </Stat>

          <Stat bgColor="#FFA34D33" borderRadius="20px" p={5}>
            <Circle
              size="28px"
              bg="transparent"
              marginBottom="8px"
              borderColor="spikk-orange"
              borderWidth={1}
              color="spikk-orange"
            >
              <Icon as={MdLocationPin} />
            </Circle>
            <StatLabel
              marginBottom="12px"
              fontSize="medium"
              color="spikk-text2"
            >
              Locations
            </StatLabel>
            <StatNumber color="spikk-text2">6</StatNumber>
          </Stat>

          <Stat bgColor="#FF4D5833" borderRadius="20px" p={5}>
            <Square
              size="28px"
              bg="transparent"
              marginBottom="8px"
              borderRadius={8}
              borderColor="red"
              borderWidth={1}
              color="red"
            >
              <Icon as={CloseButton} />
            </Square>
            <StatLabel
              marginBottom="12px"
              fontSize="medium"
              color="spikk-text2"
            >
              Cancellations
            </StatLabel>
            <StatNumber color="spikk-text2">5</StatNumber>
          </Stat>
        </StatGroup>
        <Flex
          p={3}
          bgColor="spikk-box-bg"
          h="300px"
          borderRadius="20px"
          overflow="hidden"
        >
          <Box p={2}>
            <Text>Statistics</Text>
          </Box>
        </Flex>
      </VStack>
    </Flex>
  </Box>
);

export default Dashboard;
