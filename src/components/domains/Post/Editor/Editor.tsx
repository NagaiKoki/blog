import { VFC, useState } from 'react';

import { Box, Text, Button, Flex } from '@chakra-ui/react';
import { TitleForm } from './TitleForm';
import { ContentForm } from './ContentForm';
import PostEditorPreview from './Preview';

type Props = {
  title: string;
  titleError: string;
  content: string;
  onChangeTitle: (value: string) => void;
  onChangeContent: (value: string) => void;
};

export const PostEditor: VFC<Props> = ({
  title,
  titleError,
  content,
  onChangeTitle,
  onChangeContent
}) => {
  const [isPreview, setIsPreview] = useState(false);

  return (
    <Box position="absolute" left={0} right={0} marginTop={30}>
      <Box w="90vw" margin="0 auto" borderRadius="md">
        <Box>
          <Text fontSize="20px" fontWeight="bold" as="label">
            タイトル
          </Text>
          <Box marginTop="8px">
            <TitleForm title={title} onChangeTitle={onChangeTitle} />
          </Box>
          {!!titleError && (
            <Text fontSize="14px" color="red.400" marginTop="8px">
              {titleError}
            </Text>
          )}
        </Box>
        <Flex justifyContent="flex-end" marginTop="20px">
          <Button onClick={() => setIsPreview(!isPreview)}>
            {isPreview ? '入力に戻る' : 'プレビュー'}
          </Button>
        </Flex>
        <Box marginTop="20px">
          {!isPreview ? (
            <Box>
              <ContentForm
                content={content}
                onChangeContent={onChangeContent}
              />
            </Box>
          ) : (
            <Box>
              <PostEditorPreview content={content} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
