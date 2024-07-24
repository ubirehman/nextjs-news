import React, { useState } from 'react';
import NotesPicker from '../../../../components/TipTap/NotesPicker';
import { Constants } from '../../../../Constants/page';

interface CreatePostProps {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
  handleSubmit: (e: any) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({
  title,
  setTitle,
  content,
  setContent,
  handleSubmit,
}) => {
  return (
    <div className='min-h-[75vh] w-full gap-6 rounded-xl border-[1px] p-2 px-4'>
      <h1 className='text-3xl font-semibold'>
        {Constants.ADMIN_PANEL.POSTS.CREATE_POST.HEADING}
      </h1>
      <div className='flex h-[1px] w-full rounded-2xl bg-gray-200 px-4' />
      <section className='flex flex-col gap-2 py-4'>
        <label htmlFor='title' className='text-2xl font-semibold'>
          {Constants.ADMIN_PANEL.POSTS.CREATE_POST.TITLE}
        </label>
        <input
          name='title'
          type='text'
          className='rounded-md border-[1px] border-black px-4 py-1'
          onChange={(e) => setTitle(e.target.value)}
        />
      </section>
      <section className=''>
        <label htmlFor='title' className='text-2xl font-semibold'>
          {Constants.ADMIN_PANEL.POSTS.CREATE_POST.CONTENT}
        </label>
        <NotesPicker
          handleSubmit={handleSubmit}
          content={content}
          setContent={setContent}
        />
      </section>
    </div>
  );
};

export default CreatePost;
