import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/merriweather";

import theme from "@config/theme";
import { Header } from "@components/moleclues/Header";
import { Footer } from "@components/moleclues/Footer";
import { AuthProvider } from "../context/authProvider";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default MyApp;
