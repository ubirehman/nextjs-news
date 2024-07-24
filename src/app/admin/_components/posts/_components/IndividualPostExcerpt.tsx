import React from 'react';
import { Constants } from '../../../../../Constants/page';
import { trimText } from '../../../../../utils/ExcessStringTrimmer';
import Item from 'antd/es/list/Item';

interface individualPostExcerptProps {
  id: number,
  title: string;
  paraExcerpt: string;
  postsCreationDate: string;
  handleDelete: (id: number) => void;
}

const IndividualPostExcerpt: React.FC<individualPostExcerptProps> = ({
  id,
  title,
  paraExcerpt,
  postsCreationDate,
  handleDelete,
}) => {
  return (
    <div className='max-h-[220px] rounded-lg border-[1px] p-4'>
      <h2 className='text-2xl font-semibold'>{title}</h2>
      <p>{trimText(paraExcerpt)}</p>
      <section className='flex w-full py-3'>
        <div className='w-1/2'>{postsCreationDate}</div>
        <div className='w/1/2 flex w-full justify-end gap-3'>
          <button className='h-12 w-20 rounded-lg bg-blue-600 px-2 font-semibold text-white transition-all  hover:scale-105 hover:bg-blue-700'>
            {Constants.BUTTON_TEXTS.EDIT}
          </button>
          <button
            onClick={() => handleDelete(id)}
            className='h-12 w-20 rounded-lg bg-red-600 px-2 font-semibold text-white transition-all hover:scale-105 hover:bg-red-700'
          >
            {Constants.BUTTON_TEXTS.DELETE}
          </button>
        </div>
      </section>
    </div>
  );
};

export default IndividualPostExcerpt;
