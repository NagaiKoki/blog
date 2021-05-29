import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import CodeBlock from "./SyntaxHighlight";

type Props = {
  text: string;
};

export const MarkdownRenderer: React.FC<Props> = ({ text }) => {
  return (
    <div className="react-markdown">
      <ReactMarkdown
        includeNodeIndex
        plugins={[gfm]}
        renderers={{ code: CodeBlock }}
      >
        {text}
      </ReactMarkdown>
      <style jsx global>{`
        .react-markdown h1,
        h2,
        h3,
        li,
        p {
          padding: 10px 0;
        }
        .react-markdown ul {
          padding-left: 40px;
        }
      `}</style>
    </div>
  );
};
