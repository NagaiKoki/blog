import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Heading } from "@chakra-ui/react";

import { MarkdownRenderer } from "../../atoms/Markdown/Renderer";
import { PostType } from "../../../types/post";
import { GET_POST_QUERY } from "../../../graphql/post";
import { formatDate } from "../../../utils/date";

type Props = {
  id: number;
};

export const Article: React.FC<Props> = ({ id }) => {
  const { data } = useQuery<{ post: PostType }>(GET_POST_QUERY, {
    variables: {
      id,
    },
  });

  if (!data) return <></>;

  const { title, content, createdAt } = data.post;

  return (
    <div>
      <header className="Header">
        <Heading
          as="h1"
          size="xl"
          fontWeight="extrabold"
          colorScheme="whiteAlpha"
          fontFamily="heading"
          paddingBottom="10px"
          textColor="orange.400"
        >
          {title}
        </Heading>
        <time className="Timestamp">{formatDate(createdAt)}</time>
      </header>
      <div>
        <MarkdownRenderer text={content} />
      </div>
      <style jsx>{`
        .Header {
          padding: 30px 0 40px 0;
        }
        .Timestamp {
          padding-top: 10px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};
