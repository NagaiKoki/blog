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
  const newCode = value;

  return (
    <SyntaxHighlighter
      language={language}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      style={tomorrow}
      wrapLines
      showLineNumbers
    >
      {newCode || ''}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
