import { Heading } from '@chakra-ui/react';

import { Aside } from '@/components/layouts/Aside';
import { Seo } from '@/components/layouts/Seo';
import { TITLE } from '@/constants/title';

import styles from './article.module.css';
import { ArticleContent } from './ArticleContent/ArticleContent';

type Props = {
  title: string;
  content: string;
  createdAt: string;
};

export const Article = ({ title, content, createdAt }: Props) => {
  return (
    <main>
      <Seo title={title} />
      <article>
        <ArticleContent title={title} createdAt={createdAt} content={content} />
      </article>
      <div className={styles.Aside__Wrapper}>
        <Heading as="h3" size="lg" colorScheme="whiteAlpha" marginBottom="3">
          {TITLE}
        </Heading>
        <Aside />
      </div>
    </main>
  );
};
