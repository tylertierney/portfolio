import "./navbar.css";
import Logo from "./Logo/Logo";
import ThemeContext from "../ThemeContext/ThemeContext";
import { useContext, useState } from "react";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";
import Hamburger from "./Hamburger Icon/Hamburger";
import Navmenu from "./Navmenu/Navmenu";

const Navbar = ({ handleScroll }) => {
  const { theme } = useContext(ThemeContext);

  const [isNavmenuShowing, setNavmenuShowing] = useState(false);

  return (
    <nav
      style={{ backgroundColor: theme.navbarBackground }}
      className="navbarContainer"
    >
      <div
        className={
          isNavmenuShowing
            ? "logoAndThemeSwitch slideaway"
            : "logoAndThemeSwitch slidein"
        }
      >
        <Logo />
        <ThemeSwitch />
      </div>
      <div
        className={
          isNavmenuShowing
            ? "navmenuContainer slidein"
            : "navmenuContainer slideaway"
        }
      >
        <Navmenu handleScroll={handleScroll} />
      </div>
      <Hamburger
        isNavmenuShowing={isNavmenuShowing}
        setNavmenuShowing={setNavmenuShowing}
      />
    </nav>
  );
};

export default Navbar;
