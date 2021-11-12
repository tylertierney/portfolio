import React from "react";

import {
  Text,
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { BsArrowUpRight, BsLightningFill } from "react-icons/bs";

import {
  SiMongodb,
  SiNextDotJs,
  SiNetlify,
  SiHeroku,
  SiFirebase,
  SiAuth0,
} from "react-icons/si";

import { ProjectInterface } from "../NewProject";

export interface InfoBoxProps {
  project: ProjectInterface;
}

const ProjectInfoBox: React.FC<InfoBoxProps> = ({ project }) => {
  const iconsList: any = {
    FaReact: {
      FaReact,
      color: "#61dafb",
    },
    FaNodeJs: {
      FaNodeJs,
      color: "#73aa63",
    },
    FaAws: {
      FaAws,
      color: "#e08b2d",
    },
    BsLightningFill: {
      BsLightningFill,
      color: "#4dc8c3",
    },
    SiMongodb: {
      SiMongodb,
      color: "#12aa52",
    },
    SiNextDotJs: {
      SiNextDotJs,
      color: "#fff",
    },
    SiNetlify: {
      SiNetlify,
      color: "#74bece",
    },
    AiOutlineMail: {
      AiOutlineMail,
      color: "rgb(53 187 219)",
    },
    SiHeroku: {
      SiHeroku,
      color: "#79589f",
    },
    SiFirebase: {
      SiFirebase,
      color: "#ffcb2d",
    },
    SiAuth0: {
      SiAuth0,
      color: "#eb5423",
    },
  };

  const { title, description, color } = project;

  const textColor = useColorModeValue("brand.text.dark", "brand.text.light");

  const techStackArray = project.tech_stack.map((icon: any, index: number) => {
    const iconRef = iconsList[icon.icon][icon.icon];
    const iconColor = iconsList[icon.icon]["color"];
    const fontSize = 1.2;

    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        marginX="1rem"
        marginY="0.3rem"
        key={index}
        transition="0.3s ease-in-out"
        color={textColor}
        _hover={{ color: iconColor, opacity: "1" }}
      >
        <Icon as={iconRef} fontSize={fontSize + "rem"} />
        <Text color="inherit" fontSize={fontSize / 2 + "rem"} userSelect="none">
          {icon.name}
        </Text>
      </Flex>
    );
  });

  return (
    <Box
      w={["100%", "50%", "50%"]}
      backgroundColor={useColorModeValue("#f9f9f9", "#2b2929")}
    >
      <Flex direction="column" p="1rem" h="100%" justify="center">
        <Flex direction="column" mb="1.4rem">
          <Heading
            color={color}
            textAlign="left"
            fontSize="2.2rem"
            fontWeight="bold"
          >
            {title}
          </Heading>
          <Text
            fontSize={["0.9rem", "0.9rem", "0.9rem", "1rem", "1.1rem"]}
            mb="1rem"
            pr="1rem"
            color={textColor}
            textAlign="left"
          >
            {description}
          </Text>
          <Flex align="center" wrap="wrap" justify="center">
            {techStackArray}
          </Flex>
        </Flex>
        <Flex align="center" w="100%" justify="flex-end">
          <a href={project.github} target="_blank" rel="noreferrer">
            <Flex
              align="center"
              justify="center"
              borderBottom="1px solid"
              borderColor={textColor}
              color={textColor}
              transition="0.3s ease-in-out"
              _hover={{ opacity: "0.7" }}
            >
              <Text fontSize="1rem" color="inherit">
                Github&nbsp;
              </Text>
              <Icon color="inherit" as={AiFillGithub} />
            </Flex>
          </a>
          <a href={project.hostedsite} target="_blank" rel="noreferrer">
            <Button
              variant="unstyled"
              bgColor="transparent"
              borderRadius="20px"
              color={textColor}
              fontWeight="normal"
              border="1px solid"
              borderColor={project.color}
              maxW="128px"
              minW="112px"
              ml="1rem"
              transition="0.3s ease-in-out"
              _focus={{ borderWidth: "2px" }}
              _hover={{
                backgroundColor: project.color,
                color: "white",
              }}
            >
              <Flex align="center" justify="center">
                <Text fontSize="1rem" color="inherit">
                  Live Site&nbsp;
                </Text>
                <Icon fontSize="1rem" color="inherit" as={BsArrowUpRight} />
              </Flex>
            </Button>
          </a>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectInfoBox;
