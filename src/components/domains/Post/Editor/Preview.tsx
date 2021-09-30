import React from 'react';
import { Box } from '@chakra-ui/react';

import { MarkdownRenderer } from '@components/shared/Markdown/Renderer';

type Props = {
  content: string;
};

const PostEditorPreview: React.FC<Props> = ({ content }) => {
  return (
    <Box paddingX="20px" height="100vh" backgroundColor="gray.800">
      <MarkdownRenderer text={content} />
    </Box>
  );
};

export default React.memo(PostEditorPreview);
