import React from 'react';
import Notes from '../../../../components/TipTap/Notes';
import NotesPicker from '../../../../components/TipTap/NotesPicker';
import { Constants } from '../../../../Constants/page';
import IndividualPostExcerpt from './_components/IndividualPostExcerpt';

const AllPosts = () => {
  return (
    <div className=' h-[75vh] w-full gap-6 rounded-xl border-[1px] p-2 px-4'>
      <section className='flex flex-col gap-2 py-3'>
        <h2 className='text-2xl font-semibold'>
          {Constants.ADMIN_PANEL.POSTS.ALL_POSTS.HEADING}
        </h2>
      </section>
      <section className='flex h-[600px] flex-col gap-2 overflow-y-auto pt-5'>
        <IndividualPostExcerpt title='test' paraExcerpt='ASDASD' />
        <IndividualPostExcerpt title='test' paraExcerpt='ASDASD' />
        <IndividualPostExcerpt title='test' paraExcerpt='ASDASD' />
        <IndividualPostExcerpt title='test' paraExcerpt='ASDASD' />
        <IndividualPostExcerpt title='test' paraExcerpt='ASDASD' />
        <IndividualPostExcerpt title='test' paraExcerpt='ASDASD' />
        <IndividualPostExcerpt title='test' paraExcerpt='ASDASD' />
      </section>
    </div>
  );
};

export default AllPosts;
