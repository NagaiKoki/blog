import React from 'react';
import { Heading } from '@chakra-ui/react';

// entities
import { Post } from '@models/entities/Post';
// components
import { MarkdownRenderer } from '@components/shared/Markdown/Renderer';
// types
import styles from './articles.module.css';

type Props = {
  post: Post;
};

export const Article: React.FC<Props> = ({ post }) => {
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
          {post.getTitle().value}
        </Heading>
        <time className={styles.Timestamp}>{post.getCreatedAt().value}</time>
      </header>
      <div>
        <MarkdownRenderer text={post.getContent().value} />
      </div>
    </div>
  );
};
