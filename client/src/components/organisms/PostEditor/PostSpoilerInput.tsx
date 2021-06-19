import React from "react";
import { Input } from "@chakra-ui/react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const PostSpoilerInput: React.VFC<Props> = React.memo(
  ({ value, onChange }) => {
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
  }
);
