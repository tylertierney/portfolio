import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/theme";
import smoothscroll from "smoothscroll-polyfill";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window) {
      smoothscroll.polyfill();
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
