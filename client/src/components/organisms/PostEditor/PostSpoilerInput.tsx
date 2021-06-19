import React from "react";
import { Input } from "@chakra-ui/react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const PostSpoilerInput: React.VFC<Props> = ({ value, onChange }) => {
  return (
    <Input
      placeholder="ネタバレを入力..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      backgroundColor="white"
      width="95%"
      margin="0 auto"
      color="blackAlpha.800"
    />
  );
};

export default React.memo(PostSpoilerInput);
