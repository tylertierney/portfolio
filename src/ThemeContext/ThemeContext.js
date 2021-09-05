import React from "react";
import "./colors.css";

export const themes = {
  light: {
    text: "#463F3A",
    blueBackground: "#c2e2fe",
    navbarBackground: "#646A7D",
    themeBtnPosition: "10%",
    headshotBoxShadow: "0px 0px 20px 1px rgba(135, 206, 250, 0.841)",
    // aboutSectionBackground: "#ffd2be",
    aboutSectionBackground:
      "linear-gradient( rgba(255,210,190,1) 0%, rgba(255,167,128,1) 100%)",
    aboutHeaderUnderline: "#3781c3",
    experienceBackground: "#78baf6",
    positionTextColor: "#3781c3",
    experienceTimelineBorder: "#3781c3",
  },

  dark: {
    text: "rgba(245, 245, 245, 0.80)",
    blueBackground: "#204b70",
    navbarBackground: "#3781c3",
    themeBtnPosition: "50%",
    headshotBoxShadow: "0px 0px 20px 1px rgba(77, 184, 251, 0.2)",
    aboutSectionBackground: "#646A7D",
    aboutHeaderUnderline: "rgba(255,210,190,1)",
    experienceBackground: "#78baf6",
    positionTextColor: "#ff783a",
    experienceTimelineBorder: "#c2e2fe",
  },
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
