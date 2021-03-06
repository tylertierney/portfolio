import "./experienceItem.css";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext/ThemeContext";
import uflogo from "../../images/uflogo.png";

const ExperienceItem = ({ item }) => {
  const { theme } = useContext(ThemeContext);
  const {
    company,
    position,
    location,
    startdate,
    enddate,
    bullets,
    image,
    school,
  } = item;

  const bulletsArray = bullets.map((bullet, index) => {
    if (bullet !== "") {
      return (
        <li key={index} style={{ padding: "0 0 0.8rem 0" }}>
          {bullet}
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <div
      className="experienceItemContainer"
      style={{ borderColor: theme.experienceTimelineBorder, color: theme.text }}
    >
      <div
        style={{
          backgroundColor: theme.blueBackground,
          borderColor: theme.experienceTimelineBorder,
        }}
        className="timelineCircles topTimelineCircle"
      ></div>
      <div
        style={{
          backgroundColor: theme.blueBackground,
          borderColor: theme.experienceTimelineBorder,
        }}
        className="timelineCircles bottomTimelineCircle"
      ></div>
      <span className="dates enddate">{enddate}</span>
      <span className="dates startdate">{startdate}</span>
      {image ? (
        <img
          alt="University of Florida logo"
          className="educationImg"
          src={uflogo}
        ></img>
      ) : (
        <></>
      )}

      <h1 className="position" style={{ color: theme.aboutHeaderUnderline }}>
        {position}
      </h1>
      <div className="companyAndLocation">
        {school === undefined ? (
          <span className="company">{company}</span>
        ) : (
          <span className="company">{school}</span>
        )}
        <span className="bulletPoint">&nbsp;&nbsp;</span>
        <span className="location">
          <i>{location}</i>
        </span>
      </div>
      <ul className="bulletPointList">{bulletsArray}</ul>
    </div>
  );
};

export default ExperienceItem;
