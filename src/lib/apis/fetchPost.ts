import { format } from 'date-fns';
import { db } from '@lib/firebase';
import { ResponsePostType, PostType } from 'types/post';

export const fetchPost = async (id: string) => {
  try {
    const postRef = await db.collection('posts').doc(id).get();
    const data = postRef.data() as ResponsePostType;
    const { title, content, status, spoiler, createdAt, updatedAt } = data;
    const payload: PostType = {
      id,
      title,
      content,
      status,
      spoiler,
      createdAt: format(createdAt.toDate(), 'yyyy/MM/dd'),
      updatedAt: format(updatedAt.toDate(), 'yyyy/MM/dd')
    };
    return payload;
  } catch (e) {
    const error = new Error('An error occurred while fetching the data.');
    error.message = e.message;
    throw error;
  }
};
