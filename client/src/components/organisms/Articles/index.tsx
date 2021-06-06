import React from "react";
import { useQuery } from "@apollo/client";
import { Heading } from "@chakra-ui/react";

import { MarkdownRenderer } from "components/atoms/Markdown/Renderer";
import { EmptyState } from "components/atoms/EmptyState";
import { PostType } from "../../../types/post";
import { GET_POST_QUERY } from "../../../graphql/post";
import { formatDate } from "../../../utils/date";

type Props = {
  id: number;
};

export const Article: React.FC<Props> = ({ id }) => {
  const { data } = useQuery<{ posts: PostType[] }>(GET_POST_QUERY, {
    variables: {
      id,
    },
  });

  if (!data || !data?.posts?.length) {
    return (
      <div className="Empty__Wrapper">
        <EmptyState
          emptyAmount={1}
          margin={30}
          wrapperHeight={1500}
          reactHeight={1500}
        />
        <style jsx>{`
          .Empty__Wrapper {
            margin-top: 30px;
          }
        `}</style>
      </div>
    );
  }

  const { title, content, createdAt } = data.posts[0];

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
