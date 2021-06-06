import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "components/moleclues/Header";
import { client } from "../config/graphql";
import "styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <div className="Container">
          <Header />
          <Component {...pageProps} />
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
