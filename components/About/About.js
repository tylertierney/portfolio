import BrandedHeading from "../BrandedHeading";
import BrandedParagraph from "../BrandedParagraph";
import BrandedOutlineBtn from "../BrandedOutlineBtn";
import { Flex, useColorModeValue, Text } from "@chakra-ui/react";

import theme from "../theme.js";

import Link from "next/link";

const About = () => {
  const bgGradientColor = useColorModeValue(
    theme.colors.brand.white,
    theme.colors.gray["700"]
  );

  return (
    <section>
      <BrandedHeading props={{ p: "0rem 0" }}>About</BrandedHeading>
      <BrandedHeading
        props={{
          color: "red",
          lineHeight: "0.1rem",
          mt: "-1rem",
          mb: "0",
          pb: "1.5rem",
        }}
      >
        ...
      </BrandedHeading>
      <Flex maxW="600px" direction="column">
        <BrandedParagraph
          props={{
            fontWeight: "200",
            mt: "0",
            mb: "1rem",
            fontSize: "1.2rem",
          }}
        >
          My name is Tyler Tierney and I am a frontend developer based out of
          Tampa, Fl. I graduated from the University of Florida in 2019 and have
          worked in local advertising as well as commercial real estate.
        </BrandedParagraph>
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
          <Link href="/TierneyResume_Oct2021.pdf" passHref>
            <a target="_blank">
              <BrandedOutlineBtn props={{ color: "blue" }}>
                Resumé
              </BrandedOutlineBtn>
            </a>
          </Link>
        </Flex>
      </Flex>
    </section>
  );
};

export default About;
