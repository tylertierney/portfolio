import BrandedHeading from "../BrandedHeading";
import BrandedParagraph from "../BrandedParagraph";

import { Flex, Text } from "@chakra-ui/react";
import data from "../../data.js";
import BrandedSubheading from "../BrandedSubheading";
import Project from "./Project";

import NewProject from "./NewProject/NewProject";

const Projects = () => {
  const getProjectsArray = (projectsArray) => {
    let isSmallScreen = false;

    // if (typeof window != "undefined") {
    //   isSmallScreen = window.innerWidth < 500;
    // }

    if (isSmallScreen) {
      return projectsArray.map((project, index) => {
        return (
          <NewProject
            key={index}
            project={project}
            orientation="infoFirst"
            imageType={
              project.title === "MovieWorm" || project.title === "LinkBase"
                ? "featured"
                : "mobileScreenshots"
            }
          />
        );
      });
    }

    return projectsArray.map((project, index) => {
      let orientation = "infoFirst";
      if (index % 2 === 1) {
        orientation = "imageFirst";
      }

      if (project.title === "MovieWorm" || project.title === "LinkBase") {
        return (
          <NewProject
            key={index}
            project={project}
            orientation={orientation}
            imageType="featured"
          />
        );
      }
      return (
        <NewProject
          key={index}
          project={project}
          orientation={orientation}
          imageType="mobileScreenshots"
        />
      );
    });
  };

  return (
    <>
      <BrandedHeading props={{ p: "0rem 0", pb: "0.1rem" }}>
        Projects
      </BrandedHeading>
      <BrandedHeading
        props={{
          color: "red",
          lineHeight: "0.1rem",
          mt: "-1rem",
          mb: "0",
          pb: "1.5rem",
          overflow: "visible",
        }}
      >
        ...
      </BrandedHeading>
      {/* {data.projects.map((item, index) => {
        return <Project key={index} item={item} />;
      })} */}
      {getProjectsArray(data.projects)}
    </>
  );
};

export default Projects;
