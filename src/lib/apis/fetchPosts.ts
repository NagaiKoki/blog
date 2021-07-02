import { format } from "date-fns";
import { db } from "@lib/firebase";
import { ResponsePostType, PostType } from "types/post";

export const fetchPosts = async () => {
  try {
    const posts: PostType[] = [];
    await db
      .collection("posts")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          const data = doc.data() as ResponsePostType;
          data.id = doc.ref.id;
          const { id, title, content, status, spoiler, createdAt, updatedAt } =
            data;
          posts.push({
            id,
            title,
            content,
            status,
            spoiler,
            createdAt: format(createdAt.toDate(), "yyyy/MM/dd"),
            updatedAt: format(updatedAt.toDate(), "yyyy/MM/dd"),
          });
        });
      });

    return posts;
  } catch (e) {
    const error = new Error("An error occurred while fetching the data.");
    error.message = e.message;
    throw error;
  }
};
