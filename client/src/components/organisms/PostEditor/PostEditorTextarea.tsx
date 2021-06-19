import React from "react";
// import styles
import { COLORS } from "styles/index";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const PostEditorTextarea: React.FC<Props> = React.memo(
  ({ value, onChange }) => {
    return (
      <>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="textarea"
        />
        <style jsx>{`
          .textarea {
            width: 100%;
            height: 100vh;
            background: ${COLORS.WHITE};
            color: ${COLORS.TEXT_COLOR};
            padding: 10px;
          }
          textarea:focus {
            outline: none;
          }
        `}</style>
      </>
    );
  }
);
