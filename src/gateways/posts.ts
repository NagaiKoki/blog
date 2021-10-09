import { ResponsePostType, PostType } from 'types/post';
import { fetchGet } from './base';

export const fetchPosts = async () => {
  try {
    const { data, error } = await fetchGet<ResponsePostType, PostType>({
      tableName: 'posts',
      options: { order: { column: 'created_at', ascending: true } }
    });

    return {
      posts: data,
      error
    };
  } catch (e) {
    alert('エラーが発生しました。。');
  }
};

export const fetchPost = async (id: number): Promise<PostType> => {
  try {
    const { data, error } = await fetchGet<ResponsePostType, PostType>({
      tableName: 'posts',
      match: { id: String(id) }
    });

    return data[0];
  } catch (e) {
    return e;
  }
};
