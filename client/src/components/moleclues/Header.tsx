import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Heading, Switch } from "@chakra-ui/react";

export const Header: React.VFC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <header>
      <Heading
        as="h1"
        size="xl"
        fontWeight="extrabold"
        colorScheme="whiteAlpha"
        fontFamily="heading"
      >
        Koky Blogs
      </Heading>
      <Switch size="lg" onChange={toggleColorMode} colorScheme="yellow" />
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
