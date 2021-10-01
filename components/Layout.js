import Navbar from "./Navbar/Navbar";
import Head from "next/head";

import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";

const Layout = ({ children }) => {
  // const waves = useColorModeValue("waves", "waves2");

  return (
    <>
      <Head>
        <title>Tyler Tierney</title>
        <meta name="description" content="Tyler Tierney Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ maxWidth: "100vw" }}>
        <Home />
        <Navbar />
        <Box maxW="100vw" minH="100vh" paddingX={["3", "8", "0", "0"]}>
          {children}
        </Box>
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
