import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Dark Theme Toggle"
      name="Dark Theme Toggle"
      icon={
        colorMode === "light" ? (
          <MoonIcon color="inherit" />
        ) : (
          <SunIcon color="inherit" />
        )
      }
      display="flex"
      alignItems="center"
      onClick={toggleColorMode}
      variant="unstyled"
      _focus={{ outline: "none" }}
    />
  );
};

export default ThemeSwitch;
