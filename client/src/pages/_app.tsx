import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "next-auth/client";
import "styles/global.css";
import "@fontsource/merriweather";

import theme from "../config/theme";
import { Header } from "components/moleclues/Header";
import { Footer } from "components/moleclues/Footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
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
    </Provider>
  );
};

export default MyApp;
