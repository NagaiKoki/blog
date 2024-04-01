import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/merriweather';

import theme from '@/config/theme';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <div className="Container">
        <Header />
        <Component {...pageProps} />
        <Analytics />
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
  );
};

export default MyApp;
