import { GetStaticProps } from 'next';
import React from 'react';

import { articleConfig } from '@/articles/config';
import { Article } from '@/components/article/Article';
import { getContent } from '@/utils/getContent';

export const getStaticProps: GetStaticProps = () => {
  const content = getContent(4, 'ja');
  return {
    props: {
      content
    }
  };
};

export default function Component({ content }: { content: string }) {
  return (
    <Article
      title={articleConfig()[4].title.ja}
      content={content}
      createdAt={articleConfig()[4].createdAt}
    />
  );
}
