import { Text } from "@chakra-ui/react";

const BrandedParagraph = ({ children, props }) => {
  return (
    <Text fontWeight="light" {...props}>
      {children}
    </Text>
  );
};

export default BrandedParagraph;
