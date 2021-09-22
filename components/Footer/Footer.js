import { Flex, List, ListItem, Icon } from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import Link from "next/link";

import { FaFacebook, FaPinterest } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer style={{ width: "100vw" }}>
      <Flex
        // border="1px solid red"
        w="100%"
        h="200px"
        backgroundColor="gray.700"
        minH="200px"
        paddingX={["0.3rem", "2rem"]}
        align="center"
        justify="space-around"
      >
        <Flex
          h="100%"
          w="25%"
          align="center"
          fontSize={["1rem", "1.5rem", "2rem"]}
        >
          <Logo
            props={{
              fontSize: "inherit",
              color: "white",
              marginRight: "1rem",
              width: "80%",
              h: "100%",
            }}
          />
          <Flex
            borderRadius="lg"
            opacity="0.3"
            h="80%"
            maxH="90%"
            w="2px"
            backgroundColor="brand.white"
          ></Flex>
        </Flex>
        <Flex
          w="75%"
          h="100%"
          //   border="solid blue 1px"
          justify="space-around"
          align="center"
          fontSize={["0.7rem", "0.8rem", "1rem"]}
          color="brand.white"
        >
          <List fontSize="inherit" color="inherit" spacing={4} opacity="0.5">
            <ListItem>
              <Link href="/">About Us</Link>
            </ListItem>
            <ListItem>
              <Link href="/">Contact</Link>
            </ListItem>
            <ListItem>
              <Link href="/">Careers</Link>
            </ListItem>
            <ListItem>
              <Link href="/">News</Link>
            </ListItem>
          </List>
          <Flex
            // border="solid pink 1px"
            align="center"
            fontSize="1.4rem"
            justify="space-around"
          >
            <Link href="/">
              <Icon
                transition="0.3s ease-in-out"
                opacity="0.5"
                _hover={{ opacity: "1" }}
                cursor="pointer"
                mr="0.6rem"
                as={FaFacebook}
              />
            </Link>
            <Link href="/">
              <Icon
                as={FaPinterest}
                transition="0.3s ease-in-out"
                opacity="0.5"
                _hover={{ opacity: "1" }}
                cursor="pointer"
                mr="0.6rem"
              />
            </Link>
            <Link href="/">
              <Icon
                as={RiLinkedinFill}
                transition="0.3s ease-in-out"
                opacity="0.5"
                _hover={{ opacity: "1" }}
                cursor="pointer"
                mr="0.6rem"
              />
            </Link>
            <Link href="/">
              <Icon
                as={AiOutlineTwitter}
                transition="0.3s ease-in-out"
                opacity="0.5"
                _hover={{ opacity: "1" }}
                cursor="pointer"
                mr="0.6rem"
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
