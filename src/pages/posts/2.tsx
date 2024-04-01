import React from 'react';
import { Article } from '@/components/article/Article';
import { GetStaticProps } from 'next';
import { getContent } from '@/utils/getContent';

export const getStaticProps: GetStaticProps = async () => {
  const content = getContent(2);
  return {
    props: {
      content
    }
  };
};

export default function Component({ content }: { content: string }) {
  return <Article contentNumber={2} content={content} />;
}
