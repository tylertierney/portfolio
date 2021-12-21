import Logo from "../Logo/Logo";

import { Flex } from "@chakra-ui/react";
import NavbarControls from "./NavbarControls/NavbarControls";

import { useState } from "react";
import Navmenu from "./Navmenu/Navmenu";

import { useColorModeValue } from "@chakra-ui/react";

const Navbar = ({
  handleScroll,
  projectsRef,
  experienceRef,
  contactRef,
  position,
  top,
}) => {
  const [isNavmenuShowing, setNavmenuShowing] = useState(false);

  const logoColor = useColorModeValue("brand.text.dark", "brand.white");
  const navBgColor = useColorModeValue("brand.white", "#181f27");

  return (
    <Flex
      bgColor={navBgColor}
      color={logoColor}
      align="center"
      justify="space-between"
      w="100%"
      h="7vh"
      pl="1rem"
      pr="1.5rem"
    >
      {isNavmenuShowing ? (
        <Navmenu
          experienceRef={experienceRef}
          contactRef={contactRef}
          projectsRef={projectsRef}
          handleScroll={handleScroll}
          isNavmenuShowing={isNavmenuShowing}
        />
      ) : (
        <Logo isNavmenuShowing={isNavmenuShowing} />
      )}
      <NavbarControls
        isNavmenuShowing={isNavmenuShowing}
        setNavmenuShowing={setNavmenuShowing}
      />
    </Flex>
  );
};

export default Navbar;
