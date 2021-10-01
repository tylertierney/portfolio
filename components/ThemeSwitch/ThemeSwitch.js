import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={
        colorMode === "light" ? (
          <MoonIcon color="brand.text.dark" />
        ) : (
          <SunIcon color="brand.text.dark" />
        )
      }
      display="flex"
      alignItems="center"
      onClick={toggleColorMode}
      color="black"
      variant="unstyled"
      _focus={{ outline: "none" }}
    />
  );
};

export default ThemeSwitch;
