import React from "react";
import { PostEditor } from "components/organisms/PostEditor";

const PostNew = () => {
  return (
    <div className="Container">
      <div className="Editor__Wrapper">
        <PostEditor />
      </div>
      <style jsx>{`
        .Container {
          position: absolute;
          left: 0;
          width: 100vw;
        }
        .Editor__Wrapper {
          margin-top: 30px;
        }
      `}</style>
    </div>
  );
};

export default PostNew;
