import React from "react";
import { Box, Flex, Text, HStack, Image } from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";
import { VscPackage } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div>
      <Box as={"section"} bg={"spikk-dark-bg"} 
      paddingBottom={"100px"}>
        <Flex
          paddingTop={{ base: "20px", lg: "80px" }}
          maxWidth={"1440px"}
          margin={"0 auto"}
          flexWrap={{ base: "wrap", lg: "nowrap" }}
        >
          <Box
            paddingTop={"32px"}
            paddingBottom={"0px"}
            width={{ base: "100%", lg: "" }}
          >
            <Box>
              <Box
                paddingLeft={{ base: "16px", xl: "300px" }}
                paddingRight={{ base: "16px", md: "0" }}
                paddingTop={{ base: "16px", md: "32px" }}
                paddingBottom={"100px"}
                bg={`url(${require("../../assets/images/homepage/homepage-banner-rectangle.png")})`}
                bgSize={{ base: "150px 68px", md: "auto 104px" }}
                bgRepeat={"no-repeat"}
              >
                <Box
                  marginBottom={"0px"}
                  maxWidth={"675px"}
                  textAlign={{ base: "center", md: "left" }}
                >
                  <Text
                    color={"spikk-white2"}
                    lineHeight={"110%"}
                    fontSize={{ base: "48px", md: "56px" }}
                    fontWeight={"semibold"}
                    marginBottom={"8px"}
                  >
                    Privacy Policy
                  </Text>
                  <Text
                    color={"spikk-white"}
                    fontSize={{ base: "initial", md: "lg" }}
                    lineHeight={"30px"}
                    maxW={{ base: "100%", md: "540px" }}
                  >
                    Last updated…20th May, 2022.
                  </Text>
                </Box>
                <Text
                  color={"spikk-white"}
                  fontSize={{ base: "initial", md: "md" }}
                  lineHeight={"25px"}
                  maxW={{ base: "100%", md: "540px" }}
                >
                  This Privacy Policy is agreed between you and Spikk’s
                  corporate entities (‘Spikk’, ‘We’, ‘Us’ or ‘Our’ as
                  appropriate). Spikk will only process your personal data for
                  the purposes for which it collected it, namely to provide you
                  with an on-demand errand or delivery service. Read about
                </Text>
   
              </Box>
            </Box>

          </Box>

          <Box>
            <Image
              maxH={"720px"}
              src={require("../../assets/images/homepage/homepage-banner1.png")}
            />
          </Box>
        </Flex>




        <Box  marginTop={"-150px"}
                  maxWidth={"1000px"}
                
                  textAlign={{ base: "center", md: "left" }}
                  marginLeft={"150px"} 
                   >

                      <Box
                  marginTop={"40px"}
                  maxWidth={"1000px"}
                  
                  textAlign={{ base: "center", md: "left" }}
                >
                  <Text
                    color={"spikk-white2"}
                    lineHeight={"25px"}
                    fontSize={{ base: "30px", md: "30px" }}
                    fontWeight={"semibold"}
                    marginBottom={"8px"}
                  >
                    INTRODUCTION
                  </Text>

                  <Text
                    color={"spikk-white"}
                    fontSize={{ base: "initial", md: "md" }}
                    lineHeight={"25px"}
                    maxW={{ base: "100%", md: "800px" }}
                  >
                    Your privacy is important to Spikk. We follow closely the
                    laws and ensure legality. We endeavor to keep your personal
                    information protected at all times by implementing adequate
                    technical and organizational controls. Please take a moment
                    to read the following policy to learn how we handle your
                    personal information, as your use of our services will
                    indicate your acceptance of its content.
                  </Text>
                </Box>

                <Box
                  marginTop={"40px"}
                  maxWidth={"675px"}
                  textAlign={{ base: "center", md: "left" }}
                >
                  <Text
                    color={"spikk-white2"}
                    lineHeight={"25px"}
                    fontSize={{ base: "30px", md: "30px" }}
                    fontWeight={"semibold"}
                    marginBottom={"8px"}
                  >
                    PURPOSE OF COLLECTION
                  </Text>

                  <Text
                    color={"spikk-white"}
                    fontSize={{ base: "initial", md: "md" }}
                    lineHeight={"25px"}
                    maxW={{ base: "100%", md: "800px" }}
                  >
                    We collect and use your personal information to satisfy
                    legal and regulatory requirements; for historical and
                    statistical purposes; for security and control and for the
                    smooth provision of our services. From time to time, we may
                    also use your personal information to contact you by mail,
                    email, telephone or mobile phone to introduce you to our
                    products or any events, activities, projects, plans,
                    developments, undertakings and special offers taking place,
                    being promoted or supported by Spikk. The data supplied by
                    you upon registering online or thereafter shall be kept by
                    Spikk and will solely by used to determine the legality of
                    registration and activity on the Website. By supplying us
                    with your information you confirm that you do not consider
                    use of your information in accordance with this Privacy
                    Policy to be a breach of your rights under “The Act”. We
                    encourage you to contact us at any time and remind you of
                    your right to opt out at any time from receiving any
                    promotional or marketing materials from us.
                  </Text>
                </Box>
                <Box
                  marginTop={"40px"}
                  maxWidth={"675px"}
                  textAlign={{ base: "center", md: "left" }}
                >
                  <Text
                    color={"spikk-white2"}
                    lineHeight={"25px"}
                    fontSize={{ base: "30px", md: "30px" }}
                    fontWeight={"semibold"}
                    marginBottom={"8px"}
                  >
                    PROTECTION OF INFORMATION
                  </Text>

                  <Text
                    color={"spikk-white"}
                    fontSize={{ base: "initial", md: "md" }}
                    lineHeight={"25px"}
                    maxW={{ base: "100%", md: "800px" }}
                  >
                    Spikk safeguards the security of the data you provide us
                    with physical, electronic, and managerial procedures. Please
                    note that we cannot guarantee that any data transmitted over
                    the Internet is completely secure. Accordingly, we encourage
                    you to take every precaution to protect your personal data
                    when you are on the Internet.
                  </Text>
                </Box>

                <Box
                  marginTop={"40px"}
                  maxWidth={"675px"}
                  textAlign={{ base: "center", md: "left" }}
                >
                  <Text
                    color={"spikk-white2"}
                    lineHeight={"25px"}
                    fontSize={{ base: "30px", md: "30px" }}
                    fontWeight={"semibold"}
                    marginBottom={"8px"}
                  >
                    ACCESS OF INFORMATION{" "}
                  </Text>

                  <Text
                    color={"spikk-white"}
                    fontSize={{ base: "initial", md: "md" }}
                    lineHeight={"25px"}
                    maxW={{ base: "100%", md: "800px" }}
                  >
                    Spikk safeguarThe Management of Spikk together with the
                    Fraud Team will have the right to access the submitted
                    personal information relating to the registered players. You
                    always have a right of access the information we have about
                    you. To review and update your personal contact information,
                    simply contact Spikk and you will be provided with
                    information about your personal data we hold. If you prefer
                    you may contact our Customer Service using the contact
                    details available on the site. Additionally, you have the
                    right to have any inaccurate information corrected and where
                    applicable, erased. It is our right to ask you to provide us
                    with a written request for information we hold about you.ds
                    the security of the data you provide us with physical,
                    electronic, and managerial procedures. Please note that we
                    cannot guarantee that any data transmitted over the Internet
                    is completely secure. Accordingly, we encourage you to take
                    every precaution to protect your personal data when you are
                    on the Internet.
                  </Text>
                </Box>

                <Box
                  marginTop={"40px"}
                  maxWidth={"675px"}
                  textAlign={{ base: "center", md: "left" }}
                >
                  <Text
                    color={"spikk-white2"}
                    lineHeight={"25px"}
                    fontSize={{ base: "30px", md: "30px" }}
                    fontWeight={"semibold"}
                    marginBottom={"8px"}
                  >
                    COMMITMENT TO PRIVACY{" "}
                  </Text>

                  <Text
                    color={"spikk-white"}
                    fontSize={{ base: "initial", md: "md" }}
                    lineHeight={"25px"}
                    maxW={{ base: "100%", md: "800px" }}
                  >
                    To make sure your personal information remains confidential;
                    we communicate these privacy guidelines to every Spikk
                    employee. Spikk’s Website may, from time to time, contain
                    links to other sites. Spikk does not share your personal
                    information with those websites and is not responsible for
                    their privacy practices. We encourage you to learn about the
                    privacy policies of any such company. If we are going to use
                    your personal information differently from that stated at
                    the time of collection, we will inform you accordingly.
                    Spikk’s Privacy Policy is subject to change at any time. It
                    is in your interest to review the privacy policy regularly
                    for any changes.{" "}
                  </Text>
                </Box>

                <Box
                  marginTop={"40px"}
                  maxWidth={"675px"}
                  textAlign={{ base: "center", md: "left" }}
                 
                >
                  <Text
                    color={"spikk-white2"}
                    lineHeight={"25px"}
                    fontSize={{ base: "30px", md: "30px" }}
                    fontWeight={"semibold"}
                    marginBottom={"8px"}
                  >
                    CONTACT US
                  </Text>

                  <Text
                    color={"spikk-white"}
                    fontSize={{ base: "initial", md: "md" }}
                    lineHeight={"25px"}
                    maxW={{ base: "100%", md: "800px" }}
                    
                  >
                    If you have any questions or suggestions about our Privacy
                    Policy, do not hesitate to Contact us [hi@gloed.co]{" "}
                  </Text>
       </Box> 


                      </Box>


      </Box>
    </div>
  );
};

export default PrivacyPolicy;
