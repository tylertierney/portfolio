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
    degree,
  } = item;

  const bulletsArray = bullets.map((bullet) => {
    if (bullet !== "") {
      return <li style={{ padding: "0 0 0.8rem 0" }}>{bullet}</li>;
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
      {image ? <img className="educationImg" src={uflogo}></img> : <></>}

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
      {/* {degree ? <span className="company">{degree}</span> : <></>} */}
      <ul className="bulletPointList">{bulletsArray}</ul>
    </div>
  );
};

export default ExperienceItem;
