import React, { useState } from "react";
import { PostEditorTitleInput } from "./PostEditorTitleInput";
import { PostEditorTextarea } from "./PostEditorTextarea";
import { PostEditorPreview } from "./PostEditorPreview";
import { COLORS } from "styles/index";

export const PostEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="Container">
      <div className="Title__Wrapper">
        <PostEditorTitleInput title={title} onChange={setTitle} />
      </div>
      <div className="Wrapper">
        <div className="Textarea__Wrapper">
          <PostEditorTextarea value={content} onChange={setContent} />
        </div>
        <PostEditorPreview content={content} />
      </div>
      <style jsx>{`
        .Wrapper {
          display: flex;
        }
        .Title__Wrapper {
          width: 95%;
          margin: 20px auto;
        }
        .Textarea__Wrapper {
          width: 50%;
          border-right: 1px solid ${COLORS.GRAY_COLOR_1};
        }
      `}</style>
    </div>
  );
};
