import "./experience.css";
import { useContext } from "react";
import ThemeContext from "../ThemeContext/ThemeContext";
import data from "../data";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  const experienceItemArray = data.experienceItems.map((item) => {
    return <ExperienceItem item={item} />;
  });

  const educationItemArray = data.educationItems.map((item) => {
    return <ExperienceItem item={item} />;
  });

  return (
    <section
      className="experienceContainer"
      style={{
        backgroundColor: theme.blueBackground,
        borderColor: theme.aboutHeaderUnderline,
      }}
    >
      <div
        className="contactCTAborder"
        style={{ backgroundColor: theme.aboutHeaderUnderline }}
      >
        &nbsp;
      </div>
      <button
        className="contactCTA"
        style={{
          backgroundColor: theme.navbarBackground,
          borderColor: theme.aboutHeaderUnderline,
          color: "rgba(245, 245, 245, 0.80)",
        }}
      >
        Get In Touch
      </button>
      <header className="experienceHeader">
        <span
          className="experienceHeader"
          style={{ color: theme.text, borderColor: theme.aboutHeaderUnderline }}
        >
          experience
        </span>
      </header>
      <div className="experienceItemsContainer">{experienceItemArray}</div>
      <header className="experienceHeader">
        <span
          className="experienceHeader"
          style={{ color: theme.text, borderColor: theme.aboutHeaderUnderline }}
        >
          education
        </span>
      </header>
      <div className="experienceItemsContainer">{educationItemArray}</div>
    </section>
  );
};

export default Experience;
