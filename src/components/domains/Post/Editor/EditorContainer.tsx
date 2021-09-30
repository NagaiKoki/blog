import { VFC } from 'react';

import { useAuth } from '@hooks/useAuth';
import { useCreatePost } from '@hooks/useCreatePost';
import { PostEditor } from './Editor';

export const EditorContainer: VFC = () => {
  const { isLoggedIn } = useAuth();
  const { title, titleError, content, onChangeTitle, onChangeContent } =
    useCreatePost();

  if (!isLoggedIn) {
    return <></>;
  }

  return (
    <PostEditor
      title={title}
      titleError={titleError}
      content={content}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
    />
  );
};
