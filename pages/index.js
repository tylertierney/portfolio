import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import { useRef, useEffect, useState } from "react";

const Index = () => {
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const navRef = useRef(null);
  const replaceNav = useRef(null);

  const handleScroll = (ref) => {
    const refHeight = ref.current.offsetTop;

    window.scrollTo({
      top: refHeight - 75,
      left: 0,
      behavior: "smooth",
    });
  };

  const fixNavbar = () => {
    navRef.current.style.position = "fixed";
    navRef.current.style.top = "0vh";
    replaceNav.current.style.display = "block";
  };

  const unfixNavbar = () => {
    navRef.current.style.position = "relative";
    navRef.current.style.top = "";
    replaceNav.current.style.display = "none";
  };

  useEffect(() => {
    const initialTop = navRef.current.offsetTop;
    window.addEventListener("scroll", () => {
      if (window.scrollY > initialTop) {
        fixNavbar();
      } else {
        unfixNavbar();
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Tyler Tierney</title>
        <meta name="description" content="Tyler Tierney Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main onScroll={() => console.log("scrolling")}>
        <Home />
        <nav
          ref={navRef}
          style={{
            boxShadow: "0px 0px 20px 1px rgb(0, 0, 0, 0.3)",
            position: "relative",
            maxWidth: "100vw",
            top: "0vh",
            zIndex: 2,
            width: "100vw",
          }}
        >
          <Navbar
            handleScroll={handleScroll}
            experienceRef={experienceRef}
            contactRef={contactRef}
            projectsRef={projectsRef}
          />
        </nav>
        <div ref={replaceNav} style={{ height: "7vh", display: "none" }}></div>
        <Flex w="100%" align="center" direction="column">
          <Flex
            w="100vw"
            maxW={["100vw", "800px", "1000px", "1200px"]}
            direction="column"
            align={["flex-start", "center"]}
            pt="2rem"
            paddingX={["1rem", "2rem", "2rem", "2rem"]}
          >
            <section style={{ width: "100%" }}>
              <About />
            </section>
            <section style={{ width: "100%" }} ref={projectsRef}>
              <Projects />
            </section>
            <section style={{ width: "100%" }} ref={contactRef}>
              <Contact />
            </section>
          </Flex>
          <Footer />
        </Flex>
      </main>
    </>
  );
};

// meaningless change for deployment

export default Index;
