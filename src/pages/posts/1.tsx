import { GetStaticProps } from 'next';
import React from 'react';

import { Article } from '@/components/article/Article';
import { getContent } from '@/utils/getContent';

export const getStaticProps: GetStaticProps = () => {
  const content = getContent(1);
  return {
    props: {
      content
    }
  };
};

export default function Component({ content }: { content: string }) {
  return <Article contentNumber={1} content={content} />;
}
