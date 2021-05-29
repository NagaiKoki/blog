import React from "react";
import Link from "next/link";
import { Heading } from "@chakra-ui/react";

type Props = {
  id: number;
  title: string;
};

export const BlogListItem: React.VFC<Props> = ({ id, title }) => {
  return (
    <article className="Blog__Item">
      <Link href={`/posts/${id}`}>
        <Heading
          as="h3"
          fontWeight="extrabold"
          fontSize="2xl"
          textColor="orange.400"
        >
          {title}
        </Heading>
      </Link>
      <style jsx>{`
        .Blog__Item {
          cursor: pointer;
        }
        .Blog__Item:hover {
          opacity: 0.8;
        }
      `}</style>
    </article>
  );
};
