import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "components/moleclues/Header";
import { httpLink } from "../src/config/graphql";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

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
            max-width: 42rem;
            padding: 2.625rem 1.3125rem;
          }
        `}</style>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default MyApp;
