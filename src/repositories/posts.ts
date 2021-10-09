import { fetchPosts, fetchPost } from '@gateways/posts';
import { PostType } from 'types/post';

export class PostRepository {
  async fetchPosts(): Promise<PostType[]> {
    const { posts, error } = await fetchPosts();

    if (!!posts.length) {
      return posts;
    } else {
      console.log(error);
    }
  }

  async fetchPost(id: number) {
    const post = await fetchPost(id);
    return post;
  }
}
