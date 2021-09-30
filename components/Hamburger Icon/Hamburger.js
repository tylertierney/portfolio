import hamburgerStyles from "./hamburger.module.css";
import { Box } from "@chakra-ui/react";

const Hamburger = ({ isNavmenuShowing, setNavmenuShowing }) => {
  const toggleNavmenu = () => {
    setNavmenuShowing(!isNavmenuShowing);
  };
  return (
    <Box
      className={
        // isNavmenuShowing ? "hamburgerContainer change" : "hamburgerContainer"
        isNavmenuShowing
          ? `${hamburgerStyles.hamburgerContainer} change`
          : `${hamburgerStyles.hamburgerContainer}`
      }
      onClick={() => toggleNavmenu()}
    >
      <Box className={hamburgerStyles.bar1}></Box>
      <Box className={hamburgerStyles.bar2}></Box>
      <Box className={hamburgerStyles.bar3}></Box>
    </Box>
  );
};

export default Hamburger;
