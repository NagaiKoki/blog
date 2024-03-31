import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundary } from '@sentry/nextjs';
import '@fontsource/merriweather';

import theme from '@/config/theme';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <div className="Container">
        <Header />
        <ErrorBoundary fallback={<p>sorry... something went wrong 🤑</p>}>
          <Component {...pageProps} />
        </ErrorBoundary>
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
