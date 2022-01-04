import { Flex, useColorModeValue, Heading } from "@chakra-ui/react";
import data from "../../data.js";

import NewProject from "./NewProject/NewProject";
import { SmallProjectCard } from "@tylertierney/smallprojectcard";

const Projects = () => {
  const getProjectsArray = (projectsArray) => {
    return projectsArray.map((project, index) => {
      let orientation = "infoFirst";
      if (index % 2 === 1) {
        orientation = "imageFirst";
      }

      if (
        project.title === "MovieWorm" ||
        project.title === "LinkBase" ||
        project.title === "Custom Homepage"
      ) {
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
        <Flex padding={["1rem 0rem", "1rem 0rem", "1rem"]} key={index}>
          <SmallProjectCard project={project} isDarkMode={isDark} />
        </Flex>
      );
    });
  };

  return (
    <>
      <Flex direction="column" width="100%">
        <Heading size="2xl">Projects</Heading>
        <Heading size="2xl" className="sectionHeaderDots" color="red.400">
          ...
        </Heading>
      </Flex>
      {getProjectsArray(data.projects)}
      <Flex
        direction={["column", "column", "row"]}
        justify="center"
        align="center"
        wrap="wrap"
      >
        {getSmallProjectsArray(data.smallProjects)}
      </Flex>
    </>
  );
};

export default Projects;
