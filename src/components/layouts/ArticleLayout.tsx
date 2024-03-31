import React, { ReactNode } from 'react';
import { Heading } from '@chakra-ui/react';

// components
import { Seo } from '@/components/layouts/Seo';
import { Aside } from '@/components/layouts/Aside';
import { TITLE } from '@/constants/title';
import { Article } from '../domains/Articles';
import { articleConfig } from '@/articles/config';

type Props = {
  contentNumber: keyof typeof articleConfig;
  content: string;
};

export const ArticleLayout = ({ contentNumber, content }: Props) => {
  return (
    <main>
      <Seo
        title={articleConfig[contentNumber].title}
        description={content.substr(0, 130)}
      />
      <article>
        <Article
          title={articleConfig[contentNumber].title}
          createdAt={articleConfig[contentNumber].createdAt}
          content={content}
        />
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
