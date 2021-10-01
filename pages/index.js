import Link from "next/link";

import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import { Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <div>
      <main>
        <Flex direction="column" align="center" justify="center">
          {/* <WelcomeScreen /> */}
          <Flex
            maxW="100%"
            minW="100%"
            w="100%"
            direction={["column", "column", "column", "row"]}
            justify={["flex-start", "flex-start", "space-around"]}
          >
            <Flex
              direction="column"
              p={[
                "2rem 2rem 0 2rem",
                "2rem 2rem 0 2rem",
                "2rem 2rem 0 2rem",
                "2rem",
              ]}
            >
              <About />
              <Projects />
            </Flex>
          </Flex>
          <br />
        </Flex>
      </main>
    </div>
  );
};

export default Index;
