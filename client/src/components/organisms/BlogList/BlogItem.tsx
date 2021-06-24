import React from "react";
import Link from "next/link";
import { Heading, Flex } from "@chakra-ui/react";

import styles from "./BlogItem.module.css";

type Props = {
  id: string;
  title: string;
  spoiler: string;
  createdAt: string;
};

export const BlogListItem: React.VFC<Props> = ({
  id,
  title,
  spoiler,
  createdAt,
}) => {
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
        <Heading as="text" fontSize="md" marginY={3}>
          {spoiler}
        </Heading>
        <time className={styles.Timestamp}>{createdAt}</time>
      </Flex>
    </article>
  );
};
