import React from 'react';

import {
  Heading,
  SimpleGrid,
  Box,
  VStack,
  Img,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Typical from "react-typical";


const creative = [
  {
    src: "/creative/Bboxx Faida Flyer changes.png",
    bw: "creative/Bboxx Faida Flyer changes bw.png",
    name: "BBOXX EAST AFRICA",
    description:
      "Bboxx Pulse collects billions of data points everyday in order to meet our customers’ long term needs and give them the most reliable service possible",
  },
  {
    src: "/creative/Rally.jpg",
    bw: "/creative/SYOKINET-28_1 bw.png",
    name: "SYOKINET SOLUTIONS",
    description:
      "Kingeley was tasked with the project of creating and designs a brand strategy for Syokinet solutions an internet service startup in Syokimau. Our startegy was to create a digital footprint that would in turn attract customers to their company.",
  },
  {
    src: "/creative/Apome Beauty.jpg",
    bw: "/creative/Upper Hill Dental Cntr-121 bw.png",
    name: "UPPERHILL DENTAL CENTER",
    description:
      "UPPERHILL DENTAL CENTER is a dental center in Nairobi. Kingeley undertook the task of creating a digital footprint on the various social media platforms.",
  },
  
];
const strategy = [
  {
    src: "/strategy/deaflympics.JPG",
    bw: "/strategy/7N7A3683 bw.png",
    name: "ABDQ",
    description:
      "The 1st Africa Deaflympics Ball Games Qualifiers was held in Nairobi at the MISC, Kasarani in 2021, Kingeley was tasked with the formulation and implementation of the entire event master plan concept and developing the branding and communication strategy for the games that brought together different African nations",
  },
  
  {
    src: "/strategy/Railway Top.jpg",
    bw: "/strategy/7s safari bw.png",
    name: "Kenya Railway",
    description:
      "Kingeley Agencies was tasked with the following activities for the Safari 7s 2021; Media Buying,Social Media posting,Design works for social media",
  },
  {
    src: "/strategy/WTO-Director-General.png",
    bw: "/strategy/WTO-Director-General bw.png",
    name: "WTO DIRECTOR GENERAL",
    description:
      "Kingeley was involved in the formulation of Amb. Dr. Amina WTO campaign for the Director – General position 2020.  ",
  },
];
const event = [
  {
    src: "/events/greenlife.jpg",
    bw: "/events/Greenlife bw.png",
    name: "GREENLIFE ",
    description:
      "Kingeley was engaged by Greenlife to create the event concept for the 2019 Horticulture fair held in Naivasha, We created a walk through concept that showcased Greenlife’s range of products and the role they play in the horticulture sector. With our exceptional skills in event management and set up we ensured our clients' presentation was top of the category.",
  },
  {
    src: "/events/Msk.jpg",
    bw: "/events/MSK Keynote speaker bw.png",
    name: "MSK",
    description:
      "Marketing society of Kenya sought the services of Kingeley in holding their annual MSK Gala that was held at Movenpick Hotels in Westlands Nairobi. Kingeley undertook the creative,Brand and event management for the whole team.",
  },
  
  {
    src: "/Events/Bboxx-Kenya.jpg",
    bw: "creative/Bboxx Faida Flyer changes bw.png",
    name: "BBOXX EAST AFRICA",
    description:
    "Bboxx Pulse collects billions of data points everyday in order to meet our customers’ long term needs and give them the most reliable service possible",
  },
];
const Digital = [
  {
    src: "/creative/Upper Hill Dental Cntr-121.jpg",
    bw: "/creative/Upper Hill Dental Cntr-121 bw.png",
    name: "UPPERHILL DENTAL CENTER",
    description:
    "UPPERHILL DENTAL CENTER is an dental center in Nairobi. Kingeley undertook the task of creating a digital footprint on the various social media platforms.",
  },
 
  {
    src: "/Digital/Agnes.png",
    bw: "/events/7s safari bw.png",
    name: "THE AGNES TIROP CONFERENCE",
    description:
      "Kingeley was tasked with creation of the brand design for the Agnes Tirop conference 2022.",
  },
  {
    src: "/events/Winners 7s.jpeg",
    bw: "events/Winners 7s bw.png",
    name: "lorem ipsum",
    description:
      "Kingeley Agencies was tasked with the following activities for the Safari 7s 2021; Media Buying,Social Media posting,Design works for social media.",
  },
];
const Branding = [
  {
    src: "/Branding/EY Mugs.jpeg",
    bw: "/creative/Upper Hill Dental Cntr-121 bw.png",
    name: "EY MUGS",
    description:
    "Kingeley was tasked with the procurement and branding of office mugs that were delivered to the client. With the clear purpose of supplying proper goods and service to the client.",
  },
 
  {
    src: "/Branding/KRU Team.jpg",
    bw: "/events/7s safari bw.png",
    name: "Kenya Rugby Union",
    description:
      "We were tasked with the procurement and branding of the clothing material for the Kenya Rugby Union team.",
  },
  {
    src: "/Branding/Geopoll.jpeg",
    bw: "events/Winners 7s bw.png",
    name: "GEOPOLL LIMITED",
    description:
      "Kingeley was tasked with the procurement and branding of office mugs that were delivered to the client. With the clear purpose of supplying proper goods and service to the client.",
  },
];

const MotionBox = motion(Box);
const MotionImg = motion(Img);



function Portfolio() {
  return (
    
    <VStack justify={"space-between"} spacing={4} mb="4">
      <Box mb={4}>
        <Heading>Portfolio</Heading>
      </Box>
      <Text size="3xl">
        {" "}
        The team at Kingeley does {""}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Creative Design",
            1500,
            "Brand Strategy",
            1500,
            "Event Management",
            1500,
            "Branding",
            1500,
            "Digital",
            1500,
          ]}
        />
      </Text>
      <Flex>
        <Heading> Creative Design</Heading>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={20}>
        {creative.map((data, index) => {
          return (
            <MotionBox
              key={index}
              initial={{ opacity: 0, translateX:-50  }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <Images
                key={index}
                bwsrc={data.bw}
                src={data.src}
                alt={data.name}
                description={data.description}
              />
            </MotionBox>
          );
        })}
      </SimpleGrid>
      <Flex>
        <Heading> Brand Strategy</Heading>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={20}>
        {strategy.map((data, index) => {
          return (
            <MotionBox
              key={index}
              initial={{ opacity: 0, translateX: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <Images
                key={index}
                bwsrc={data.bw}
                src={data.src}
                alt={data.name}
                description={data.description}
              />
            </MotionBox>
          );
        })}
      </SimpleGrid>
      <Flex>
        <Heading>Event Management</Heading>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={20}>
        {event.map((data, index) => {
          return (
            <MotionBox
              key={index}
              initial={{ opacity: 0, translateX: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <Images
                key={index}
                bwsrc={data.bw}
                src={data.src}
                alt={data.name}
                description={data.description}
              />
            </MotionBox>
          );
        })}
      </SimpleGrid>
      <Flex>
        <Heading>Digital</Heading>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={20}>
        {Digital.map((data, index) => {
          return (
            <MotionBox
              key={index}
              initial={{ opacity: 0, translateX: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <Images
                key={index}
                bwsrc={data.bw}
                src={data.src}
                alt={data.name}
                description={data.description}
              />
            </MotionBox>
          );
        })}
      </SimpleGrid>
      <Flex>
        <Heading>Branding</Heading>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={20}>
        {Branding.map((data, index) => {
          return (
            <MotionBox
              key={index}
              initial={{ opacity: 0, translateX: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <Images
                key={index}
                bwsrc={data.bw}
                src={data.src}
                alt={data.name}
                description={data.description}
              />
            </MotionBox>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}


const Images = ({ bwsrc, src, name, description }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //const imageRef = useRef(null);

  return (
    <Box boxSize={"300px"}>
      <MotionImg
        // onMouseEnter={() => {
        //   imageRef.current.src={src}
        // }}
        // onMouseLeft={() => {
        //   imageRef.current.src={bwsrc}
        // }}
        src={src}
        alt={name}
        boxSize="300px"
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

export default Portfolio;