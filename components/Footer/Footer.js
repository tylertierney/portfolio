import {
  Flex,
  List,
  ListItem,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import Link from "next/link";

import { FaFacebook, FaPinterest } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer style={{ width: "100vw" }}>
      <Flex
        // w="100%"
        minW="100vw"
        h="200px"
        backgroundColor="brand.gray"
        minH="200px"
        paddingX={["0.3rem", "2rem"]}
        justify="center"
        align="center"
        userSelect="none"
      >
        <Text opacity={useColorModeValue("1", "0.5")}>
          Copyright Tyler Tierney 2021
        </Text>
      </Flex>
    </footer>
  );
};

export default Footer;
