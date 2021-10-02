import { Flex, Text, Icon, Box } from "@chakra-ui/react";
import BrandedSubheading from "../BrandedSubheading";
import BrandedParagraph from "../BrandedParagraph";
import linkbase_phone from "../../public/images/linkbase_phone.png";
import linkbase_phone2 from "../../public/images/linkbase_phone2.png";

import Image from "next/image";

import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {
  SiMongodb,
  SiNextDotJs,
  SiNetlify,
  SiHeroku,
  SiFirebase,
} from "react-icons/si";

const icons = {
  FaReact,
  FaNodeJs,
  FaAws,
  BsLightningFill,
  SiMongodb,
  SiNextDotJs,
  SiNetlify,
  AiOutlineMail,
  SiHeroku,
  SiFirebase,
};

const Project = ({ item, index }) => {
  return (
    <Flex
      maxW="100%"
      minW="100%"
      w="100%"
      direction={["column", "column", "column", "row"]}
      justify={["flex-start", "flex-start", "space-around"]}
    >
      <Flex direction="column">
        <BrandedSubheading props={{ p: "0" }}>{item.title}</BrandedSubheading>
        <BrandedParagraph
          props={{
            fontWeight: "200",
            mt: "0",
            mb: "1rem",
            fontSize: "1rem",
          }}
        >
          {item.description}
        </BrandedParagraph>
        <Flex>
          {item.tech_stack.map((icon) => {
            return <Icon as={icons[icon.icon]} fontSize="2rem" mr="0.4rem" />;
          })}
        </Flex>
      </Flex>
      <Box>
        <Flex maxW="240px" position="relative" className="linkbaseIphoneRender">
          <Image
            src={linkbase_phone}
            placeholder="blur"
            layout="intrinsic"
            className="linkbaseIphoneRender"
          />
        </Flex>
        <Flex
          maxW="500px"
          minW="200px"
          position="relative"
          className="linkbaseIphoneRender"
        >
          <Image
            src={linkbase_phone2}
            placeholder="blur"
            layout="intrinsic"
            className="linkbaseIphoneRender"
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Project;
