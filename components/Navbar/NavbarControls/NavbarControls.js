import { Flex } from "@chakra-ui/react";
import ThemeSwitch from "../../ThemeSwitch/ThemeSwitch";
import Hamburger from "../HamburgerIcon/Hamburger";

const NavbarControls = ({ isNavmenuShowing, setNavmenuShowing, props }) => {
  return (
    <Flex
      align="center"
      justify="space-around"
      h="100%"
      w="20%"
      maxW="100px"
      {...props}
    >
      <ThemeSwitch />
      <Hamburger
        isNavmenuShowing={isNavmenuShowing}
        setNavmenuShowing={setNavmenuShowing}
      />
    </Flex>
  );
};

export default NavbarControls;
