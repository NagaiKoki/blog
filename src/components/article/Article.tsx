import { Heading } from '@chakra-ui/react';
import { Seo } from '@/components/layouts/Seo';
import { Aside } from '@/components/layouts/Aside';
import { TITLE } from '@/constants/title';
import { ArticleContent } from './ArticleContent/ArticleContent';
import { articleConfig } from '@/articles/config';
import styles from './article.module.css';

type Props = {
  contentNumber: keyof typeof articleConfig;
  content: string;
};

export const Article = ({ contentNumber, content }: Props) => {
  return (
    <main>
      <Seo
        title={articleConfig[contentNumber].title}
        description={content.substr(0, 130)}
      />
      <article>
        <ArticleContent
          title={articleConfig[contentNumber].title}
          createdAt={articleConfig[contentNumber].createdAt}
          content={content}
        />
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
