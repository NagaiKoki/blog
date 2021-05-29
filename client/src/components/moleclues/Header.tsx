import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useColorMode } from "@chakra-ui/color-mode";
import { Heading, Switch } from "@chakra-ui/react";

export const Header: React.VFC = () => {
  const { toggleColorMode } = useColorMode();
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
          Koky Blogs
        </Heading>
      </Link>
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
