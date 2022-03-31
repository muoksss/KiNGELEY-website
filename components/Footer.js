import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Input,
  useColorModeValue,
  VisuallyHidden,
  IconButton,
  Button,
  Img,
  HStack,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
               <HStack>
              <Img
                alt="Kingeley's logo"
                boxSize="50px"
                src="/Kingeley logo.png"
              />
              <Text>Kingeley Agency</Text>
              </HStack>
            </Box>
            <Text fontSize={"sm"}>
              © 2022 Kingeley Agency. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"FaceBook"} href={"https://www.facebook.com/KiNGELEY.Agencies"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"https://www.instagram.com/kingeley_agencies/"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"/about"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"https://www.google.com/maps/place/KiNGELEY+Agencies+Limited/@-1.3116546,36.812447,17z/data=!3m1!4b1!4m5!3m4!1s0x182f11e0a37feb5f:0xc378383e2dc18184!8m2!3d-1.3116586!4d36.8146231"}>Contact us</Link>
            
            
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("yellow.300", "yellow.400")}
                color={useColorModeValue("gray.400", "gray.800")}
                _hover={{
                  bg: "yellow.300",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <IconButton
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      icon={children}
      aria-label={label}
    />
      
    
  );
};

export default Footer;
