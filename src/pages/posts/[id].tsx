import React from 'react';
import { Heading } from '@chakra-ui/react';

// entities
import { Post } from '@models/entities/Post';
// repositories
import { PostRepository } from '@repositories/posts';
// components
import { Seo } from '@components/layouts/Seo';
import { Article } from '@components/domains/Articles';
import { Aside } from '@components/layouts/Aside';
// types
import { PostQueryType } from 'types/post';
// constants
import { TITLE } from '@constants/title';

const repo = new PostRepository();

export const getStaticPaths = async () => {
  const payload = await repo.fetchPosts();
  const paths = payload.map((post) => ({
    params: {
      id: String(post.id)
    }
  }));
  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  const id = params.id;
  const payload = await repo.fetchPost(id);

  return {
    props: {
      data: JSON.parse(JSON.stringify(payload))
    }
  };
}

const PostShow = ({ data }: PostQueryType) => {
  const post = Post.factory(data);

  return (
    <main>
      <Seo title={data.title} description={data.content.substr(0, 130)} />
      <article>
        <Article post={post} />
      </article>
      <div className="Aside__Wrapper">
        <Heading as="h3" size="lg" colorScheme="whiteAlpha" marginBottom="3">
          {TITLE}
        </Heading>
        <Aside />
      </div>
      <style jsx>{`
        .Aside__Wrapper {
          margin-top: 90px;
        }
      `}</style>
    </main>
  );
};

export default PostShow;
