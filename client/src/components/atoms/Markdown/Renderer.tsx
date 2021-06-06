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
        .react-markdown h1 {
          font-size: 2.5rem !important;
        }

        .react-markdown h2 {
          font-size: 2.2rem !important;
        }

        .react-markdown h3 {
          font-size: 1.9rem !important;
        }

        .react-markdown h4 {
          font-size: 1.6rem !important;
        }

        .react-markdown h5 {
          font-size: 1.3rem !important;
        }

        .react-markdown p {
          margin: 0;
          font-size: 1rem !important;
        }
        .react-markdown ul {
          padding-left: 40px;
        }
      `}</style>
    </div>
  );
};
