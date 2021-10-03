import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Head from "next/head";
import Footer from "../components/Footer/Footer";

const Index = () => {
  return (
    <>
      <Head>
        <title>Tyler Tierney</title>
        <meta name="description" content="Tyler Tierney Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Home />
        <Navbar />
        <Box
          maxW="100vw"
          overflowX="hidden"
          minH="100vh"
          paddingX={["3", "8", "0", "0"]}
        >
          <Flex direction="column" align="center" justify="center">
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
        </Box>
        <Footer />
      </main>
    </>
  );
};

export default Index;
