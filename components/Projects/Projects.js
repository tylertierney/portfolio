import BrandedHeading from "../BrandedHeading";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import data from "../../data.js";

import NewProject from "./NewProject/NewProject";
import { SmallProjectCard } from "@tylertierney/smallprojectcard";

import { useState } from "react";

const Projects = () => {
  const getProjectsArray = (projectsArray) => {
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

  const isDark = useColorModeValue(false, true);

  const getSmallProjectsArray = (projects) => {
    return projects.map((project, index) => {
      return (
        <Flex margin="1rem" key={index}>
          <SmallProjectCard project={project} isDarkMode={isDark} />
        </Flex>
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
      {getProjectsArray(data.projects)}
      <Flex
        direction={["column", "column", "row"]}
        justify="center"
        align="center"
      >
        {getSmallProjectsArray(data.smallProjects)}
      </Flex>
    </>
  );
};

export default Projects;
