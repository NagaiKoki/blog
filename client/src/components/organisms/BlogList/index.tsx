import React from "react";
import { useQuery } from "@apollo/client";

import { BlogListItem } from "./BlogItem";
import { PostsQueryType } from "../../../types/post";
import { GET_POSTS_QUERY } from "../../../graphql/post";
import { EmptyState } from "components/atoms/EmptyState";

type Props = {
  data: PostsQueryType
}

export const BlogList: React.VFC<Props> = ({ data }) => {
  const { posts, loading } = data.data

  if (!posts?.length || loading) {
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
          <div key={item.id} className="Item__Wrapper">
            <BlogListItem
              id={item.id}
              title={item.title}
              createdAt={item.createdAt}
            />
          </div>
        );
      })}
      <style jsx>{`
        .Item__Wrapper {
          margin-top: 60px;
        }
      `}</style>
    </div>
  );
};
