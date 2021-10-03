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

  // const handleScroll = {
  //   projects: () => {
  //     const refHeight = projectsRef.current.offsetTop;

  //       window.document.body.scrollTo({
  //         top: refHeight - 75,
  //         left: 0,
  //         behavior: "smooth",
  //       })

  //   },
  // };

  const handleScroll = (ref) => {
    const refHeight = ref.current.offsetTop;
    console.log(ref);
    // window.document.body.scrollTo({
    //   top: refHeight - 75,
    //   left: 0,
    //   behavior: "smooth",
    // });
    window.document.body.scrollTo(0, 1000);
    console.log(window);
  };

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

        <Box maxW="100vw" overflowX="hidden" paddingX={["3", "8", "0", "0"]}>
          <Flex
            // border="solid blue 1px"
            direction="column"
            align="center"
            justify="center"
          >
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
                <div ref={projectsRef}>
                  <Projects />
                </div>
                <div ref={contactRef}>
                  <Contact />
                </div>
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
