import "../styles/globals.css";
import AuthContextProvider from "../context/authContext";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import theme from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
