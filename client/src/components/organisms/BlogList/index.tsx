import React from "react";
import { BlogListItem } from "./BlogItem";

export const BlogList: React.VFC = () => {
  return (
    <div>
      <div className="Item__Wrapper">
        <BlogListItem />
      </div>
      <style jsx>{`
        .Item__Wrapper {
          margin-top: 60px;
        }
      `}</style>
    </div>
  );
};
