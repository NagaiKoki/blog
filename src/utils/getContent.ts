import fs from 'fs';

import { articleConfig } from '@/articles/config';
import { Lang } from '@/types/lang';

export const getContent = (
  articleNumber: keyof ReturnType<typeof articleConfig>,
  lang: Lang
) => {
  const content = fs.readFileSync(
    `${process.cwd()}${articleConfig()[articleNumber].contentPath[lang]}`,
    'utf8'
  );
  return content;
};
