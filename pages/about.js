import React from "react";
import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Img,
  useBreakpointValue,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Box,
  Badge,
  IconButton,
  Stat,
  StatNumber,
  StatLabel,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const About = () => {
  return (
    <Box>
    <Box  bg= {useColorModeValue("teal")}>
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "7xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: useColorModeValue("yellow.200","yellow.400"),
                zIndex: -1,
               
              }}
            >
              Story
            </Text>
            <br />{" "}
            <Text color={useColorModeValue("white")} as={"span"}>
              Time
            </Text>{" "}
          </Heading>
          <Text as='p' fontSize={{ base: "md", lg: "lg" }} color="white" >
            One bitter cold Sunday, an old farmer trudged for miles through a
            blizzard to reach the small mountain church he attended. No one else
            showed up, except the preacher. Looking around the empty pews, the
            clergyman leaned over the pulpit and suggested to his lone
            congregant that it hardly seemed worth proceeding with the service
            with such a low turnout. Perhaps we’d do better if we returned to
            our nice, warm homes and had a hot drink,’ he said in a tone that
            blatantly encouraged the old farmer to agree. The old farmer looked
            at the preacher and said, ‘I’m just a simple farmer, but when I go
            to feed my herd if only one cow shows up, I sure don’t let her go
            hungry.’ The preacher felt embarrassed and a bit guilty, so he
            conducted the entire service – hymns, readings announcements, and a
            sermon. The whole thing lasted over an hour. After the service, he
            said to the farmer, ‘I hope that met your needs.’ The farmer said,
            ‘I’m just a simple farmer, but when I go to feed my herd if only one
            cow turns up, I sure don’t force her to eat everything I brought for
            the lot of them
          </Text>
          <br />
          <Text  as='p' fontSize={{ base: "md", lg: "lg" }}>
          <strong>Moral of the Story: </strong>It’s important to adjust what information you deliver and how you deliver it based on who’s on the receiving end.
          </Text>
          {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Button
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Create Project
          </Button>
          <Button rounded={'full'}>How It Works</Button>
        </Stack> */}
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Img
          alt={"About page bulb cover"}
          objectFit={"cover"}
          src={"/bulb 23.png"}
        />
      </Flex>
    </Stack>
    </Box>
    <Vision />
    <Values />
    <Teamstructure />
    
    
    </Box>
  );
};

const Vision = () => {
  return (
    <Box p={6}  bg={useColorModeValue("#24AAB2","yellow.500")}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} color="white">
        <Feature
          icon={"/icon 1.png"}
          label={'The Vision'}
          title={'The Vision'}
          text={
            'To be the leading branding firm in East Africa attaining loyalty for our customers through consumer relations'
          }
        />
        <Feature
          icon={"/icon 2.png"}
          label={'The Mission'}
          title={'The Mision'}
          text={
            'To provide strategic counsel, creative solution and timely responsive communication services'
          }
        />
        <Feature
          icon={"/icon 3.png"}
          label={'The Objective'}
          title={'The Objective'}
          text={
            'To tailor-make & implement brand communication & marketing strategies'
          }
        />
      </SimpleGrid>
    </Box>
  );
};


const Feature = ({ title, text, icon,label }) => {
  return (
    <Stack>
      <Img 
      borderRadius='full'
      boxSize='100px'
      src={icon}
      alt={label}
      />
      <Text fontWeight={600}>{title}</Text>
      <Text >{text}</Text>
    </Stack>
  );
};

// const Values = () => {
//    return(
//          <Flex
//          justify={"center"}
//          my={4}>
//            <Heading>OUR VALUES</Heading>
//            <Stack direction={{base:"column",md:"row"}}>

//            </Stack>
//          </Flex>
//    );
// }


function VCard({title, stat, color,}) {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      bg={color}
      
      
      >
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

function Values() {
  return (
    <Box   mx={'auto'} pb={5} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Our Values
      </Heading>
      <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
      
      <VCard color={'#FF6565'} title={'Creativity and Professionalism'} stat={'In our designs & implementation'} />
      <VCard color={'#24AAB2'}title={'Commitment & Loyalty'} stat={'To our clients'} />
      <VCard color={'#FDBC4A'}title={'Reliability & Availability'} stat={'In our communication'} />
      <VCard color={'#FFFFFF'}title={'Quality & integrity'} stat={'In everything we do'} />
     
      </SimpleGrid>
    </Box>
  );
  }

  const Team = [
    {
      src: "Mm1.jpeg",
      name: "MWONGELI MWANZIA",
      description: 
      "#HappyGoLucky:  Brand designer for clients who are seeking confidence and courage to be outgoing. She cuts across personal, product and service branding. As a Founder and managing director of Kingeley Agencies, she has gathered experience in Brands and sports entities through education, research and hands-on work adventures. Overall she brings out the wow factor!..."
      
    },
    {
      src: "Jackie.jpeg",
      name: "JACKIE MASIKA",
      description: 
      " #TheBestisyettoCome:     A highly motivated seasoned marketer with comprehensive background managing highly effective BTL and ATL campaigns She is passionate about events management, digital marketing , experiential marketing and brand image awareness"
      
    },
    {
      src: "Reagan1.jpeg",
      name: "REAGAN KEVIN",
      description:
      "AKA Mr.Rizzy:  Let's take a look at a lion (the king of the jungle) then picture him, being a king and a brave one but silence is what makes him a smart guy. A creative, Thinker, Dreamer & Listener."
      
    },

    {
      src: "mark.jpeg",
      name: "MARK-ANTHONY MUOKI",
      description:
      "#TheSuperman My Mantra:seize the day while trusting as little as possible on what tomorrow might bringthe graphic designer ready to take on what comes his way. He enjoys working on designs and is passionate about the final product."
      
    },
  ];
  
  const MotionBox = motion(Box);
  const MotionImg = motion(Img);
  
  function Teamstructure() {
    return (
      
      <VStack justify={"space-between"} spacing={4} mb="4">
        <Box mb={4}>
          <Heading>TEAM</Heading>
        </Box>
      
  
       <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={20}>
          {Team.map((data, index) => {
            return (
              <MotionBox
                key={index}
                initial={{ opacity: 0, translateX: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <Images
                  key={index}
                  description={data.description}
                  src={data.src}
                  alt={data.name}
                  name={data.name}
                  
                />
              </MotionBox>
            );
          })}
        </SimpleGrid>
      </VStack>

    );
  }
  
  const Images = ({ src,name,description }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  //const imageRef = useRef(null);
    return (
      <Box boxSize={"250px"}>
        <MotionImg
          // onMouseEnter={() => {
          //   imageRef.current.src={src}
          // }}
          // onMouseLeft={() => {
          //   imageRef.current.src={bwsrc}
          // }}
          src={src}
          alt={name}
          boxSize="250px"
          htmlHeight={150}
          borderRadius="md"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] }}
          onClick={onOpen}
          //ref={imageRef}
        />

<Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Img
                src={src}
                alt={name}
                boxSize="300px"
                htmlHeight={150}
                borderRadius="md"
              />
              <Text>{description}</Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>

    
    );
  };
  

  
export default About;
