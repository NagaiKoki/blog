import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import CodeBlock from "./SyntaxHighlight";

type Props = {
  text: string;
};

export const MarkdownRenderer: React.FC<Props> = ({ text }) => {
  return (
    <ReactMarkdown plugins={[gfm]} renderers={{ code: CodeBlock }}>
      {text}
    </ReactMarkdown>
  );
};
