import { useEffect } from 'react';
import { Seo } from '@components/template/Layout/Seo';
import { Aside } from '@components/layouts/Aside';
import { BlogList } from '@components/organisms/BlogList';
import { PostsQueryType } from 'types/post';

import { PostRepository } from '@repositories/posts';

const repo = new PostRepository();

export async function getStaticProps() {
  const payload = await repo.fetchPosts();
  return {
    props: {
      data: payload.map((data) => {
        return {
          title: data.getTitle()
        };
      })
    }
  };
}

export default function Home(props: PostsQueryType) {
  if (true) return <></>;

  return (
    <main>
      <Seo />
      <div className="Aside__Wrapper">
        <Aside />
      </div>
      <div className="List__Wrapper">
        <BlogList posts={data} />
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
