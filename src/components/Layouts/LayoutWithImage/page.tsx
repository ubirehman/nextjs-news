import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface LayoutWithImageProps {
  image?: string;
  alt?: string;
  title: string;
  paragraph: string;
  path: string;
}

const LayoutWithImage: React.FC<LayoutWithImageProps> = ({
  image,
  alt,
  title,
  paragraph,
  path,
}) => {
  return (
    <Link
      href={path}
      className='flex h-full w-auto flex-col rounded-2xl p-2 pb-4 transition-all hover:scale-105 hover:bg-slate-100'
    >
      <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold italic'>{title}</h1>
        <div className='flex h-full'>
          {image && (
            <Image
              src={image}
              alt={alt}
              width={300}
              height={200}
              className='rounded-2xl'
            />
          )}
        </div>
      </div>
      <p>{paragraph}</p>
      <div className='mt-4 flex h-[2px] w-full rounded-md bg-gray-900/60' />
    </Link>
  );
};

export default LayoutWithImage;
