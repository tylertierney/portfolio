import BrandedHeading from "../BrandedHeading";
import BrandedSubheading from "../BrandedSubheading";
import BrandedParagraph from "../BrandedParagraph";
import BrandedOutlineBtn from "../BrandedOutlineBtn";
import Image from "next/image";
import remoteControlPic from "../public/tv.jpeg";

import { Flex, Text, Button, useColorModeValue, Icon } from "@chakra-ui/react";

import { AiOutlineSafety } from "react-icons/ai";

import { BsArrowRight } from "react-icons/bs";

const WelcomeScreen = () => {
  return (
    <>
      <section className="flexColumn">
        <BrandedHeading>
          Leading the Evolution in Local OTT & CTV Advertising
        </BrandedHeading>
        <BrandedSubheading>
          Full-service solutions in 110+ markets
        </BrandedSubheading>
        <Flex w="100%" mb="2rem">
          <BrandedOutlineBtn props={{ color: "red", mr: "0.8rem" }}>
            Connect With Us
          </BrandedOutlineBtn>
          <BrandedOutlineBtn props={{ color: "blue" }}>
            View Examples
          </BrandedOutlineBtn>
        </Flex>
      </section>
      <Image src={remoteControlPic} />
      <section className="flexColumn" style={{ alignItems: "center" }}>
        <Icon as={AiOutlineSafety} boxSize={28} color="lightgreen" />
        <BrandedHeading props={{ size: "lg", color: "red" }}>
          100% Brand-Safe Inventory
        </BrandedHeading>
        <BrandedParagraph props={{ mb: "1rem", w: "90%", textAlign: "center" }}>
          We deliver your ads in brand-safe, premium content.
        </BrandedParagraph>
        <Text
          userSelect="none"
          cursor="pointer"
          borderBottom="2px solid"
          fontSize="0.9rem"
        >
          <Text as="span">Learn More </Text>
          <Icon as={BsArrowRight} />
        </Text>
      </section>
    </>
  );
};

export default WelcomeScreen;
