import React from "react";
import { Heading, Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <footer className="Footer">
      <Link href="/">
        <Heading as="span" size="sm" colorScheme="whiteAlpha">
          2021 Koky Tech
        </Heading>
      </Link>
      <style jsx>{`
        .Footer {
          display: flex;
          justify-content: center;
          margin-top: 300px;
          width: 100%;
        }
      `}</style>
    </footer>
  );
};
