import React from 'react';
import Link from 'next/link';
import Logo from '../Logo/page';
import { Constants } from '../../Constants/page';
import HighlightBar from '../HighlightBar/page';

interface HeaderUIProps {
  date: string;
}

const HeaderUI: React.FC<HeaderUIProps> = ({ date }) => {
  return (
    <>
      <div className='flex w-full justify-between px-3 py-1'>
        <p className='inline-flex text-xs font-semibold transition-all hover:scale-110 hover:text-blue-600'>
          {date}
        </p>
        <nav className='flex w-full justify-end gap-6 py-3'>
          {Constants.HEADER_NAVIGATION_LINKS.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className='transition-all hover:scale-110 hover:font-semibold hover:text-blue-600 hover:underline'
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <Logo
        link='/'
        className='flex justify-center font-playfair text-8xl font-semibold text-blue-600 shadow-sm drop-shadow-sm'
      />
      <HighlightBar highlightNews={Constants.HIGHLIGHT_NEWS} />
    </>
  );
};

export default HeaderUI;
