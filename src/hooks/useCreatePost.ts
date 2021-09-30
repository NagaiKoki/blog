import { useState } from 'react';

import { Post } from '@models/entities/Post';

interface IResponse {
  title: string;
  titleError: string;
  content: string;
  onChangeTitle: (value: string) => void;
  onChangeContent: (value: string) => void;
}

const post = Post.factory({ title: { value: '' }, content: { value: '' } });

export const useCreatePost = (): IResponse => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [titleError, setTitleError] = useState('');

  const onChangeTitle = (value: string) => {
    post.changeTitle(value);
    const title = post.getTitle();
    setTitle(title.value);

    if (title.validation()?.status === 'FAILURE') {
      setTitleError(title.validation().contents[0].title);
    }
  };

  const onChangeContent = (value: string) => {
    post.changeContent(value);
    const content = post.getContent();
    setContent(content.value);
  };

  return {
    title,
    titleError,
    content,
    onChangeTitle,
    onChangeContent
  } as const;
};
