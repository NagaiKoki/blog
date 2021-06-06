import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Button } from "@chakra-ui/react";
import { PostEditorTitleInput } from "./PostEditorTitleInput";
import { PostEditorTextarea } from "./PostEditorTextarea";
import { PostEditorPreview } from "./PostEditorPreview";
import { COLORS } from "styles/index";

type RequestPostMutation = {
  title: string;
  content: string;
};

const CREATE_POST_MUTATION = gql`
  mutation PostMutation($title: String!, $content: String!) {
    insert_posts(objects: { title: $title, content: $content }) {
      affected_rows
    }
  }
`;

export const PostEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createPost] = useMutation<RequestPostMutation>(CREATE_POST_MUTATION, {
    variables: {
      title: title,
      content: content,
    },
  });

  return (
    <div className="Container">
      <div className="Nav__Wrapper">
        <div className="Title__Wrapper">
          <PostEditorTitleInput title={title} onChange={setTitle} />
        </div>
        <Button colorScheme="yellow" size="md" onClick={() => createPost()}>
          送信
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
