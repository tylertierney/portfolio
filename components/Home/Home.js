import { Flex, Text, Icon, useColorModeValue, VStack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { useRef, useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // If user is on a mobile device, reveal the icon labels on scroll
    const vh = window.innerHeight;
    const topThird = vh / 3;
    const middleThird = topThird * 2;

    if (window.innerWidth < 600) {
      window.addEventListener("scroll", () => {
        const iconsScreenPosition =
          iconsRef.current.getBoundingClientRect().top;
        if (iconsScreenPosition < middleThird && iconsScreenPosition > 20) {
          iconsRef.current.classList.add("iconScrollEffect");
        } else {
          iconsRef.current.classList.remove("iconScrollEffect");
        }
      });
    }
  }, []);

  const iconsRef = useRef(null);

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
      link: "/TylerTierney_Resume.pdf",
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
      <Flex
        position="absolute"
        left="0"
        top="0"
        w="100%"
        justify="flex-end"
        paddingX="1rem"
        opacity="0.3"
        paddingY="0.5rem"
      >
        <Link href="mailto:tytierney@yahoo.com" passHref>
          <a>
            <Flex align="center">
              <Text fontWeight="200">tytierney@yahoo.com&nbsp;</Text>
              <Icon as={AiOutlineMail} fontSize="1.2rem" color={iconColor} />
            </Flex>
          </a>
        </Link>
      </Flex>
      <VStack userSelect="none" p="20px">
        <Text
          animation="headingReveal 0.6s linear forwards"
          fontSize="2.2rem"
          fontWeight="100"
          textAlign="center"
        >
          Hey, how&apos;s it going?
        </Text>
        <br />
        <Text
          animation="headingReveal 0.6s linear forwards"
          textAlign="center"
          maxW="75%"
          fontSize="2.2rem"
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
      </VStack>
      <Flex justify="space-around" w="100%" color="brand.gray" ref={iconsRef}>
        {icons.map((item, index) => {
          return (
            <Flex
              cursor="pointer"
              transition="0.3s ease-in-out"
              direction="column"
              align="center"
              className="homeIconsContainer"
              key={index}
            >
              <Link href={item.link} passHref className="homeIcons">
                <a target="_blank" aria-label={item.name}>
                  <Icon
                    color={iconColor}
                    as={item.icon}
                    boxSize={8}
                    className="homeIcons"
                    transition="0.3s ease-in-out"
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
