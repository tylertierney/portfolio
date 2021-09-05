import { useContext } from "react";
import ThemeContext from "../ThemeContext/ThemeContext";
import "./projects.css";
import ProjectItem from "./ProjectItem/ProjectItem";
import data from "../data";
import { VStack } from "@chakra-ui/react";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const projectItemsArray = data.projects.map((item, index) => {
    const {
      title,
      description,
      hostedsite,
      github,
      desktop_screenshot,
      mobile_screenshot,
      mobile_screenshot2,
      tech_stack,
    } = item;
    return (
      <ProjectItem
        key={index}
        title={title}
        description={description}
        hostedsite={hostedsite}
        github={github}
        desktop_screenshot={desktop_screenshot}
        mobile_screenshot={mobile_screenshot}
        mobile_screenshot2={mobile_screenshot2}
        tech_stack={tech_stack}
      />
    );
  });

  return (
    <section
      className="projectsContainer"
      style={{
        background: theme.aboutSectionBackground,
        borderColor: theme.aboutHeaderUnderline,
        color: theme.text,
        borderBottom: `3px solid ${theme.aboutHeaderUnderline}`,
        borderTop: `3px solid ${theme.aboutHeaderUnderline}`,
        padding: "0px 0 40px 0",
      }}
    >
      <header className="projectsHeader">
        <span
          className="projectsHeader"
          style={{ color: theme.text, borderColor: theme.aboutHeaderUnderline }}
        >
          projects
        </span>
      </header>
      <VStack>{projectItemsArray}</VStack>
    </section>
  );
};

export default Projects;
