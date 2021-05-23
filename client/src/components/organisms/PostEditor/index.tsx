import React, { useState } from "react";
import { PostEditorTextarea } from "./PostEditorTextarea";
import { PostEditorPreview } from "./PostEditorPreview";
import { COLORS } from "styles/index";

export const PostEditor = () => {
  const [content, setContent] = useState("");

  return (
    <div className="Wrapper">
      <div className="Textarea__Wrapper">
        <PostEditorTextarea value={content} onChange={setContent} />
      </div>
      <PostEditorPreview content={content} />
      <style jsx>{`
        .Wrapper {
          display: flex;
        }
        .Textarea__Wrapper {
          width: 50%;
          border-right: 1px solid ${COLORS.GRAY_COLOR_1};
        }
      `}</style>
    </div>
  );
};
