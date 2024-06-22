'use client';

import React from 'react';
import Tiptap from './TipTap';

interface NotesPickerProps {
  handleSubmit: (e: any) => void;
  content: string;
  setContent: (content: string) => void;
}

const NotesPicker: React.FC<NotesPickerProps> = ({
  handleSubmit,
  content,
  setContent,
}) => {
  const handleContentChange = (content: any) => {
    setContent(content);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mb-10 grid w-full place-items-center pt-3'
    >
      <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
    </form>
  );
};

export default NotesPicker;
