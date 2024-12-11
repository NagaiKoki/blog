import { lang, Lang } from '@/types/lang';

export const articleConfig = () =>
  ({
    1: {
      contentPath: {
        [lang.ja]: `/src/articles/${lang.ja}/1.md`,
        [lang.en]: `/src/articles/${lang.en}/1.md`
      },
      title: {
        [lang.ja]: 'ブログを始めました！',
        [lang.en]: 'My Blog Started'
      },
      createdAt: '2021/06/19'
    },
    2: {
      contentPath: {
        [lang.ja]: `/src/articles/${lang.ja}/2.md`,
        [lang.en]: `/src/articles/${lang.en}/2.md`
      },
      title: {
        [lang.ja]: 'エンジニアにとっていいカフェを見つける方法',
        [lang.en]: 'How to good cafe for Software Engineer'
      },
      createdAt: '2021/06/22'
    },
    3: {
      contentPath: {
        [lang.ja]: `/src/articles/${lang.ja}/3.md`,
        [lang.en]: `/src/articles/${lang.en}/3.md`
      },
      title: {
        [lang.ja]: 'RecoilのuseRecoilStateの内部実装を深ぼる',
        [lang.en]: 'Deep inside useRecoilState'
      },
      createdAt: '2021/06/24'
    },
    4: {
      contentPath: {
        [lang.ja]: `/src/articles/${lang.ja}/4.md`,
        [lang.en]: `/src/articles/${lang.en}/4.md`
      },
      title: {
        [lang.ja]: 'ブログを再開しました！',
        [lang.en]: 'Blog reboot!'
      },
      createdAt: '2024/04/01'
    },
    5: {
      contentPath: {
        [lang.ja]: `/src/articles/${lang.ja}/5.md`,
        [lang.en]: `/src/articles/${lang.en}/5.md`
      },
      title: {
        [lang.ja]: '近況について',
        [lang.en]: 'About my recent circumstances'
      },
      createdAt: '2024/04/16'
    }
  }) as const satisfies {
    [key in number]: {
      contentPath: {
        [key in Lang]: string;
      };
      title: {
        [key in Lang]: string;
      };
      createdAt: string;
    };
  };
