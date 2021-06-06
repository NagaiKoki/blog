import React from "react";
import { COLORS } from "styles/index";

type Props = {
  title: string;
  onChange: (value: string) => void;
};

export const PostEditorTitleInput: React.FC<Props> = ({ title, onChange }) => {
  return (
    <div>
      <input
        placeholder="タイトルを入力..."
        value={title}
        onChange={(e) => onChange(e.target.value)}
        className="input"
      />
      <style jsx>{`
        .input {
          border-radius: 4px;
          width: 100%;
          height: 40px;
          padding: 5px 10px;
          color: ${COLORS.TEXT_COLOR};
        }
      `}</style>
    </div>
  );
};
