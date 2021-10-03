import BrandedHeading from "../BrandedHeading";
import BrandedSubheading from "../BrandedSubheading";
import BrandedParagraph from "../BrandedParagraph";
import BrandedOutlineBtn from "../BrandedOutlineBtn";
import ProductFeature from "../ProductFeature";
import MobileScreenshots from "../MobileScreenshots";
import IconList from "../IconList";

import Image from "next/image";
import gatorPic from "../../public/images/gatorpic.jpg";

import Particles from "../Particles/Particles";

import { Flex, useColorModeValue, Text } from "@chakra-ui/react";

import theme from "../theme.js";

const About = () => {
  const bgGradientColor = useColorModeValue(
    theme.colors.brand.white,
    theme.colors.gray["700"]
  );

  return (
    <section>
      {/* <Flex
        maxW="100%"
        minW="100%"
        w="100%"
        direction={["column", "column", "column", "row"]}
        justify={["flex-start", "flex-start", "space-around"]}
      > */}
      {/* <Flex
        direction="column"
        p={["2rem 2rem 0 2rem", "2rem 2rem 0 2rem", "2rem 2rem 0 2rem", "2rem"]}
      > */}
      <BrandedHeading props={{ p: "0rem 0" }}>About</BrandedHeading>
      <BrandedHeading
        props={{
          color: "red",
          lineHeight: "0.1rem",
          mt: "-1rem",
          mb: "0",
          pb: "1.5rem",
          overflow: "visible",
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
          <BrandedOutlineBtn props={{ color: "blue" }}>
            Resumé
          </BrandedOutlineBtn>
        </Flex>
      </Flex>
      {/* </Flex> */}
      {/* <Flex
        position="relative"
        justify="center"
        minW={["100vw", "100vw", "100vw", "500px"]}
        zIndex="-1"
      >
        <Flex filter="brightness(75%)">
          <Image
            priority={true}
            alt="Tyler at the University of Florida"
            src={gatorPic}
          />
        </Flex>
        <Flex
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg={[
            `linear-gradient(180deg, ${bgGradientColor} 5%, rgba(255,255,255,0) 36%),
            linear-gradient(0deg, ${bgGradientColor} 5%, rgba(255,255,255,0) 20%)`,
            ``,
            ``,
            `linear-gradient(90deg, ${bgGradientColor} 5%, rgba(255,255,255,0) 36%)`,
          ]}
        ></Flex>
      </Flex> */}
      {/* </Flex> */}
    </section>
  );
};

export default About;
