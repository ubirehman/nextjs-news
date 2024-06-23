import React from 'react';
import { Constants } from '../../../../Constants/page';
import IndividualPostExcerpt from './_components/IndividualPostExcerpt';
import { allPostsProps } from '../../page';
import { formatDate } from '../../../../utils/DateFormatter';

interface AllPostsProps {
  allPosts: allPostsProps[];
  handleDelete: (id: number) => void;
}

const AllPosts: React.FC<AllPostsProps> = ({ allPosts, handleDelete }) => {
  return (
    <div className=' h-[75vh] w-full gap-6 rounded-xl border-[1px] p-2 px-4'>
      <section className='flex flex-col gap-2 py-3'>
        <h2 className='text-2xl font-semibold'>
          {Constants.ADMIN_PANEL.POSTS.ALL_POSTS.HEADING}
        </h2>
      </section>
      <section className='flex h-[600px] flex-col gap-2 overflow-y-auto pt-5'>
        {allPosts.map((item) => (
          <IndividualPostExcerpt
            key={item.id}
            id={item.id}
            title={item.title}
            paraExcerpt={item.content}
            postsCreationDate={formatDate(item.createdAt)}
            handleDelete={handleDelete}
          />
        ))}
      </section>
    </div>
  );
};

export default AllPosts;
