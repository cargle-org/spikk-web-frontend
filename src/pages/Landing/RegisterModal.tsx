import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Text,
    Button,
    HStack,
    Checkbox,
     Image,
     Grid,
     GridItem,
     InputGroup,
     Input,
     InputLeftElement, 
     InputRightElement
  } from '@chakra-ui/react'
  import { FaAngleRight } from "react-icons/fa";
  import { AiOutlineUser } from "react-icons/ai"
  import { FiMail } from "react-icons/fi"
  import { IoKeyOutline } from "react-icons/io5"
  import { HiOutlineEye } from "react-icons/hi"
  import { HiOutlineEyeOff } from "react-icons/hi"
  
import CloseIcon from '../../assets/icons/close';
import RegisterUser from '../../assets/images/formSvg/RegisterUser.svg'

interface ModalProps {
    onClose: () => void;
    isOpen: boolean;
}
const RegisterModal = (props: ModalProps): JSX.Element => {
   const {onClose, isOpen} = props;
   const [show, setShow] = React.useState(false)
   const [showConfirm, setShowConfirm] = React.useState(false)

    return (
        <Modal
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInRight'
          size={{base: "xl", sm: "2xl", lg: "3xl"}}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} px={{base: "1rem", md: "2rem"}}>
            <HStack>
            <Image src={RegisterUser} alt='Icon' />
            <Text fontSize={{base: "16px", sm:"24px"}} letterSpacing={"-0.4px"} color={" #030319"}>Enter your details to register</Text>
            </HStack>
            <CloseIcon onClose={onClose} className="modal-close-icon"/>
            </ModalHeader>
            <ModalBody padding={{base: "3rem 1rem 2rem", sm: "4rem 1rem 2rem", md: "4rem 2rem 2rem"}}>
             <Grid templateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)'}} gap={{base: 9, sm: 4, md: 6}}>
                <GridItem >
                <InputGroup>
                    <InputLeftElement
                    top={"5px"}
                    children={<AiOutlineUser fontSize={"20px"} />}
                    />
                    <Input
                     py={"1.5rem"}
                     type='text' 
                     placeholder='Enter your Username' 
                     borderColor={"#E2E2E2"}  
                     borderRadius={"5px"} 
                     color={"spikk-dark-bg"} 
                     _placeholder={{color: "#909090" , fontSize: "0.9rem" }}
                     _focus={{borderLeft: "8px solid  #030319", borderColor: "#030319"}}
                     _focusVisible={{ outline: "none"}}/>
                </InputGroup>
                </GridItem>
                <GridItem position={"relative"} >
                    <Text position={"absolute"} whiteSpace={"nowrap"} top={"-20px"} color={"#919191"} fontSize={{base: "10px", sm: "9px", lg: "13px"}} >We will send an <b>OTP</b> to your <b>email address</b> for verification</Text>
                <InputGroup>
                    <InputLeftElement
                    top={"5px"}
                    children={<FiMail fontSize={"20px"} />}
                    />
                    <Input 
                    py={"1.5rem"} 
                    type='email' 
                    placeholder='Tell us your Email Address'  
                    borderColor={"#E2E2E2"}  
                    borderRadius={"5px"}
                    color={"spikk-dark-bg"} 
                     _placeholder={{color: "#909090" , fontSize: "0.9rem" }}
                     _focus={{borderLeft: "8px solid  #030319" , borderColor: "#030319"}}
                     _focusVisible={{ outline: "none"}}/>
                </InputGroup>
                </GridItem>
                <GridItem >
                <InputGroup>
                    <InputLeftElement
                    top={"5px"}
                    children={<IoKeyOutline fontSize={"20px"} />}
                    />
                    <Input  
                    py={"1.5rem"} 
                    type={show ? 'text' : 'password'} 
                    placeholder='Your Password'  
                    borderColor={"#E2E2E2"}  
                    borderRadius={"5px"} 
                    color={"spikk-dark-bg"} 
                     _placeholder={{color: "#909090", fontSize: "0.9rem" }}
                     _focus={{borderLeft: "8px solid  #030319", borderColor: "#030319"}}
                     _focusVisible={{ outline: "none"}}/>
                    <InputRightElement
                    top={"5px"}
                    cursor={"pointer"}
                    children={show ? <HiOutlineEyeOff color={"#BABABA"} onClick={() => setShow(false)} /> :  <HiOutlineEye color={"#BABABA"}  onClick={() => setShow(true)}  />}
                    />
                </InputGroup>
                <Text color={"#919191"} fontSize={"13px"} marginTop={"10px"}> Password must be at least <b>8 characters long</b>, including at least <b>1 uppercase alphabet, a number</b> and <b>a special character</b></Text>
                </GridItem>
                <GridItem >
                <InputGroup>
                    <InputLeftElement
                    top={"5px"}
                    children={<IoKeyOutline fontSize={"20px"} />}
                    />
                    <Input  
                    py={"1.5rem"} 
                    type={showConfirm ? 'text' : 'password'}  
                    placeholder='Confirm your Password'  
                    borderColor={"#E2E2E2"}  
                    borderRadius={"5px"} color={"spikk-dark-bg"} 
                     _placeholder={{color: "#909090" , fontSize: "0.9rem" }}
                     _focus={{borderLeft: "8px solid  #030319" , borderColor: "#030319"}}
                     _focusVisible={{ outline: "none"}}/>
                    <InputRightElement
                    top={"5px"}
                    cursor={"pointer"}
                    children={showConfirm ? <HiOutlineEyeOff color={"#BABABA"}  onClick={() => setShowConfirm(false)}  /> : <HiOutlineEye color={"#BABABA"}   onClick={() => setShowConfirm(true)} />}
                    />
                </InputGroup>
                </GridItem>
             </Grid>
             <HStack alignItems={"start"} display={{base: "flex", sm: "none"}} paddingTop={"5px"}>
                <Checkbox colorScheme='red' borderColor={"spikk-red"} marginTop={"5px"}>
                </Checkbox>
                <Text>I agree to the <a href='/' className='modal-footer-link'> terms of service </a> & agreement</Text>
             </HStack>
            </ModalBody>
            <ModalFooter display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={"2rem 1rem"}>
             <HStack alignItems={"start"} display={{base: "none", sm: "flex"}}>
                <Checkbox colorScheme='red' borderColor={"spikk-red"} marginTop={"5px"}>
                </Checkbox>
                <Text>I agree to the <a href='/' className='modal-footer-link'> terms of service </a> & agreement</Text>
             </HStack>
             <Button disabled whiteSpace={"nowrap"} bg={"spikk-red"} borderRadius={"20px"} marginLeft={"auto"} padding={"0 1.5rem"}><Text letterSpacing={"-0.4px"} marginRight={"1rem"} fontWeight={"300"} color={"white"}>REGISTER</Text> <FaAngleRight color='white' /> </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
  }
  
  export default RegisterModal;
  