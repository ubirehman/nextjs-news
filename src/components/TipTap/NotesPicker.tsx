'use client';

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tiptap from './TipTap';

const NotesPicker = () => {
  const [content, setContent] = useState<string>('');
  const handleContentChange = (reason: any) => {
    setContent(reason);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      content: content,
    };
    console.log(data);
    const existingDataString = localStorage.getItem('myData');
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];
    const updatedData = [...existingData, data];
    localStorage.setItem('myData', JSON.stringify(updatedData));
    setContent('');
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
