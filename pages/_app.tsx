import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "components/moleclues/Header";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
};

export default MyApp;
