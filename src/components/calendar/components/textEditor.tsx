import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditor: React.FC = () => {
    const [editorState, setEditorState] = useState(null);

    useEffect(() => {
        if (typeof window !== undefined) {
            setEditorState(EditorState.createEmpty())
        }
    }, [])

    const onEditorStateChange = (newState: EditorState) => {
        setEditorState(newState);
    };

    return (
        <div className="flex">
            <div className="bg-white border rounded  min-h-[200px]  w-full max-w-xl">
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName border p-2 h-full"
                    onEditorStateChange={onEditorStateChange}
                />
            </div>
        </div>
    );
};

export default TextEditor;
