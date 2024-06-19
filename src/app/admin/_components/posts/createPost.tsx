import React from 'react';

const CreatePost = () => {
  return (
    <div className=' h-[75vh] w-full rounded-xl border-[1px] p-2 gap-6'>
      <section className='flex gap-2'>
        <label htmlFor='title' className='text-2xl font-semibold'>
          Title
        </label>
        <input
          name='title'
          type='text'
          className='w-8/12 rounded-lg border-[1px] px-4 py-1'
        />
      </section>
      <section>
      <label htmlFor='title' className='text-2xl font-semibold'>
          Content
        </label>
      <textarea name='content' id='content'  className='w-8/12 rounded-lg border-[1px] px-4 py-1' />
      </section>
    </div>
  );
};

export default CreatePost;
