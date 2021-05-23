import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Heading } from "@chakra-ui/react";
import { MarkdownRenderer } from "../../atoms/Markdown/Renderer";
import { PostType } from "../../../types/post";

const POSTS_QUERY = gql`
  query GetPost($id: Int!) {
    post(id: $id) {
      id
      title
      content
    }
  }
`;

export const Article = () => {
  const { query } = useRouter();
  const { data } = useQuery<{ post: PostType }>(POSTS_QUERY, {
    variables: {
      id: 1,
    },
  });

  if (!data) return <></>;

  const { title, content } = data.post;

  return (
    <header>
      <Heading
        as="h1"
        size="xl"
        fontWeight="extrabold"
        colorScheme="whiteAlpha"
        fontFamily="heading"
      >
        {title}
      </Heading>
      <div>
        <MarkdownRenderer text={content} />
      </div>
    </header>
  );
};
