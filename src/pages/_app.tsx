import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import '@fontsource/merriweather';

import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';
import theme from '@/config/theme';

import type { AppProps } from 'next/app';

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
          padding: 2.625rem 1rem;
        }
      `}</style>
    </ChakraProvider>
  );
};

export default MyApp;
