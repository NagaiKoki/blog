import React from 'react';
import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { Seo } from '@components/template/Layout/Seo';
import { Article } from '@components/organisms/Articles';
import { Aside } from '@components/layouts/Aside';
import { useGetPost } from '@hooks/useGetPost';
import { PostQueryType } from 'types/post';
import { fetchPosts } from '@lib/apis/fetchPosts';
import { fetchPost } from '@lib/apis/fetchPost';
import { TITLE } from '@constants/title';

export const getStaticPaths = async () => {
  const payload = await fetchPosts();
  const paths = payload.map((post) => ({
    params: {
      id: post.id
    }
  }));
  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  const id = params.id;
  const payload = await fetchPost(id);

  return {
    props: {
      data: payload
    }
  };
}

const PostShow = ({ data }: PostQueryType) => {
  const router = useRouter();
  const { data: post } = useGetPost(String(router.query.id), data);

  if (!post.id) {
    return <></>;
  }

  return (
    <main>
      <Seo title={post.title} description={post.content.substr(0, 130)} />
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
