import { useEffect } from 'react';
import { Seo } from '@components/layouts/Seo';
import { Aside } from '@components/layouts/Aside';
import { BlogList } from '@components/domains/BlogList';
import { PostsQueryType } from 'types/post';
import { PostRepository } from '@repositories/posts';
import { Post } from '@models/entities/Post';

const repo = new PostRepository();

export async function getStaticProps() {
  const payload = await repo.fetchPosts();
  return {
    props: {
      data: JSON.parse(JSON.stringify(payload))
    }
  };
}

export default function Home(props: PostsQueryType) {
  const { data } = props;
  const postEntities = data.map((post) => {
    return Post.factory({
      ...post
    });
  });

  return (
    <main>
      <Seo />
      <div className="Aside__Wrapper">
        <Aside />
      </div>
      <div className="List__Wrapper">
        <BlogList posts={postEntities} />
      </div>
      <style jsx>{`
        .Aside__Wrapper {
          margin-top: 50px;
        }
        .List__Wrapper {
          padding-top: 40px;
        }
      `}</style>
    </main>
  );
}
