import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { COLORS } from "styles/index";

type Props = {
  content: string;
};

export const PostEditorPreview: React.FC<Props> = ({ content }) => {
  return (
    <div className="Wrapper">
      <ReactMarkdown plugins={[gfm]}>{content}</ReactMarkdown>
      <style jsx>{`
        .Wrapper {
          width: 50%;
          padding: 10px;
          background: ${COLORS.WHITE};
          color: ${COLORS.TEXT_COLOR};
        }
      `}</style>
    </div>
  );
};
