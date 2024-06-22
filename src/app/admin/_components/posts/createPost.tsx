import React, { useState } from 'react';
import NotesPicker from '../../../../components/TipTap/NotesPicker';
import { Constants } from '../../../../Constants/page';

interface CreatePostProps {
  handleSubmit: (e: any) => void;
  content: string;
  setContent: (content: string) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({
  handleSubmit,
  content,
  setContent,
}) => {
  return (
    <div className=' h-[75vh] w-full gap-6 rounded-xl border-[1px] p-2 px-4'>
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
          className='rounded-lg border-[1px] px-4 py-1'
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
