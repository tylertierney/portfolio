import {
  Flex,
  Text,
  Icon,
  useColorModeValue,
  VStack,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import headshot from "../../public/images/headshot.jpg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import BrandedHeading from "../BrandedHeading";

const Home = () => {
  const iconColor = useColorModeValue("brand.text.dark", "brand.white");

  const waves = useColorModeValue("waves", "waves2");

  const icons = [
    {
      icon: AiFillGithub,
      link: "https://github.com/tylertierney",
      name: "Github",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/tyler--tierney/",
      name: "LinkedIn",
    },
    {
      icon: FiFileText,
      link: "https://www.linkedin.com/in/tyler--tierney/",
      name: "Resumé",
    },
  ];

  return (
    <Flex
      className={waves}
      h="93vh"
      minW="100vw"
      direction="column"
      justify="space-around"
      align="center"
    >
      {/* <VStack
        direction="column"
        align="center"
        spacing={6}
      >
        <Flex
          borderRadius="50%"
          justify="center"
          align="center"
          maxH="190px"
          overflow="hidden"
          boxShadow="0px 0px 20px 1px rgb(0, 0, 0, 0.4)"
        >
          <Image
            src={headshot}
            alt="Headshot"
            width="185px"
            height="231px"
            layout="fixed"
          />
        </Flex>
        <Flex direction="column" align="center">
          <Text fontSize="1.4rem">Tyler Tierney</Text>
          <Text fontSize="1.4rem">Software Developer</Text>
          <Text fontSize="1.4rem">Tampa, Fl</Text>
        </Flex>
      </VStack> */}
      <VStack>
        <Flex direction="column" align="center" justify="space-around">
          <Text
            animation="headingReveal 0.6s linear forwards"
            fontSize="2.4rem"
            fontWeight="100"
          >
            Hey, how's it going?
          </Text>
          <br />
          <Text
            animation="headingReveal 0.6s linear forwards"
            textAlign="center"
            maxW="75%"
            fontSize="2.4rem"
            fontWeight="100"
          >
            My name is&nbsp;
            <Text
              bgClip="text"
              fontWeight="600"
              bgGradient="linear(to-r, red.400,pink.400)"
              as="span"
            >
              Tyler
            </Text>
            &nbsp;and I build websites
          </Text>
        </Flex>
      </VStack>
      <Flex justify="space-around" w="100%" color="brand.gray">
        {icons.map((item, index) => {
          return (
            <Flex
              cursor="pointer"
              transition="0.3s ease-in-out"
              direction="column"
              align="center"
              className="homeIconsContainer"
            >
              <Link key={index} href={item.link} passHref className="homeIcons">
                <a target="_blank">
                  <Icon
                    color={iconColor}
                    as={item.icon}
                    boxSize={8}
                    className="homeIcons"
                    // cursor="pointer"
                    transition="0.3s ease-in-out"
                    // _hover={{ transform: "scale(1.5)" }}
                  />
                </a>
              </Link>
              <br />
              <Text transition="0.3s ease-in-out" className="iconNames">
                {item.name}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Home;
