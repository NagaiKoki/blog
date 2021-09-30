import { ChangeEvent, VFC } from 'react';
import { Input } from '@chakra-ui/react';

type Props = {
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput: VFC<Props> = ({ value, placeholder, onChange }) => {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      backgroundColor="white"
      color="blackAlpha.900"
    />
  );
};
