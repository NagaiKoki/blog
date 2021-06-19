import { db } from "@lib/firebase";

import { RequestPostType } from "types/post";

export const createPosts = async ({
  title,
  content,
  spoiler,
}: RequestPostType) => {
  try {
    db.collection("posts").add({
      title,
      content,
      status: 1,
      spoiler,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return { payload: "success" };
  } catch (e) {
    return { error: e.message };
  }
};
