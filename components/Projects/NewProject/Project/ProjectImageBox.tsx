import React from "react";

import { Box, Flex, Image } from "@chakra-ui/react";

import MobileScreenshots from "./MobileScreenshots";
import { ProjectInterface } from "../NewProject";

export interface ImageBoxProps {
  project: ProjectInterface;
  imageType: string;
}

const ProjectImageBox: React.FC<ImageBoxProps> = ({ project, imageType }) => {
  const determineImage = (imageType: string) => {
    const maxWidth = "90%";

    if (imageType === "featured") {
      return (
        <Image
          alt={project.title}
          src={project.featured_image}
          maxW={maxWidth}
        />
      );
    }
    return <MobileScreenshots project={project} />;
  };

  return (
    <Box w={["100%", "50%", "50%"]}>
      <Flex
        h="100%"
        justify="center"
        align="center"
        direction="column"
        p="1rem"
        bgColor={project.color}
      >
        {determineImage(imageType)}
      </Flex>
    </Box>
  );
};

export default ProjectImageBox;
