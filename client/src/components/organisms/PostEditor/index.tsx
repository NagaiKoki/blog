import dynamic from "next/dynamic";
import React, { useState, useCallback, useEffect } from "react";
import { EditorState } from "draft-js";
import { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import { COLORS } from "styles/index";

const DynamicEditor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export const PostEditor = () => {
  const [mounted, setMounted] = useState(false);
  const [editState, setEditState] = useState(() => EditorState.createEmpty());

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOnChange = useCallback((editorState: EditorState) => {
    setEditState(editorState);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <div className="Wrapper">
      <DynamicEditor
        editorState={editState}
        onEditorStateChange={handleOnChange}
        editorStyle={{ color: COLORS.TEXT_COLOR, height: "100vh" }}
      />
      <style jsx>{`
        .Wrapper {
          background: ${COLORS.WHITE};
        }
      `}</style>
    </div>
  );
};
