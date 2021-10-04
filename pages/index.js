import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import { useRef } from "react";

const Index = () => {
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    const refHeight = ref.current.offsetTop;

    window.scrollTo({
      top: refHeight - 75,
      left: 0,
      behavior: "smooth",
    });
  };

  if (window) {
    console.log(window.scrollY);
  }

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
        <Navbar
          handleScroll={handleScroll}
          experienceRef={experienceRef}
          contactRef={contactRef}
          projectsRef={projectsRef}
        />
        <Flex w="100%" align="center" direction="column">
          <Flex
            w="100vw"
            maxW={["100vw", "1200px"]}
            direction="column"
            align="flex-start"
            pt="2rem"
            paddingX="1rem"
          >
            {/* <Box border="solid green 1px" paddingY="2rem"> */}
            <About />
            <section ref={projectsRef}>
              <Projects />
            </section>
            <section ref={contactRef}>
              <Contact />
            </section>
            {/* </Box> */}
          </Flex>
          <Footer />
        </Flex>
        {/* </Box> */}
      </main>
    </>
  );
};

export default Index;
