import "./about.css";
import { useContext } from "react";
import ThemeContext from "../ThemeContext/ThemeContext";
import gatorpic from "../images/gatorpic.jpg";
import { Text, VStack } from "@chakra-ui/react";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className="aboutContainer"
      style={{ background: theme.aboutSectionBackground }}
    >
      <header className="aboutHeader">
        <span
          className="aboutHeader"
          style={{ color: theme.text, borderColor: theme.aboutHeaderUnderline }}
        >
          about me
        </span>
      </header>
      <VStack fontSize="1.2rem" spacing={4}>
        <Text className="aboutParagraphs" style={{ color: theme.text }}>
          I am a graduate of the University of Florida with a Bachelor's Degree
          in Media Management (f.k.a. Telecommunications Management). Upon
          graduation, I worked for Tegna at First Coast News in Jacksonville,
          Fl. I began my experience in the marketing world as a Sales Intern,
          then as a National Sales Assistant, then as an Account Executive.
        </Text>
        <Text className="aboutParagraphs" style={{ color: theme.text }}>
          In mid-2020 I discovered an opportunity to take on more responsibility
          in a new role. One where I'd be able to apply forward-thinking
          strategies and advise on managerial decisions within a sales
          environment at a growing company - Avocat Group. At AG, I was
          fortunate enough to serve as a trusted advisor to businesses
          navigating complex real estate challenges during a period of
          significant global change.
          {/* At Avocat, we are disrupting the
        traditional CRE model by providing data-driven solutions and
        consultative oversight of projects from start-to-finish. */}
        </Text>
        {/* <p className="aboutParagraphs" style={{ color: theme.text }}>
        It comes as no surprise that recent global events have shifted the needs
        of corporate real estate across all verticals. Thus, it has been
        uniquely exciting to serve as a trusted advisor to those firms seeking
        guidance in a rapidly-changing business environment.
      </p> */}
        <Text className="aboutParagraphs" style={{ color: theme.text }}>
          In early 2021 I decided to pursue a growing interest of mine - web
          development.
        </Text>
        <Text className="aboutParagraphs" style={{ color: theme.text }}>
          I advanced quickly through the early stages of Javascript/HTML/CSS,
          building upon the fundamentals of programming in Java, which I had
          explored years prior. My simple websites started to become full-stack
          projects as I learned how to build REST APIs and integrate database
          operations within a Node JS environment. Nowadays, each of my projects
          is built on a MERN stack, but I've begun using Next JS for greater
          control over page rendering behavior.
        </Text>
        <div>
          <img
            src={gatorpic}
            style={{ height: "200px", width: "auto" }}
            className="gatorPic"
          ></img>
        </div>
      </VStack>
    </section>
  );
};

export default About;
