import { Flex, Text, Icon } from "@chakra-ui/react";

import { FiLayers } from "react-icons/fi";

import router from "next/router";

const Logo = ({ props, isNavmenuShowing }) => {
  let animation = "";

  if (isNavmenuShowing) {
    animation = "slideaway";
  } else {
    animation = "slidein";
  }

  return (
    <Flex
      animation={`${animation} 0.3s ease-in-out forwards`}
      align="center"
      userSelect="none"
      cursor="pointer"
      onClick={() => router.push("/")}
      w="80%"
      pl="1rem"
      {...props}
    >
      <Text fontFamily="Limelight, cursive" fontSize="1.5rem" color="inherit">
        tyler.t
      </Text>
    </Flex>
  );
};

export default Logo;
