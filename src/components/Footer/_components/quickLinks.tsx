import React from 'react';
import { Constants } from '../../../Constants/page';
import Link from 'next/link';

const QuickLinks = () => {
  return (
    <div className='flex w-full justify-end'>
      <div className='flex flex-col'>
        <h3 className='font-semibold'>
          {Constants.FOOTER.QUICK_LINKS.HEADING}
        </h3>
        <ul className='pt-2'>
          {Constants.FOOTER.QUICK_LINKS.LINKS.map((item) => (
            <li key={item.id}>
              <Link
                className='text-lg transition-all hover:font-semibold hover:underline'
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;
