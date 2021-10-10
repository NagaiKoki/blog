import React from 'react';
import Link from 'next/link';
import { Heading, Flex } from '@chakra-ui/react';

import styles from './BlogItem.module.css';

type Props = {
  id: string | number;
  title: string;
  createdAt: string;
};

export const BlogListItem: React.VFC<Props> = ({ id, title, createdAt }) => {
  return (
    <article className={styles.Blog__Item}>
      <Link href={`/posts/${id}`}>
        <Heading
          as="h3"
          fontWeight="extrabold"
          fontSize="2xl"
          paddingBottom="7px"
          textColor="orange.400"
          className={styles.Blog__Item__Title}
        >
          {title}
        </Heading>
      </Link>
      <Flex flexDirection="column">
        <time className={styles.Timestamp}>{createdAt}</time>
      </Flex>
      <button
        onClick={() => {
          throw new Error('hoge');
        }}
      >
        click
      </button>
    </article>
  );
};
