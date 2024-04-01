export const articleConfig = {
  1: {
    contentPath: '/src/articles/1.md',
    title: 'My Blog Started',
    createdAt: '2021/06/19'
  },
  2: {
    contentPath: '/src/articles/2.md',
    title: 'How to good cafe for Software Engineer',
    createdAt: '2021/06/22'
  },
  3: {
    contentPath: '/src/articles/3.md',
    title: 'Deep inside useRecoilState',
    createdAt: '2021/06/24'
  },
  4: {
    contentPath: '/src/articles/4.md',
    title: 'Blog reboot!',
    createdAt: '2024/04/01'
  }
} as const satisfies {
  [key in number]: {
    contentPath: string;
    title: string;
    createdAt: string;
  };
};
