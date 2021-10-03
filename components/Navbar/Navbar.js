import Logo from "../Logo/Logo";

import { Flex } from "@chakra-ui/react";
import NavbarControls from "../NavbarControls/NavbarControls";

import { useState } from "react";
import Navmenu from "./Navmenu/Navmenu";

const Navbar = ({ handleScroll, projectsRef, experienceRef, contactRef }) => {
  const [isNavmenuShowing, setNavmenuShowing] = useState(false);

  return (
    <nav
      style={{
        boxShadow: "0px 0px 20px 1px rgb(0, 0, 0, 0.3)",
        position: "sticky",
        position: "-webkit-sticky",
        maxWidth: "100vw",
        top: "0vh",
        zIndex: 1000,
      }}
    >
      <Flex
        bgColor="brand.white"
        align="center"
        justify="space-between"
        w="100%"
        h="7vh"
        paddingX="1rem"
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
    </nav>
  );
};

export default Navbar;
