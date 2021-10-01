import { Heading, useColorModeValue } from "@chakra-ui/react";

const BrandedSubheading = ({ children, props }) => {
  return (
    <Heading
      mb="0.9rem"
      size="lg"
      color={useColorModeValue("gray.500", "brand.text.light")}
      p="0.3rem"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default BrandedSubheading;
