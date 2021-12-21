import { Flex, Text } from "@chakra-ui/react";

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
      w="80%"
      pl="1rem"
    >
      <Text
        cursor="pointer"
        onClick={() => router.push("/")}
        fontFamily="Limelight, cursive"
        fontSize="1.5rem"
        color="inherit"
      >
        tyler.t
      </Text>
    </Flex>
  );
};

export default Logo;
