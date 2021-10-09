import { VFC } from 'react';

import { useAuth } from '@hooks/useAuth';
import { useCreatePost } from '@hooks/useCreatePost';
import { PostEditor } from './Editor';

export const EditorContainer: VFC = () => {
  const { isLoggedIn } = useAuth();
  const {
    title,
    titleError,
    content,
    isPosting,
    onChangeTitle,
    onChangeContent,
    onSubmit
  } = useCreatePost();

  if (!isLoggedIn) {
    return <></>;
  }

  return (
    <PostEditor
      title={title}
      titleError={titleError}
      content={content}
      isPosting={isPosting}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onSubmit={onSubmit}
    />
  );
};
