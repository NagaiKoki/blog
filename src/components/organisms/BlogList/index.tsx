import React from 'react';

import { Box } from '@chakra-ui/react';
import { Post } from '@models/entities/Post';
import { EmptyState } from '@components/atoms/EmptyState';
import { BlogListItem } from './BlogItem';

type Props = {
  posts: Post[];
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
        return (
          <Box key={item.getId()} marginTop="12">
            <BlogListItem
              id={item.getId()}
              title={item.getTitle().value}
              createdAt={item.getCreatedAt().value}
            />
          </Box>
        );
      })}
    </div>
  );
};
