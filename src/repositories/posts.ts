import { fetchPosts } from '@gateways/posts';
import { Post } from '@models/entities/Post';

export class PostRepository {
  async fetchPosts(): Promise<Post[]> {
    const { posts, error } = await fetchPosts();

    if (!!posts.length) {
      const postEntities = posts.map((post) => {
        return Post.factory(post);
      });

      return postEntities;
    } else {
      console.log(error);
    }
  }
}
