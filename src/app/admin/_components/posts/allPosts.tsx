import React from 'react';
import Notes from '../../../../components/TipTap/Notes';
import NotesPicker from '../../../../components/TipTap/NotesPicker';
import { Constants } from '../../../../Constants/page';

const AllPosts = () => {
  return (
    <div className=' h-[75vh] w-full gap-6 rounded-xl border-[1px] p-2 px-4'>
      <section className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>
          {Constants.ADMIN_PANEL.ALL_POSTS.HEADING}
        </h2>
      </section>
      <section className='pt-5'>
        <div className='rounded-lg border-[1px] p-4 max-h-[200px]'>
          <h2 className='text-2xl font-semibold'>Title</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            ad eius nesciunt dolores perferendis veritatis, animi a unde
            perspiciatis itaque pariatur obcaecati nisi earum ullam.
          </p>
          <section className='flex gap-3 w-full py-3 justify-end'>
            <button className='h-12 w-20 rounded-lg bg-blue-600 px-2 font-semibold text-white hover:scale-105  hover:bg-blue-700 transition-all'>
              Edit
            </button>
            <button className='h-12 w-20 rounded-lg bg-red-600 px-2 font-semibold text-white hover:scale-105 hover:bg-red-700 transition-all'>
              Delete
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AllPosts;
