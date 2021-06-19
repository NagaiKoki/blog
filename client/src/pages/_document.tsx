import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "@config/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/kokiBlogFav.png"
          />
        </Head>
        <body>
          <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
