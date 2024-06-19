import React from 'react';
import Notes from '../../../../components/TipTap/Notes';
import NotesPicker from '../../../../components/TipTap/NotesPicker';

const CreatePost = () => {
  return (
    <div className=' h-[75vh] w-full gap-6 rounded-xl border-[1px] p-2 px-4'>
      <section className='flex flex-col gap-2'>
        <label htmlFor='title' className='text-2xl font-semibold'>
          Title
        </label>
        <input
          name='title'
          type='text'
          className='w-8/12 rounded-lg border-[1px] px-4 py-1'
        />
      </section>
      <section className='pt-5'>
        <label htmlFor='title' className='text-2xl font-semibold'>
          Content
        </label>
        <NotesPicker />
      </section>
    </div>
  );
};

export default CreatePost;
