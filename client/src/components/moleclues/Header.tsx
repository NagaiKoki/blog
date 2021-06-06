import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useColorMode } from "@chakra-ui/color-mode";
import { Heading, Switch } from "@chakra-ui/react";

import { TITLE } from "../../constants/title";

export const Header: React.VFC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { pathname } = useRouter();

  return (
    <header>
      <Link href="/">
        <Heading
          as="h1"
          size={pathname === "/posts/[id]" ? "lg" : "xl"}
          fontWeight="extrabold"
          colorScheme="whiteAlpha"
          fontFamily="heading"
          style={{ cursor: "pointer" }}
          className="Koky__Header"
        >
          {TITLE}
        </Heading>
      </Link>
      <Switch
        size="lg"
        onChange={toggleColorMode}
        colorScheme="yellow"
        title="dd"
        display="flex"
        alignItems="center"
      >
        <Heading as="span" size="lg" paddingLeft="5px">
          {colorMode === "dark" ? "🌘" : "🌞"}
        </Heading>
      </Switch>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </header>
  );
};
