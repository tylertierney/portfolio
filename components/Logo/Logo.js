import { Flex, Text, Icon } from "@chakra-ui/react";

import { FiLayers } from "react-icons/fi";

import router from "next/router";

const Logo = () => {
  return (
    <Flex
      align="center"
      userSelect="none"
      cursor="pointer"
      onClick={() => router.push("/")}
    >
      <Text color="black">LOGO</Text>

      <Icon as={FiLayers} color="black" />
    </Flex>
  );
};

export default Logo;
