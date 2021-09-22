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
      <Text
        // color="black"
        color="inherit"
      >
        LOGO
      </Text>

      <Icon
        as={FiLayers}
        color="inherit"
        // color="black"
      />
    </Flex>
  );
};

export default Logo;
