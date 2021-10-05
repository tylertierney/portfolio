import Logo from "../Logo/Logo";

import { Flex } from "@chakra-ui/react";
import NavbarControls from "./NavbarControls/NavbarControls";

import { useState } from "react";
import Navmenu from "./Navmenu/Navmenu";

const Navbar = ({
  handleScroll,
  projectsRef,
  experienceRef,
  contactRef,
  position,
  top,
}) => {
  const [isNavmenuShowing, setNavmenuShowing] = useState(false);

  return (
    <Flex
      bgColor="brand.white"
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
        <Logo
          props={{ color: "brand.text.dark" }}
          isNavmenuShowing={isNavmenuShowing}
        />
      )}
      <NavbarControls
        // props={{ border: "solid red 1px" }}
        isNavmenuShowing={isNavmenuShowing}
        setNavmenuShowing={setNavmenuShowing}
      />
    </Flex>
    // </nav>
  );
};

export default Navbar;
