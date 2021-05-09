import React from "react";
import { Heading } from "@chakra-ui/react";

export const BlogListItem: React.VFC = () => {
  return (
    <article>
      <Heading
        as="h3"
        fontWeight="extrabold"
        fontSize="2xl"
        textColor="orange.400"
      >
        メモ化について
      </Heading>
    </article>
  );
};
