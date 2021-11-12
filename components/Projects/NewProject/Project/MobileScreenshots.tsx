import React from "react";

import { Flex, Image } from "@chakra-ui/react";
import { ProjectInterface } from "../NewProject";

interface Props {
  project: ProjectInterface;
}

const MobileScreenshots: React.FC<Props> = ({ project }) => {
  const boxShadow = "14px 14px 24px 1px rgb(0, 0, 0, 0.2)";
  const borderRadius = "10px";

  return (
    <Flex justify="space-around" align="center" w="100%" mb="2rem" maxW="400px">
      <Flex
        w="30%"
        overflow="hidden"
        boxShadow={boxShadow}
        borderRadius={borderRadius}
        mt="8%"
      >
        <Image
          alt={`${project.title} screenshot`}
          src={project.mobile_screenshot}
        />
      </Flex>
      <Flex
        overflow="hidden"
        w="30%"
        boxShadow={boxShadow}
        borderRadius={borderRadius}
        mt="4%"
      >
        <Image
          alt={`${project.title} screenshot`}
          src={project.mobile_screenshot2}
        />
      </Flex>
      <Flex
        overflow="hidden"
        w="30%"
        boxShadow={boxShadow}
        borderRadius={borderRadius}
      >
        <Image
          alt={`${project.title} screenshot`}
          src={project.mobile_screenshot3}
        />
      </Flex>
    </Flex>
  );
};

export default MobileScreenshots;
