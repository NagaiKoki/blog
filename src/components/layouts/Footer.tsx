import { Heading, Link } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="Footer">
      <Link href="/">
        <Heading as="span" size="sm" colorScheme="whiteAlpha">
          2024 kokinagai.com
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
