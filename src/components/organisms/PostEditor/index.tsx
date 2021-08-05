import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { Box, Flex, Button } from '@chakra-ui/react';

import { PostStatusType } from 'types/common';
import { createPosts } from '@lib/apis/createPost';
import { COLORS } from '@styles/index';
import { postDataState } from '@state/atoms/post';
import PostEditorTitleInput from './PostEditorTitleInput';
import PostEditorTextarea from './PostEditorTextarea';
import PostEditorPreview from './PostEditorPreview';
import PostSpoilerInput from './PostSpoilerInput';

export const PostEditor = () => {
  const [postData, setPostData] = useRecoilState(postDataState);
  const { title, content, spoiler } = postData;
  const [postStatus, setPostStatus] = useState<PostStatusType>('waiting');

  const router = useRouter();

  useEffect(() => {
    if (postStatus === 'success') {
      router.push('/');
    }
  }, [postStatus, router]);

  const handleCreatePost = async () => {
    setPostStatus('posting');
    const { payload, error } = await createPosts({ title, content, spoiler });
    if (payload && !error) {
      setPostStatus('success');
    } else {
      setPostStatus('failure');
    }
  };

  return (
    <Box>
      <Flex alignItems="center" width="95%" marginY="20px" marginX="auto">
        <Box width="100%" marginRight="10px">
          <PostEditorTitleInput
            title={title}
            onChange={(value) =>
              setPostData((prev) => {
                return { ...prev, title: value };
              })
            }
          />
        </Box>
        <Button
          colorScheme="yellow"
          isLoading={postStatus === 'posting'}
          size="md"
          onClick={handleCreatePost}
        >
          送信する
        </Button>
      </Flex>
      <Flex marginBottom="20px">
        <PostSpoilerInput
          value={spoiler}
          onChange={(value) =>
            setPostData((prev) => {
              return { ...prev, spoiler: value };
            })
          }
        />
      </Flex>
      <Flex>
        <Box borderLeft={`1px solid ${COLORS.GRAY_COLOR_1}`} width="50%">
          <PostEditorTextarea
            value={content}
            onChange={(value) =>
              setPostData((prev) => {
                return { ...prev, content: value };
              })
            }
          />
        </Box>
        <PostEditorPreview content={content} />
      </Flex>
    </Box>
  );
};
