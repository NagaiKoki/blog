import { VFC } from 'react';

import { Textarea } from '@chakra-ui/react';

type Props = {
  content: string;
  onChangeContent: (value: string) => void;
};

export const ContentForm: VFC<Props> = ({ content, onChangeContent }) => {
  return (
    <Textarea
      value={content}
      onChange={(e) => onChangeContent(e.target.value)}
      backgroundColor="white"
      color="blackAlpha.900"
      height="100vh"
      padding="20px"
    />
  );
};
