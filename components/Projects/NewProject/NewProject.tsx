import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

import ProjectInfoBox from "./Project/ProjectInfoBox";

import ProjectImageBox from "./Project/ProjectImageBox";

export interface ProjectInterface {
  title: string;
  description: string;
  hostedsite: string;
  github: string;
  desktop_screenshot: string | undefined;
  mobile_screenshot: string | undefined;
  mobile_screenshot2: string | undefined;
  mobile_screenshot3: string | undefined;
  featured_image: string | undefined;
  local_url: string | undefined;
  tech_stack: Array<any>;
  color: string;
}

export interface ProjectProps {
  /**
   * Project object has 12 properties: title (string), description (string), hostedsite (url), github (url),
   * desktop_screenshot (url), mobile_screenshot (url), mobile_screenshot2 (url), mobile_screenshot3 (url),
   * featured_image (url), local_url, tech_stack (array), and color (string)
   */
  project: ProjectInterface;
  orientation: string;
  imageType: string;
  props?: any;
}

const Project: React.FC<ProjectProps> = ({
  project,
  orientation,
  imageType,
  props,
}) => {
  return (
    <Flex
      h="fit-content"
      maxW="1000px"
      minW="340px"
      borderRadius="20px"
      boxShadow="0px 0px 20px 0px rgb(0, 0, 0, 0.2)"
      overflow="hidden"
      direction={["column", "row", "row"]}
      filter="brightness(96%)"
      transition="0.3s ease-in-out"
      _hover={{ filter: "brightness(100%)" }}
      marginY="2rem"
      {...props}
      // outline={useColorModeValue("none", "3px solid white")}
      border={useColorModeValue("none", "3px solid white")}
    >
      {orientation === "infoFirst" ? (
        <>
          <ProjectInfoBox project={project} />
          <ProjectImageBox project={project} imageType={imageType} />
        </>
      ) : (
        <>
          <ProjectImageBox project={project} imageType={imageType} />
          <ProjectInfoBox project={project} />
        </>
      )}
    </Flex>
  );
};

export default Project;
