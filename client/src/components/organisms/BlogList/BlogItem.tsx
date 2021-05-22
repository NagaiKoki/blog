import React from "react";
import { Heading } from "@chakra-ui/react";

type Props = {
  title: string;
};

export const BlogListItem: React.VFC<Props> = ({ title }) => {
  return (
    <article>
      <Heading
        as="h3"
        fontWeight="extrabold"
        fontSize="2xl"
        textColor="orange.400"
      >
        {title}
      </Heading>
    </article>
  );
};
