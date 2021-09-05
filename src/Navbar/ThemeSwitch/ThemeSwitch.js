// import { StyledThemeBtn, StyledThemeTrack } from "./StyledComponents";
// import { useState } from "react";
import "./themeSwitch.css";
import ThemeContext, { themes } from "../../ThemeContext/ThemeContext";
import { Brightness3, WbSunny } from "@material-ui/icons";
import { useContext } from "react";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  let themeicon;
  if (theme === themes.light) {
    themeicon = <WbSunny style={{ fontSize: 14 }} />;
  } else {
    themeicon = <Brightness3 style={{ fontSize: 14 }} />;
  }

  return (
    <div className="themeSwitch" onClick={toggleTheme}>
      <div
        className="themeTrack"
        style={{ backgroundColor: theme.blueBackground }}
      ></div>
      <button
        aria-label="Light theme, dark theme button"
        className="themeBtn"
        style={{ left: theme.themeBtnPosition }}
      >
        <div className="themeIcon">{themeicon}</div>
      </button>
    </div>
  );
};

export default ThemeSwitch;
