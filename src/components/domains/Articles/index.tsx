import { Heading } from '@chakra-ui/react';
import { MarkdownRenderer } from '@/components/shared/Markdown/Renderer';
import styles from './articles.module.css';

type Props = {
  title: string;
  content: string;
  createdAt: string;
};

export const Article = ({ title, content, createdAt }: Props) => {
  return (
    <div>
      <header className={styles.Header}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="extrabold"
          colorScheme="whiteAlpha"
          fontFamily="heading"
          paddingBottom="10px"
          textColor="orange.400"
        >
          {title}
        </Heading>
        <time className={styles.Timestamp}>{createdAt}</time>
      </header>
      <div>
        <MarkdownRenderer text={content} />
      </div>
    </div>
  );
};
