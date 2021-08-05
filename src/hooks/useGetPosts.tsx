import useSWR from 'swr';

import { PostType } from 'types/post';
import { fetchPosts } from '@lib/apis/fetchPosts';
import { SWR_FETCH_POSTS_KEY } from '@constants/swrKey';

export const useGetPosts = (initialData: PostType[]) => {
  const { data, isValidating } = useSWR(SWR_FETCH_POSTS_KEY, fetchPosts, {
    initialData: initialData,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return {
    data,
    isValidating
  };
};
