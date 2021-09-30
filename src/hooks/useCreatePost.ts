import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@lib/supabase';

import { Post } from '@models/entities/Post';

interface IResponse {
  title: string;
  titleError: string;
  content: string;
  isPosting: boolean;
  onChangeTitle: (value: string) => void;
  onChangeContent: (value: string) => void;
  onSubmit: () => void;
}

const post = Post.factory({ title: { value: '' }, content: { value: '' } });

export const useCreatePost = (): IResponse => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [titleError, setTitleError] = useState('');

  // TODO: Repository層へ移動する
  const handleOnSubmit = async () => {
    const { data, error } = await supabase.from('posts').insert({
      title: post.getTitle().value,
      content: post.getContent().value
    });

    if (!!data) {
      alert('success');
      setTitle('');
      setContent('');
    } else if (!!error) {
      alert(error);
    }

    setIsPosting(false);
  };

  useEffect(() => {
    if (isPosting) {
      handleOnSubmit();
    }
  }, [isPosting]);

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
    isPosting,
    onChangeTitle,
    onChangeContent,
    onSubmit: useCallback(() => setIsPosting(true), [])
  } as const;
};
