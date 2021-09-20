import { Flex } from "@chakra-ui/react";
import BrandedButton from "../BrandedButton/BrandedButton";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useState } from "react";
import { useUser } from "../../context/authContext";
import UserMenu from "./UserMenu";

const NavbarControls = () => {
  const [loginDisabled, setLoginDisabled] = useState(false);
  const [signupDisabled, setSignupDisabled] = useState(false);

  const { user } = useUser();

  return (
    // <>
    //   <ThemeSwitch />
    //   {user ? (
    //     <UserMenu />
    //   ) : (
    <Flex align="center" justify="center">
      <ThemeSwitch />
      {user ? (
        <UserMenu />
      ) : (
        <>
          <BrandedButton
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
            props={{ margin: "0px 4px" }}
          >
            Sign Up
          </BrandedButton>
        </>
      )}
    </Flex>
    //   )}
    // </>
  );
};

export default NavbarControls;
