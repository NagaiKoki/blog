import React from "react";
import { Heading } from "@chakra-ui/react";
import { MarkdownRenderer } from "@components/atoms/Markdown/Renderer";
import { EmptyState } from "@components/atoms/EmptyState";
import { PostType } from "types/post";
import styles from "./articles.module.css";

type Props = {
  post: PostType;
};

export const Article: React.FC<Props> = ({ post }) => {
  if (!post) {
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

  const { title, content, createdAt } = post;

  return (
    <div>
      <header className={styles.Header}>
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
        <time className={styles.Timestamp}>{createdAt}</time>
      </header>
      <div>
        <MarkdownRenderer text={content} />
      </div>
    </div>
  );
};
