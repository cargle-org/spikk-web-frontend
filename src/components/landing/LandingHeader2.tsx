import spikklogo from "./spikklogo.png";
import { NavLink } from 'react-router-dom';

import {
    Box,
    Image,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
  
export default function LandingHeader2(): JSX.Element {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
        <Flex
            bg='#0D0D26'
            color='white'
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            // borderBottom={1}
            // borderStyle={'solid'}
            // borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'}>
            <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
                onClick={onToggle}
                icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={'outline'}
                color='rgb(255, 245, 154)'
                _hover={{
                  color: '#0D0D26',
                  bgColor: 'rgb(255, 245, 154)',
                  borderColor: 'rgb(255, 245, 154)'
                }}
                aria-label={'Toggle Navigation'}
            />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            
                <Image p={6} src={spikklogo} alt='Spikk Logo' />

            </Flex>

            <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
                <Button
                    fontSize={'sm'}
                    fontWeight={400}
                    color={'white'}
                    variant={'link'}
                    _hover={{
                      color: 'rgb(251, 168, 25)',
                    }}
                    _active={{
                      color: 'rgb(251, 168, 25)',
                    }}>
                    <NavLink
                        to="/"
                    >Home</NavLink>
                </Button>
                <Button
                    
                    fontSize={'sm'}
                    fontWeight={400}
                    color={'white'}
                    variant={'link'}
                    _hover={{
                      color: 'rgb(251, 168, 25)',
                    }}
                    _active={{
                      color: 'rgb(251, 168, 25)',
                    }}
                    >
                    
                    <NavLink
                        to="/about"
                    >About</NavLink>
                </Button>
                
                <Button
                    display={{ base: 'none', md: 'inline-flex' }}
                    as={'a'}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'#FBA819'}
                    _hover={{
                    bg: '#FBA819.200',
                    }}
                    href={'#'}>
                    Join
                </Button>
            </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
            <MobileNav />
        </Collapse>
        </Box>
    );
}
  
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
   
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'About',
      href: '#',
    },
  ];
  