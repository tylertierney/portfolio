import { Flex, useColorModeValue, Text, Icon } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import headshot from "../../public/images/headshot.jpg";
import resume from "../../public/tierneyresume_21.pdf";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

const Home = () => {
  const waves = useColorModeValue("waves", "waves2");

  const icons = [
    { icon: AiFillGithub, link: "https://github.com/tylertierney" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/tyler--tierney/" },
    {
      icon: FiFileText,
      link: "https://www.linkedin.com/in/tyler--tierney/",
    },
  ];

  return (
    <Flex
      className={waves}
      // minH="93vh"
      h="93vh"
      minW="100vw"
      direction="column"
      justify="space-around"
      align="center"
    >
      <Flex
        // outline="1px solid gray"
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
      <Flex justify="space-around" w="100%" color="brand.gray">
        {icons.map((item) => {
          return (
            <Link href={item.link} passHref>
              <a target="_blank">
                <Icon
                  as={item.icon}
                  boxSize={8}
                  cursor="pointer"
                  transition="0.3s ease-in-out"
                  _hover={{ transform: "scale(1.5)" }}
                />
              </a>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Home;
