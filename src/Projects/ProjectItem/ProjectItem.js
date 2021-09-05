import "./projectItem.css";

import {
  Flex,
  VStack,
  Heading,
  Image,
  Text,
  Icon,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";

import { BsLightningFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiNetlify,
  SiNextDotJs,
  SiMongodb,
  SiHeroku,
  SiFirebase,
} from "react-icons/si";

import ThemeContext from "../../ThemeContext/ThemeContext";
import { useContext } from "react";

const ProjectItem = ({
  title,
  description,
  hostedsite,
  github,
  desktop_screenshot,
  mobile_screenshot,
  mobile_screenshot2,
  tech_stack,
}) => {
  const something = String(process.env.PUBLIC_URL) + "hello";
  console.log(something);

  const { theme } = useContext(ThemeContext);

  const convertIconNametoIcon = (icon_name) => {
    switch (icon_name) {
      case "FaReact":
        return <ListIcon mr="10px" as={FaReact} />;

      case "BsLightningFill":
        return <ListIcon mr="10px" as={BsLightningFill} />;

      case "FaNodeJs":
        return <ListIcon mr="10px" as={FaNodeJs} />;

      case "SiNetlify":
        return <ListIcon mr="10px" as={SiNetlify} />;

      case "SiNextDotJs":
        return <ListIcon mr="10px" as={SiNextDotJs} />;

      case "SiMongodb":
        return <ListIcon mr="10px" as={SiMongodb} />;

      case "FaAws":
        return <ListIcon mr="10px" as={FaAws} />;

      case "SiHeroku":
        return <ListIcon mr="10px" as={SiHeroku} />;

      case "SiFirebase":
        return <ListIcon mr="10px" as={SiFirebase} />;

      case "AiOutlineMail":
        return <ListIcon mr="10px" as={AiOutlineMail} />;
      default:
        break;
    }
  };

  return (
    <VStack
      align="flex-start"
      wrap="wrap"
      maxW="100vw"
      w="100vw"
      p="0 20px"
      m="0 0 60px 0"
      spacing={10}
      overflowX="hidden"
      fontSize="1rem"
    >
      <Flex wrap="wrap" justify="space-between" maxW="100%">
        <Flex direction="column" mr="20px">
          <Heading mb="10px">{title}</Heading>
          <Text mb="20px" maxW="340px">
            {description}
          </Text>
        </Flex>

        <Image
          htmlHeight="auto"
          htmlWidth="auto"
          objectFit="cover"
          maxW={["xs", "480px"]}
          src={desktop_screenshot}
          boxShadow="4px 4px 20px 1px rgb(0, 0, 0, 0.25)"
          mb="10px"
        ></Image>
      </Flex>
      <Flex wrap="wrap" justify="flex-start" maxW="100%" p="0 20px">
        <Flex direction="column" mr="20px" minW="200px">
          <Heading mb="10px">Tech Stack</Heading>
          <List spacing={3} p="0">
            {tech_stack.map((item) => {
              console.log(item);
              return (
                <ListItem>
                  {convertIconNametoIcon(item.icon)}
                  {item.name}
                </ListItem>
              );
            })}
          </List>
        </Flex>
        <Flex justify="space-around" minW="100%" w="100%" wrap="wrap">
          <Image
            htmlHeight="auto"
            htmlWidth="auto"
            objectFit="cover"
            maxW="300px"
            src={mobile_screenshot}
            boxShadow="4px 4px 20px 1px rgb(0, 0, 0, 0.25)"
            mt="20px"
            mr="10px"
          ></Image>
          {mobile_screenshot2 && (
            <Image
              htmlHeight="auto"
              htmlWidth="auto"
              maxW="300px"
              src={mobile_screenshot2}
              boxShadow="4px 4px 20px 1px rgb(0, 0, 0, 0.25)"
              mt="20px"
            ></Image>
          )}
        </Flex>
      </Flex>
      <Flex justify="flex-end" w="90%" m="40px">
        <a target="_blank" href={github} rel="noreferrer">
          <Button
            variant="outline"
            bgColor="transparent"
            _hover={{ backgroundColor: "transparent" }}
            _focus={{ opacity: "0.7", backgroundColor: "transparent" }}
            _active={{ backgroundColor: "transparent" }}
            borderColor={theme.text}
            mr="20px"
          >
            <Flex align="center">
              <Text mr="0.4rem">Github</Text>
              <Icon fontSize="1.4rem" as={AiFillGithub} />
            </Flex>
          </Button>
        </a>
        <a target="_blank" href={hostedsite} rel="noreferrer">
          <Button variant="solid" colorScheme="blue">
            Live Site
          </Button>
        </a>
      </Flex>
    </VStack>
  );
};

export default ProjectItem;
