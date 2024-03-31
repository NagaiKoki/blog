import fs from 'fs';
import { articleConfig } from '@/articles/config';

export const getContent = (articleNumber: keyof typeof articleConfig) => {
  const content = fs.readFileSync(
    `${process.cwd()}/${articleConfig[articleNumber].contentPath}`,
    'utf8'
  );
  return content;
};
