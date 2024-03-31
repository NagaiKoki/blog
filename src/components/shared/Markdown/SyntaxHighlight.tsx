import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({
  language,
  value
}: {
  language: string;
  value: string;
}) => {
  let newCode = value;
  return (
    <SyntaxHighlighter
      language={language}
      style={tomorrow}
      wrapLines={true}
      showLineNumbers={true}
    >
      {newCode || ''}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
