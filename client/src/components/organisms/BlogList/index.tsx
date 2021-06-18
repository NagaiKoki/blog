import React from "react";

import { Box } from "@chakra-ui/react";
import { BlogListItem } from "./BlogItem";
import { PostType } from "../../../types/post";
import { EmptyState } from "components/atoms/EmptyState";

type Props = {
  posts: PostType[];
};

export const BlogList: React.VFC<Props> = ({ posts }) => {
  if (!posts.length) {
    return (
      <EmptyState
        emptyAmount={4}
        margin={30}
        wrapperHeight={800}
        reactHeight={150}
      />
    );
  }

  return (
    <div>
      {posts.map((item) => {
        console.log(item.createdAt);
        return (
          <Box key={item.id} marginTop="12">
            <BlogListItem
              id={item.id}
              title={item.title}
              createdAt={item.createdAt}
            />
          </Box>
        );
      })}
    </div>
  );
};
