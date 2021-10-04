import { useColorModeValue } from "@chakra-ui/react";

import theme from "../../theme";

const Hamburger = ({ isNavmenuShowing, setNavmenuShowing }) => {
  const toggleNavmenu = () => {
    setNavmenuShowing(!isNavmenuShowing);
  };

  const hamburgerColor = theme.colors.brand.text.dark;

  return (
    <div
      className={
        isNavmenuShowing ? "hamburgerContainer change" : "hamburgerContainer"
      }
      onClick={() => toggleNavmenu()}
      // style={{ backgroundColor: "green" }}
    >
      <div className="bar1" style={{ backgroundColor: hamburgerColor }}></div>
      <div className="bar2" style={{ backgroundColor: hamburgerColor }}></div>
      <div className="bar3" style={{ backgroundColor: hamburgerColor }}></div>
    </div>
  );
};

export default Hamburger;
