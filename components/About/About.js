import BrandedOutlineBtn from "../BrandedOutlineBtn";
import {
  Flex,
  useColorModeValue,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";

import theme from "../theme.js";

import Link from "next/link";

const About = () => {
  const btnColor = useColorModeValue("gray.500", "brand.white");

  return (
    <section>
      <Heading size="2xl">About</Heading>
      <Heading size="2xl" className="sectionHeaderDots" color="red.400">
        ...
      </Heading>
      <Flex maxW="600px" direction="column">
        <Text className="paragraph">
          My name is Tyler Tierney and I am a frontend developer based out of
          Tampa, Fl. I graduated from the University of Florida in 2019.
        </Text>
        <Text className="paragraph">
          Since graduating, I have worked as an Account Executive in local
          marketing and advertising and as a Revenue Operations Manager in
          commercial real estate. Currently, I develop financial technology
          products for Fortune 500 clients working in risk and compliance.
        </Text>
        <Flex w="100%" mb="2rem" align="center" justify="flex-end">
          <Link href="https://www.linkedin.com/in/tyler--tierney/" passHref>
            <a target="_blank">
              <Text
                mr="0.8rem"
                cursor="pointer"
                transition="0.3s ease-in-out"
                _hover={{ opacity: "0.7" }}
                borderColor={useColorModeValue("gray.500", "brand.text.light")}
                borderBottom="solid 1px"
                color={useColorModeValue("gray.500", "brand.text.light")}
              >
                LinkedIn
              </Text>
            </a>
          </Link>
          <Link href="/TylerTierney_Resume.pdf" passHref>
            <a target="_blank">
              <Button
                variant="outline"
                borderRadius="30px"
                color={btnColor}
                border="2px solid"
                borderColor="brand.primary.1000"
                transition="0.3s ease-in-out"
                _hover={{
                  backgroundColor: "brand.primary.1000",
                  color: "white",
                }}
              >
                Resumé
              </Button>
            </a>
          </Link>
        </Flex>
      </Flex>
    </section>
  );
};

export default About;
