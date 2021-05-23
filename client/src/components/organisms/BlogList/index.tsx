import React from "react";
import { useQuery, gql } from "@apollo/client";
import { BlogListItem } from "./BlogItem";
import { PostsQueryType } from "../../../types/post";

const BOOKS_QUERY = gql`
  {
    posts {
      id
      title
      content
    }
  }
`;

export const BlogList: React.VFC = () => {
  const { data } = useQuery<PostsQueryType | undefined>(BOOKS_QUERY);

  if (!data) return <></>;

  return (
    <div>
      {data.posts.map((item) => {
        return (
          <div key={item.id} className="Item__Wrapper">
            <BlogListItem id={item.id} title={item.title} />
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
