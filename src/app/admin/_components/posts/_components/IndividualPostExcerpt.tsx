import React from 'react';
import { Constants } from '../../../../../Constants/page';

interface individualPostExcerptProps {
  title: string;
  paraExcerpt: string;
}

const IndividualPostExcerpt: React.FC<individualPostExcerptProps> = ({
  title,
  paraExcerpt,
}) => {
  return (
    <div className='max-h-[200px] rounded-lg border-[1px] p-4'>
      <h2 className='text-2xl font-semibold'>{title}</h2>
      <p>{paraExcerpt}</p>
      <section className='flex w-full justify-end gap-3 py-3'>
        <button className='h-12 w-20 rounded-lg bg-blue-600 px-2 font-semibold text-white transition-all  hover:scale-105 hover:bg-blue-700'>
          {Constants.BUTTON_TEXTS.EDIT}
        </button>
        <button className='h-12 w-20 rounded-lg bg-red-600 px-2 font-semibold text-white transition-all hover:scale-105 hover:bg-red-700'>
          {Constants.BUTTON_TEXTS.DELETE}
        </button>
      </section>
    </div>
  );
};

export default IndividualPostExcerpt;
