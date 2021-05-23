import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ language, value }) => {
  let newCode = value;
  return (
    <SyntaxHighlighter
      language={language}
      style={dark}
      wrapLines={true}
      showLineNumbers={true}
    >
      {newCode || ""}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
