import { Flex } from "@chakra-ui/react";
import BrandedButton from "../BrandedButton/BrandedButton";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useState } from "react";
// import UserMenu from "./UserMenu";
import Hamburger from "../Hamburger Icon/Hamburger";

const NavbarControls = () => {
  const [isNavmenuShowing, setNavmenuShowing] = useState(false);

  return (
    <Flex align="center" justify="center" h="100%">
      <ThemeSwitch />
      <Hamburger
        isNavmenuShowing={isNavmenuShowing}
        setNavmenuShowing={setNavmenuShowing}
      />
      {/* <BrandedButton
        props={{ margin: "0px 4px" }}
        variant="ghost"
        color="none"
        action="link"
        href="/login"
      >
        Log In
      </BrandedButton>
      <BrandedButton
        variant="solid"
        color="primary"
        action="link"
        href="/signup"
        props={{ margin: "0px 4px", maxH: "90%" }}
      >
        Sign Up
      </BrandedButton> */}
    </Flex>
  );
};

export default NavbarControls;
