'use client';
import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

interface MarkdownEditorProps {
  defaultValue?: string; 
  onChange?: (markdown: string) => void; 
  readOnly?: boolean; 
}

const MarkdownEditor = ({ defaultValue = '', onChange, readOnly = false }: MarkdownEditorProps) => {
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = (newValue: string | undefined) => {
    const markdown = newValue || '';
    setValue(markdown);
    onChange?.(markdown);
  };

  return (
    <div>
      {readOnly ? (
        <div data-color-mode="light">
          <MDEditor.Markdown source={value} />
        </div>
      ) : (
        <MDEditor
          value={value}
          onChange={handleChange}
          height={200}
          preview="edit" 
        />
      )}
    </div>
  );
};

export default MarkdownEditor;