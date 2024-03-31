import React from 'react';
import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { GetStaticProps } from 'next';
import { getContent } from '@/utils/getContent';

export const getStaticProps: GetStaticProps = async () => {
  const content = getContent(1);
  return {
    props: {
      content
    }
  };
};

export default function Component({ content }: { content: string }) {
  return <ArticleLayout contentNumber={1} content={content} />;
}
