import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "components/moleclues/Header";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <div className="Container">
        <Header />
        <Component {...pageProps} />
      </div>
      <style jsx>{`
        .Container {
          margin-right: auto;
          margin-left: auto;
          max-width: 42rem;
          padding: 2.625rem 1.3125rem;
        }
      `}</style>
    </ChakraProvider>
  );
};

export default MyApp;
