import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

import { PostStatusType } from "../../../types/common";
import { PostEditorTitleInput } from "./PostEditorTitleInput";
import { PostEditorTextarea } from "./PostEditorTextarea";
import { PostEditorPreview } from "./PostEditorPreview";
import { createPosts } from "../../../lib/apis/createPost";
import { COLORS } from "styles/index";

export const PostEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postStatus, setPostStatus] = useState<PostStatusType>("waiting");

  const router = useRouter();

  useEffect(() => {
    if (postStatus === "success") {
      router.push("/");
    }
  }, [postStatus]);

  const handleCreatePost = async () => {
    setPostStatus("posting");
    const { payload, error } = await createPosts({ title, content });
    if (payload && !error) {
      setPostStatus("success");
    } else {
      setPostStatus("failure");
    }
  };

  return (
    <div className="Container">
      <div className="Nav__Wrapper">
        <div className="Title__Wrapper">
          <PostEditorTitleInput title={title} onChange={setTitle} />
        </div>
        <Button
          colorScheme="yellow"
          isLoading={postStatus === "posting"}
          size="md"
          onClick={handleCreatePost}
        >
          送信する
        </Button>
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
        .Nav__Wrapper {
          display: flex;
          align-items: center;
          width: 95%;
          margin: 20px auto;
        }
        .Title__Wrapper {
          width: 100%;
          margin-right: 10px;
        }
        .Textarea__Wrapper {
          width: 50%;
          border-right: 1px solid ${COLORS.GRAY_COLOR_1};
        }
      `}</style>
    </div>
  );
};
