import React from "react";
import Link from "next/link";
import { Heading } from "@chakra-ui/react";

import styles from "./BlogItem.module.css";

type Props = {
  id: string;
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
        >
          {title}
        </Heading>
      </Link>
      <time className={styles.Timestamp}>{createdAt}</time>
    </article>
  );
};
