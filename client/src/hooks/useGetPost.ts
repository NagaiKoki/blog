import useSWR from "swr";

import { PostType } from "../types/post";
import { fetchPost } from "../lib/apis/fetchPost";
import { SWR_FETCH_POST_KEY } from "../constants/swrKey";

export const useGetPost = (id: string, initialData: PostType) => {
  const { data, isValidating } = useSWR(SWR_FETCH_POST_KEY(id), fetchPost, {
    initialData: initialData,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    isValidating,
  };
};
