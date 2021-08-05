import { atom } from 'recoil';
import { PostStatusType } from 'types/common';

export type PostDataState = {
  title: string;
  content: string;
  spoiler: string;
};

export const postDataState = atom<PostDataState>({
  key: 'postDataState',
  default: {
    title: '',
    content: '',
    spoiler: ''
  }
});

export const postStatusState = atom<PostStatusType>({
  key: 'postStatusState',
  default: 'waiting'
});
