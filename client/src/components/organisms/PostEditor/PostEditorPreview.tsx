import React from "react";
import { MarkdownRenderer } from "components/atoms/Markdown/Renderer";
import { COLORS } from "styles/index";

type Props = {
  content: string;
};

export const PostEditorPreview: React.FC<Props> = ({ content }) => {
  return (
    <div className="Wrapper">
      <MarkdownRenderer text={content} />
      <style jsx>{`
        .Wrapper {
          width: 50%;
          padding: 15px;
          background: ${COLORS.DARK_THEME_COLOR};
          color: ${COLORS.WHITE};
        }
      `}</style>
    </div>
  );
};
