import { Icon, Button, Text, Flex } from "@chakra-ui/react";

import BrandedHeading from "./BrandedHeading";
import BrandedParagraph from "./BrandedParagraph";

import { AiOutlineSafety } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GoGraph } from "react-icons/go";

const ProductFeature = ({ icon, paragraph, title }) => {
  let selectedIcon;
  switch (icon) {
    case "AiOutlineSafety":
      selectedIcon = AiOutlineSafety;
      break;
    case "HiOutlineUserGroup":
      selectedIcon = HiOutlineUserGroup;
      break;
    case "GoGraph":
      selectedIcon = GoGraph;
      break;
    default:
      selectedIcon = AiOutlineSafety;
  }

  return (
    <Flex direction="column" align="center" mb="3rem">
      <Icon as={selectedIcon} boxSize={24} color="lightgreen" mb="1.2rem" />
      <BrandedHeading props={{ size: "lg", color: "red", textAlign: "center" }}>
        {title}
      </BrandedHeading>
      <BrandedParagraph props={{ mb: "1rem", w: "90%", textAlign: "center" }}>
        {paragraph}
      </BrandedParagraph>
      <Button
        _focus={{ opacity: "0.5" }}
        _hover={{ opacity: "0.5" }}
        variant="unstyled"
      >
        <Text
          userSelect="none"
          cursor="pointer"
          borderBottom="2px solid"
          fontSize="0.9rem"
        >
          <Text as="span">Learn More </Text>
          <Icon as={BsArrowRight} />
        </Text>
      </Button>
    </Flex>
  );
};

export default ProductFeature;
