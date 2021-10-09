import { VFC } from 'react';

import { TextInput } from '@components/shared/TextInput';

type Props = {
  title: string;
  onChangeTitle: (value: string) => void;
};

export const TitleForm: VFC<Props> = ({ title, onChangeTitle }) => {
  return (
    <TextInput value={title} onChange={(e) => onChangeTitle(e.target.value)} />
  );
};
