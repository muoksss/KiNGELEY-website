import React from "react";
import {
  Heading,
  Flex,
  Img,
  VStack,
  SimpleGrid,
  Text,
  Stack,
  useBreakpointValue,
  UnorderedList,
  ListItem,
  useColorModeValue,
  HStack,
  Center,
  Link,
} from "@chakra-ui/react";

function Service() {
  return (
    <VStack>
      <Flex w="200%" mb={4} justify={"center"} p={20}>
        <Heading>WHAT WE DO</Heading>
        
      </Flex>
      <Flex w="50%" h="50%" mt={0} mb={4} justify={"center"}>
        <Img
          alt={"service image"}
          src="/icon 4.png"
          objectFit={"cover"}
        />
      </Flex>

      <Strategy />
      <Flex justify="center" px={20} mx={12}>
        <Center w="100%">
          <Stack direction="column">
            <Heading>
              ``If opportunity doesn’t
                knock, build a door.``{" "}
            </Heading>
            <Center>
              <Text>MILTON BERLE</Text>
            </Center>
          </Stack>
        </Center>
      </Flex>
      
      <Creative />
      <Flex justify="center" mb={6} px={20} mx={12}>
        <Center w="100%">
          <Stack direction="column">
            <Heading>
              ``Creativity does not wait for the perfect moment. It fashions its
              own moments out of ordinary ones.``{" "}
            </Heading>
            <Center>
              <Text>Bruce Garrabrandt</Text>
            </Center>
          </Stack>
        </Center>
      </Flex>
      <Event />
      <Flex my="2" justify="center" w={"100%"}>
        <SimpleGrid
          row={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: "20px", md: "50px", lg: "150px" }}
          
        >
           <Stack align={"flex-start"}>
             <Link href={"/portfolio"}>
          <SCard
            link="/portfolio"
            label="Creative Design"
            image="/icon 7.png"
            title="Creative Design"
          />
          </Link>
          <Link href={"/portfolio"}>
          <SCard
            link="/portfolio"
            label="Brand Creative Ideation"
            image="/icon 8.png"
            title="Brand Creative Ideation"
          />
          </Link>

          </Stack>

        </SimpleGrid>
      </Flex>
      
    </VStack>
  );
}

const SCard = ({ label, image, title }) => {
  return (
    <Stack>
      <Img alt={label} src={image} boxSize="150px" objectFit={"contain"} />
      <Text fontWeight={600}>{title}</Text>
    </Stack>
  );
};

const Strategy = () => {
  return (
    <Stack minH={"90vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
                bg: useColorModeValue("yellow.200", "yellow.400"),
                zIndex: -1,
              }}
            >
              Strategy
            </Text>
            <br />{" "}
          </Heading>
          <Heading as="h2" fontSize={{ base: "md", lg: "lg" }}>
            {" "}
            Communication and Marketing
          </Heading>
          <Text as="p" fontSize={{ base: "md", lg: "lg" }}>
            KiNGELEY helps build awareness of companies, products, services,
            people, and issues among audiences and key influencers, creating
            companies identity in the industry, media and community surrounding
            their clients. We improve product visibility, overcome buyer inertia
            and remove negative perceptions from the public through
            effective communication
          </Text>
          <Heading as="h2" fontSize={{ base: "md", lg: "lg" }}>
            {" "}
            The Tools
          </Heading>
          <Text as="p" fontSize={{ base: "md", lg: "lg" }}>
            <UnorderedList>
              <ListItem>Communication& marketing Audit & Advisory</ListItem>
              <ListItem>Corporate Responsibility Programs</ListItem>
              <ListItem>Company & product Rebrand</ListItem>
              <ListItem>Route to Market & activations</ListItem>
              <ListItem>Digital Marketing</ListItem>
              <ListItem>Event Management</ListItem>
              <ListItem>Promotional Material</ListItem>
            </UnorderedList>
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Img
          alt={"About page bulb cover"}
          objectFit={"cover"}
          src={"/icon 5.png"}
        />
      </Flex>
    </Stack>
  );
};

const Creative = () => {
  return (
    <Stack minH={"90vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Flex flex={1}>
          <Img
            alt={"About page bulb cover"}
            objectFit={"cover"}
            src={"/icon 11.png"}
          // boxSize={"200px"}
          />
        </Flex>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
                bg: useColorModeValue("yellow.200", "yellow.400"),
                zIndex: -1,
              }}
            >
              Creative at
            </Text>
            <br /> <Text as={"span"}>Kingeley</Text>{" "}
          </Heading>
          <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
            <Text>
            We focus on helping you gain a creative advantage.
            </Text>
          </Heading>
          <Text as="p" fontSize={{ base: "md", lg: "lg" }}>
          
          In a world where consumers are bombarded with communications, we help your brand stand out from the crowd, 
          and cut through the media clutter with ease.
          Whether you need a fully integrated campaign or a one-off strategy, we give you the creative to effectively 
          deliver the results you’re looking for
          </Text>
          <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
            <Text>
            Creative is where the magic happens.
            </Text>
          </Heading>
          
          <Text as="p" fontSize={{ base: "md", lg: "lg" }}>
          
          This is where ideas are born, concepts are workshopped and thought-provoking concepts are made. Creative is 
          where we plan, draw and sculpt the foundations and contents of your business; weaving together clever words and 
          eye-catching visuals that help tell your story to customers. 
          Kingeley is ready to craft your vision and formulate award-winning ideas 

          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};

const Event = () => {
  return(
    <Stack minH={"90vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
                bg: useColorModeValue("yellow.200", "yellow.400"),
                zIndex: -1,
              }}
            >
              Event
            </Text>
            <br />{" "}
            <Text as={"span"}>Management</Text>{" "}
          </Heading>
          
          <Text as="p" fontSize={{ base: "md", lg: "lg" }}>
          We seek to provide strategic counsel, creative solutions, and 
          timely responsive communication services to our clients.
          </Text>
          
          <Text as="p" fontSize={{ base: "md", lg: "lg" }}>
          We take pride in exceptional organization skills, superb interpersonal skills, multi-tasking 
          skills, and excellent time- management we bring your event to life.

          </Text>

          <Text as="p" fontSize={{ base: "md", lg: "lg" }}>
          We develop event master plans and concepts and ensure that event branding and 
          communication is top-notch as well as event logistics, guaranteeing you 
          a world-class event
          </Text>

          <Text as="p" fontSize={{ base: "md", lg: "lg" }}>
          We create event awareness and publicity so that our clients can achieve 
          ROI from the event while working closely with all stakeholders
          to ensure all-around inclusivity. 
          </Text>
        
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Img
          alt={"About page bulb cover"}
          objectFit={"cover"}
          src={"/icon 12.png"}
        />
      </Flex>
    </Stack>
  )
}

export default Service;
