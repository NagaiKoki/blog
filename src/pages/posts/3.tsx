import React from 'react';
import { Article } from '@/components/article/Article';
import { GetStaticProps } from 'next';
import { getContent } from '@/utils/getContent';

export const getStaticProps: GetStaticProps = async () => {
  const content = getContent(3);
  return {
    props: {
      content
    }
  };
};

export default function Component({ content }: { content: string }) {
  return <Article contentNumber={3} content={content} />;
}
