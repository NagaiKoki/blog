import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Heading, Switch } from "@chakra-ui/react";

export const Header: React.VFC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <header>
      <Heading as="h1" size="xl" colorScheme="whiteAlpha">
        Koky Articles
      </Heading>
      <Switch size="lg" onChange={toggleColorMode} />
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
