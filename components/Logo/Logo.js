import { Flex, Text, Icon } from "@chakra-ui/react";

import { FiLayers } from "react-icons/fi";

import router from "next/router";

const Logo = ({ props }) => {
  return (
    <Flex
      align="center"
      userSelect="none"
      cursor="pointer"
      onClick={() => router.push("/")}
      {...props}
    >
      <Text fontFamily="Limelight, cursive" fontSize="1.5rem" color="inherit">
        tyler.t
      </Text>

      {/* <Icon as={FiLayers} color="inherit" /> */}
    </Flex>
  );
};

export default Logo;
