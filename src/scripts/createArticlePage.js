const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const addArticle = (id) => `import { GetStaticProps } from 'next';
import React from 'react';

import { Article } from '@/components/article/Article';
import { getContent } from '@/utils/getContent';

export const getStaticProps: GetStaticProps = () => {
  const content = getContent(${id});
  return {
    props: {
      content
    }
  };
};

export default function Component({ content }: { content: string }) {
  return <Article contentNumber={${id}} content={content} />;
}`;

const idArg = process.argv[2];
const packageRootDir = path.join(__dirname, '../..');
const postPagesDir = path.join(packageRootDir, 'src/pages/posts');
const targetPage = `${postPagesDir}/${idArg}.tsx`;

const createPage = () => {
  fs.writeFileSync(targetPage, addArticle(idArg));
};

const main = () => {
  if (!idArg) {
    throw new Error('add page number for argument');
  }

  createPage(idArg);

  exec(`pnpm prettier --write ${targetPage}`, (err) => {
    if (err) {
      console.log(`format error`, err);
      return;
    }
    console.log(`format done`);
  });
};

main();
