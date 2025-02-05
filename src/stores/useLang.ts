import { useAtomValue, useSetAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { Lang } from '@/types/lang';

export const langAtom = atomWithStorage<Lang>('lang', 'en');

export const useLang = () => {
  const lang = useAtomValue(langAtom);
  const setLang = useSetAtom(langAtom);

  return {
    lang,
    setLang
  };
};
