import { Flex, Text, Icon, Box, useColorModeValue } from "@chakra-ui/react";
import BrandedSubheading from "../BrandedSubheading";
import BrandedParagraph from "../BrandedParagraph";
import MobileScreenshots from "../MobileScreenshots";
import IphoneRenders from "../IphoneRenders/IphoneRenders";
import BrandedOutlineBtn from "../BrandedOutlineBtn";
import Link from "next/link";
import Image from "next/image";
import iphone_mockups from "../../public/images/iphone_mockups.png";

import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { BsLightningFill, BsArrowUpRight } from "react-icons/bs";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";

import {
  SiMongodb,
  SiNextDotJs,
  SiNetlify,
  SiHeroku,
  SiFirebase,
} from "react-icons/si";

const icons = {
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
};

const Project = ({ item, index }) => {
  return (
    <>
      <Flex
        maxW="100%"
        minW="100%"
        w="100%"
        direction={["column", "column", "column", "row"]}
        justify={["flex-start", "flex-start", "space-around"]}
        mt="1rem"
      >
        <Flex direction="column" maxW="650px">
          <BrandedSubheading props={{ p: "0" }}>{item.title}</BrandedSubheading>
          <BrandedParagraph
            props={{
              fontWeight: "200",
              mt: "0",
              mb: "1rem",
              fontSize: "1rem",
              // maxW: "650px",
            }}
          >
            {item.description}
          </BrandedParagraph>
          <Flex w="100%" mt="1rem" mb="2rem" align="center" justify="flex-end">
            <Link href={item.github} passHref>
              <a target="_blank">
                <Flex
                  align="center"
                  mr="0.8rem"
                  color={useColorModeValue("brand.gray", "brand.text.light")}
                  borderBottom="1px solid"
                  _hover={{ opacity: "0.7" }}
                  transition="0.3s ease-in-out"
                >
                  <Text color="inherit" mr="0.1rem" cursor="pointer">
                    Github
                  </Text>
                  <Icon color="inherit" as={AiFillGithub} />
                </Flex>
              </a>
            </Link>
            <Link href={item.hostedsite} passHref>
              <a target="_blank">
                <BrandedOutlineBtn props={{ color: "blue" }}>
                  <Flex justify="space-between" align="center">
                    <Text mr="0.1rem">Live Site</Text>
                    <Icon as={BsArrowUpRight} />
                  </Flex>
                </BrandedOutlineBtn>
              </a>
            </Link>
          </Flex>
          <Flex justify="flex-start">
            <Flex align="center" wrap="wrap" justify="center">
              {item.tech_stack.map((icon, index) => {
                const iconRef = icons[icon.icon][icon.icon];
                const iconColor = icons[icon.icon]["color"];

                return (
                  <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    m="1rem"
                    key={index}
                    transition="0.3s ease-in-out"
                    _hover={{ color: iconColor }}
                  >
                    <Icon as={iconRef} fontSize="2rem" />
                    <Text color="inherit" fontSize="0.8rem" userSelect="none">
                      {icon.name}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
        {item.title === "LinkBase" ? (
          // <IphoneRenders />
          <Box maxW="480px">
            <Image
              src={iphone_mockups}
              alt="LinkBase iPhone Renders"
              priority={true}
            />
          </Box>
        ) : (
          <MobileScreenshots local_url={item.local_url} />
        )}
      </Flex>
    </>
  );
};

export default Project;
