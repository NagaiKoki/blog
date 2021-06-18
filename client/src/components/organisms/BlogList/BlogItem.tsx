import React from "react";
import Link from "next/link";
import { Heading } from "@chakra-ui/react";

type Props = {
  id: string;
  title: string;
  createdAt: string;
};

export const BlogListItem: React.VFC<Props> = ({ id, title, createdAt }) => {
  return (
    <article className="Blog__Item">
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
      <time className="Timestamp">{createdAt}</time>
      <style jsx>{`
        .Blog__Item {
          cursor: pointer;
        }
        .Blog__Item:hover {
          opacity: 0.8;
        }
        .Timestamp {
          font-size: 14px;
        }
      `}</style>
    </article>
  );
};
