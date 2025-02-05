import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
} as const;

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Merriweather',
    body: 'Merriweather'
  }
}) as {
  config: typeof config;
  fonts: { heading: string; body: string };
};

export default theme;
