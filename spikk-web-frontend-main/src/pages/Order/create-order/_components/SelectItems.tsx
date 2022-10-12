import { Box, Button, Flex, Grid, Heading, Icon, Image, Input, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { MdLibraryAdd } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import FormFileUpload from "../../../../components/form/FormFileUpload";
import FormInput from "../../../../components/form/FormInput";

const SelectItems = () => {
  // const SelectItemsFormik = useFormik({
  //   initialValues : {
  //     nam
  //   }
  // })
  return (
    <Box>
      <Box px={9} pb={9}>
        <Grid as="form" gap={5} gridTemplateColumns={"1fr 1fr"}>
          <FormInput
            bg="spikk-inner-page-bg"
            border={"1px solid #2D2E48"}
            placeholder="What can we get you"
            _placeholder={{
              color: "#909090",
            }}
            color="#ECEAFF"
            _focus={{
              border: "#727389 solid  1px",
              borderLeft: "#727389 solid  8px",
            }}
            _focusVisible={{}}
            leftElement={<Icon as={BsCart2} color="#ECEAFF" boxSize={6} />}
          />
          <FormFileUpload
            bg="spikk-inner-page-bg"
            border={"1px solid #2D2E48"}
            buttonProps={{
              style: {
                background: "#17173F",
                color: "#ECEAFF",
              },
            }}
            name="hello"
            leftElement={<Icon as={BsCart2} color="#ECEAFF" boxSize={6} />}
          />
          <FormInput
            bg="spikk-inner-page-bg"
            placeholder="Enter lowest price estimate"
            _placeholder={{
              color: "#909090",
            }}
            color="#ECEAFF"
            _focus={{
              border: "#727389 solid  1px",
              borderLeft: "#727389 solid  8px",
            }}
            _focusVisible={{}}
            border={"1px solid #2D2E48"}
            leftElement={<Icon as={TbCurrencyNaira} color="#ECEAFF" boxSize={6} />}
          />
          <FormInput
            bg="spikk-inner-page-bg"
            placeholder="Enter highest price estimate"
            _placeholder={{
              color: "#909090",
            }}
            color="#ECEAFF"
            _focus={{
              border: "#727389 solid  1px",
              borderLeft: "#727389 solid  8px",
            }}
            _focusVisible={{}}
            border={"1px solid #2D2E48"}
            leftElement={<Icon as={TbCurrencyNaira} color="#ECEAFF" boxSize={6} />}
          />
          <Box>
            <Button
              variant="ghost"
              fontSize="md"
              padding={0}
              height="inherit"
              color="white"
              _hover={{ background: "none", textDecor: "underline" }}
              _active={{}}
              _focus={{}}
            >
              <Icon as={MdLibraryAdd} />
              <Text ml={2}>Add Item</Text>
            </Button>
          </Box>
        </Grid>
        <Flex pt={5} justifyContent="space-between" alignItems={"center"}>
          <Button
            variant="ghost"
            fontSize="lg"
            padding={0}
            height="inherit"
            color="spikk-yellow"
            _hover={{ background: "none", textDecor: "underline" }}
            _active={{}}
            _focus={{}}
            textTransform="capitalize"
          >
            Back
          </Button>
          <Button bg="spikk-red" color={"white"} px={9} rounded="full" alignItems="center" display="flex">
            <Text textTransform="uppercase">Next</Text>
            <Icon as={FiChevronRight} ml={2} />
          </Button>
        </Flex>
      </Box>
      <Box p={9} bg="spikk-box-bg">
        <Heading fontSize={"sm"} fontWeight="medium" color="spikk-yellow">
          Summary
        </Heading>
        <TableContainer mt={2} width="full">
          <Table bg="spikk-inner-header-bg" rounded={20} overflow="hidden" border={"spikk-box-bg"}>
            <Thead>
              <Tr>
                <Th
                  borderColor={"spikk-box-bg"}
                  fontSize={"sm"}
                  width={"10%"}
                  py={5}
                  color="spikk-light-gray"
                  fontWeight={"normal"}
                  textTransform="capitalize"
                >
                  Image
                </Th>
                <Th
                  borderColor={"spikk-box-bg"}
                  fontSize={"sm"}
                  width={"20%"}
                  py={5}
                  color="spikk-light-gray"
                  fontWeight={"normal"}
                  textTransform="capitalize"
                >
                  Item Name
                </Th>
                <Th
                  borderColor={"spikk-box-bg"}
                  fontSize={"sm"}
                  width={"20%"}
                  py={5}
                  color="spikk-light-gray"
                  fontWeight={"normal"}
                  textTransform="capitalize"
                >
                  Price Estimate
                </Th>
                <Th borderColor={"spikk-box-bg"}></Th>
              </Tr>
            </Thead>
            <Tbody pb={9}>
              <Tr>
                <Td borderColor={"spikk-box-bg"} width={"10%"}>
                  <Image height={10} width={10} bg="whatsapp.100" />
                </Td>
                <Td borderColor={"spikk-box-bg"} width={"20%"} fontSize={"sm"} color="spikk-light-gray">
                  {" "}
                  <Text>Pringles Sour Cream & Onion flavor</Text>{" "}
                </Td>
                <Td borderColor={"spikk-box-bg"} width={"20%"} fontSize={"sm"} color="spikk-light-gray">
                  {" "}
                  <Text>N3900 - N4100</Text>{" "}
                </Td>
                <Td borderColor={"spikk-box-bg"} fontSize={"sm"} color="spikk-light-gray">
                  <Icon color={"spikk-red"} boxSize={4} as={FaTrashAlt} />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default SelectItems;
