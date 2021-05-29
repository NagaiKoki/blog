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
          line-height: 1.5;
          font-weight: 900 !important;
          margin: 0;
        }

        .react-markdown h2 {
          font-size: 2.2rem !important;
          line-height: 1.5;
          font-weight: 800 !important;
          margin: 0;
        }

        .react-markdown h3 {
          font-size: 1.9rem !important;
          line-height: 1.5;
          font-weight: 700 !important;
          margin: 0;
        }

        .react-markdown h4 {
          font-size: 1.6rem !important;
          line-height: 1.5;
          font-weight: 600 !important;
          margin: 0;
        }

        .react-markdown h5 {
          font-size: 1.3rem !important;
          line-height: 1.5;
          font-weight: 500 !important;
          margin: 0;
        }

        .react-markdown p {
          margin: 0;
          font-size: 1rem !important;
          line-height: 1.3;
          font-weight: 300 !important;
          margin: 0;
        }
        .react-markdown ul {
          padding-left: 40px;
        }
      `}</style>
    </div>
  );
};
