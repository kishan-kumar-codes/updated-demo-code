import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Dynamically import the Editor component from react-draft-wysiwyg
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

// Custom Undo Button
const UndoButton = (props: any) => (
  <button
    {...props}
    className="p-2 mx-1 text-gray-600 hover:text-gray-800"
    title="Undo">
    <ArrowLeft className="w-4 h-4" />
  </button>
);

// Custom Redo Button
const RedoButton = (props: any) => (
  <button
    {...props}
    className="p-2 mx-1 text-gray-600 hover:text-gray-800"
    title="Redo">
    <ArrowRight className="w-4 h-4" />
  </button>
);

const TextEditor: React.FC = () => {
  // Initialize editor state properly
  const [editorStates, setEditorStates] = useState(() =>
    EditorState.createEmpty()
  );

  // Handler for changes in the editor state
  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorStates(newEditorState);
  };

  return (
    <div className="w-full h-full p-2 bg-[#F4F4F4] border border-gray-300 rounded-xl shadow-sm">
      <Editor
        editorStyle={{
          height: "200px",
          overflow: "hidden",
        }}
        editorState={editorStates}
        wrapperClassName=""
        editorClassName="w-full p-2 border rounded-md "
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ["inline", "list", "link", "history"],
          inline: {
            inDropdown: false,
            options: ["bold", "italic"],
          },
          list: {
            inDropdown: false,
            options: ["unordered", "ordered"],
          },
          link: {
            inDropdown: false,
          },
          history: {
            inDropdown: false,
            options: ["undo", "redo"],
            undo: {
              component: UndoButton,
            },
            redo: {
              component: RedoButton,
            },
          },
        }}
      />
    </div>
  );
};

export default TextEditor;
