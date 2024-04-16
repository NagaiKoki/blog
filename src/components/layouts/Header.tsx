import { useColorMode } from '@chakra-ui/color-mode';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

import { TITLE } from '@/constants/title';
import { useLang } from '@/stores/useLang';
import { Lang } from '@/types/lang';

const jaPattern = /\/ja\/(\d+)/;
const enPattern = /\/en\/(\d+)/;

export const Header: React.VFC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { pathname, replace } = useRouter();
  const { lang: selectedLang, setLang } = useLang();

  const handleOnChangeLang = useCallback(
    async (lang: Lang) => {
      setLang(lang);
      if (lang === 'ja') {
        if (enPattern.test(pathname) && lang === 'ja') {
          await replace(pathname.replace(enPattern, '/ja/$1'));
        }
      } else {
        if (jaPattern.test(pathname) && lang === 'en') {
          await replace(pathname.replace(jaPattern, '/en/$1'));
        }
      }
    },
    [pathname, replace, setLang]
  );

  return (
    <header>
      <Link href="/">
        <Heading
          as="h1"
          size={pathname === '/posts/[id]' ? 'lg' : 'xl'}
          fontWeight="extrabold"
          colorScheme="whiteAlpha"
          fontFamily="heading"
          style={{ cursor: 'pointer' }}
          className="Koky__Header"
        >
          {TITLE}
        </Heading>
      </Link>
      <Flex alignItems="center">
        <Flex alignItems="center" marginRight="18px" gap={2}>
          <Button
            variant="ghost"
            padding="2px 8px"
            height="32px"
            borderRadius="full"
            fontSize="sm"
            background={selectedLang === 'en' ? 'orange' : ''}
            onClick={() => handleOnChangeLang('en')}
          >
            En
          </Button>
          <Text>/</Text>
          <Button
            variant="ghost"
            padding="2px 8px"
            borderRadius="full"
            fontSize="sm"
            height="32px"
            background={selectedLang === 'ja' ? 'orange' : ''}
            onClick={() => handleOnChangeLang('ja')}
          >
            Ja
          </Button>
        </Flex>
        <Button
          as="span"
          fontSize="30px"
          variant="goast"
          cursor="pointer"
          padding="0px 4px"
          onClick={toggleColorMode}
        >
          {colorMode === 'dark' ? '🌘' : '🌞'}
        </Button>
      </Flex>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </header>
  );
};
