import { mutate } from 'swr';

import { createPosts } from '../lib/apis/createPost';
import { RequestPostType } from '../types/post';
import { SWR_CREATE_POST_KEY } from '../constants/swrKey';

export const useGetPosts = async (args: RequestPostType) => {
  try {
    await mutate(SWR_CREATE_POST_KEY, createPosts(args));
  } catch (e) {
    return { payload: 'error' };
  }
};
