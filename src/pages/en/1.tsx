import { GetStaticProps } from 'next';
import React from 'react';

import { articleConfig } from '@/articles/config';
import { Article } from '@/components/article/Article';
import { getContent } from '@/utils/getContent';

export const getStaticProps: GetStaticProps = () => {
  const content = getContent(1, 'en');
  return {
    props: {
      content
    }
  };
};

export default function Component({ content }: { content: string }) {
  return (
    <Article
      title={articleConfig()[1].title.en}
      content={content}
      createdAt={articleConfig()[1].createdAt}
    />
  );
}
