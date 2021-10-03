import BrandedHeading from "../BrandedHeading";
import BrandedParagraph from "../BrandedParagraph";

import { Flex, Text } from "@chakra-ui/react";
import data from "../../data.js";
import BrandedSubheading from "../BrandedSubheading";
import Project from "./Project";

const Projects = () => {
  return (
    <section>
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
      {data.projects.map((item, index) => {
        return <Project key={index} item={item} />;
      })}
    </section>
  );
};

export default Projects;
