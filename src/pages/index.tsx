import { Seo } from '@/components/layouts/Seo';
import { Aside } from '@/components/layouts/Aside';
import { articleConfig } from '@/articles/config';
import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Seo />
      <Box marginTop="51px">
        <Aside />
      </Box>
      <Flex marginTop="40px" flexDirection="column" gap="12px">
        {Object.entries(articleConfig).map(([key, value]) => {
          return (
            <Link key={value.createdAt} href={`/posts/${key}`}>
              <Text
                as="span"
                fontSize="16px"
                textDecoration="underline"
                whiteSpace="pre-wrap"
              >
                {`${value.createdAt}${'  -  '}${value.title}`}
              </Text>
            </Link>
          );
        })}
      </Flex>
    </main>
  );
}
