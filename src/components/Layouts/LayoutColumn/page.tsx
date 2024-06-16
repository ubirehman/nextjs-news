import Link from 'next/link';
import React from 'react';

interface LayoutColumnProps {
  title: string;
  paragraph: string;
  path: string;
}

const LayoutColumn: React.FC<LayoutColumnProps> = ({
  title,
  paragraph,
  path,
}) => {
  return (
    <Link
      href={path}
      className='flex h-full w-1/3 flex-col rounded-2xl p-2 pb-4 transition-all hover:scale-105 hover:bg-slate-100'
    >
      <h1 className='flex text-3xl font-semibold italic'>{title}</h1>
      <p className='flex'>{paragraph}</p>
      <div className='mt-4 flex h-[2px] w-full rounded-md bg-gray-900/60' />
    </Link>
  );
};

export default LayoutColumn;
