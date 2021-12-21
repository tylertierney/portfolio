import { useColorModeValue } from "@chakra-ui/react";

import theme from "../../theme";

const Hamburger = ({ isNavmenuShowing, setNavmenuShowing }) => {
  const toggleNavmenu = () => {
    setNavmenuShowing(!isNavmenuShowing);
  };

  // const hamburgerColor = theme.colors.brand.text.dark;

  const hamburgerColor = useColorModeValue(
    theme.colors.brand.text.dark,
    theme.colors.brand.white
  );

  return (
    <div
      className={
        isNavmenuShowing ? "hamburgerContainer change" : "hamburgerContainer"
      }
      onClick={() => toggleNavmenu()}
    >
      <div className="bar1" style={{ backgroundColor: hamburgerColor }}></div>
      <div className="bar2" style={{ backgroundColor: hamburgerColor }}></div>
      <div className="bar3" style={{ backgroundColor: hamburgerColor }}></div>
    </div>
  );
};

export default Hamburger;
