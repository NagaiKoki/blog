import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { articleConfig } from '@/articles/config';
import { Aside } from '@/components/layouts/Aside';
import { Seo } from '@/components/layouts/Seo';
import { useLang } from '@/stores/useLang';

export default function Home() {
  const { lang } = useLang();

  return (
    <main>
      <Seo />
      <Box marginTop="51px">
        <Aside />
      </Box>
      <Flex marginTop="40px" flexDirection="column" gap="12px">
        {Object.entries(articleConfig())
          .sort(([_, value], [__, value2]) =>
            value.createdAt > value2.createdAt ? -1 : 1
          )
          .map(([key, value]) => {
            return (
              <Link key={value.createdAt} href={`/${lang}/${key}`}>
                <Text
                  as="span"
                  fontSize="16px"
                  textDecoration="underline"
                  whiteSpace="pre-wrap"
                >
                  {`${value.createdAt}${'  -  '}${value.title[lang]}`}
                </Text>
              </Link>
            );
          })}
      </Flex>
    </main>
  );
}
