import hamburgerStyles from "./hamburger.module.css";
import { Box } from "@chakra-ui/react";

const Hamburger = ({ isNavmenuShowing, setNavmenuShowing }) => {
  console.log(isNavmenuShowing);
  return (
    <Box
      className={
        isNavmenuShowing ? `hamburgerContainer change` : `hamburgerContainer`
      }
      onClick={() => setNavmenuShowing(!isNavmenuShowing)}
    >
      <Box backgroundColor="brand.text.dark" className="bar1"></Box>
      <Box backgroundColor="brand.text.dark" className="bar2"></Box>
      <Box backgroundColor="brand.text.dark" className="bar3"></Box>
    </Box>
  );
};

export default Hamburger;
