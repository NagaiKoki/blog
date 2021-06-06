import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import "styles/global.css";
import "@fontsource/merriweather";

import { client } from "../config/graphql";
import theme from "../config/theme";
import { Header } from "components/moleclues/Header";
import { Footer } from "components/moleclues/Footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <div className="Container">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
        <style jsx>{`
          .Container {
            margin-right: auto;
            margin-left: auto;
            max-width: 45rem;
            padding: 2.625rem 1.3125rem;
          }
        `}</style>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default MyApp;
