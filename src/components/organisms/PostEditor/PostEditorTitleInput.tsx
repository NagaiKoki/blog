import React from 'react';
import { Input } from '@chakra-ui/react';

type Props = {
  title: string;
  onChange: (value: string) => void;
};

const PostEditorTitleInput: React.FC<Props> = ({ title, onChange }) => {
  return (
    <div>
      <Input
        placeholder="タイトルを入力..."
        value={title}
        onChange={(e) => onChange(e.target.value)}
        backgroundColor="white"
        color="blackAlpha.800"
      />
    </div>
  );
};

export default React.memo(PostEditorTitleInput);
