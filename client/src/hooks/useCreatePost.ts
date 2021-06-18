import { useEffect } from "react";

import { createPosts } from "../lib/apis/createPost";
import { PostStatusType } from "../types/common";
import { RequestPostType } from "../types/post";

export const useCreatePosts = async (args: RequestPostType) => {
  try {
    const { payload, error } = await createPosts(args);
    if (payload && !error) {
    }
  } catch (e) {
    return { payload: "error" };
  }
};
